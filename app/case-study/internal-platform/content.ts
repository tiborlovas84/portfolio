export type Pair = readonly [string, string];

export type SolutionVisual = "account" | "report" | "promotion" | "permissions";

export type SolutionArea = {
  readonly title: string;
  readonly subtitle: string;
  readonly tags: readonly string[];
  readonly before: string;
  readonly decision: string;
  readonly mattered: string;
  readonly visual: SolutionVisual;
};

export const heroTags = [
  "Enterprise product design",
  "Legacy software redesign",
  "Design systems",
  "NDA-safe case study",
] as const;

export const heroImage = {
  alt: "",
  height: 941,
  path: "/hero.png",
  width: 1672,
} as const;

export const sectionNav = [
  ["Overview", "overview"],
  ["Problem", "problem"],
  ["Role", "role"],
  ["Solution", "solution"],
  ["Design system", "design-system"],
  ["Outcomes", "outcomes"],
] as const;

export const impactHighlights: Pair[] = [
  ["Clearer high-risk workflows", "Complex flows were simplified with clearer states, guidance, and safeguards."],
  ["Fewer repeated handoff clarifications", "Roles, responsibilities, and information needs were made explicit."],
  ["Reusable Radix-based patterns", "Consistent, accessible components scaled across the product."],
  ["Stronger foundation for future modules", "Design system patterns enabled faster, more consistent delivery."],
];

export const projectMeta: Pair[] = [
  ["Duration", "Over 1 year"],
  ["Worked with", "Product owners, designers, engineers, stakeholders"],
  ["Scope", "Account, billing, sales, payment, reporting, promotions, permissions, configuration"],
];

export const overviewCopy = [
  "The client's internal operations teams relied on a large platform for account, billing, sales, payment, reporting, promotions, permissions, and configuration.",
  "Years of additions had created inconsistent patterns, duplicated behavior, unclear terminology, and dense screens that only experienced users could navigate confidently.",
  "Over more than a year, I worked with product, design, engineering, and stakeholders to turn that complexity into clearer workflows and reusable product patterns.",
] as const;

export const problems: Pair[] = [
  ["Workflows felt stitched together", "Account, billing, reporting, promotions, and payment workflows were connected by business logic, but they did not always feel like parts of the same product."],
  ["Patterns behaved differently", "Tables, forms, filters, settings, actions, statuses, and confirmations changed from module to module, which made familiar tasks harder to trust."],
  ["Too much relied on memory", "Users often needed to remember internal rules before they could complete tasks confidently."],
  ["Permissions were hard to understand", "Roles and access levels were difficult to scan, compare, and maintain, even though they affected what users could safely do."],
  ["Teams kept solving the same UI problems", "Designers and engineers were rebuilding similar patterns because repeated product problems had not yet been turned into a shared system."],
  ["Small mistakes could have real impact", "Account, billing, promotions, and reporting changes affected downstream operational work, so unclear interactions created real risk."],
];

export const complexity: Pair[] = [
  ["Profile lookup across states", "Search was not just about finding a profile. It had to reveal whether the user was looking at a new, active, related, or inactive entry, because each state changed what actions were available next."],
  ["State-dependent actions", "Actions were not fixed across the product. They had to change based on the current profile state, because the same task could be allowed, blocked, or require a different path depending on what the user was viewing."],
  ["Operational history", "History was not just an activity feed. Users needed comments, payments, transactions, operational events, profile changes, and system activity in one place so they could understand context before making changes."],
  ["Billing and payment rules", "Payment work was not just about collecting money. Costs, adjustments, reversals, and payment actions could affect status, reporting, and downstream workflows, so the interface had to make those effects clearer."],
  ["Permission-sensitive workflows", "Permissions were not just about access. They affected what users could see, edit, reverse, approve, or delete, which made role-based behavior a core part of the interaction design."],
  ["Dense screens across breakpoints", "Responsive design was not just about making screens smaller. Dense tables, forms, filters, dialogs, and history panels still had to preserve enough context for users to work safely across enterprise screen sizes."],
];

export const complexityImagePaths = [
  "/case-study/complexity-images/ChatGPT Image Jun 5, 2026, 09_45_32 PM (1).png",
  "/case-study/complexity-images/ChatGPT Image Jun 5, 2026, 09_45_32 PM (2).png",
  "/case-study/complexity-images/ChatGPT Image Jun 5, 2026, 09_45_32 PM (3).png",
  "/case-study/complexity-images/ChatGPT Image Jun 5, 2026, 09_45_32 PM (4).png",
  "/case-study/complexity-images/ChatGPT Image Jun 5, 2026, 09_45_32 PM (5).png",
  "/case-study/complexity-images/ChatGPT Image Jun 5, 2026, 09_45_32 PM (6).png",
] as const;

export const constraints: Pair[] = [
  ["Legacy logic had to stay intact", "The redesign could not remove complexity that still served the business. The work was to make that logic easier to understand and safer to use."],
  ["Operational detail still mattered", "Users still needed profile history, payments, operational events, comments, and context before making decisions."],
  ["Many teams had to stay aligned", "Account, billing, reporting, sales, permissions, and operations all depended on shared rules and consistent patterns."],
  ["The system had to support future work", "Patterns needed to work beyond one screen or module, so new workflows could reuse the same foundation."],
];

export const role = [
  "Mapped complex enterprise workflows before committing to screens.",
  "Turned requirements, rules, and feedback into clearer flows and interaction patterns.",
  "Designed account, billing, reporting, promotions, permissions, and configuration areas.",
  "Worked with product owners to clarify rules, edge cases, and operational dependencies.",
  "Worked with engineers to keep patterns feasible, maintainable, and reusable.",
  "Helped shape a Radix-based design system from repeated product problems.",
  "Prepared Jira tickets and acceptance criteria for implementation.",
  "Reviewed edge cases, empty states, validation, permissions, and errors before handoff.",
] as const;

export const areas: readonly SolutionArea[] = [
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

export const system = [
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

export const systemPatterns: Pair[] = [
  ["Table actions", "Filters, row actions, status states, and bulk behavior became more consistent across modules."],
  ["Form validation", "Required fields, errors, disabled states, and save behavior followed clearer shared rules."],
  ["Permission states", "Hidden, disabled, editable, and destructive actions were handled as reusable interaction patterns."],
  ["Confirmation flows", "High-impact changes used clearer review and confirmation moments before users committed changes."],
];

export const systemProof: Pair[] = [
  ["One-off dialogs", "Shared confirmation rules"],
  ["Inconsistent disabled states", "Permission-based action logic"],
  ["Repeated table decisions", "Reusable table behavior"],
  ["Form errors handled per screen", "Shared validation patterns"],
];

export const outcomes: Pair[] = [
  ["Easier onboarding", "Common account actions became less dependent on memorized state-based rules, making the product easier for newer users to understand."],
  ["Fewer repeated clarifications", "Shared patterns and acceptance criteria reduced repeated clarification during handoff, while giving engineers reusable behavior rules for future modules."],
  ["More consistent delivery", "Reusable Radix-based patterns gave design and engineering a shared way to build forms, tables, dialogs, filters, history, and permissions."],
  ["Clearer high-risk decisions", "Review, validation, and confirmation moments made it easier for users to understand impact before changes affected downstream workflows."],
  ["Cleaner handoff", "Mockups, Jira tickets, and acceptance criteria made states, permissions, and implementation behavior easier to discuss with engineering."],
  ["A stronger product foundation", "Legacy workflow complexity was translated into reusable product patterns that could support future modules without restarting from scratch."],
];

export const measurementSignals: Pair[] = [
  ["Workflow confidence", "Fewer moments where users had to rely on memory to understand state, permissions, or the impact of a change."],
  ["Implementation clarity", "Fewer repeated questions around expected behavior, validation, permissions, and edge cases during handoff."],
  ["Pattern reuse", "More workflows could reuse the same table, form, dialog, confirmation, and permission-state rules."],
  ["Operational risk", "High-impact actions had clearer review moments before users saved, reversed, approved, or restricted changes."],
];

export const judgmentQuestions = [
  "Does this match how internal teams think?",
  "Are we hiding complexity or organizing it?",
  "Can users understand impact before saving?",
  "Will this pattern work elsewhere?",
  "Can engineering build this consistently?",
  "Does this reduce confusion or just look cleaner?",
] as const;
