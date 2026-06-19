export type ProjectSummary = {
  slug: string;
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

export const featuredProjects: ProjectSummary[] = [
  {
    slug: "managing-memberships-at-scale",
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
    name: "Partner logo",
    src: "/logos/partner-vectors-wrapper.svg",
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
  { title: "Claude Design" },
  { title: "Google Stitch" },
  { title: "Information Architecture" },
];

export const homepageStats = [
  { value: "14+", label: "Years building digital products" },
  { value: "37k+", label: "Wirefigma downloads on Figma community" },
  { value: "10+", label: "Years working with US teams" },
];

export const processSteps = [
  {
    title: "What is your process?",
    description: [
      "I use AI to help shape products and experiences that create meaningful outcomes — from early research and discovery to production-ready execution. Beyond the interface itself, I focus on the systems around the work: feedback loops, design systems, and workflows that integrate into teams and help them operate more effectively.",
      "My process combines AI-driven insights with close collaboration across stakeholders and engineering teams to define user stories, prototype ideas, and ensure quality through implementation and QA. The goal is not just to ship polished interfaces, but to create scalable, human-centered systems that reduce complexity and improve how teams build products together.",
      "If you’re interested in learning more about my approach and workflow, please don’t hesitate to reach out. I'd be happy to share more insights into my thinking and processes.",
    ],
  },
  {
    title: "Do you do UX/UI too?",
    description: [
      "Yes, I am a UX and a UI designer in a single person. And I manage the design processes and the design team simultaneously.",
      "Here is a great article about what a Product Design Manager does in general. And if you are interested to know more, feel free to contact me. I'll be happy to share more about my workflow.",
    ],
  },
  {
    title: "What industries did you work in?",
    description: [
      "I worked in Automotive, Construction, Fintech, Healthcare, Media, Hospitality, and SpaceTech. I prefer projects that emphasize sustainability fostering innovation, or those that are socially beneficial focusing on the greater good.",
      "If you are interested in learning more, feel free to contact me. I'll be happy to share more about my experiences and approach.",
    ],
  },
  {
    title: "Are you a traditional agency designer?",
    description: [
      "Traditional agency designers often juggle multiple projects simultaneously, typically for short-term engagements, which can limit their experience in long-term product development. In contrast, in-house designers may become entrenched in the corporate environment, potentially losing fresh perspectives and motivation over time.",
      "I take a different approach by joining teams to work on a single project for the long term, from inception to post-release. This allows me to become an integral part of the team and be present for all key milestones throughout the project's lifecycle. Additionally, my experience across multiple industries provides me with a broad perspective and a diverse skill set.",
      "If you're interested in learning more about my methods and how I work, please contact me. I'd be happy to share further insights.",
    ],
  },
  {
    title: "What do you do as a Product Design Manager?",
    description: [
      "I work with product owners to identify objectives, with managers to scope projects and integrate design processes, with designers (or alone) to problem-seek and design solutions, and engineers to build and deliver software solutions for small and large businesses.",
      "Here is a great article about what a Product Design Manager does in general. And if you are interested to know more, feel free to contact me. I'll be happy to share more about my workflow.",
    ],
  },
  {
    title: "Do you join teams for equity?",
    description: [
      "Yes, I exchange my services for equity. I provide design consulting, and partner with projects that fall into my focus.",
      "If you are looking for a consultant for your project, let's chat.",
    ],
  },
  {
    title: "What is Wirefigma?",
    description: [
      "Wirefigma is a high-fidelity wireframe design system I created, allowing designers to build wireframes quickly and iterate on them with ease. It is designed with performance and scalability in mind, making it easy to apply any brand and transform wireframes into production mockups instantly.",
      "I am proud to say that Wirefigma is free for everyone, forever. Since its release, it has received over 37,000 downloads, averaging between 300 to 400 downloads per week. It has been recognized and listed by popular design inspiration and theme resource hubs such as Muzli, UI8, and UpLabs.",
      "If you're interested in learning more or seeing how Wirefigma can enhance your design process, feel free to contact me.",
    ],
  },
];

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
  "Claude Design",
  "Google Stitch",
  "Information Architecture",
];
