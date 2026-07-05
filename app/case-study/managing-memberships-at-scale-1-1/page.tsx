import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { CaseStudyIterationTabs } from "@/components/sections/CaseStudyIterationTabs";
import { CTASection } from "@/components/sections/CTASection";
import { GenomeSectionNav } from "@/components/sections/GenomeSectionNav";
import { PageBackgroundTransition } from "@/components/sections/PageBackgroundTransition";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { publicPath } from "@/lib/public-path";

export const metadata: Metadata = {
  title: "Managing Memberships at Scale 1.1",
  description:
    "A consolidated 1.1 iteration of the internal platform case study with fewer sections and the same source content.",
};

const sectionNav = [
  { href: "#impact", label: "Overview" },
  { href: "#problem", label: "Problem" },
  { href: "#complexity", label: "Complexity" },
  { href: "#solution", label: "Solution" },
  { href: "#design-system", label: "Design System" },
  { href: "#outcomes", label: "Outcomes" },
] as const;

const impactMetrics = [
  {
    delta: "+32%",
    title: "Completed changes",
    body: "More account updates could be finished without restarts, handoffs, or manual support.",
  },
  {
    delta: "-41%",
    title: "Cost calculation",
    body: "Operators could calculate pricing, discounts, and membership changes faster.",
  },
  {
    delta: "-28%",
    title: "Billing corrections",
    body: "Fewer incorrect charges, refunds, adjustments, and manual billing fixes.",
  },
  {
    delta: "+24%",
    title: "Renewal readiness",
    body: "More accounts were correctly prepared for renewals, upgrades, and recurring billing.",
  },
] as const;

const projectMeta = [
  ["Timeline", "Over 12 months"],
  ["Worked with", "Product owners, designers, engineers, stakeholders"],
  ["Scope", "Account, billing, sales, payment, reporting, promotions, permissions, configuration"],
  ["Focus", "Workflow clarity, operational safety, design system patterns, implementation handoff"],
] as const;

const overview = [
  "The platform had grown around business rules, legacy workflows, and operational exceptions. Internal teams could get work done, but too much depended on training, memory, and knowing how the system had evolved over time.",
  "Over more than a year, I worked across flows, screens, systems, and handoff to make complex account and membership operations easier to understand, safer to use, and more consistent across modules.",
] as const;

const problems = [
  ["Fragmented workflows", "Related tasks were spread across dense screens, legacy paths, and disconnected interaction patterns."],
  ["Hidden business rules", "Profile state, billing conditions, permissions, history, and downstream effects changed what users could safely do."],
  ["Inconsistent product patterns", "Tables, forms, filters, actions, statuses, confirmations, and permission states were solved repeatedly instead of reused systematically."],
] as const;

const complexitySignals = [
  ["Profile lookup across states", "Search had to reveal whether a user was looking at a new, active, related, or inactive profile, because each state changed what actions were available next."],
  ["State-dependent actions", "The same task could be allowed, blocked, or routed differently depending on profile status, membership rules, billing conditions, or permissions."],
  ["Operational history", "Users needed comments, payments, transactions, profile changes, operational events, and system activity in one place before making changes."],
  ["Billing and payment rules", "Costs, adjustments, reversals, and payment actions could affect status, reporting, and downstream workflows."],
  ["Permission-sensitive workflows", "Roles shaped what users could see, edit, reverse, approve, or delete across the platform."],
  ["Dense enterprise screens", "Tables, forms, filters, dialogs, and history panels had to preserve enough context across different screen sizes without overwhelming users."],
] as const;

const designPrinciples = [
  ["Preserve business logic", "Legacy rules still mattered, so the interface had to make them easier to understand instead of hiding them."],
  ["Make state and impact visible", "Users needed to understand profile status, permissions, billing impact, and downstream effects before taking action."],
  ["Reduce reliance on memory", "Common workflows had to become easier for newer users to complete without memorizing internal rules."],
  ["Turn repeated decisions into reusable rules", "Similar problems across modules became shared patterns for forms, tables, dialogs, permissions, validation, and confirmations."],
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
  ["Easier onboarding", "Common account actions became less dependent on memorized state-based rules."],
  ["Fewer repeated clarifications", "Shared patterns and acceptance criteria reduced handoff questions around behavior, validation, permissions, and edge cases."],
  ["More consistent delivery", "Reusable Radix-based patterns gave design and engineering a shared way to build forms, tables, dialogs, filters, history, and permissions."],
  ["Clearer high-risk decisions", "Review, validation, and confirmation moments helped users understand impact before saving, reversing, approving, or restricting changes."],
  ["Implementation clarity", "Mockups, Jira tickets, and acceptance criteria made states, permissions, and implementation behavior easier to discuss with engineering."],
  ["A stronger product foundation", "Legacy workflow complexity was translated into reusable product patterns that could support future modules without restarting from scratch."],
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
    <div>
      <div className="grid gap-compact md:grid-cols-4">
        {impactMetrics.map((metric) => (
          <article
            key={metric.title}
            className="grid gap-content rounded-[1.25rem] bg-background p-card text-center shadow-editorial md:min-h-[25rem]"
          >
              <h3 className="mx-auto max-w-48 text-6 font-bold leading-tight">
                {metric.title}
              </h3>
              <div>
                <p className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-none text-foreground">
                  {metric.delta}
                </p>
                <div className="mx-auto mt-content h-1 w-16 rounded-pill bg-primary" aria-hidden="true" />
              </div>
              <p className="mx-auto max-w-56 text-7 font-medium leading-snug text-muted-foreground">
                {metric.body}
              </p>
          </article>
        ))}
      </div>
    </div>
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
            <p className="mt-content max-w-3xl text-6 text-muted-foreground">
              I helped turn dense legacy logic into clearer workflows, safer decisions, and
              reusable product patterns that product, design, and engineering teams could build
              from.
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

      <section id="impact" className="scroll-mt-24 py-section">
        <div className="container">
          <div className="max-w-5xl">
            <p className="editorial-kicker mb-compact text-primary">Overview</p>
            <h2 className="text-3 font-bold">This was not just a UI refresh.</h2>
          </div>
          <div className="mt-hero">
            <ImpactMetricsPanel />
          </div>
          <div id="overview" className="mt-card grid max-w-4xl gap-content scroll-mt-24 text-6 text-muted-foreground">
            {overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Card variant="background" className="mt-card max-w-5xl p-card">
            <p className="editorial-kicker text-primary">My role</p>
            <h3 className="mt-compact text-5 font-bold">
              I turned ambiguous legacy logic into workflows, product patterns, and implementation-ready decisions.
            </h3>
            <p className="mt-compact max-w-4xl text-7 text-muted-foreground">
              My role was to turn ambiguous legacy logic into workflows, patterns, and implementation-ready decisions that product, design, and engineering could align around.
            </p>
            <ul className="mt-content grid gap-tight md:grid-cols-2">
              {role.map((item) => (
                <li key={item} className="flex gap-compact rounded-[1.25rem] bg-background p-content">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-7 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <Section
        id="problem"
        eyebrow="The problem"
        title="The platform worked, but it was difficult to trust."
        soft
      >
        <div className="mb-card grid max-w-5xl gap-content text-6 text-muted-foreground">
          <p>
            Workflows across account management, billing, reporting, promotions, and payments
            were connected by business logic, but they did not always feel like one product.
            Similar patterns behaved differently from module to module, and users often had to
            remember rules before they could complete tasks confidently.
          </p>
          <p>The biggest risks came from three areas:</p>
        </div>
        <PairGrid items={problems} />
        <Card id="design-principles" variant="background" className="mt-card scroll-mt-24 p-card">
          <div className="mb-card max-w-5xl">
            <h3 className="text-4 font-bold">Design principles</h3>
            <div className="mt-compact grid max-w-4xl gap-content text-6 text-muted-foreground">
              <p>
                The goal was not to remove complexity that still served the business. The goal
                was to organize it.
              </p>
              <p>The redesign followed four principles:</p>
            </div>
          </div>
          <div className="grid gap-compact md:grid-cols-2">
            {designPrinciples.map(([title, body], index) => (
              <Card key={title} variant="component" className="p-card">
                <p className="font-mono text-8 font-semibold uppercase text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-card text-5 font-bold">{title}</h4>
                <p className="mt-compact text-7 text-muted-foreground">{body}</p>
              </Card>
            ))}
          </div>
        </Card>
      </Section>

      <Section id="complexity" eyebrow="Complexity" title="What made it complex">
        <p className="mb-card max-w-4xl text-6 text-muted-foreground">
          Many tasks looked simple from the outside, but the right action depended on context.
        </p>
        <div className="grid gap-compact md:grid-cols-2">
          {complexitySignals.map(([title, body], index) => (
            <Card key={title} variant="background" className="p-card">
              <p className="font-mono text-8 font-semibold uppercase text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-card text-5 font-bold">{title}</h4>
              <p className="mt-compact text-7 text-muted-foreground">{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="solution"
        eyebrow="Solution"
        title="I focused on the areas where complexity created the most operational risk."
        soft
      >
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
      </Section>

      <Section
        id="design-system"
        eyebrow="Design system"
        title="The design system came from real product problems."
      >
        <div className="grid max-w-5xl gap-content text-6 text-muted-foreground">
          <p>
            It was not created as a separate UI exercise. It emerged from repeated workflow issues across forms, tables, dialogs, filters, history, permissions, validation states, and confirmation flows.
          </p>
          <p>
            Instead of treating every screen as a new design problem, we turned recurring edge cases into reusable product rules.
          </p>
        </div>
        <div className="mt-hero">
          <PairGrid items={systemPatterns} />
        </div>
        <div className="mt-hero rounded-[1.5rem] bg-foreground p-card text-background">
          <p className="editorial-kicker text-background/70">From repeated UI decisions to shared product rules</p>
          <h3 className="mt-content max-w-5xl text-4 font-bold">
            Repeated edge cases became reusable rules for confirmations, permissions, validation, and table behavior
            across modules.
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
      </Section>

      <Section
        id="outcomes"
        eyebrow="Outcomes & Measurement"
        title="Success was visible through clearer workflows, reusable patterns, and fewer ambiguous implementation decisions."
        soft
      >
        <PairGrid items={outcomes} />
      </Section>

      <section id="takeaway" className="scroll-mt-24 py-section">
        <div className="container">
          <div className="mb-card max-w-5xl">
            <p className="editorial-kicker mb-compact text-primary">Takeaway</p>
            <h2 className="text-3 font-bold">
              This project reflects the product design work I do best: turning complex systems into clearer workflows,
              reusable patterns, and decisions teams can build from.
            </h2>
          </div>
          <p className="max-w-5xl text-6 text-muted-foreground">
            The value was not only in making screens cleaner. It was in helping teams understand what should stay
            complex, what could be simplified, and how repeated product decisions could become a stronger foundation
            for future work.
          </p>
        </div>
      </section>

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
