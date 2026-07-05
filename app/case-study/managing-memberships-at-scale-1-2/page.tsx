import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { CaseStudyIterationTabs } from "@/components/sections/CaseStudyIterationTabs";
import { CaseStudyV11SectionNav } from "@/components/sections/CaseStudyV11SectionNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { publicPath } from "@/lib/public-path";
import {
  challenge,
  challengeProblems,
  constraints,
  featureSystems,
  heroTags,
  outcomes,
  overview,
  projectMeta,
  sectionNav,
  strategy,
  systemStrategy,
  workflow,
  type Pair,
  type TimelineItem,
} from "./content";

export const metadata: Metadata = {
  title: "Managing Memberships at Scale 1.2",
  description:
    "A Roadside Assistance Company case study about redesigning internal operational workflows, scalable reporting, promotion configuration, and AI-assisted product delivery.",
};

function CaseSection({
  id,
  eyebrow,
  title,
  intro,
  children,
  surface = "background",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  surface?: "background" | "soft";
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-section ${surface === "soft" ? "bg-surface-soft" : "bg-background"}`}
    >
      <div className="container">
        <div className="mb-hero max-w-4xl">
          <p className="editorial-kicker mb-compact text-primary">{eyebrow}</p>
          <h2 className="text-3 font-bold">{title}</h2>
          {intro ? <p className="mt-content text-6 text-muted-foreground">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function TextStack({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="grid max-w-4xl gap-content text-6 leading-relaxed text-muted-foreground">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function MetaGrid() {
  return (
    <div className="grid gap-tight md:grid-cols-3">
      {projectMeta.map(([label, value]) => (
        <article key={label} className="rounded-[1.25rem] bg-background p-content shadow-editorial">
          <p className="editorial-kicker text-primary">{label}</p>
          <p className="mt-compact text-7 font-medium">{value}</p>
        </article>
      ))}
    </div>
  );
}

function NumberedGrid({ items }: { items: Pair[] }) {
  return (
    <div className="grid gap-compact md:grid-cols-2">
      {items.map(([title, body], index) => (
        <article key={title} className="rounded-[1.5rem] bg-background p-card shadow-editorial">
          <p className="font-mono text-8 font-semibold uppercase text-primary">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-card text-5 font-bold">{title}</h3>
          <p className="mt-compact text-7 text-muted-foreground">{body}</p>
        </article>
      ))}
    </div>
  );
}

function Checklist({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-tight">
      {items.map((item) => (
        <li key={item} className="flex gap-compact rounded-[1.25rem] bg-background p-content shadow-editorial">
          <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
          <span className="text-7 font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <div className="grid gap-content">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="grid gap-card rounded-[1.5rem] bg-background p-card shadow-editorial lg:grid-cols-[0.16fr_0.84fr]"
        >
          <div>
            <p className="font-mono text-7 font-semibold uppercase text-primary">
              {String(index + 1).padStart(2, "0")}
            </p>
          </div>
          <div>
            <h3 className="text-4 font-bold">{item.title}</h3>
            <div className="mt-content grid gap-tight text-7 text-muted-foreground">
              {item.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-card grid gap-compact lg:grid-cols-2">
              <div className="rounded-[1.25rem] bg-surface-soft p-content">
                <h4 className="editorial-kicker text-primary">{item.leftTitle}</h4>
                <ul className="mt-compact grid gap-micro text-8 font-medium">
                  {item.leftItems.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[1.25rem] bg-surface-soft p-content">
                <h4 className="editorial-kicker text-primary">{item.rightTitle}</h4>
                <p className="mt-compact text-8 text-muted-foreground">{item.rightBody}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function RoadsideAssistanceCaseStudy() {
  return (
    <div className="bg-background">
      <section className="container pb-hero pt-24 md:pt-32">
        <CaseStudyIterationTabs currentHref="/case-study/managing-memberships-at-scale-1-2" />
        <div className="grid gap-hero lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <div>
            <div className="flex flex-wrap gap-micro">
              {heroTags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="editorial-kicker mt-hero text-primary">Case Study</p>
            <h1 className="mt-compact max-w-5xl text-2 font-bold">
              Managing Memberships at Scale
            </h1>
            <p className="mt-content max-w-3xl text-6 text-muted-foreground">
              Designing a scalable internal operations platform with AI integrated from discovery
              to production.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-[#eef4f8] p-content shadow-editorial">
            <Image
              src={publicPath("/webflow/images/AAA-Logo.svg")}
              alt="AAA"
              width={148}
              height={72}
              className="h-auto w-28"
              priority
              unoptimized
            />
            <p className="mt-card text-5 font-semibold">
              Operational workflows for a roadside assistance membership platform.
            </p>
          </div>
        </div>
        <div className="mt-hero overflow-hidden rounded-[2rem] bg-[#f4f6f8] shadow-editorial">
          <Image
            src={publicPath("/webflow/images/Roadside-Assistance-cropped.png")}
            alt="Roadside Assistance product interface mockups"
            width={1383}
            height={764}
            className="h-auto w-full"
            priority
            unoptimized
          />
        </div>
      </section>

      <CaseStudyV11SectionNav items={[...sectionNav]} />

      <CaseSection
        id="overview"
        eyebrow="Overview"
        title="A faster way to design complex internal tools without lowering the bar."
        surface="soft"
      >
        <div className="grid gap-hero lg:grid-cols-[0.62fr_0.38fr]">
          <TextStack paragraphs={overview} />
          <MetaGrid />
        </div>
      </CaseSection>

      <CaseSection
        id="challenge"
        eyebrow="Challenge"
        title="Critical workflows were distributed across disconnected systems."
      >
        <div className="grid gap-hero lg:grid-cols-[0.52fr_0.48fr]">
          <div>
            <TextStack paragraphs={challenge} />
            <div className="mt-card rounded-[1.5rem] bg-foreground p-card text-background">
              <p className="text-5 font-semibold">
                How do we design faster without sacrificing production quality?
              </p>
            </div>
          </div>
          <Checklist items={challengeProblems} />
        </div>
      </CaseSection>

      <CaseSection
        id="constraints"
        eyebrow="Constraints"
        title="The platform had to evolve without disrupting live operations."
        surface="soft"
      >
        <NumberedGrid items={constraints} />
      </CaseSection>

      <CaseSection
        id="strategy"
        eyebrow="Approach"
        title="AI became a systems layer, not a screen generator."
      >
        <div className="grid gap-hero lg:grid-cols-[0.5fr_0.5fr] lg:items-start">
          <div>
            <TextStack paragraphs={strategy} />
            <div className="mt-card rounded-[1.5rem] bg-surface-soft p-card">
              <p className="text-5 font-semibold">
                Every workflow and interface state was tied to implementation-ready Jira tickets
                with acceptance criteria.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] bg-[#eef4f8]">
            <Image
              src={publicPath("/webflow/images/Roadside-Assistance.png")}
              alt="Roadside Assistance workflow interface mockups"
              width={1384}
              height={1282}
              className="h-auto w-full"
              unoptimized
            />
          </div>
        </div>
      </CaseSection>

      <CaseSection
        id="systems"
        eyebrow="System Strategy"
        title="The work focused on reducing friction across interconnected workflows."
        intro="Rather than approaching the platform as isolated screens, I focused on the operating model behind the interface."
        surface="soft"
      >
        <div className="grid gap-hero lg:grid-cols-[0.42fr_0.58fr]">
          <Checklist items={systemStrategy} />
          <Timeline items={featureSystems} />
        </div>
      </CaseSection>

      <CaseSection id="workflow" eyebrow="Workflow" title="From research to production validation.">
        <Timeline items={workflow} />
        <p className="mt-card max-w-4xl rounded-[1.5rem] bg-surface-soft p-card text-7 text-muted-foreground">
          Additional workflow diagrams and selected implementation flows are available upon request
          through a temporary password-protected Figma file shared for review purposes.
        </p>
      </CaseSection>

      <CaseSection
        id="outcome"
        eyebrow="Outcome"
        title="Faster iteration, clearer implementation criteria, and a more scalable operational system."
        surface="soft"
      >
        <div className="grid gap-compact md:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <article key={outcome} className="rounded-[1.5rem] bg-background p-card shadow-editorial">
              <p className="font-mono text-8 font-semibold uppercase text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-card text-5 font-semibold">{outcome}</p>
            </article>
          ))}
        </div>
        <div className="mt-hero grid gap-card rounded-[1.75rem] bg-foreground p-card text-background lg:grid-cols-[0.7fr_0.3fr] lg:items-center">
          <p className="text-4 font-bold">
            AI did not replace product design. The leverage shifted to defining systems, shaping
            workflows, validating quality, and orchestrating decisions across tools, teams, and
            outputs.
          </p>
          <Button asChild className="border-background text-background hover:border-primary" size="lg">
            <Link href="/request-access?project=Road%20Assistance">
              Request Access
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </CaseSection>
    </div>
  );
}
