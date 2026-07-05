import type { Metadata } from "next";
import Link from "next/link";

import { BrandLogo } from "@/components/layout/BrandLogo";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CTASection } from "@/components/sections/CTASection";
import { FocusList } from "@/components/sections/FocusList";
import { GenomeFoundationNav } from "@/components/sections/GenomeFoundationNav";
import { GenomeSectionNav } from "@/components/sections/GenomeSectionNav";
import { PageBackgroundTransition } from "@/components/sections/PageBackgroundTransition";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { QuoteBlock } from "@/components/sections/QuoteBlock";
import { Section } from "@/components/sections/Section";
import { HomepageProjectCard } from "@/components/sections/SourceProjectsSection";
import { GenomeAccordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  genomeComponents,
  genomeContainerTokens,
  genomeContentRules,
  genomeColorTokens,
  genomeFoundations,
  genomeIntro,
  genomeMotionTokens,
  genomePrinciples,
  genomeProblems,
  genomeRadiusTokens,
  genomeShadowTokens,
  genomeSpacingScale,
  genomeTypography,
  genomeTypeScale,
} from "@/content/genome";
import { featuredProjects } from "@/content/projects";

const type = genomeTypography.classes;
const sectionAnchorOffset = "scroll-mt-20";
const softSurfaceCard = "rounded-[2rem] bg-surface-soft";
const compactSoftSurfaceCard = "rounded-[1.5rem] bg-surface-soft";
const foundationNavItems = genomeFoundations.map((foundation) => ({
  href: `#foundation-${foundation.title.toLowerCase().replace(/\s+/g, "-")}`,
  label: foundation.title,
}));
const wideComponentTitles = new Set([
  "Site Header",
  "Page Navigation",
  "Foundations Navbar",
  "Site Footer",
  "Section Wrapper",
  "Section Header",
  "Project Card",
  "Homepage Project Card",
  "Quote Block",
  "Focus List",
  "CTA",
  "FAQ / Accordion",
]);
const componentGroups = [
  {
    label: "Primitives",
    titles: ["Button", "Card", "Badge", "FAQ / Accordion"],
  },
  {
    label: "Navigation",
    titles: ["Site Header", "Page Navigation", "Foundations Navbar", "Site Footer"],
  },
  {
    label: "Editorial Sections",
    titles: ["Section Wrapper", "Section Header", "Quote Block", "Focus List"],
  },
  {
    label: "General Components",
    titles: ["Project Card", "Homepage Project Card", "CTA"],
  },
];
const genomeSectionNav = [
  { href: "#why", label: "Why" },
  { href: "#principles", label: "Principles" },
  { href: "#foundations", label: "Foundations" },
  { href: "#components", label: "Components" },
  { href: "#content-rules", label: "Content rules" },
  { href: "#closing", label: "Closing" },
];
const siteHeaderNavSpecimenItems = [
  { href: "/#RoadsideAssistance", label: "Projects" },
  { href: "/genome", label: "Genome" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process & Collaboration" },
  { href: "/resume", label: "Resume" },
  { href: "https://www.linkedin.com/in/tiborlovas/", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Genome Design System",
  description:
    "Genome is the editorial design system behind tiborlovas.com, built for portfolio case studies, systems thinking, and AI-assisted product practice.",
};

function GenomeSection({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`${sectionAnchorOffset} py-section ${className}`}>
      <div className="container">
        <div className="mb-hero max-w-4xl">
          {eyebrow ? <p className="editorial-kicker mb-compact">{eyebrow}</p> : null}
          <h2 className={type.sectionTitle}>{title}</h2>
          {intro ? <p className={`mt-content ${type.sectionIntro}`}>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function EditorialList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-tight">
      {items.map((item, index) => (
        <li
          key={item}
          className={`grid gap-compact p-content md:grid-cols-[0.16fr_0.84fr] ${compactSoftSurfaceCard}`}
        >
          <span className="editorial-kicker">{String(index + 1).padStart(2, "0")}</span>
          <p className={`max-w-4xl ${type.bodyLarge}`}>{item}</p>
        </li>
      ))}
    </ul>
  );
}

function PrincipleGrid() {
  return (
    <div className="grid gap-compact md:grid-cols-2">
      {genomePrinciples.map((principle, index) => (
        <article key={principle.title} className={`p-card md:p-loose ${softSurfaceCard}`}>
          <p className="editorial-kicker mb-card">{String(index + 1).padStart(2, "0")}</p>
          <h3 className={type.leadTitle}>{principle.title}</h3>
          <p className={`mt-compact ${type.body}`}>{principle.description}</p>
        </article>
      ))}
    </div>
  );
}

function FoundationSpecimens() {
  return (
    <div className="relative md:grid md:grid-cols-[12rem_minmax(0,1fr)] md:gap-card">
      <GenomeFoundationNav items={foundationNavItems} />
      <div className="space-y-content">
        {genomeFoundations.map((foundation) => (
          <article
            key={foundation.title}
            id={`foundation-${foundation.title.toLowerCase().replace(/\s+/g, "-")}`}
            className={`scroll-mt-32 p-card md:p-loose ${softSurfaceCard}`}
          >
            <div>
              <p className="editorial-kicker mb-card md:hidden">{foundation.title}</p>
              <h3 className={type.cardTitle}>{foundation.specimen}</h3>
              <p className={`mt-compact max-w-3xl ${type.body}`}>{foundation.detail}</p>
              {foundation.title === "Typography" ? <TypeScaleSpecimen /> : null}
              {foundation.title === "Color" ? <ColorSpecimen /> : null}
              {foundation.title === "Spacing" ? <SpacingSpecimen /> : null}
              {foundation.title === "Shadow" ? <ShadowSpecimen /> : null}
              {foundation.title === "Radius" ? <RadiusSpecimen /> : null}
              {foundation.title === "Layout" ? <ContainerSpecimen /> : null}
              {foundation.title === "Motion" ? <MotionSpecimen /> : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function TypeScaleSpecimen() {
  return (
    <div className="mt-loose space-y-tight">
      {genomeTypeScale.map((specimen) => (
        <div
          key={specimen.label}
          className="grid gap-micro px-compact py-micro md:grid-cols-[7rem_minmax(16rem,1fr)_minmax(14rem,0.42fr)] md:items-baseline"
        >
          <p className="editorial-kicker">{specimen.label}</p>
          <p className={specimen.className}>{specimen.value}</p>
          <p className={type.captionMuted}>{specimen.usage}</p>
        </div>
      ))}
    </div>
  );
}

function ColorSpecimen() {
  return (
    <div className="mt-loose grid gap-tight sm:grid-cols-2">
      {genomeColorTokens.map((token) => (
        <article key={token.name} className="grid gap-compact rounded-[1.5rem] bg-background p-compact">
          <div
            className="h-20 rounded-[1rem] border border-border"
            style={{ backgroundColor: `oklch(var(${token.variable}))` }}
            aria-hidden="true"
          />
          <div>
            <h4 className={type.captionStrong}>{token.name}</h4>
            <p className={`mt-micro ${type.captionMuted}`}>{token.role}</p>
            <p className="mt-tight font-mono text-xs text-muted-foreground">
              {token.variable}: {token.value}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function SpacingSpecimen() {
  const spacingBars = [
    { pixels: "12px", width: "8.333%" },
    { pixels: "16px", width: "11.111%" },
    { pixels: "20px", width: "13.889%" },
    { pixels: "24px", width: "16.667%" },
    { pixels: "32px", width: "22.222%" },
    { pixels: "40px", width: "27.778%" },
    { pixels: "64px / 80px", width: "55.556%" },
    { pixels: "80px -> 144px", width: "100%" },
  ];

  return (
    <div className="mt-loose rounded-[1.5rem] bg-background p-compact md:p-card">
      <div className="grid gap-tight">
        {genomeSpacingScale.map((token, index) => {
          const bar = spacingBars[index] ?? spacingBars[0];
          const isSectionRhythm = token.name === "Section rhythm";

          if (isSectionRhythm) {
            return (
              <article key={token.name} className="rounded-[1rem] bg-surface-soft p-compact">
                <p className={type.captionStrong}>{token.name}</p>
                <p className="mt-tight font-mono text-xs text-muted-foreground">
                  {token.value} ({bar.pixels})
                </p>
                <p className={`mt-tight ${type.captionMuted}`}>{token.className}</p>
                <p className={`mt-tight max-w-2xl ${type.captionMuted}`}>{token.usage}</p>
              </article>
            );
          }

          return (
            <article
              key={token.name}
              className="grid gap-tight rounded-[1rem] bg-surface-soft p-tight md:grid-cols-[7rem_minmax(12rem,1fr)_8rem] md:items-center"
            >
              <div>
                <p className={type.captionStrong}>{token.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{token.className}</p>
              </div>
              <div className="px-tight">
                <div className="flex min-h-10 items-center rounded-pill bg-background p-3">
                  <div
                    className="h-4 min-w-3 rounded-pill bg-primary"
                    style={{ width: bar.width }}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="font-mono text-xs font-semibold text-muted-foreground md:text-right">
                <p>{token.value}</p>
                <p className="font-medium">{bar.pixels}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function ContainerSpecimen() {
  const screenScale = [
    {
      label: "Default",
      screen: "< 640px",
      gutter: "1.25rem",
      pixels: "20px",
      width: "50%",
    },
    {
      label: "Small",
      screen: "sm / 640px+",
      gutter: "1.5rem",
      pixels: "24px",
      width: "60%",
    },
    {
      label: "Large",
      screen: "lg / 1024px+",
      gutter: "2rem",
      pixels: "32px",
      width: "80%",
    },
    {
      label: "Wide",
      screen: "xl / 1280px+",
      gutter: "2.5rem",
      pixels: "40px",
      width: "100%",
    },
  ];

  return (
    <div className="mt-loose grid gap-compact rounded-[1.5rem] bg-background p-compact md:p-card">
      <div className="grid gap-tight">
        {screenScale.map((screen) => (
          <article
            key={screen.label}
            className="grid gap-tight rounded-[1rem] bg-surface-soft p-tight md:grid-cols-[7rem_minmax(12rem,1fr)_8rem] md:items-center"
          >
            <div>
              <p className={type.captionStrong}>{screen.label}</p>
              <p className="font-mono text-xs text-muted-foreground">{screen.screen}</p>
            </div>
            <div className="px-tight">
              <div className="flex min-h-10 items-center rounded-pill bg-background p-3">
                <div
                  className="h-4 min-w-3 rounded-pill bg-primary"
                  style={{ width: screen.width }}
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="font-mono text-xs font-semibold text-muted-foreground md:text-right">
              <p>{screen.gutter}</p>
              <p className="font-medium">{screen.pixels}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="grid gap-tight md:grid-cols-2">
        {genomeContainerTokens.map((token) => (
          <article key={token.name} className="rounded-[1rem] bg-surface-soft p-compact">
            <p className={type.captionStrong}>{token.name}</p>
            <p className="mt-micro font-mono text-xs text-muted-foreground">{token.value}</p>
            <p className={`mt-tight ${type.captionMuted}`}>{token.className}</p>
            <p className={`mt-tight ${type.captionMuted}`}>{token.usage}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ShadowSpecimen() {
  return (
    <div className="mt-loose grid gap-tight md:grid-cols-2">
      {genomeShadowTokens.map((token) => (
        <article key={token.name} className="rounded-[1.5rem] bg-background p-compact">
          <div className="rounded-[1.25rem] bg-background p-card shadow-editorial" aria-hidden="true">
            <div className="h-16 rounded-[1rem] bg-background" />
          </div>
          <p className={`mt-compact ${type.captionStrong}`}>{token.name}</p>
          <p className={`mt-micro ${type.captionMuted}`}>{token.className}</p>
          <p className={`mt-tight ${type.captionMuted}`}>{token.usage}</p>
          <p className="mt-tight font-mono text-xs text-muted-foreground">
            {token.variable}: {token.value}
          </p>
        </article>
      ))}
    </div>
  );
}

function RadiusSpecimen() {
  return (
    <div className="mt-loose rounded-[1.5rem] bg-background p-compact md:p-card">
      <div className="grid gap-tight sm:grid-cols-2 lg:grid-cols-3">
        {genomeRadiusTokens.map((token) => (
          <article key={token.name} className="rounded-[1rem] bg-surface-soft p-compact">
            <div className={`${token.sizeClass} bg-background`} aria-hidden="true" />
            <p className={`mt-compact ${type.captionStrong}`}>{token.name}</p>
            <p className="mt-micro font-mono text-xs text-muted-foreground">{token.value}</p>
            <p className={`mt-tight ${type.captionMuted}`}>{token.className}</p>
            <p className={`mt-tight ${type.captionMuted}`}>{token.usage}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function MotionSpecimen() {
  return (
    <div className="mt-loose rounded-[1.5rem] bg-background p-compact md:p-card">
      <div className="grid gap-tight md:grid-cols-2">
        {genomeMotionTokens.map((token) => (
          <article key={token.name} className="rounded-[1rem] bg-surface-soft p-compact">
            <div className="flex min-h-10 items-center rounded-pill bg-background p-3" aria-hidden="true">
              <div className="h-4 w-16 rounded-pill bg-primary" />
            </div>
            <p className={`mt-compact ${type.captionStrong}`}>{token.name}</p>
            <p className="mt-micro font-mono text-xs text-muted-foreground">{token.value}</p>
            <p className={`mt-tight ${type.captionMuted}`}>{token.className}</p>
            <p className={`mt-tight ${type.captionMuted}`}>{token.usage}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ComponentGallery() {
  const componentsByTitle = new Map(genomeComponents.map((component) => [component.title, component]));

  const renderComponentCard = (component: (typeof genomeComponents)[number], isLarge = false) => (
    <Card
      key={component.title}
      variant="component"
      className={`flex min-h-56 min-w-0 flex-col justify-between overflow-hidden p-card ${
        isLarge ? "lg:col-span-2" : ""
      }`}
    >
      <div className="min-w-0">
        {component.status === "unused" ? (
          <div className="mb-card flex items-center justify-end gap-micro">
            <Badge>{component.status}</Badge>
          </div>
        ) : null}
        <h3 className={type.leadTitle}>{component.title}</h3>
        <p className={`mt-compact ${type.body}`}>{component.description}</p>
      </div>
      <ComponentSpecimen title={component.title} />
    </Card>
  );

  return (
    <div className="grid gap-loose">
      {componentGroups.map((group) => {
        const groupComponents = group.titles
          .map((title) => componentsByTitle.get(title))
          .filter((component): component is (typeof genomeComponents)[number] => Boolean(component));

        if (!groupComponents.length) return null;

        return (
          <div key={group.label}>
            <p className="editorial-kicker mb-compact">{group.label}</p>
            <div className="grid gap-compact lg:grid-cols-2">
              {groupComponents.map((component) =>
                renderComponentCard(component, wideComponentTitles.has(component.title)),
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ComponentSpecimen({ title }: { title: string }) {
  if (title === "Site Header") {
    return (
      <div className="mt-loose grid gap-micro">
        <p className="editorial-kicker">Variant / Non-sticky</p>
        <div className="overflow-x-auto rounded-[1.5rem] bg-background p-1">
          <div className="flex min-w-max items-center justify-between gap-card rounded-[2rem] px-micro">
            <Link
              href="/"
              className="inline-flex shrink-0 rounded-pill py-3 pl-1 text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft"
              aria-label="Tibor Lovas home"
            >
              <BrandLogo className="h-12 w-auto" />
            </Link>
            <nav
              className="flex items-center text-9 font-semibold uppercase text-foreground"
              aria-label="Portfolio navigation specimen"
            >
              {siteHeaderNavSpecimenItems.map((item) => {
                const isActive = item.label === "Genome";

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`shrink-0 rounded-pill px-5 py-5 text-center transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft ${
                      isActive
                        ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground"
                        : "hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    );
  }

  if (title === "Page Navigation") {
    return (
      <div className="mt-loose">
        <div className="overflow-x-auto rounded-[1.5rem] bg-background p-1">
          <nav
            className="sticky top-0 flex min-w-max items-center rounded-[2rem] p-1 text-9 font-semibold uppercase text-foreground"
            aria-label="Sticky page navigation specimen"
          >
            {genomeSectionNav.map((item) => {
              const isActive = item.label === "Components";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`shrink-0 rounded-pill px-5 py-4 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft ${
                    isActive
                      ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground"
                      : "hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    );
  }

  if (title === "Foundations Navbar") {
    return (
      <div className="mt-loose rounded-[1.5rem] bg-background p-compact">
        <nav
          className="flex max-w-sm flex-col items-start gap-micro text-9 font-semibold uppercase text-foreground"
          aria-label="Foundation sections specimen"
        >
          {foundationNavItems.map((item) => {
            const isActive = item.label === "Layout";

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`inline-flex min-h-16 items-center justify-start rounded-pill px-content py-compact text-left transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background ${
                  isActive
                    ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground"
                    : "hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    );
  }

  if (title === "Site Footer") {
    return (
      <div className="mt-loose overflow-hidden rounded-[1.5rem] bg-background">
        <SiteFooter />
      </div>
    );
  }

  if (title === "Section Wrapper") {
    return (
      <div className="mt-loose overflow-hidden rounded-[1.5rem] bg-background">
        <Section
          eyebrow="Section"
          title="Reusable page rhythm"
          intro="Container, title, intro, and consistent vertical spacing."
        >
          <div className="rounded-[1.5rem] bg-surface-soft p-compact">
            <p className={type.captionStrong}>Section content sits inside the shared wrapper.</p>
          </div>
        </Section>
      </div>
    );
  }

  if (title === "Button") {
    const buttonSizeSpecimens = [
      {
        label: "Large action",
        size: "xl" as const,
        href: "https://www.linkedin.com/in/tiborlovas/",
        text: "Let's Connect",
      },
      {
        label: "Small action",
        size: "default" as const,
        href: "/#case-studies",
        text: "View work",
      },
    ];

    return (
      <div className="mt-loose grid gap-tight">
        {buttonSizeSpecimens.map((specimen) => (
          <div key={specimen.label} className="grid gap-micro">
            <p className="editorial-kicker">{specimen.label}</p>
            <Button asChild size={specimen.size}>
              <Link href={specimen.href}>{specimen.text}</Link>
            </Button>
          </div>
        ))}
      </div>
    );
  }

  if (title === "Card") {
    const cardSpecimens = [
      {
        label: "Default card",
        title: "Contained editorial module",
        description: "Cards frame repeated portfolio content without adding visible borders.",
        variant: "default" as const,
      },
      {
        label: "Background card",
        title: "Surface without elevation",
        description: "Background cards keep the contained shape without adding a shadow.",
        variant: "background" as const,
      },
    ];

    return (
      <div className="mt-loose grid gap-tight">
        {cardSpecimens.map((specimen) => (
          <Card key={specimen.label} variant={specimen.variant} className="p-card">
            <p className="editorial-kicker mb-compact">{specimen.label}</p>
            <h4 className={type.leadTitle}>{specimen.title}</h4>
            <p className={`mt-compact ${type.body}`}>{specimen.description}</p>
          </Card>
        ))}
      </div>
    );
  }

  if (title === "Badge") {
    const badgeSpecimens = [
      { label: "Default", variant: "default" as const, value: "Product" },
      { label: "Secondary", variant: "secondary" as const, value: "System" },
      { label: "Large", variant: "large" as const, value: "Research" },
    ];

    return (
      <div className="mt-loose flex flex-wrap items-start gap-content">
        {badgeSpecimens.map((specimen) => (
          <div key={specimen.variant} className="grid gap-micro">
            <p className="editorial-kicker">{specimen.label}</p>
            <Badge variant={specimen.variant}>{specimen.value}</Badge>
          </div>
        ))}
      </div>
    );
  }

  if (title === "Section Header") {
    return (
      <Section
        className="mt-loose rounded-[1.5rem] bg-background"
        eyebrow="Components"
        title="Selected components used across the portfolio."
        intro="The header orients the reader before each grouped system section."
      />
    );
  }

  if (title === "FAQ / Accordion") {
    const accordionItems = [
      {
        title: "How does Genome keep case studies consistent?",
        content: (
          <p>
            It gives every story a shared structure while leaving room for project-specific
            evidence.
          </p>
        ),
      },
    ];

    return (
      <div className="mt-loose">
        <GenomeAccordion showIndex={false} items={accordionItems} />
      </div>
    );
  }

  if (title === "Project Card") {
    return (
      <div className="mt-loose">
        <ProjectCard project={featuredProjects[0]} />
      </div>
    );
  }

  if (title === "Homepage Project Card") {
    return (
      <div className="mt-loose">
        <HomepageProjectCard />
      </div>
    );
  }

  if (title === "CTA") {
    return (
      <div className="mt-loose overflow-hidden rounded-[1.5rem] bg-background">
        <CTASection />
      </div>
    );
  }

  if (title === "Quote Block") {
    return (
      <div className="mt-loose overflow-hidden rounded-[1.5rem] bg-background">
        <QuoteBlock
          name="Carlos J. Gómez"
          title="VP, Product Design at Sotheby’s"
          quote="Reduced developer friction during handoff and set up a scalable token system for color, typography, and spacing."
          signals={["Design system adoption", "Handoff clarity", "Tokenized foundations"]}
        />
      </div>
    );
  }

  if (title === "Focus List") {
    return (
      <div className="mt-loose rounded-[1.5rem] bg-background p-compact">
        <FocusList />
      </div>
    );
  }

  return (
    <div className="mt-loose rounded-[1.5rem] bg-surface-soft p-compact">
      <p className={type.captionStrong}>Portfolio-ready example for {title.toLowerCase()}.</p>
    </div>
  );
}

export default function GenomePage() {
  return (
    <PageBackgroundTransition>
      <section
        data-page-hero
        className="container flex min-h-[calc(100svh-5rem)] flex-col justify-center pb-hero pt-hero-lg"
      >
        <div className="max-w-6xl">
          <h1 className={`max-w-5xl ${type.display}`}>
            <span className="text-primary">Genome</span>
            <br />
            Design
            <br />
            System
          </h1>
          <div className="mt-hero max-w-4xl border-l-[0.625rem] border-primary pl-content md:pl-card">
            <p className={type.heroSupport}>
              Genetic Information
              <br />
              Behind This Portfolio
            </p>
          </div>
          <p className={`mt-loose max-w-4xl text-5 ${genomeTypography.weights.body} text-muted-foreground`}>
            {genomeIntro.subtitle}
          </p>
        </div>
      </section>

      <GenomeSectionNav items={genomeSectionNav} />

      <GenomeSection
        id="why"
        eyebrow="Why Genome exists"
        title="A portfolio system for work that cannot be reduced to screenshots."
        intro={`Genome gives the site a stable editorial structure so every page can explain product judgment, complexity, and systems work with the same level of care. ${genomeIntro.intro}`}
      >
        <EditorialList items={genomeProblems} />
      </GenomeSection>

      <GenomeSection id="principles" eyebrow="System principles" title="Four rules shape every page.">
        <PrincipleGrid />
      </GenomeSection>

      <GenomeSection
        id="foundations"
        eyebrow="Foundations"
        title="The visual foundation is quiet, but opinionated."
        intro="Genome avoids token-table theater. Foundations are shown as editorial specimens because the system exists to support reading, comparison, and narrative clarity."
      >
        <FoundationSpecimens />
      </GenomeSection>

      <GenomeSection
        id="components"
        eyebrow="Components"
        title="Selected components used across the portfolio."
        intro="The component layer supports case-study storytelling, navigation, evidence, and contact paths without turning the site into a UI kit catalog."
      >
        <ComponentGallery />
      </GenomeSection>

      <GenomeSection
        id="content-rules"
        eyebrow="Content rules"
        title="Editorial rules keep the system honest."
        intro="Genome treats content as part of the design system because portfolio clarity depends on naming, evidence, abstraction, and restraint."
      >
        <EditorialList items={genomeContentRules} />
      </GenomeSection>

      <section id="closing" className={`${sectionAnchorOffset} py-section`}>
        <div className="container grid gap-loose md:grid-cols-[0.68fr_0.32fr] md:items-end">
          <h2 className={type.sectionTitle}>
            Genome keeps the portfolio reusable, editorial, and ready to scale as new product
            stories are added.
          </h2>
          <div>
            <p className={type.body}>
              The system is intentionally small: strong foundations, useful components, and clear
              content rules.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </PageBackgroundTransition>
  );
}
