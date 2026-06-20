import { createElement, type HTMLAttributes } from "react";

type LegacyHtmlElementProps = {
  html: string;
};

function parseAttributes(source: string) {
  const attributes: Record<string, string> = {};
  const attributePattern = /([^\s=]+)(?:="([^"]*)")?/g;
  let match = attributePattern.exec(source);

  while (match) {
    const [, name, value = ""] = match;
    attributes[name === "class" ? "className" : name] = value;
    match = attributePattern.exec(source);
  }

  return attributes;
}

function LegacyHtmlElement({ html }: LegacyHtmlElementProps) {
  const element = html.match(/^<([a-z0-9-]+)\b([^>]*)>([\s\S]*)<\/\1>$/i);

  if (!element) {
    throw new Error("Could not parse a legacy homepage block.");
  }

  const [, tagName, rawAttributes, innerHtml] = element;
  const attributes = parseAttributes(rawAttributes);

  return createElement(tagName, {
    ...attributes,
    dangerouslySetInnerHTML: { __html: innerHtml },
  } as HTMLAttributes<HTMLElement>);
}

export function HomepageHeaderNavigation(props: LegacyHtmlElementProps) {
  return <LegacyHtmlElement {...props} />;
}

export function HomepageFooter(props: LegacyHtmlElementProps) {
  return <LegacyHtmlElement {...props} />;
}

export function HomepageHero(props: LegacyHtmlElementProps) {
  return <LegacyHtmlElement {...props} />;
}

export function HomepageSection(props: LegacyHtmlElementProps) {
  return <LegacyHtmlElement {...props} />;
}

export function ProjectCaseStudyCard(props: LegacyHtmlElementProps) {
  return <LegacyHtmlElement {...props} />;
}

export function HomepageCtaSection(props: LegacyHtmlElementProps) {
  return <LegacyHtmlElement {...props} />;
}
