export type ProjectSummary = {
  slug: string;
  href?: string;
  title: string;
  eyebrow: string;
  summary?: string;
  capabilities: string[];
  impact: string;
  signal: string;
  cta: string;
  layout: "wide" | "tall" | "standard";
};

export type Capability = {
  title: string;
  description?: string;
};

export type ProcessLink = {
  label: string;
  href: string;
};

export type ProcessParagraph =
  | string
  | {
      text: string;
      links: ProcessLink[];
    };

export type ProcessStep = {
  title: string;
  description: ProcessParagraph[];
};

export const featuredProjects: ProjectSummary[] = [
  {
    slug: "managing-memberships-at-scale-1-1",
    href: "/case-study/managing-memberships-at-scale-1-1",
    title: "Managing Memberships at Scale",
    eyebrow: "Projects",
    capabilities: [],
    impact: "by Roadside Assistance Company",
    signal: "by Roadside Assistance Company",
    cta: "Request Access",
    layout: "wide",
  },
  {
    slug: "finding-talents-faster",
    title: "Finding Talents Faster",
    eyebrow: "Projects",
    capabilities: [],
    impact: "by Big Media Brand",
    signal: "by Big Media Brand",
    cta: "Request Access",
    layout: "tall",
  },
  {
    slug: "home-phe-testing-is-becoming-a-reality",
    title: "Home PHE Testing is Becoming a Reality",
    eyebrow: "Projects",
    capabilities: [],
    impact: "by Aptatek-Biosciences",
    signal: "by Aptatek-Biosciences",
    cta: "Request Access",
    layout: "standard",
  },
  {
    slug: "premium-on-demand-classes",
    title: "Premium On-Demand Classes",
    eyebrow: "Projects",
    capabilities: [],
    impact: "by YouAligned",
    signal: "by YouAligned",
    cta: "See in App Store",
    layout: "standard",
  },
  {
    slug: "wirefigma",
    title: "Wirefigma",
    eyebrow: "Wirefigma",
    summary: "Wireframe Design System for Figma",
    capabilities: [],
    impact: "Wireframe Design System for Figma",
    signal: "Wireframe Design System for Figma",
    cta: "Get for Free",
    layout: "wide",
  },
  {
    slug: "ai-at-enterprise-scale",
    title: "AI at Enterprise Scale",
    eyebrow: "Projects",
    capabilities: [],
    impact: "by Mercedes-Benz",
    signal: "by Mercedes-Benz",
    cta: "See Case Study",
    layout: "tall",
  },
];

export const clientLogos = [
  {
    name: "Paramount",
    src: "/logos/paramount.svg",
  },
  {
    name: "Sotheby’s",
    src: "/logos/sothebys.svg",
  },
  {
    name: "AAA",
    src: "/logos/aaa.svg",
  },
  {
    name: "Daimler",
    src: "/logos/daimler.svg",
  },
  {
    name: "Mercedes-Benz",
    src: "/logos/mercedes.svg",
  },
  {
    name: "NASA",
    src: "/logos/nasa.svg",
  },
  {
    name: "Aptatek",
    src: "/logos/aptatek.svg",
  },
];

export const impactSignals = [
  "↓ Delivery friction",
  "↑ System consistency",
  "↓ Decision overhead",
];

export const capabilities: Capability[] = [
  { title: "Research" },
  { title: "Problem Solving" },
  { title: "Management" },
  { title: "Artificial Intelligence" },
  { title: "Leadership" },
  { title: "Critical Thinking" },
  { title: "Facilitation" },
  { title: "UX | UI Design" },
  { title: "Design Systems" },
  { title: "Figma" },
  { title: "Codex" },
  { title: "Claude Design" },
  { title: "Google Stitch" },
  { title: "Information Architecture" },
];

export const homepageStats = [
  { value: "14+", label: "Years building\ndigital products" },
  { value: "56k+", label: "Wirefigma downloads\non Figma community" },
  { value: "10+", label: "Years working\nwith US teams" },
];

export const processSteps: ProcessStep[] = [
  {
    title: "What is your process?",
    description: [
      "I help teams move from ambiguity to clear, buildable product direction. My process starts with understanding the business goal, user needs, technical constraints, and what the team already knows.",
      "I use AI throughout the process to speed up research synthesis, map user flows, explore product scenarios, compare solution paths, and pressure-test ideas early. It helps me move faster, but the product judgment stays human.",
      "From there, I clarify the problem, define what should be built first, design the experience, and turn it into production-ready UI and scalable systems. I work closely with product managers, engineers, and stakeholders through implementation, including design QA, so the final product stays aligned with the original intent.",
    ],
  },
  {
    title: "Do you do UX/UI too?",
    description: [
      "Yes. I work across both UX and UI, from product structure and user flows to detailed interface design, design systems, and implementation support.",
      "I’m most useful when teams need more than polished screens: someone who can understand the product problem, simplify complexity, design the experience, and help make sure it ships well. Depending on the team, I can work independently as a senior product designer or collaborate closely with product, engineering, and other designers.",
    ],
  },
  {
    title: "What industries did you work in?",
    description: [
      "I worked in Automotive, Construction, Fintech, Healthcare, Media, Hospitality, and SpaceTech. I prefer projects that emphasize sustainability fostering innovation, or those that are socially beneficial focusing on the greater good.",
    ],
  },
  {
    title: "Do you work like an agency or as part of the product team?",
    description: [
      "Traditional agency designers often juggle multiple projects simultaneously, typically for short-term engagements, which can limit their experience in long-term product development. In contrast, in-house designers may become entrenched in the corporate environment, potentially losing fresh perspectives and motivation over time.",
      "I take a different approach by joining teams to work on a single project for the long term, from inception to post-release. This allows me to become an integral part of the team and be present for all key milestones throughout the project's lifecycle. Additionally, my experience across multiple industries provides me with a broad perspective and a diverse skill set.",
    ],
  },
  {
    title: "How do you work with product teams?",
    description: [
      "I work as an embedded senior product designer, closely with product managers, engineers, founders, and stakeholders. I help teams clarify the problem, decide what should be built, reduce unnecessary complexity, and turn ideas into production-ready product experiences.",
      "My role usually goes beyond screens. I contribute to product direction, map user flows, prototype solutions, build scalable design systems, define interaction details, and support implementation through design QA. I’m most useful in teams that need someone who can move between strategy, UX, UI, systems, and delivery without losing product judgment.",
    ],
  },
  {
    title: "What is Wirefigma?",
    description: [
      "Wirefigma is a high-fidelity wireframe design system I created, allowing designers to build wireframes quickly and iterate on them with ease. It is designed with performance and scalability in mind, making it easy to apply any brand and transform wireframes into production mockups instantly.",
      {
        text: "I am proud to say that Wirefigma is free for everyone, forever. Since its release, it has received over 56,000 downloads, averaging between 300 to 400 downloads per week. It has been recognized and listed by popular design inspiration and theme resource hubs such as Muzli, UI8, and UpLabs.",
        links: [
          { label: "Muzli", href: "https://muz.li/" },
          { label: "UI8", href: "https://ui8.net/wirefigma/products/wirefigma-free" },
          { label: "UpLabs", href: "https://www.uplabs.com/" },
        ],
      },
      {
        text: "If you're interested in learning more or seeing how Wirefigma can enhance your design process, feel free to contact me.",
        links: [
          { label: "contact me", href: "mailto:hello@tiborlovas.com?subject=Let%27s%20Connect" },
        ],
      },
    ],
  },
];

export const designProcessSteps = [
  {
    title: "Problem Finding",
    description: "Map the business context, user needs, and operational friction before choosing a direction.",
  },
  {
    title: "Problem Framing",
    description: "Turn messy inputs into a clear product problem, success criteria, and aligned priorities.",
  },
  {
    title: "AI Exploration",
    description: "Use AI and rapid prototypes to pressure-test assumptions and widen the solution space.",
  },
  {
    title: "Solution Shaping",
    description: "Design flows, interfaces, states, and reusable patterns that teams can understand and build.",
  },
  {
    title: "Delivery",
    description: "Partner with engineering through handoff, QA, edge cases, and iteration after implementation.",
  },
] as const;

export const focusAreas = [
  "Research",
  "Problem Solving",
  "Management",
  "Artificial Intelligence",
  "Leadership",
  "Critical Thinking",
  "Facilitation",
  "UX | UI Design",
  "Design Systems",
  "Figma",
  "Codex",
  "Claude Design",
  "Google Stitch",
  "Information Architecture",
];
