import type { Metadata } from "next";
import Link from "next/link";

import { BrandLogo } from "@/components/layout/BrandLogo";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { CTASection } from "@/components/sections/CTASection";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { FocusList } from "@/components/sections/FocusList";
import { GenomeSectionNav } from "@/components/sections/GenomeSectionNav";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { QuoteBlock } from "@/components/sections/QuoteBlock";
import { Section } from "@/components/sections/Section";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import {
  genomeComponents,
  genomeContentRules,
  genomeColorTokens,
  genomeFoundations,
  genomeIntro,
  genomePatterns,
  genomePrinciples,
  genomeProblems,
  genomeShadowTokens,
  genomeSpacingScale,
  genomeTypography,
  genomeTypeScale,
} from "@/content/genome";
import { featuredProjects } from "@/content/projects";

const type = genomeTypography.classes;
const softSurfaceCard = "rounded-[2rem] bg-surface-soft";
const compactSoftSurfaceCard = "rounded-[1.5rem] bg-surface-soft";
const largeComponentTitles = new Set([
  "Site Header",
  "Site Footer",
  "Section Wrapper",
  "Section Header",
  "Editorial Hero",
  "Partner Logo Strip",
  "Stats Strip",
  "Project Card",
  "Project Showcase",
  "Quote Block",
  "Focus List",
  "CTA",
  "FAQ / Accordion",
]);
const genomeSectionNav = [
  { href: "#why", label: "Why" },
  { href: "#principles", label: "Principles" },
  { href: "#foundations", label: "Foundations" },
  { href: "#components", label: "Components" },
  { href: "#patterns", label: "Patterns" },
  { href: "#content-rules", label: "Content rules" },
  { href: "#closing", label: "Closing" },
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
    <section id={id} className={`scroll-mt-44 py-section ${className}`}>
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
          <h3 className={type.cardTitle}>{principle.title}</h3>
          <p className={`mt-compact ${type.body}`}>{principle.description}</p>
        </article>
      ))}
    </div>
  );
}

function FoundationSpecimens() {
  return (
    <div className="space-y-content">
      {genomeFoundations.map((foundation) => (
        <article
          key={foundation.title}
          className={`grid gap-card p-card md:grid-cols-[0.24fr_0.76fr] md:p-loose ${softSurfaceCard}`}
        >
          <p className="editorial-kicker">{foundation.title}</p>
          <div>
            <h3 className={type.cardTitle}>{foundation.specimen}</h3>
            <p className={`mt-compact max-w-3xl ${type.body}`}>
              {foundation.detail}
            </p>
            {foundation.title === "Typography" ? <TypeScaleSpecimen /> : null}
            {foundation.title === "Color" ? <ColorSpecimen /> : null}
            {foundation.title === "Spacing" ? <SpacingSpecimen /> : null}
            {foundation.title === "Shadow" ? <ShadowSpecimen /> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

function TypeScaleSpecimen() {
  return (
    <div className="mt-loose space-y-tight">
      {genomeTypeScale.map((specimen) => (
        <div
          key={specimen.label}
          className="grid gap-tight px-compact py-micro md:grid-cols-[8rem_minmax(16rem,1fr)_minmax(14rem,0.42fr)] md:items-baseline"
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
  return (
    <div className="mt-loose grid gap-tight md:grid-cols-2">
      {genomeSpacingScale.map((token) => (
        <article key={token.name} className="rounded-[1.5rem] bg-background p-compact">
          <p className="editorial-kicker mb-compact">{token.name}</p>
          <div className="flex min-h-20 items-center rounded-[1rem] bg-primary-foreground p-tight">
            <div className="h-8 w-full rounded-pill bg-surface-soft" aria-hidden="true" />
          </div>
          <p className={`mt-compact ${type.captionStrong}`}>{token.className}</p>
          <p className={`mt-micro ${type.captionMuted}`}>{token.value}</p>
          <p className={`mt-tight ${type.captionMuted}`}>{token.usage}</p>
        </article>
      ))}
    </div>
  );
}

function ShadowSpecimen() {
  return (
    <div className="mt-loose grid gap-tight md:grid-cols-2">
      {genomeShadowTokens.map((token) => (
        <article key={token.name} className="rounded-[1.5rem] bg-background p-compact">
          <div className="rounded-[1.25rem] bg-background p-card shadow-editorial" aria-hidden="true">
            <div className="h-16 rounded-[1rem] bg-surface-soft" />
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

function GenomeStatusFlag({
  children,
  variant = "soft",
}: {
  children: React.ReactNode;
  variant?: "soft" | "solid";
}) {
  const variantClass =
    variant === "solid" ? "bg-accent text-accent-foreground" : "bg-surface-soft text-primary";

  return (
    <span className={`rounded-pill px-3 py-1 text-9 font-semibold uppercase shadow-editorial ${variantClass}`}>
      {children}
    </span>
  );
}

function ComponentGallery() {
  const sortedComponents = [...genomeComponents].sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status === "unused" ? 1 : -1;
  });
  const smallComponents = sortedComponents.filter(
    (component) => !largeComponentTitles.has(component.title),
  );
  const largeComponents = sortedComponents.filter((component) =>
    largeComponentTitles.has(component.title),
  );

  const renderComponentCard = (component: (typeof genomeComponents)[number], isLarge = false) => (
    <Card
      key={component.title}
      variant="component"
      className={`flex min-h-56 min-w-0 flex-col justify-between overflow-hidden p-card ${
        isLarge ? "lg:col-span-2" : ""
      }`}
    >
      <div className="min-w-0">
        <div className="mb-card flex items-center justify-between gap-micro">
          <p className="editorial-kicker">Component</p>
          {component.status === "unused" ? (
            <GenomeStatusFlag>{component.status}</GenomeStatusFlag>
          ) : null}
        </div>
        <h3 className={type.cardTitle}>{component.title}</h3>
        <p className={`mt-compact ${type.body}`}>{component.description}</p>
      </div>
      <ComponentSpecimen title={component.title} />
    </Card>
  );

  return (
    <div className="grid gap-loose">
      <div>
        <p className="editorial-kicker mb-compact">Small components</p>
        <div className="grid gap-compact lg:grid-cols-2">
          {smallComponents.map((component) => renderComponentCard(component))}
        </div>
      </div>
      <div>
        <p className="editorial-kicker mb-compact">Large components</p>
        <div className="grid gap-compact lg:grid-cols-2">
          {largeComponents.map((component) => renderComponentCard(component, true))}
        </div>
      </div>
    </div>
  );
}

function ComponentSpecimen({ title }: { title: string }) {
  if (title === "Site Header") {
    const siteNavItems = ["Projects", "Wirefigma", "About", "Process", "Genome", "Contact"];

    return (
      <div className="mt-loose grid gap-micro">
        <p className="editorial-kicker">Variant / Non-sticky</p>
        <div className="rounded-[1.5rem] bg-background p-1">
          <div className="flex min-h-20 items-center justify-between rounded-[2rem] bg-background/70 px-micro backdrop-blur-2xl">
            <BrandLogo className="h-10 w-auto shrink-0" />
            <div className="hidden items-center text-[0.7rem] font-semibold uppercase text-foreground xl:flex">
              {siteNavItems.map((item) => (
                <span
                  key={item}
                  className={`rounded-pill px-4 py-4 ${item === "Genome" ? "bg-primary text-primary-foreground" : ""}`}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 xl:hidden">
              {siteNavItems.slice(0, 4).map((item) => (
                <span
                  key={item}
                  className={`h-2 rounded-pill ${item === "Genome" ? "w-8 bg-primary" : "w-5 bg-surface-soft"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (title === "Site Footer") {
    return (
      <div className="mt-loose overflow-hidden rounded-[1.5rem] bg-background shadow-editorial">
        <SiteFooter />
      </div>
    );
  }

  if (title === "Section Wrapper") {
    return (
      <div className="mt-loose overflow-hidden rounded-[1.5rem] bg-background shadow-editorial">
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
        text: "Start a conversation",
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

  if (title === "Pill") {
    return (
      <div className="mt-loose flex flex-wrap gap-micro">
        {["Research", "Artificial Intelligence", "Information Architecture"].map((label) => (
          <Pill key={label}>{label}</Pill>
        ))}
      </div>
    );
  }

  if (title === "Card") {
    return (
      <Card className="mt-loose p-card">
        <p className="editorial-kicker mb-compact">Default card</p>
        <h4 className={type.leadTitle}>Contained editorial module</h4>
        <p className={`mt-compact ${type.body}`}>
          Cards frame repeated portfolio content without adding visible borders.
        </p>
      </Card>
    );
  }

  if (title === "Card Content") {
    return (
      <Card className="mt-loose overflow-hidden">
        <CardContent className="p-card">
          <p className="editorial-kicker mb-compact">Card content</p>
          <p className={type.bodyLarge}>Controlled padding inside a reusable card shell.</p>
        </CardContent>
      </Card>
    );
  }

  if (title === "Badge") {
    return (
      <div className="mt-loose flex flex-wrap gap-micro">
        {["Product", "System", "Delivery"].map((label) => (
          <Badge key={label}>{label}</Badge>
        ))}
      </div>
    );
  }

  if (title === "Stats Strip") {
    return (
      <div className="mt-loose overflow-hidden rounded-[1.5rem] bg-surface-soft py-compact">
        <StatsStrip />
      </div>
    );
  }

  if (title === "Genome Status Flag") {
    const statusFlagSpecimens = [
      { label: "Soft", variant: "soft" as const },
      { label: "Solid", variant: "solid" as const },
    ];

    return (
      <div className="mt-loose flex flex-wrap gap-micro">
        {statusFlagSpecimens.map((specimen) => (
          <div key={specimen.variant} className="grid gap-micro">
            <p className="editorial-kicker">{specimen.label}</p>
            <GenomeStatusFlag variant={specimen.variant}>unused</GenomeStatusFlag>
          </div>
        ))}
      </div>
    );
  }

  if (title === "Section Header") {
    return (
      <Section
        className="mt-loose rounded-[1.5rem] bg-background shadow-editorial"
        eyebrow="Components"
        title="Selected components used across the portfolio."
        intro="The header orients the reader before each grouped system section."
      />
    );
  }

  if (title === "Editorial Hero") {
    return (
      <div className="mt-loose max-h-[32rem] overflow-hidden rounded-[1.5rem] bg-background shadow-editorial">
        <EditorialHero />
      </div>
    );
  }

  if (title === "FAQ / Accordion") {
    return (
      <Accordion
        className="mt-loose"
        showIndex={false}
        items={[
          {
            title: "How does Genome keep case studies consistent?",
            content: (
              <p>
                It gives every story a shared structure while leaving room for project-specific
                evidence.
              </p>
            ),
          },
        ]}
      />
    );
  }

  if (title === "Project Card") {
    return (
      <div className="mt-loose">
        <ProjectCard project={featuredProjects[0]} />
      </div>
    );
  }

  if (title === "Project Showcase") {
    return (
      <div className="mt-loose max-h-[42rem] overflow-hidden rounded-[1.5rem]">
        <ProjectShowcase projects={featuredProjects.slice(0, 2)} />
      </div>
    );
  }

  if (title === "CTA") {
    return (
      <div className="mt-loose overflow-hidden rounded-[1.5rem] bg-background shadow-editorial">
        <CTASection />
      </div>
    );
  }

  if (title === "Partner Logo Strip") {
    return (
      <div className="mt-loose rounded-[1.5rem] bg-background p-compact shadow-editorial">
        <ClientStrip />
      </div>
    );
  }

  if (title === "Quote Block") {
    return (
      <div className="mt-loose overflow-hidden rounded-[1.5rem] bg-background shadow-editorial">
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
      <div className="mt-loose rounded-[1.5rem] bg-background p-compact shadow-editorial">
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

function PatternList() {
  return (
    <div className="grid gap-tight">
      {genomePatterns.map((pattern, index) => (
        <article
          key={pattern.title}
          className={`grid gap-content p-content md:grid-cols-[0.14fr_0.3fr_0.56fr] ${compactSoftSurfaceCard}`}
        >
          <p className="editorial-kicker">{String(index + 1).padStart(2, "0")}</p>
          <h3 className={type.leadTitle}>{pattern.title}</h3>
          <p className={type.body}>{pattern.description}</p>
        </article>
      ))}
    </div>
  );
}

export default function GenomePage() {
  return (
    <>
      <section className="container flex min-h-[calc(100svh-5rem)] flex-col justify-center pb-hero pt-hero-lg">
        <div className="max-w-6xl">
          <p className="editorial-kicker mb-card">Genome / Design system</p>
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
          <p className={`mt-card max-w-3xl ${type.sectionIntro}`}>
            {genomeIntro.intro}
          </p>
        </div>
      </section>

      <GenomeSectionNav items={genomeSectionNav} />

      <GenomeSection
        id="why"
        eyebrow="Why Genome exists"
        title="A portfolio system for work that cannot be reduced to screenshots."
        intro="Genome gives the site a stable editorial structure so every page can explain product judgment, complexity, and systems work with the same level of care."
      >
        <EditorialList items={genomeProblems} />
      </GenomeSection>

      <GenomeSection id="principles" eyebrow="System principles" title="Four rules shape every page and pattern.">
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
        id="patterns"
        eyebrow="Patterns"
        title="Reusable page patterns turn complex product work into a consistent narrative."
        intro="Patterns help each project move from context to complexity, then from product decisions to impact and reflection."
      >
        <PatternList />
      </GenomeSection>

      <GenomeSection
        id="content-rules"
        eyebrow="Content rules"
        title="Editorial rules keep the system honest."
        intro="Genome treats content as part of the design system because portfolio clarity depends on naming, evidence, abstraction, and restraint."
      >
        <EditorialList items={genomeContentRules} />
      </GenomeSection>

      <section id="closing" className="scroll-mt-44 py-section">
        <div className="container grid gap-loose md:grid-cols-[0.68fr_0.32fr] md:items-end">
          <h2 className={type.sectionTitle}>
            Genome keeps the portfolio reusable, editorial, and ready to scale as new product
            stories are added.
          </h2>
          <div>
            <p className={type.body}>
              The system is intentionally small: strong foundations, useful components, repeatable
              patterns, and clear content rules.
            </p>
            <Button asChild className="mt-card">
              <Link href="/">Return to portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
