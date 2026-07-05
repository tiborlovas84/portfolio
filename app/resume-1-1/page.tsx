import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { PageBackgroundTransition } from "@/components/sections/PageBackgroundTransition";
import { Button } from "@/components/ui/button";

const resumePdfHref = "/webflow/documents/Resume—Tibor-Lovas—May-2026.pdf";

const signalStats = [
  { value: "17+", label: "Years shaping digital products" },
  { value: "6", label: "Years at Lumenalta" },
  { value: "AI", label: "Complex product systems, accelerated" },
];

const capabilities = [
  "AI-assisted product strategy",
  "UX and UI design",
  "Design systems",
  "Information architecture",
  "Enterprise workflows",
  "Figma systems",
  "Research synthesis",
  "Facilitation",
  "Interaction design",
  "Product storytelling",
  "Leadership",
  "Prioritization",
];

const impactAreas = [
  {
    title: "Complexity into clarity",
    description:
      "I map dense workflows, legacy logic, and competing stakeholder needs into interfaces teams can understand, ship, and keep improving.",
  },
  {
    title: "Systems that scale",
    description:
      "I build reusable product patterns, naming systems, and interface foundations that reduce decision fatigue across design and engineering.",
  },
  {
    title: "AI as production leverage",
    description:
      "I use AI to accelerate exploration, UX copy, edge-case coverage, prototyping, and delivery without letting the product lose its judgment.",
  },
];

const experience = [
  {
    role: "Senior Product Designer",
    company: "Lumenalta",
    context: "Agency partner for startups, scaleups, and Fortune 500 teams",
    period: "2020-2026",
    bullets: [
      "Partnered with product owners, managers, engineers, and client teams to identify objectives and turn ambiguous product needs into shippable software.",
      "Led research, UX architecture, interface design, and delivery across complex internal tools, AI-assisted experiences, and customer-facing products.",
      "Integrated design processes into cross-functional teams so discovery, design decisions, and implementation moved with less friction.",
    ],
  },
  {
    role: "Product Design Manager",
    company: "ScreamingBox",
    context: "Agency design leadership and hands-on product work",
    period: "2014-2020",
    bullets: [
      "Helped establish hiring processes for design talent and ran designer interviews with HR and leadership.",
      "Joined startup and enterprise teams as a product designer to define, design, and improve web and mobile product experiences.",
      "Balanced management responsibilities with direct design execution across multiple client workstreams.",
    ],
  },
  {
    role: "Design Lead",
    company: "Gooten",
    context: "Startup platform for print on-demand and drop shipping",
    period: "2012-2016",
    bullets: [
      "Scoped and distributed work across the design team while maintaining delivery rhythm and reporting progress to senior management.",
      "Led UX for operational, merchant, and fulfillment workflows in close collaboration with founders and engineering.",
      "Created interface patterns that supported a growing platform with many connected user and production scenarios.",
    ],
  },
  {
    role: "Designer",
    company: "Freelance, agency, TV, and press",
    context: "Early career across digital, brand, motion, and broadcast work",
    period: "2007-2012",
    bullets: [
      "Designed web and mobile experiences for digital agencies and independent clients.",
      "Created brand identity work for small businesses and visual systems for media environments.",
      "Worked in TV media as a graphic and animation designer and broadcast operator.",
    ],
  },
];

const education = [
  "Computer Science and Economics, University of Economics in Bratislava, 2004-2006",
  "Computer and Communication Sciences, High School of Electrical Engineering, 2000-2004",
];

const contactLinks = [
  {
    label: "Email",
    value: "hello@tiborlovas.com",
    href: "mailto:hello@tiborlovas.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tiborlovas",
    href: "https://www.linkedin.com/in/tiborlovas/",
  },
  {
    label: "Dribbble",
    value: "dribbble.com/tiborlovas",
    href: "https://dribbble.com/tiborlovas",
  },
  {
    label: "Web",
    value: "tiborlovas.com",
    href: "https://tiborlovas.com",
  },
];

export const metadata: Metadata = {
  title: "Resume 1.1",
  description:
    "Resume 1.1 for Tibor Lovas, a senior product designer focused on complex products, systems thinking, and AI-assisted execution.",
};

export default function ResumeV11Page() {
  return (
    <PageBackgroundTransition>
      <section className="pb-section pt-hero md:pt-section" data-page-hero>
        <div className="container">
          <div className="grid gap-hero lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
            <div className="max-w-6xl">
              <p className="editorial-kicker mb-content">Resume 1.1</p>
              <h1 className="text-2 font-bold">Tibor Lovas</h1>
              <p className="mt-content max-w-4xl text-5 text-muted-foreground">
                Senior Product Designer turning complex business, data, and operational systems
                into clear products teams can ship with confidence.
              </p>
              <div className="mt-loose flex flex-wrap gap-tight">
                <Button asChild size="lg">
                  <Link href={resumePdfHref} target="_blank" rel="noreferrer">
                    <Download className="size-5" aria-hidden="true" />
                    Download PDF
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link href="mailto:hello@tiborlovas.com">
                    <Mail className="size-5" aria-hidden="true" />
                    Contact
                  </Link>
                </Button>
              </div>
            </div>

            <aside className="rounded-[2rem] bg-background p-card shadow-editorial">
              <div className="flex items-center gap-tight text-primary">
                <BriefcaseBusiness className="size-5" aria-hidden="true" />
                <p className="editorial-kicker text-primary">Current Focus</p>
              </div>
              <p className="mt-content text-6 font-semibold">
                Design systems, enterprise UX, and AI-assisted product delivery.
              </p>
              <div className="mt-card grid gap-tight">
                <p className="flex items-center gap-tight text-8 font-medium text-muted-foreground">
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                  Bratislava, Slovakia - working globally
                </p>
                <p className="flex items-center gap-tight text-8 font-medium text-muted-foreground">
                  <Sparkles className="size-4 text-primary" aria-hidden="true" />
                  Available for senior product design work
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-hero grid gap-tight md:grid-cols-3">
            {signalStats.map((stat) => (
              <article key={stat.label} className="rounded-[1.5rem] bg-background p-content">
                <p className="text-4 font-bold">{stat.value}</p>
                <p className="mt-micro text-8 font-medium text-muted-foreground">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="container grid gap-hero lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="editorial-kicker mb-content">Profile</p>
            <h2 className="text-4 font-semibold">
              Calm systems thinking for high-context product teams.
            </h2>
          </div>
          <div className="grid gap-content">
            <p className="text-6 text-muted-foreground">
              I work where product complexity is real: internal platforms, customer operations,
              AI-enabled workflows, design systems, and interfaces with enough edge cases to make
              simple answers suspicious.
            </p>
            <div className="grid gap-tight md:grid-cols-3">
              {impactAreas.map((area) => (
                <article key={area.title} className="rounded-[1.5rem] bg-background p-content">
                  <h3 className="text-7 font-semibold">{area.title}</h3>
                  <p className="mt-tight text-8 text-muted-foreground">{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="container">
          <div className="mb-hero grid gap-content lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
            <div>
              <p className="editorial-kicker mb-content">Experience</p>
              <h2 className="text-3 font-semibold">Product design across agencies, startups, and enterprise teams.</h2>
            </div>
            <p className="max-w-3xl text-6 text-muted-foreground">
              A throughline of translating messy product contexts into usable structures,
              collaborative momentum, and UI systems that can survive real delivery.
            </p>
          </div>

          <div className="grid gap-content">
            {experience.map((item, index) => (
              <article
                key={`${item.role}-${item.company}`}
                className="grid gap-card rounded-[2rem] bg-background p-card md:grid-cols-[0.18fr_0.32fr_0.5fr]"
              >
                <p className="editorial-kicker">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <p className="text-7 font-semibold">{item.period}</p>
                  <h3 className="mt-tight text-5 font-semibold">{item.role}</h3>
                  <p className="mt-micro text-7 font-semibold text-primary">at {item.company}</p>
                  <p className="mt-tight text-8 font-medium text-muted-foreground">{item.context}</p>
                </div>
                <ul className="grid gap-tight">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="text-8 text-muted-foreground">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="container grid gap-hero lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="editorial-kicker mb-content">Capabilities</p>
            <h2 className="text-4 font-semibold">A practical toolkit for difficult product work.</h2>
          </div>
          <ul className="flex flex-wrap gap-tight">
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="rounded-pill bg-background px-content py-tight text-8 font-semibold"
              >
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-section">
        <div className="container grid gap-hero lg:grid-cols-2">
          <div>
            <p className="editorial-kicker mb-content">Education</p>
            <div className="grid gap-tight">
              {education.map((item) => (
                <p key={item} className="rounded-[1.5rem] bg-background p-content text-7 font-medium">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="editorial-kicker mb-content">Contact</p>
            <div className="grid gap-tight">
              {contactLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group grid gap-micro rounded-[1.5rem] bg-background p-content transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="flex items-center justify-between gap-tight">
                    <span className="editorial-kicker">{link.label}</span>
                    <ArrowUpRight className="size-4 opacity-50 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </span>
                  <span className="text-7 font-semibold">{link.value}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageBackgroundTransition>
  );
}
