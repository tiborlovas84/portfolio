export const genomeIntro = {
  title: "Genome Design System: Genetic Information Behind This Portfolio",
  subtitle:
    "A reusable editorial design system for turning product work into clear, structured, portfolio-ready stories.",
  intro:
    "Genome controls the foundations, components, and content rules behind tiborlovas.com. It keeps product design work, case studies, systems thinking, and AI-assisted product practice coherent across the site.",
};

export const genomeTypography = {
  weights: {
    display: "font-bold",
    heading: "font-semibold",
    body: "font-medium",
    label: "font-semibold",
  },
  classes: {
    display: "text-1 font-bold",
    heroSupport: "text-4 font-medium",
    sectionTitle: "text-3 font-semibold tracking-[-0.015em]",
    sectionIntro: "text-6 font-medium text-muted-foreground",
    cardTitle: "text-4 font-semibold",
    leadTitle: "text-5 font-semibold",
    body: "text-7 font-medium text-muted-foreground",
    bodyLarge: "text-6 font-medium",
    captionStrong: "text-8 font-semibold",
    captionMuted: "text-8 font-medium text-muted-foreground",
    meta: "text-9 font-semibold uppercase text-muted-foreground",
  },
};

export const genomeTypeScale = [
  {
    label: "Text 1",
    className: genomeTypography.classes.display,
    value: "Design",
    usage: "Primary hero words and major portfolio identity moments.",
  },
  {
    label: "Text 2",
    className: "text-2 font-bold tracking-[-0.015em]",
    value: "Portfolio",
    usage: "Large section openers and page-level narrative statements.",
  },
  {
    label: "Text 3",
    className: genomeTypography.classes.sectionTitle,
    value: "Innovation",
    usage: "Section titles for foundations, principles, and case-study chapters.",
  },
  {
    label: "Text 4",
    className: genomeTypography.classes.cardTitle,
    value: "Product",
    usage: "Card titles, hero support text, and compact editorial claims.",
  },
  {
    label: "Text 5",
    className: genomeTypography.classes.leadTitle,
    value: "Team",
    usage: "Lead statements, quote emphasis, and comparison summaries.",
  },
  {
    label: "Text 6",
    className: "text-6 font-semibold",
    value: "System",
    usage: "Intro copy, important explanations, and high-signal supporting text.",
  },
  {
    label: "Text 7",
    className: "text-7 font-medium",
    value: "Strategic design language for portfolio-ready product stories.",
    usage: "Default body copy for system explanations and project detail.",
  },
  {
    label: "Text 8",
    className: "text-8 font-medium",
    value: "Concise notes, labels, metadata, and supporting detail.",
    usage: "Captions, token descriptions, card metadata, and secondary notes.",
  },
  {
    label: "Text 9",
    className: genomeTypography.classes.meta,
    value: "Foundation label",
    usage: "Eyebrows, sequence numbers, compact categories, and system labels.",
  },
];

export const genomeColorTokens = [
  {
    name: "Surface",
    variable: "--background",
    value: "1 0 0",
    role: "White page surface for the entire editorial system.",
  },
  {
    name: "Ink",
    variable: "--foreground",
    value: "0.177192 0.111213 275.163268",
    role: "Dark text used for titles, body copy, labels, and product language.",
  },
  {
    name: "Accent",
    variable: "--accent",
    value: "0.500137 0.29406 284.071624 / #6200ff",
    role: "Genome purple, used sparingly for identity moments and primary action.",
  },
  {
    name: "Accent foreground",
    variable: "--accent-foreground",
    value: "1 0 0",
    role: "White text on accent buttons and high-contrast accent surfaces.",
  },
  {
    name: "Soft surface",
    variable: "--surface-soft",
    value: "0.969 0.016 293.756",
    role: "The very light purple source surface used only when whitespace is not enough.",
  },
];

export const genomeSpacingScale = [
  {
    name: "Micro",
    className: "gap-micro",
    value: "0.75rem",
    usage: "Tight relationships between compact controls, chips, and small grouped items.",
  },
  {
    name: "Tight",
    className: "gap-tight / mt-tight",
    value: "1rem",
    usage: "Close relationships inside specimens, labels, and metadata groups.",
  },
  {
    name: "Compact",
    className: "p-compact / gap-compact / mt-compact",
    value: "1.25rem",
    usage: "Dense specimens, accordion rows, chips, and small contained modules.",
  },
  {
    name: "Content",
    className: "p-content / gap-content / mt-content",
    value: "1.5rem",
    usage: "Readable spacing for lists, editorial rows, and supporting text.",
  },
  {
    name: "Card",
    className: "p-card / gap-card / mt-card",
    value: "2rem",
    usage: "Default card padding for project previews, component examples, and editorial modules.",
  },
  {
    name: "Loose",
    className: "md:p-loose / gap-loose / mt-loose",
    value: "2.5rem",
    usage: "Desktop breathing room for important cards and foundation specimens.",
  },
  {
    name: "Hero",
    className: "pb-hero / mt-hero / pt-hero-lg",
    value: "4rem / 5rem",
    usage: "Large hero rhythm and major narrative transitions within the first viewport.",
  },
  {
    name: "Section rhythm",
    className: "py-section",
    value: "clamp(5rem, 10vw, 9rem)",
    usage: "Major vertical rhythm between homepage, Genome, and case-study sections.",
  },
];

export const genomeRadiusTokens = [
  {
    name: "Small",
    value: "calc(var(--radius) - 12px)",
    className: "rounded-sm",
    usage: "Compact controls, tight metadata chips, and small contained UI.",
    sizeClass: "h-16 rounded-sm",
  },
  {
    name: "Medium",
    value: "calc(var(--radius) - 8px)",
    className: "rounded-md",
    usage: "Subtle corners for dense interface details where shape should stay quiet.",
    sizeClass: "h-20 rounded-md",
  },
  {
    name: "Large",
    value: "var(--radius)",
    className: "rounded-lg",
    usage: "Default token radius inherited from the shared shadcn foundation.",
    sizeClass: "h-24 rounded-lg",
  },
  {
    name: "Card",
    value: "1.5rem",
    className: "rounded-[1.5rem]",
    usage: "Contained modules, specimen boxes, and reusable system cards.",
    sizeClass: "h-28 rounded-[1.5rem]",
  },
  {
    name: "Section",
    value: "2rem",
    className: "rounded-[2rem]",
    usage: "Large editorial surfaces and primary portfolio section modules.",
    sizeClass: "h-32 rounded-[2rem]",
  },
  {
    name: "Pill",
    value: "999px",
    className: "rounded-pill",
    usage: "Navigation states, action buttons, badges, and capability labels.",
    sizeClass: "h-16 rounded-pill",
  },
];

export const genomeContainerTokens = [
  {
    name: "Container max",
    className: "container",
    value: "1280px",
    usage: "Maximum width for the main editorial reading frame.",
  },
  {
    name: "Gutter / default",
    className: "container",
    value: "1.25rem",
    usage: "Base page gutter before responsive breakpoints increase the canvas margin.",
  },
  {
    name: "Gutter / sm",
    className: "sm:container",
    value: "1.5rem",
    usage: "Small-screen page gutter.",
  },
  {
    name: "Gutter / lg",
    className: "lg:container",
    value: "2rem",
    usage: "Large-screen page gutter.",
  },
  {
    name: "Gutter / xl",
    className: "xl:container",
    value: "2.5rem",
    usage: "Wide-screen page gutter for the broad editorial canvas.",
  },
];

export const genomeShadowTokens = [
  {
    name: "Editorial shadow",
    className: "shadow-editorial",
    variable: "--shadow-editorial",
    value:
      "0 20px 60px -44px color-mix(in oklch, oklch(var(--foreground)) 35%, transparent)",
    usage:
      "Default elevation for white cards, strips, chips, and grouped modules. Do not combine shadows with soft background surfaces.",
  },
];

export const genomeMotionTokens = [
  {
    name: "Micro fade",
    className: "duration-150 ease-out",
    value: "150ms",
    usage: "Tiny opacity shifts for dots, icons, and supporting affordances.",
  },
  {
    name: "Interactive state",
    className: "duration-200 ease-out",
    value: "200ms",
    usage: "Default hover, focus, and active navigation feedback.",
  },
  {
    name: "Component reveal",
    className: "duration-300 ease-out",
    value: "300ms",
    usage: "Accordion panels, button padding, and contained UI transitions.",
  },
  {
    name: "Page atmosphere",
    className: "duration-700 ease-out",
    value: "700ms",
    usage: "Large background-color transitions that should feel calm, not decorative.",
  },
  {
    name: "Sequential delay",
    className: "transitionDelay",
    value: "45ms steps",
    usage: "Small cascades for mobile navigation and grouped menu reveals.",
  },
];

export const genomeProblems = [
  "Portfolio pages can become inconsistent when every story is designed from scratch.",
  "Case studies need repeatable structure without making the work feel templated.",
  "NDA-safe visuals need clear abstraction rules before production starts.",
  "AI-assisted production needs guardrails for tone, structure, and evidence.",
  "Design work should feel coherent across pages, even when projects differ in domain and depth.",
];

export const genomePrinciples = [
  {
    title: "Clarity before decoration",
    description:
      "Every visual decision should help the reader understand the work faster. Decoration is only useful when it clarifies hierarchy, emphasis, or rhythm.",
  },
  {
    title: "Structure before styling",
    description:
      "Case studies start with narrative architecture: context, complexity, decisions, system moves, signals, and reflection. Styling supports that structure.",
  },
  {
    title: "Reuse before reinvention",
    description:
      "Repeated sections become reusable structures so new portfolio pages can scale without drifting into one-off layouts.",
  },
  {
    title: "Product stories need visual systems",
    description:
      "Screens alone rarely explain product judgment. Genome makes room for abstract diagrams, decision models, and NDA-safe evidence.",
  },
];

export const genomeFoundations = [
  {
    title: "Typography",
    specimen: "Large editorial hierarchy with Poppins as the working voice.",
    detail: "Display type carries the argument. Body copy stays direct, readable, and calm.",
  },
  {
    title: "Color",
    specimen: "White, dark ink, one accent, and one optional soft surface.",
    detail:
      "Genome uses dark ink for text, white for the page, purple for identity, and a soft surface only where separation needs more than whitespace, not borders.",
  },
  {
    title: "Spacing",
    specimen: "Generous sections, compact specimens, and enough air for complex ideas.",
    detail: "Spacing separates narrative moves so case studies can be scanned without feeling sparse.",
    status: "in progress",
  },
  {
    title: "Shadow",
    specimen: "Soft elevation replaces separator lines and card outlines.",
    detail:
      "Genome uses one quiet editorial shadow to separate modules without adding visible rules.",
    status: "in progress",
  },
  {
    title: "Radius",
    specimen: "Pill actions, soft system cards, and rounded portfolio modules.",
    detail: "Shape language makes the site feel approachable while keeping the editorial frame precise.",
    status: "in progress",
  },
  {
    title: "Layout",
    specimen: "Container-led grids with asymmetry reserved for emphasis.",
    detail: "Layouts prioritize reading order, repeatable structure, and responsive behavior.",
    status: "in progress",
  },
  {
    title: "Motion",
    specimen: "Quiet transitions for state, focus, and navigation.",
    detail: "Motion should confirm interaction and reduce friction, not perform for its own sake.",
    status: "in progress",
  },
];

export const genomeComponents = [
  {
    title: "Site Header",
    description: "Global portfolio navigation with source-inspired pill states, active section styling, and accessible focus behavior.",
    status: "in progress",
  },
  {
    title: "Page Navigation",
    description: "Sticky top navigation for moving between major editorial sections on a page.",
    status: "in progress",
  },
  {
    title: "Foundations Navbar",
    description: "Sticky side navigation for jumping between foundation specimens inside Genome.",
    status: "in progress",
  },
  {
    title: "Site Footer",
    description: "A quiet global footer for secondary navigation, copyright, and portfolio utility links.",
    status: "in progress",
  },
  {
    title: "Section Wrapper",
    description: "The reusable page rhythm, container, eyebrow, title, and intro structure behind editorial sections.",
    status: "in progress",
  },
  {
    title: "Button",
    description: "Pill-shaped actions for contact, project navigation, and case-study reading paths.",
    status: "in progress",
  },
  {
    title: "Card",
    description: "Contained modules for projects, quotes, comparisons, and system specimens.",
    status: "in progress",
  },
  {
    title: "Badge",
    description: "Metadata, status flags, and large pill labels for capability groups.",
    status: "in progress",
  },
  {
    title: "Section Header",
    description: "Eyebrow, title, and optional intro for orienting the reader before each narrative move.",
    status: "in progress",
  },
  {
    title: "Project Card",
    description: "A case-study preview that balances project framing, capabilities, and impact signals.",
    status: "in progress",
  },
  {
    title: "Homepage Project Card",
    description: "The full homepage project-card treatment used for featured case-study entry points.",
    status: "in progress",
  },
  {
    title: "Quote Block",
    description: "A contained testimonial or editorial claim with enough structure to support evidence.",
    status: "in progress",
  },
  {
    title: "Focus List",
    description: "A lightweight wrap list for homepage capabilities when cards would feel too heavy.",
    status: "in progress",
  },
  {
    title: "CTA",
    description: "A quiet closing module that connects the story to a clear next action.",
    status: "in progress",
  },
  {
    title: "FAQ / Accordion",
    description: "Progressive disclosure for process details, collaboration models, and project constraints.",
    status: "in progress",
  },
];

export const genomeContentRules = [
  "Keep copy concise and specific.",
  "Use NDA-safe naming for clients, products, workflows, and data.",
  "Avoid fake metrics or invented business outcomes.",
  "Explain decisions, not just screens.",
  "Show complexity through abstract system visuals.",
  "Prefer specific product language over generic design claims.",
  "Use either a soft background or a shadow, not both on the same module.",
];

export const genomeComparison = [
  {
    title: "Before",
    description: "Pages and case studies risk becoming one-off layouts.",
  },
  {
    title: "Genome",
    description: "Reusable foundations, components, and content rules guide every page.",
  },
  {
    title: "After",
    description: "The portfolio feels consistent, scalable, and easier to extend with new case studies.",
  },
];
