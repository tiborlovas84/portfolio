import { GenomeAccordion } from "@/components/ui/accordion";
import { processSteps, type ProcessParagraph } from "@/content/projects";
import { DesignProcessSection } from "@/components/sections/DesignProcessSection";
import type { ReactNode } from "react";

function renderParagraph(paragraph: ProcessParagraph) {
  if (typeof paragraph === "string") {
    return paragraph;
  }

  const segments: ReactNode[] = [];
  let remainingText = paragraph.text;

  paragraph.links.forEach((link) => {
    const linkIndex = remainingText.indexOf(link.label);

    if (linkIndex === -1) {
      return;
    }

    const before = remainingText.slice(0, linkIndex);

    if (before) {
      segments.push(before);
    }

    segments.push(
      <a
        key={`${link.href}-${segments.length}`}
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
        className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft"
      >
        {link.label}
      </a>,
    );

    remainingText = remainingText.slice(linkIndex + link.label.length);
  });

  if (remainingText) {
    segments.push(remainingText);
  }

  return segments;
}

export function ProcessSection() {
  const items = processSteps.map((step) => ({
    title: step.title,
    content: step.description.map((paragraph) => (
      <p key={typeof paragraph === "string" ? paragraph : paragraph.text}>{renderParagraph(paragraph)}</p>
    )),
  }));

  return (
    <>
      <DesignProcessSection />
      <GenomeAccordion items={items} />
    </>
  );
}
