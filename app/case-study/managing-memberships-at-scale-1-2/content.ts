export type Pair = readonly [string, string];

export type TimelineItem = {
  readonly title: string;
  readonly body: readonly string[];
  readonly leftTitle: string;
  readonly leftItems: readonly string[];
  readonly rightTitle: string;
  readonly rightBody: string;
};

export const sectionNav = [
  { href: "#overview", label: "Overview" },
  { href: "#challenge", label: "Challenge" },
  { href: "#constraints", label: "Constraints" },
  { href: "#strategy", label: "Strategy" },
  { href: "#systems", label: "Systems" },
  { href: "#workflow", label: "Workflow" },
  { href: "#outcome", label: "Outcome" },
] as const;

export const heroTags = [
  "Roadside Assistance Company",
  "Internal operations platform",
  "AI-assisted product design",
  "Design systems",
] as const;

export const projectMeta: Pair[] = [
  ["Client", "Roadside Assistance Company"],
  ["Industry", "Automotive and membership operations"],
  ["Role", "Product Design, UX Strategy, Design Systems, Frontend Collaboration, AI Workflow Integration, QA"],
];

export const overview = [
  "A growing digital platform needed to redesign and scale a set of internal operational workflows across web and mobile. The existing system had fragmented flows, inconsistent UI patterns, and increasing friction between product, design, and engineering teams.",
  "The goal was not just to redesign screens. It was to create a production-ready system that could support dense operational data, evolving business rules, and faster implementation cycles.",
  "My role combined product design, system thinking, frontend collaboration, AI-assisted workflows, and production validation.",
] as const;

export const challenge = [
  "Operators relied on fragmented workflows spread across legacy tooling, manual coordination, and disconnected communication channels.",
  "This reduced visibility into active operations, delayed task assignment, and increased cognitive load during time-sensitive workflows.",
] as const;

export const challengeProblems = [
  "Operational flows evolved faster than the design system.",
  "Engineers repeatedly rebuilt similar UI patterns.",
  "Product decisions lacked visibility across user feedback, edge cases, and implementation constraints.",
] as const;

export const constraints: Pair[] = [
  ["Rollout Stability", "Existing operational workflows could not be disrupted during rollout."],
  ["Legacy Complexity", "Multiple internal teams relied on inconsistent legacy patterns."],
  ["Data Variability", "Data structures and states varied across tools, teams, and regions."],
  ["Cognitive Load", "Interfaces needed to support high-density operational data without increasing load."],
  ["Business Flexibility", "The system had to remain flexible enough to support evolving business rules and promotional logic."],
  ["Delivery Constraints", "Features were scoped against engineering bandwidth while documentation and acceptance criteria stayed synchronized across design and development."],
];

export const strategy = [
  "Instead of treating AI as a screen generator, I integrated it throughout the workflow as a systems and acceleration layer.",
  "AI helped reduce repetitive work, surface edge cases faster, and speed up exploration, while human judgment remained critical for product thinking, prioritization, and production quality.",
] as const;

export const systemStrategy = [
  "Identifying repetitive coordination patterns.",
  "Simplifying high-frequency operator actions.",
  "Improving visibility into active states and dependencies.",
  "Designing flexible systems that could evolve without redesigning core workflows.",
  "Aligning interface behavior with implementation constraints defined through Jira acceptance criteria.",
] as const;

export const featureSystems: TimelineItem[] = [
  {
    title: "Flexible Reporting Infrastructure",
    body: [
      "Designed a modular reporting system capable of adapting to different operational contexts without requiring custom report creation for each workflow.",
    ],
    leftTitle: "System Capabilities",
    leftItems: [
      "Dynamic filtering.",
      "Configurable data visibility.",
      "Export-ready formatting.",
      "Reusable reporting structures.",
      "Scalable criteria combinations.",
    ],
    rightTitle: "Design Goal",
    rightBody:
      "Reduce dependency on manual reporting workflows while increasing operational visibility across teams.",
  },
  {
    title: "Promotion Configuration System",
    body: [
      "Designed a flexible promotion-building workflow capable of supporting complex business rules, overlapping criteria, and evolving promotional structures without increasing interface complexity.",
    ],
    leftTitle: "System Capabilities",
    leftItems: [
      "Promotions across multiple conditions.",
      "Configurable rule combinations.",
      "Exception and edge-case management.",
      "Reusable promotional structures.",
    ],
    rightTitle: "Design Goal",
    rightBody:
      "Balance configurability with clarity so internal teams could manage complex business logic without creating operational errors.",
  },
] as const;

export const workflow: TimelineItem[] = [
  {
    title: "Research & Pattern Analysis",
    body: [
      "I used AI to synthesize large volumes of stakeholder notes, support tickets, operational feedback, usability findings, and internal product documentation.",
      "This helped identify recurring friction points across task assignment, reporting, configuration, and account-level workflows.",
    ],
    leftTitle: "AI Contribution",
    leftItems: [
      "Clustered recurring UX complaints.",
      "Summarized qualitative feedback.",
      "Identified missing states and flow inconsistencies.",
      "Generated alternative workflow and IA structures.",
    ],
    rightTitle: "Human Layer",
    rightBody:
      "The outputs still required validation and prioritization. Product relevance, business tradeoffs, and UX clarity required human decisions.",
  },
  {
    title: "Rapid Exploration",
    body: [
      "Instead of manually creating every direction from scratch, AI accelerated early exploration across operator flows, navigation structures, UX copy, component combinations, and edge-case scenarios.",
    ],
    leftTitle: "AI Contribution",
    leftItems: [
      "Generated alternative user flows.",
      "Tested navigation structures.",
      "Rewrote UX copy variations.",
      "Prototyped edge-case scenarios.",
    ],
    rightTitle: "Result",
    rightBody: "The team reviewed broader solution spaces in days instead of weeks.",
  },
  {
    title: "Design System Integration",
    body: [
      "The project required scalable UI patterns across multiple operational states, permissions, data densities, and configuration rules.",
    ],
    leftTitle: "AI Contribution",
    leftItems: [
      "Mapped inconsistent components.",
      "Detected duplicate variants.",
      "Suggested token structures.",
      "Generated documentation drafts.",
    ],
    rightTitle: "Human Layer",
    rightBody:
      "I refined hierarchy, interaction behavior, responsive logic, accessibility decisions, and component scalability.",
  },
  {
    title: "Frontend Collaboration",
    body: [
      "One of the biggest workflow improvements came from reducing the gap between design intent and implementation detail.",
    ],
    leftTitle: "AI Contribution",
    leftItems: [
      "Generated frontend scaffolding.",
      "Validated responsive behavior.",
      "Checked implementation consistency.",
      "Compared production UI against specs and acceptance criteria.",
    ],
    rightTitle: "Review Shift",
    rightBody:
      "From does this match Figma to does this satisfy the workflow, edge cases, and acceptance criteria?",
  },
  {
    title: "QA & Production Validation",
    body: [
      "As AI-assisted outputs became more common, quality control became increasingly important. A major part of my role became acting as a constraint and validation layer.",
    ],
    leftTitle: "AI Contribution",
    leftItems: [
      "Identified missing edge cases.",
      "Stress-tested flows.",
      "Simulated inconsistent states.",
      "Audited design-system usage.",
    ],
    rightTitle: "Lesson",
    rightBody:
      "AI increases output speed. Systems thinking, acceptance criteria, and production QA determine output quality.",
  },
] as const;

export const outcomes = [
  "Faster design iteration cycles.",
  "Implementation-ready Jira acceptance criteria.",
  "More scalable operational component architecture.",
] as const;
