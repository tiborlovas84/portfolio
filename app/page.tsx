import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  HomepageCtaSection,
  HomepageFooter,
  HomepageHeaderNavigation,
  HomepageHero,
  HomepageSection,
  ProjectCaseStudyCard,
} from "../components/homepage/legacy-homepage";

const projectSectionIds = new Set([
  "RoadsideAssistance",
  "BigMedia",
  "PKU-Lab",
  "YouAligned",
  "wirefigma",
  "Mercedes",
]);

function rewriteLegacyPaths(html: string) {
  return html
    .replaceAll('src="images/', 'src="/webflow/images/')
    .replaceAll('srcset="images/', 'srcset="/webflow/images/')
    .replaceAll(", images/", ", /webflow/images/")
    .replaceAll('data-src="documents/', 'data-src="/webflow/documents/')
    .replaceAll('href="case-study/', 'href="/webflow/case-study/')
    .replaceAll('href="resume.html"', 'href="/webflow/resume.html"')
    .replace(
      '<a href="/request-access?project=Road%20Assistance" target="_blank" class="button-primary button-outline w-button">Request Access</a>',
      '<a href="/case-study/internal-platform" class="button-primary button-outline w-button">See Case Study</a>',
    )
    .replace(
      /\s*<script src="https:\/\/d3e54v103j8qbb\.cloudfront\.net\/js\/jquery-3\.5\.1[^"]*"[^>]*><\/script>/i,
      "",
    )
    .replace(
      /\s*<script src="js\/webflow\.js"[^>]*><\/script>/i,
      "",
    );
}

function splitTopLevelBlocks(html: string) {
  const blocks: string[] = [];
  const tags = /<\/?(?:div|section|noscript)\b[^>]*>/gi;
  let depth = 0;
  let start = -1;
  let match = tags.exec(html);

  while (match) {
    const token = match[0];
    const isClosingTag = token.startsWith("</");

    if (!isClosingTag) {
      if (depth === 0) start = match.index;
      depth += 1;
      match = tags.exec(html);
      continue;
    }

    depth -= 1;

    if (depth === 0 && start >= 0) {
      blocks.push(html.slice(start, match.index + token.length));
      start = -1;
    }

    match = tags.exec(html);
  }

  return blocks;
}

function loadLegacyHomepageBlocks() {
  const legacyHtml = readFileSync(
    join(process.cwd(), "legacy-webflow", "index.html"),
    "utf8",
  );
  const body = legacyHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  if (!body) {
    throw new Error("Could not find the Webflow homepage body.");
  }

  return splitTopLevelBlocks(rewriteLegacyPaths(body[1]));
}

function getBlockId(html: string) {
  return html.match(/\sid="([^"]+)"/i)?.[1];
}

export default function Home() {
  return (
    <main suppressHydrationWarning>
      {loadLegacyHomepageBlocks().map((html, index) => {
        const id = getBlockId(html);
        const key = id ?? `homepage-block-${index}`;

        if (html.includes('role="banner"')) {
          return <HomepageHeaderNavigation html={html} key={key} />;
        }

        if (id === "Hero") {
          return <HomepageHero html={html} key={key} />;
        }

        if (projectSectionIds.has(id ?? "")) {
          return <ProjectCaseStudyCard html={html} key={key} />;
        }

        if (id === "Contact") {
          return <HomepageCtaSection html={html} key={key} />;
        }

        if (id === "Footer") {
          return <HomepageFooter html={html} key={key} />;
        }

        return <HomepageSection html={html} key={key} />;
      })}
    </main>
  );
}
