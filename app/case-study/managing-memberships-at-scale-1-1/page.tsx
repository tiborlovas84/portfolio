import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { CaseStudyIterationTabs } from "@/components/sections/CaseStudyIterationTabs";
import { CTASection } from "@/components/sections/CTASection";
import { GenomeSectionNav } from "@/components/sections/GenomeSectionNav";
import { PageBackgroundTransition } from "@/components/sections/PageBackgroundTransition";
import { Badge } from "@/components/ui/badge";
import { Card, cardVariants } from "@/components/ui/card";
import { publicPath } from "@/lib/public-path";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Managing Memberships at Scale 1.1",
  description:
    "A consolidated 1.1 iteration of the internal platform case study with fewer sections and the same source content.",
};

const sectionNav = [
  { href: "#impact", label: "Overview" },
  { href: "#problem", label: "Problem" },
  { href: "#role", label: "Role" },
  { href: "#solution", label: "Solution" },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#measurement", label: "Measurement" },
] as const;

const impactMetrics = [
  {
    delta: "+X%",
    title: "Membership changes completed",
    body: "More updates finished without restarts, handoffs, or manual support.",
    direction: "up",
  },
  {
    delta: "-X%",
    title: "Cost calculation time",
    body: "Operators calculated pricing, discounts, and membership changes faster.",
    direction: "down",
  },
  {
    delta: "-X%",
    title: "Billing correction requests",
    body: "Fewer incorrect charges, refunds, adjustments, and manual billing fixes.",
    direction: "down",
  },
  {
    delta: "+X%",
    title: "Renewal and upgrade readiness",
    body: "More accounts were correctly set up for renewals, upgrades, and recurring billing.",
    direction: "up",
  },
] as const;

const projectMeta = [
  ["Source", "Portfolio 1.0 internal-platform case study"],
  ["Duration", "Over 1 year"],
  ["Worked with", "Product owners, designers, engineers, stakeholders"],
  ["Scope", "Account, billing, sales, payment, reporting, promotions, permissions, configuration"],
] as const;

const overview = [
  "The client's internal operations teams relied on a large platform for account, billing, sales, payment, reporting, promotions, permissions, and configuration.",
  "Years of additions had created inconsistent patterns, duplicated behavior, unclear terminology, and dense screens that only experienced users could navigate confidently.",
  "Over more than a year, I worked with product, design, engineering, and stakeholders to turn that complexity into clearer workflows and reusable product patterns.",
] as const;

const problems = [
  ["Workflows felt stitched together", "Account, billing, reporting, promotions, and payment workflows were connected by business logic, but they did not always feel like parts of the same product."],
  ["Patterns behaved differently", "Tables, forms, filters, settings, actions, statuses, and confirmations changed from module to module, which made familiar tasks harder to trust."],
  ["Too much relied on memory", "Users often needed to remember internal rules before they could complete tasks confidently."],
  ["Permissions were hard to understand", "Roles and access levels were difficult to scan, compare, and maintain, even though they affected what users could safely do."],
  ["Teams kept solving the same UI problems", "Designers and engineers were rebuilding similar patterns because repeated product problems had not yet been turned into a shared system."],
  ["Small mistakes could have real impact", "Account, billing, promotions, and reporting changes affected downstream operational work, so unclear interactions created real risk."],
] as const;

const complexity = [
  ["Profile lookup across states", "Search was not just about finding a profile. It had to reveal whether the user was looking at a new, active, related, or inactive entry, because each state changed what actions were available next."],
  ["State-dependent actions", "Actions were not fixed across the product. They had to change based on the current profile state, because the same task could be allowed, blocked, or require a different path depending on what the user was viewing."],
  ["Operational history", "History was not just an activity feed. Users needed comments, payments, transactions, operational events, profile changes, and system activity in one place so they could understand context before making changes."],
  ["Billing and payment rules", "Payment work was not just about collecting money. Costs, adjustments, reversals, and payment actions could affect status, reporting, and downstream workflows, so the interface had to make those effects clearer."],
  ["Permission-sensitive workflows", "Permissions were not just about access. They affected what users could see, edit, reverse, approve, or delete, which made role-based behavior a core part of the interaction design."],
  ["Dense screens across breakpoints", "Responsive design was not just about making screens smaller. Dense tables, forms, filters, dialogs, and history panels still had to preserve enough context for users to work safely across enterprise screen sizes."],
] as const;

const complexityImages = [
  "/case-study/complexity-images/ChatGPT Image Jun 5, 2026, 09_45_32 PM (1).png",
  "/case-study/complexity-images/ChatGPT Image Jun 5, 2026, 09_45_32 PM (2).png",
  "/case-study/complexity-images/ChatGPT Image Jun 5, 2026, 09_45_32 PM (3).png",
  "/case-study/complexity-images/ChatGPT Image Jun 5, 2026, 09_45_32 PM (4).png",
  "/case-study/complexity-images/ChatGPT Image Jun 5, 2026, 09_45_32 PM (5).png",
  "/case-study/complexity-images/ChatGPT Image Jun 5, 2026, 09_45_32 PM (6).png",
] as const;

const constraints = [
  ["Legacy logic had to stay intact", "The redesign could not remove complexity that still served the business. The work was to make that logic easier to understand and safer to use."],
  ["Operational detail still mattered", "Users still needed profile history, payments, operational events, comments, and context before making decisions."],
  ["Many teams had to stay aligned", "Account, billing, reporting, sales, permissions, and operations all depended on shared rules and consistent patterns."],
  ["The system had to support future work", "Patterns needed to work beyond one screen or module, so new workflows could reuse the same foundation."],
] as const;

const role = [
  "Mapped complex enterprise workflows before committing to screens.",
  "Turned requirements, rules, and feedback into clearer flows and interaction patterns.",
  "Designed account, billing, reporting, promotions, permissions, and configuration areas.",
  "Worked with product owners to clarify rules, edge cases, and operational dependencies.",
  "Worked with engineers to keep patterns feasible, maintainable, and reusable.",
  "Helped shape a Radix-based design system from repeated product problems.",
  "Prepared Jira tickets and acceptance criteria for implementation.",
  "Reviewed edge cases, empty states, validation, permissions, and errors before handoff.",
] as const;

const areas = [
  {
    title: "Account Management",
    subtitle: "Helping internal users understand whether a profile could be edited, billed, restricted, or reviewed before they took action.",
    tags: ["Adding a profile", "Updating details", "Account cost", "Payment actions", "Operational history"],
    image: "/case-study/complexity-images/account-management-solution-v3.png",
    imageAlt: "Internal member operations dashboard showing profile status, billing, payment actions, alerts, quick actions, and member history",
    before: "Account work was not just about editing profile details. Every change had to respect profile state, cost, payment behavior, and downstream operational rules.",
    decision: "I separated profile identity, current state, and available actions so users could understand the context before editing, billing, or operational tasks.",
    mattered: "The experience became easier to scan, with clearer profile context, safer edit moments, and more consistent patterns for recurring account tasks.",
  },
  {
    title: "Report Generator",
    subtitle: "Reducing a large configuration surface into a sequence users could complete without losing context.",
    tags: ["Modules", "Groups", "Report types", "Payments", "Adjustments", "Review"],
    before: "Reporting was not just about choosing filters. Users had to move through modules, report types, payment logic, adjustments, reversals, and review states without getting lost.",
    decision: "I turned one dense configuration problem into a guided sequence: context, report type, criteria, and review.",
    mattered: "The generator became easier to reason through because users could make decisions in sequence instead of configuring everything from one dense screen.",
  },
  {
    title: "Promotion Builder",
    subtitle: "Reducing the risk of publishing a rule combination that applied to the wrong audience, channel, or eligibility condition.",
    tags: ["Online", "Segment-specific", "Internal only", "Auto-renew", "Audience-specific", "Upgrade only"],
    before: "Promotion setup was not just about creating discounts. Internal teams needed to understand where each promotion applied, who qualified, and which rule combinations could create mistakes.",
    decision: "I separated availability, eligibility, and discount logic so teams could review rule combinations before publishing.",
    mattered: "Internal teams had a clearer way to see what a promotion applied to, who it affected, and where mistakes could happen.",
  },
  {
    title: "Roles and Permissions",
    subtitle: "Making access understandable enough that teams could compare roles without reading every permission one by one.",
    tags: ["Grouped permissions", "Clear modules", "Scannable roles", "Permission comparison", "Safer editing"],
    before: "Permissions were not just a settings page. They shaped what users could see, edit, reverse, approve, or delete across the platform.",
    decision: "I organized permissions by module and action type so teams could compare roles and understand access before making changes.",
    mattered: "Permissions became easier to scan, maintain, and discuss across product, design, and engineering.",
  },
] as const;

const system = [
  "Forms",
  "Tables",
  "Filters",
  "Dialogs",
  "Dropdowns",
  "Tabs",
  "Status indicators",
  "Validation states",
  "Empty states",
  "Confirmation flows",
  "Permission-based actions",
  "Search/profile lookup",
  "History/activity",
  "Responsive behavior",
] as const;

const systemPatterns = [
  ["Table actions", "Filters, row actions, status states, and bulk behavior became more consistent across modules."],
  ["Form validation", "Required fields, errors, disabled states, and save behavior followed clearer shared rules."],
  ["Permission states", "Hidden, disabled, editable, and destructive actions were handled as reusable interaction patterns."],
  ["Confirmation flows", "High-impact changes used clearer review and confirmation moments before users committed changes."],
] as const;

const systemProof = [
  ["One-off dialogs", "Shared confirmation rules"],
  ["Inconsistent disabled states", "Permission-based action logic"],
  ["Repeated table decisions", "Reusable table behavior"],
  ["Form errors handled per screen", "Shared validation patterns"],
] as const;

const outcomes = [
  ["Easier onboarding", "Common account actions became less dependent on memorized state-based rules, making the product easier for newer users to understand."],
  ["Fewer repeated clarifications", "Shared patterns and acceptance criteria reduced repeated clarification during handoff, while giving engineers reusable behavior rules for future modules."],
  ["More consistent delivery", "Reusable Radix-based patterns gave design and engineering a shared way to build forms, tables, dialogs, filters, history, and permissions."],
  ["Clearer high-risk decisions", "Review, validation, and confirmation moments made it easier for users to understand impact before changes affected downstream workflows."],
  ["Cleaner handoff", "Mockups, Jira tickets, and acceptance criteria made states, permissions, and implementation behavior easier to discuss with engineering."],
  ["A stronger product foundation", "Legacy workflow complexity was translated into reusable product patterns that could support future modules without restarting from scratch."],
] as const;

const measurementSignals = [
  ["Workflow confidence", "Fewer moments where users had to rely on memory to understand state, permissions, or the impact of a change."],
  ["Implementation clarity", "Fewer repeated questions around expected behavior, validation, permissions, and edge cases during handoff."],
  ["Pattern reuse", "More workflows could reuse the same table, form, dialog, confirmation, and permission-state rules."],
  ["Operational risk", "High-impact actions had clearer review moments before users saved, reversed, approved, or restricted changes."],
] as const;

const judgmentQuestions = [
  "Does this match how internal teams think?",
  "Are we hiding complexity or organizing it?",
  "Can users understand impact before saving?",
  "Will this pattern work elsewhere?",
  "Can engineering build this consistently?",
  "Does this reduce confusion or just look cleaner?",
] as const;

function Section({
  eyebrow,
  id,
  title,
  children,
  soft = false,
}: {
  eyebrow: string;
  id: string;
  title: string;
  children: React.ReactNode;
  soft?: boolean;
}) {
  void soft;

  return (
    <section id={id} className="scroll-mt-24 py-section">
      <div className="container">
        <div className="mb-hero max-w-5xl">
          <p className="editorial-kicker mb-compact text-primary">{eyebrow}</p>
          <h2 className="text-3 font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function PairGrid({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div className="grid gap-compact md:grid-cols-2">
      {items.map(([title, body], index) => (
        <Card key={title} variant="background" className="p-card">
          <p className="font-mono text-8 font-semibold uppercase text-primary">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-card text-5 font-bold">{title}</h3>
          <p className="mt-compact text-7 text-muted-foreground">{body}</p>
        </Card>
      ))}
    </div>
  );
}

function ImpactMetricsPanel() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-primary/15 bg-background shadow-editorial">
      <div className="grid md:grid-cols-4">
        {impactMetrics.map((metric) => {
          const Icon = metric.direction === "up" ? ArrowUpRight : ArrowDownRight;

          return (
            <article
              key={metric.title}
              className="grid gap-content p-card text-center md:min-h-[24rem] md:border-l md:border-primary/10 md:first:border-l-0"
            >
              <div className="mx-auto flex size-16 items-center justify-center rounded-pill bg-primary/10 text-primary">
                <Icon className="size-8" strokeWidth={2.6} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-none text-foreground">
                  {metric.delta}
                </p>
                <h3 className="mx-auto mt-content max-w-52 text-5 font-bold leading-tight">
                  {metric.title}
                </h3>
              </div>
              <p className="mx-auto max-w-56 text-7 font-medium leading-snug text-muted-foreground">
                {metric.body}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function VisualPairGrid({
  images,
  items,
}: {
  images: readonly string[];
  items: readonly (readonly [string, string])[];
}) {
  return (
    <div className="grid gap-compact md:grid-cols-2">
      {items.map(([title, body], index) => (
        <Card key={title} variant="background" className="flex flex-col p-card">
          <p className="font-mono text-8 font-semibold uppercase text-primary">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-card text-5 font-bold">{title}</h3>
          <p className="mt-compact text-7 text-muted-foreground">{body}</p>
          <Image
            src={publicPath(images[index])}
            alt=""
            width={1448}
            height={1086}
            className="mt-card h-auto w-full rounded-[1.25rem]"
            unoptimized
          />
        </Card>
      ))}
    </div>
  );
}

function Checklist({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-tight md:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className={cn(cardVariants({ variant: "background" }), "flex gap-compact rounded-[1.25rem] p-content")}
        >
          <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
          <span className="text-7 font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ManagingMembershipsAtScaleOneOne() {
  return (
    <PageBackgroundTransition>
      <section className="container pb-hero pt-16 md:pt-20" data-page-hero>
        <CaseStudyIterationTabs currentHref="/case-study/managing-memberships-at-scale-1-1" />

        <div className="mt-card grid gap-card lg:grid-cols-[minmax(0,0.58fr)_minmax(22rem,0.42fr)] lg:items-end xl:gap-hero xl:grid-cols-[minmax(0,0.62fr)_minmax(24rem,0.38fr)]">
          <div className="min-w-0">
            <h1 className="mt-compact max-w-6xl text-2 font-bold">
              Managing Memberships at Scale
            </h1>
            <p className="mt-content max-w-3xl text-6 text-muted-foreground">
              A year-long redesign of a complex internal system used to manage account, billing, reporting,
              promotions, permissions, and core operational workflows.
            </p>
          </div>
          <div className="grid min-w-0 gap-tight">
            {projectMeta.map(([label, value]) => (
              <article key={label} className="rounded-[1.25rem] bg-background p-content">
                <p className="editorial-kicker text-primary">{label}</p>
                <p className="mt-micro text-8 font-medium">{value}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-hero overflow-hidden rounded-[2rem] bg-surface-soft shadow-editorial">
          <Image
            src={publicPath("/hero.png")}
            alt=""
            width={1672}
            height={941}
            className="h-auto w-full"
            priority
            unoptimized
          />
        </div>
      </section>

      <GenomeSectionNav items={[...sectionNav]} />

      <Section
        id="impact"
        eyebrow="Overview"
        title="This was not just a UI refresh."
        soft
      >
        <div id="overview" className="grid max-w-4xl gap-content scroll-mt-24 text-6 text-muted-foreground">
          {overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-hero">
          <ImpactMetricsPanel />
        </div>
      </Section>

      <Section
        id="problem"
        eyebrow="The problem"
        title="The platform had grown around business rules, not around how people worked."
        soft
      >
        <p className="mb-card max-w-4xl text-6 text-muted-foreground">
          Internal users could get work done, but too much depended on training, memory, and knowing how the system had evolved over time.
        </p>
        <PairGrid items={problems} />
        <div id="complexity" className="mt-hero scroll-mt-24">
          <div className="mb-card max-w-5xl">
            <p className="editorial-kicker mb-compact text-primary">Complexity</p>
            <h3 className="text-4 font-bold">The hidden complexity behind simple tasks.</h3>
            <p className="mt-compact max-w-4xl text-6 text-muted-foreground">
              Many tasks looked simple from the outside, but the right action depended on profile state, permissions, billing conditions, history, and downstream impact.
            </p>
          </div>
          <VisualPairGrid images={complexityImages} items={complexity} />
        </div>
        <div id="constraints" className="mt-hero scroll-mt-24">
          <div className="mb-card max-w-5xl">
            <p className="editorial-kicker mb-compact text-primary">Constraints</p>
            <h3 className="text-4 font-bold">What the redesign had to respect.</h3>
          </div>
          <PairGrid items={constraints} />
        </div>
      </Section>

      <Section id="role" eyebrow="My role" title="I worked across flows, screens, systems, and handoff.">
        <p className="mb-card max-w-4xl text-6 text-muted-foreground">
          My role was to turn ambiguous legacy logic into workflows, patterns, and implementation-ready decisions that product, design, and engineering could align around.
        </p>
        <Checklist items={role} />
      </Section>

      <Section id="solution" eyebrow="Solution" title="I redesigned the areas where complexity created the most risk." soft>
        <p className="mb-card max-w-4xl text-6 text-muted-foreground">
          Each area followed the same logic: understand the legacy rules, map the edge cases, simplify the decisions, and turn repeated problems into reusable product patterns.
        </p>
        <div className="grid gap-content">
          {areas.map((area, index) => (
            <Card key={area.title} variant="background" className="p-card">
              <p className="font-mono text-8 font-semibold uppercase text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-card text-4 font-bold">{area.title}</h3>
              <p className="mt-compact max-w-4xl text-7 text-muted-foreground">{area.subtitle}</p>
              <div className="mt-content flex flex-wrap gap-micro">
                {area.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              {"image" in area ? (
                <Image
                  src={publicPath(area.image)}
                  alt={area.imageAlt}
                  width={1586}
                  height={992}
                  className="mt-card h-auto w-full rounded-[1.25rem]"
                  unoptimized
                />
              ) : null}
              <div className="mt-card grid gap-compact lg:grid-cols-3">
                {[
                  ["Before", area.before],
                  ["Design decision", area.decision],
                  ["Why it mattered", area.mattered],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1.25rem] bg-surface-soft p-content">
                    <p className="editorial-kicker text-primary">{label}</p>
                    <p className="mt-compact text-8 text-muted-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div id="design-system" className="mt-hero scroll-mt-24">
          <div className="mb-card max-w-5xl">
            <p className="editorial-kicker mb-compact text-primary">Design system</p>
            <h3 className="text-4 font-bold">The design system came from real product problems.</h3>
          </div>
          <div className="grid gap-hero lg:grid-cols-[0.5fr_0.5fr]">
            <div className="grid gap-content text-6 text-muted-foreground">
              <p>
                The system was not created as a separate UI exercise. It came from repeated workflow problems across forms, tables, dialogs, filters, history, permissions, and validation states.
              </p>
              <p>
                A major part of the project was helping shape a custom Radix-based system and aligning patterns with engineering implementation.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-background p-card">
              <h3 className="text-5 font-bold">Reusable patterns</h3>
              <div className="mt-content flex flex-wrap gap-micro">
                {system.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-hero">
            <PairGrid items={systemPatterns} />
          </div>
          <div className="mt-hero rounded-[1.5rem] bg-foreground p-card text-background">
            <p className="editorial-kicker text-background/70">From repeated edge cases to reusable rules</p>
            <h3 className="mt-content max-w-5xl text-4 font-bold">
              Instead of treating confirmations, permission states, validation, and table behavior as separate UI decisions, we turned them into shared product rules that could be reused across modules.
            </h3>
            <div className="mt-card grid gap-tight md:grid-cols-2">
              {systemProof.map(([before, after]) => (
                <div key={before} className="rounded-[1.25rem] bg-background/10 p-content">
                  <p className="text-8 text-background/70">{before}</p>
                  <p className="mt-micro text-7 font-semibold">{after}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="outcomes"
        eyebrow="Outcomes"
        title="A complex internal workflow became easier to understand, safer to operate, and more consistent across edge cases."
        soft
      >
        <PairGrid items={outcomes} />
      </Section>

      <Section
        id="measurement"
        eyebrow="How we measured progress"
        title="Success was visible through clearer workflows, reusable patterns, and fewer ambiguous implementation decisions."
      >
        <PairGrid items={measurementSignals} />
        <div id="judgment" className="mt-hero scroll-mt-24">
          <div className="mb-card max-w-5xl">
            <p className="editorial-kicker mb-compact text-primary">Design judgment</p>
            <h3 className="text-4 font-bold">The hardest part was deciding what to simplify and what to preserve.</h3>
          </div>
          <Checklist items={judgmentQuestions} />
        </div>
        <div id="takeaway" className="mt-hero scroll-mt-24">
          <div className="mb-card max-w-5xl">
            <p className="editorial-kicker mb-compact text-primary">Takeaway</p>
            <h3 className="text-4 font-bold">Turning complex systems into clearer decisions teams can build from.</h3>
          </div>
          <Card variant="background" className="p-card">
            <p className="text-4 font-bold">
              This project reflects the product design work I do best: turning complex systems into clearer workflows,
              reusable patterns, and decisions teams can build from.
            </p>
          </Card>
        </div>
      </Section>

      <section id="nda-safe" className="scroll-mt-24 py-section">
        <div className="container">
          <div className="rounded-[1.75rem] bg-surface-soft p-card">
            <p className="editorial-kicker mb-compact text-primary">Case study note</p>
            <h2 className="text-4 font-bold">NDA-safe, but still specific.</h2>
            <p className="mt-compact max-w-4xl text-7 text-muted-foreground">
              Details have been generalized for confidentiality. Visuals are recreated and sanitized fragments based on
              the work, showing workflow complexity, interaction patterns, and design decisions without exposing
              protected product content.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </PageBackgroundTransition>
  );
}
