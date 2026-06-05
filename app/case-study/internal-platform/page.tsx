import type { Metadata } from "next";
import Image from "next/image";
import { CaseStudyAnchorNav } from "../../../components/case-study-anchor-nav";
import { ShimmerDotsBackground } from "../../../components/shimmer-dots-background";
import { SiteContactCta, SiteFooter, SiteHeader } from "../../../components/site-shell";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Internal Platform Redesign - Tibor Lovas",
  description:
    "An NDA-safe case study about redesigning a complex internal platform into clearer workflows and reusable product patterns.",
};

type Pair = readonly [string, string];

const sectionNav = [
  ["Overview", "overview"],
  ["Problem", "problem"],
  ["Role", "role"],
  ["Solution", "solution"],
  ["Design system", "design-system"],
  ["Outcomes", "outcomes"],
] as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function publicPath(path: string) {
  return `${basePath}${path}`;
}

const impactHighlights: Pair[] = [
  ["Clearer high-risk workflows", "Complex flows were simplified with clearer states, guidance, and safeguards."],
  ["Fewer repeated handoff clarifications", "Roles, responsibilities, and information needs were made explicit."],
  ["Reusable Radix-based patterns", "Consistent, accessible components scaled across the product."],
  ["Stronger foundation for future modules", "Design system patterns enabled faster, more consistent delivery."],
];

const complexity: Pair[] = [
  ["Profile lookup across states", "Search was not just about finding a profile. It had to reveal whether the user was looking at a new, active, related, or inactive entry, because each state changed what actions were available next."],
  ["State-dependent actions", "Actions were not fixed across the product. They had to change based on the current profile state, because the same task could be allowed, blocked, or require a different path depending on what the user was viewing."],
  ["Operational history", "History was not just an activity feed. Users needed comments, payments, transactions, operational events, profile changes, and system activity in one place so they could understand context before making changes."],
  ["Billing and payment rules", "Payment work was not just about collecting money. Costs, adjustments, reversals, and payment actions could affect status, reporting, and downstream workflows, so the interface had to make those effects clearer."],
  ["Permission-sensitive workflows", "Permissions were not just about access. They affected what users could see, edit, reverse, approve, or delete, which made role-based behavior a core part of the interaction design."],
  ["Dense screens across breakpoints", "Responsive design was not just about making screens smaller. Dense tables, forms, filters, dialogs, and history panels still had to preserve enough context for users to work safely across enterprise screen sizes."],
];

const complexityImages = complexity.map(
  (_, index) => publicPath(`/case-study/complexity-images/ChatGPT Image Jun 2, 2026, 12_45_35 PM (${index + 1}).png`),
);

const problems: Pair[] = [
  ["Workflows felt stitched together", "Account, billing, reporting, promotions, and payment workflows were connected by business logic, but they did not always feel like parts of the same product."],
  ["Patterns behaved differently", "Tables, forms, filters, settings, actions, statuses, and confirmations changed from module to module, which made familiar tasks harder to trust."],
  ["Too much relied on memory", "Users often needed to remember internal rules before they could complete tasks confidently."],
  ["Permissions were hard to understand", "Roles and access levels were difficult to scan, compare, and maintain, even though they affected what users could safely do."],
  ["Teams kept solving the same UI problems", "Designers and engineers were rebuilding similar patterns because repeated product problems had not yet been turned into a shared system."],
  ["Small mistakes could have real impact", "Account, billing, promotions, and reporting changes affected downstream operational work, so unclear interactions created real risk."],
];

const constraints: Pair[] = [
  ["Legacy logic had to stay intact", "The redesign could not remove complexity that still served the business. The work was to make that logic easier to understand and safer to use."],
  ["Operational detail still mattered", "Users still needed profile history, payments, operational events, comments, and context before making decisions."],
  ["Many teams had to stay aligned", "Account, billing, reporting, sales, permissions, and operations all depended on shared rules and consistent patterns."],
  ["The system had to support future work", "Patterns needed to work beyond one screen or module, so new workflows could reuse the same foundation."],
];

const role = [
  "Mapped complex enterprise workflows before committing to screens.",
  "Turned requirements, rules, and feedback into clearer flows and interaction patterns.",
  "Designed account, billing, reporting, promotions, permissions, and configuration areas.",
  "Worked with product owners to clarify rules, edge cases, and operational dependencies.",
  "Worked with engineers to keep patterns feasible, maintainable, and reusable.",
  "Helped shape a Radix-based design system from repeated product problems.",
  "Prepared Jira tickets and acceptance criteria for implementation.",
  "Reviewed edge cases, empty states, validation, permissions, and errors before handoff.",
];

const outcomes: Pair[] = [
  ["Easier onboarding", "Common account actions became less dependent on memorized state-based rules, making the product easier for newer users to understand."],
  ["Fewer repeated clarifications", "Shared patterns and acceptance criteria reduced repeated clarification during handoff, while giving engineers reusable behavior rules for future modules."],
  ["More consistent delivery", "Reusable Radix-based patterns gave design and engineering a shared way to build forms, tables, dialogs, filters, history, and permissions."],
  ["Clearer high-risk decisions", "Review, validation, and confirmation moments made it easier for users to understand impact before changes affected downstream workflows."],
  ["Cleaner handoff", "Mockups, Jira tickets, and acceptance criteria made states, permissions, and implementation behavior easier to discuss with engineering."],
  ["A stronger product foundation", "Legacy workflow complexity was translated into reusable product patterns that could support future modules without restarting from scratch."],
];

const measurementSignals: Pair[] = [
  ["Workflow confidence", "Fewer moments where users had to rely on memory to understand state, permissions, or the impact of a change."],
  ["Implementation clarity", "Fewer repeated questions around expected behavior, validation, permissions, and edge cases during handoff."],
  ["Pattern reuse", "More workflows could reuse the same table, form, dialog, confirmation, and permission-state rules."],
  ["Operational risk", "High-impact actions had clearer review moments before users saved, reversed, approved, or restricted changes."],
];

const system = ["Forms", "Tables", "Filters", "Dialogs", "Dropdowns", "Tabs", "Status indicators", "Validation states", "Empty states", "Confirmation flows", "Permission-based actions", "Search/profile lookup", "History/activity", "Responsive behavior"];
const systemPatterns: Pair[] = [
  ["Table actions", "Filters, row actions, status states, and bulk behavior became more consistent across modules."],
  ["Form validation", "Required fields, errors, disabled states, and save behavior followed clearer shared rules."],
  ["Permission states", "Hidden, disabled, editable, and destructive actions were handled as reusable interaction patterns."],
  ["Confirmation flows", "High-impact changes used clearer review and confirmation moments before users committed changes."],
];
const systemProof: Pair[] = [
  ["One-off dialogs", "Shared confirmation rules"],
  ["Inconsistent disabled states", "Permission-based action logic"],
  ["Repeated table decisions", "Reusable table behavior"],
  ["Form errors handled per screen", "Shared validation patterns"],
];
const questions = ["Does this match how internal teams think?", "Are we hiding complexity or organizing it?", "Can users understand impact before saving?", "Will this pattern work elsewhere?", "Can engineering build this consistently?", "Does this reduce confusion or just look cleaner?"];

const areas = [
  {
    title: "Account Management",
    subtitle: "The key challenge was helping internal users understand whether a profile could be edited, billed, restricted, or reviewed before they took action.",
    tags: ["Adding a profile", "Updating details", "Account cost", "Payment actions", "Operational history"],
    before: "Account work was not just about editing profile details. Every change had to respect profile state, cost, payment behavior, and downstream operational rules.",
    decision: "I separated profile identity, current state, and available actions so users could understand the context before editing, billing, or operational tasks.",
    mattered: "The experience became easier to scan, with clearer profile context, safer edit moments, and more consistent patterns for recurring account tasks.",
    visual: "account",
  },
  {
    title: "Report Generator",
    subtitle: "The main design problem was reducing a large configuration surface into a sequence users could complete without losing context.",
    tags: ["Modules", "Groups", "Report types", "Payments", "Adjustments", "Review"],
    before: "Reporting was not just about choosing filters. Users had to move through modules, report types, payment logic, adjustments, reversals, and review states without getting lost.",
    decision: "I turned one dense configuration problem into a guided sequence: context, report type, criteria, and review.",
    mattered: "The generator became easier to reason through because users could make decisions in sequence instead of configuring everything from one dense screen.",
    visual: "report",
  },
  {
    title: "Promotion Builder",
    subtitle: "The risk was publishing a rule combination that applied to the wrong audience, channel, or eligibility condition.",
    tags: ["Online", "Segment-specific", "Internal only", "Auto-renew", "Audience-specific", "Upgrade only"],
    before: "Promotion setup was not just about creating discounts. Internal teams needed to understand where each promotion applied, who qualified, and which rule combinations could create mistakes.",
    decision: "I separated availability, eligibility, and discount logic so teams could review rule combinations before publishing.",
    mattered: "Internal teams had a clearer way to see what a promotion applied to, who it affected, and where mistakes could happen.",
    visual: "promotion",
  },
  {
    title: "Roles and Permissions",
    subtitle: "The goal was to make access understandable enough that teams could compare roles without reading every permission one by one.",
    tags: ["Grouped permissions", "Clear modules", "Scannable roles", "Permission comparison", "Safer editing"],
    before: "Permissions were not just a settings page. They shaped what users could see, edit, reverse, approve, or delete across the platform.",
    decision: "I organized permissions by module and action type so teams could compare roles and understand access before making changes.",
    mattered: "Permissions became easier to scan, maintain, and discuss across product, design, and engineering.",
    visual: "permissions",
  },
] as const;

function Pill({ children }: { children: React.ReactNode }) {
  return <span className={styles.pill}>{children}</span>;
}

function Section({ id, eyebrow, title, children, tone = "plain" }: { id: string; eyebrow: string; title: string; children: React.ReactNode; tone?: "plain" | "soft" }) {
  return (
    <section className={`${styles.section} ${tone === "soft" ? styles.sectionSoft : ""}`} id={id}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}>{eyebrow}</div>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ComplexityVisual({ index }: { index: number }) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={styles.complexityImage}
      height="1086"
      loading="lazy"
      src={complexityImages[index]}
      unoptimized
      width="1448"
    />
  );
}

function CardGrid({ items, visuals = false }: { items: Pair[]; visuals?: boolean }) {
  return (
    <div className={styles.cardGrid}>
      {items.map(([title, body], index) => (
        <article className={`${styles.textCard} ${visuals ? styles.complexityCard : ""}`} key={title}>
          <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{body}</p>
          {visuals ? <ComplexityVisual index={index} /> : null}
        </article>
      ))}
    </div>
  );
}

function Checklist({ items }: { items: readonly string[] }) {
  return (
    <div className={styles.checklist}>
      {items.map((item) => (
        <div className={styles.checkItem} key={item}>
          <span />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

function AccountVisual() {
  return (
    <div className={styles.abstractPanel}>
      <div className={styles.visualHeader}><span>Profile context</span><b>Active account</b></div>
      <div className={styles.accountVisual}>
        <div className={styles.profileCard}><i>AM</i><strong>Profile state</strong><small>Identity, billing, and operational history</small></div>
        <div className={styles.actionStack}>
          {["Update details", "Review cost", "Payment action", "View history"].map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </div>
  );
}

function ReportVisual() {
  return (
    <div className={styles.abstractPanel}>
      <div className={styles.visualHeader}><span>Report generator</span><b>Guided flow</b></div>
      <div className={styles.flowVisual}>
        {["Context", "Report type", "Criteria", "Review"].map((item, index) => (
          <div key={item}><i>{String(index + 1).padStart(2, "0")}</i><strong>{item}</strong><span /></div>
        ))}
      </div>
    </div>
  );
}

function PromotionVisual() {
  return (
    <div className={styles.abstractPanel}>
      <div className={styles.visualHeader}><span>Promotion builder</span><b>Rule review</b></div>
      <div className={styles.rulesVisual}>
        {["Availability", "Eligibility", "Discount logic"].map((title, index) => (
          <div key={title}><strong>{title}</strong><span>{index === 0 ? "Channel + segment" : index === 1 ? "Audience + status" : "Value + renewal"}</span><em>Rule group {index + 1}</em></div>
        ))}
      </div>
    </div>
  );
}

function PermissionVisual() {
  return (
    <div className={styles.abstractPanel}>
      <div className={styles.visualHeader}><span>Roles and permissions</span><b>Access matrix</b></div>
      <div className={styles.matrix}>
        {["Module", "View", "Edit", "Approve", "Delete", "Accounts", "Reports", "Promotions", "Billing"].map((item, index) => (
          <span className={index > 4 ? styles.matrixLabel : ""} key={`${item}-${index}`}>{item}</span>
        ))}
        {Array.from({ length: 16 }, (_, index) => <i className={index % 4 === 3 ? styles.matrixOff : ""} key={index} />)}
      </div>
    </div>
  );
}

function AreaVisual({ visual }: { visual: (typeof areas)[number]["visual"] }) {
  if (visual === "account") return <AccountVisual />;
  if (visual === "report") return <ReportVisual />;
  if (visual === "promotion") return <PromotionVisual />;
  return <PermissionVisual />;
}

function AreaCard({ area, index }: { area: (typeof areas)[number]; index: number }) {
  return (
    <article className={styles.areaCard}>
      <div className={styles.areaIntro}>
        <span className={styles.areaNumber}>{String(index + 1).padStart(2, "0")}</span>
        <h3>{area.title}</h3>
        <p>{area.subtitle}</p>
        <div className={styles.pills}>{area.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}</div>
      </div>
      <div className={styles.areaDecisions}>
        {[["Before", area.before], ["Design decision", area.decision], ["Why it mattered", area.mattered]].map(([title, body]) => (
          <div key={title}><strong>{title}</strong><p>{body}</p></div>
        ))}
      </div>
      <AreaVisual visual={area.visual} />
    </article>
  );
}

export default function InternalPlatformCaseStudy() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero} id="top">
          <ShimmerDotsBackground className={styles.shimmerCanvas} />
          <div className={styles.container}>
            <div className={styles.pills}>
              {["Enterprise product design", "Legacy software redesign", "Design systems", "NDA-safe case study"].map((tag) => <Pill key={tag}>{tag}</Pill>)}
            </div>
            <h1>Redesigning a legacy internal platform into clearer workflows and reusable product patterns.</h1>
            <p className={styles.heroSubtitle}>A year-long redesign of a complex internal system used to manage account, billing, reporting, promotions, permissions, and core operational workflows.</p>
            <div className={styles.heroGrid}>
              <div className={styles.impactCard}>
                <span className={styles.eyebrow}>Impact at a glance</span>
                <ul>
                  {impactHighlights.map(([title, body]) => (
                    <li key={title}>
                      <span aria-hidden="true">✓</span>
                      <div>
                        <strong>{title}</strong>
                        <p>{body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.metaCard}>
                {[["Duration", "Over 1 year"], ["Worked with", "Product owners, designers, engineers, stakeholders"], ["Scope", "Account, billing, sales, payment, reporting, promotions, permissions, configuration"]].map(([title, body]) => <div key={title}><span>{title}</span><strong>{body}</strong></div>)}
              </div>
            </div>
            <div className={styles.heroImageWrap}>
              <Image
                alt=""
                aria-hidden="true"
                className={styles.heroImage}
                height="941"
                priority
                src={publicPath("/case-study/e45292be-aa4e-478e-9f28-0873f2cad328.png")}
                unoptimized
                width="1672"
              />
            </div>
          </div>
        </section>

        <CaseStudyAnchorNav className={styles.anchorNav} containerClassName={styles.container} items={sectionNav} />

        <Section id="overview" eyebrow="Overview" title="This was not just a UI refresh.">
          <div className={styles.prose}>
            <p>The client&apos;s internal operations teams relied on a large platform for account, billing, sales, payment, reporting, promotions, permissions, and configuration.</p>
            <p>Years of additions had created inconsistent patterns, duplicated behavior, unclear terminology, and dense screens that only experienced users could navigate confidently.</p>
            <p>Over more than a year, I worked with product, design, engineering, and stakeholders to turn that complexity into clearer workflows and reusable product patterns.</p>
          </div>
        </Section>

        <Section id="problem" eyebrow="The problem" title="The platform had grown around business rules, not around how people worked." tone="soft">
          <p className={styles.lede}>Internal users could get work done, but too much depended on training, memory, and knowing how the system had evolved over time.</p>
          <CardGrid items={problems} />
          <div className={`${styles.problemSubsection} ${styles.complexitySubsection}`} id="complexity">
            <div className={styles.eyebrow}>Complexity</div>
            <h3>The hidden complexity behind simple tasks.</h3>
            <p className={styles.lede}>Many tasks looked simple from the outside, but the right action depended on profile state, permissions, billing conditions, history, and downstream impact.</p>
            <CardGrid items={complexity} visuals />
          </div>
          <div className={styles.problemSubsection} id="constraints">
            <div className={styles.eyebrow}>Constraints</div>
            <h3>What the redesign had to respect.</h3>
            <CardGrid items={constraints} />
          </div>
        </Section>

        <Section id="role" eyebrow="My role" title="I worked across flows, screens, systems, and handoff.">
          <p className={styles.lede}>My role was to turn ambiguous legacy logic into workflows, patterns, and implementation-ready decisions that product, design, and engineering could align around.</p>
          <Checklist items={role} />
        </Section>

        <Section id="solution" eyebrow="Solution" title="I redesigned the areas where complexity created the most risk." tone="soft">
          <p className={styles.lede}>Each area followed the same logic: understand the legacy rules, map the edge cases, simplify the decisions, and turn repeated problems into reusable product patterns.</p>
          <div className={styles.areaGrid}>{areas.map((area, index) => <AreaCard area={area} index={index} key={area.title} />)}</div>
        </Section>

        <Section id="design-system" eyebrow="Design system" title="The design system came from real product problems.">
          <div className={styles.systemIntro}>
            <div className={styles.prose}>
              <p>The system was not created as a separate UI exercise. It came from repeated workflow problems across forms, tables, dialogs, filters, history, permissions, and validation states.</p>
              <p>A major part of the project was helping shape a custom Radix-based system and aligning patterns with engineering implementation.</p>
            </div>
            <div className={styles.patternPanel}>
              <h3>Reusable patterns</h3>
              <div className={styles.pills}>{system.map((item) => <Pill key={item}>{item}</Pill>)}</div>
            </div>
          </div>
          <div className={styles.ruleGrid}>
            {systemPatterns.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <div className={styles.rulesPanel}>
            <div className={styles.rulesHeading}>
              <span>From repeated edge cases to reusable rules</span>
              <h3>Instead of treating confirmations, permission states, validation, and table behavior as separate UI decisions, we turned them into shared product rules that could be reused across modules.</h3>
            </div>
            <div className={styles.proofCard}>
              <div className={styles.proofHeader}><span>Before</span><span>After</span></div>
              {systemProof.map(([before, after]) => (
                <div className={styles.proofRow} key={before}><span>{before}</span><strong>{after}</strong></div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="outcomes" eyebrow="Outcomes" title="A complex internal workflow became easier to understand, safer to operate, and more consistent across edge cases." tone="soft">
          <CardGrid items={outcomes} />
        </Section>

        <Section id="measurement" eyebrow="How we measured progress" title="Success was visible through clearer workflows, reusable patterns, and fewer ambiguous implementation decisions.">
          <CardGrid items={measurementSignals} />
        </Section>

        <Section id="judgment" eyebrow="Design judgment" title="The hardest part was deciding what to simplify and what to preserve." tone="soft">
          <Checklist items={questions} />
        </Section>

        <Section id="takeaway" eyebrow="Takeaway" title="Turning complex systems into clearer decisions teams can build from.">
          <p className={styles.takeaway}>This project reflects the product design work I do best: turning complex systems into clearer workflows, reusable patterns, and decisions teams can build from.</p>
        </Section>

        <section className={styles.note}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>Case study note</span>
            <h2>NDA-safe, but still specific.</h2>
            <p>Details have been generalized for confidentiality. Visuals are recreated and sanitized fragments based on the work, showing workflow complexity, interaction patterns, and design decisions without exposing protected product content.</p>
          </div>
        </section>
      </main>
      <SiteContactCta className={styles.contactCta} />
      <SiteFooter />
    </>
  );
}
