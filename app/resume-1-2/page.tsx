import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import { PageBackgroundTransition } from "@/components/sections/PageBackgroundTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const resumePdfHref = "/webflow/documents/Resume—Tibor-Lovas—May-2026.pdf";

const proofPoints = [
  { value: "17+", label: "Years designing digital products" },
  { value: "AI", label: "Systems, workflows, and product delivery" },
  { value: "10+", label: "Years working with US teams" },
];

const capabilities = [
  "Product strategy",
  "UX | UI design",
  "Design systems",
  "Information architecture",
  "AI-assisted product design",
  "Figma",
  "Research synthesis",
  "Facilitation",
  "Leadership",
  "Prioritization",
  "Animation",
  "Problem solving",
];

const operatingModes = [
  {
    title: "Frame the product terrain",
    description:
      "Turn ambiguous business goals, customer signals, and technical constraints into clear product direction.",
  },
  {
    title: "Design production-ready systems",
    description:
      "Shape flows, interfaces, component logic, and interaction patterns that teams can build and maintain.",
  },
  {
    title: "Partner through delivery",
    description:
      "Work directly with product owners, managers, and engineers to keep quality high from concept to release.",
  },
];

const experience = [
  {
    role: "Senior Product Designer",
    company: "Lumenalta",
    type: "Agency",
    period: "2020-2026",
    focus: "Enterprise products, design systems, AI workflows, and delivery partnership.",
    description:
      "Worked with teams ranging from small startups to large Fortune 500 brands, product owners, managers, and engineering teams to identify objectives, integrate design processes, research, design, and deliver software products.",
  },
  {
    role: "Product Design Manager",
    company: "ScreamingBox",
    type: "Agency",
    period: "2014-2020",
    focus: "Hiring systems, product design leadership, and startup-to-enterprise delivery.",
    description:
      "Worked with HR to establish hiring processes for design talent and ran designer interviews. Joined startup and enterprise teams as a product designer to design and build products and experiences.",
  },
  {
    role: "Design Lead",
    company: "Gooten",
    type: "Startup",
    period: "2012-2016",
    focus: "Marketplace UX, team workflow, and print on-demand platform design.",
    description:
      "Scoped and distributed work within the design team, maintained workflow efficiency, and reported to senior management. Led the user experience for a print on-demand and drop-shipping platform with founders and engineers.",
  },
  {
    role: "Earlier Career",
    company: "Freelance, agency, TV, and press",
    type: "Startup / Agency / Media",
    period: "2007-2012",
    focus: "UX/UI, brand identity, motion, broadcast graphics, and digital campaigns.",
    description:
      "Worked with digital agencies as a freelance UX/UI designer on web and mobile projects, brand identity projects for small businesses, and in TV media as a graphic and animation designer and broadcast operator.",
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
    label: "Web",
    value: "tiborlovas.com",
    href: "https://tiborlovas.com",
  },
  {
    label: "Dribbble",
    value: "dribbble.com/tiborlovas",
    href: "https://dribbble.com/tiborlovas",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tiborlovas",
    href: "https://www.linkedin.com/in/tiborlovas/",
  },
];

export const metadata: Metadata = {
  title: "Resume 1.2",
  description:
    "Resume 1.2 for Tibor Lovas, a senior product designer focused on complex product systems, AI-assisted workflows, and delivery.",
};

export default function ResumeV12Page() {
  return (
    <PageBackgroundTransition>
      <section className="pb-section pt-hero md:pt-section" data-page-hero>
        <div className="container">
          <div className="grid gap-hero lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="editorial-kicker mb-content">Updated: Jun 2026</p>
              <h1 className="text-2 font-bold">Tibor Lovas</h1>
              <p className="mt-content max-w-4xl text-5 text-muted-foreground">
                Senior Product Designer for complex systems, AI-assisted workflows, and
                product teams that need ideas to survive contact with production.
              </p>
              <div className="mt-loose flex flex-wrap gap-tight">
                <Button asChild>
                  <Link href={resumePdfHref} target="_blank" rel="noreferrer">
                    <Download className="size-5" aria-hidden="true" />
                    Download PDF
                  </Link>
                </Button>
              </div>
            </div>

            <aside className="grid gap-tight rounded-[2rem] bg-background p-card shadow-editorial">
              <div className="flex items-center gap-micro text-primary">
                <Sparkles className="size-5" aria-hidden="true" />
                <p className="editorial-kicker text-primary">Profile</p>
              </div>
              <p className="text-7 font-medium text-muted-foreground">
                I help teams clarify messy product spaces, design durable interfaces, and
                move through delivery with enough structure to keep momentum honest.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="container">
          <div className="grid gap-card rounded-[2rem] bg-primary p-card text-center text-primary-foreground md:grid-cols-3 md:p-hero">
            {proofPoints.map((item) => (
              <article
                key={item.label}
                className="grid justify-items-center gap-content"
              >
                <p className="text-2 font-bold">{item.value}</p>
                <p className="max-w-xs text-6 font-medium">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="container grid gap-hero lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="editorial-kicker mb-content">Operating Mode</p>
            <h2 className="text-4 font-semibold">
              Senior IC range with enough management scar tissue to make teams calmer.
            </h2>
          </div>
          <div className="grid gap-content">
            {operatingModes.map((mode, index) => (
              <article
                key={mode.title}
                className="grid gap-content rounded-[1.5rem] bg-surface-soft p-card md:grid-cols-[4rem_1fr]"
              >
                <p className="text-6 font-bold text-primary">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="text-5 font-semibold">{mode.title}</h3>
                  <p className="mt-tight text-7 text-muted-foreground">{mode.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="container grid gap-hero lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="editorial-kicker mb-content">Capabilities</p>
            <h2 className="text-4 font-semibold">
              Product design across strategy, systems, interface craft, and execution.
            </h2>
          </div>
          <ul className="flex flex-wrap gap-tight">
            {capabilities.map((capability) => (
              <li key={capability}>
                <Badge variant="large">{capability}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-section">
        <div className="container">
          <div className="mb-hero max-w-4xl">
            <p className="editorial-kicker mb-content">Experience</p>
            <h2 className="text-3 font-semibold">
              Roles spanning startups, agencies, enterprise teams, and product systems.
            </h2>
          </div>
          <div className="grid gap-content">
            {experience.map((item, index) => (
              <article
                key={`${item.role}-${item.company}`}
                className="grid gap-card rounded-[1.5rem] bg-surface-soft p-card lg:grid-cols-[0.16fr_0.28fr_0.56fr]"
              >
                <p className="editorial-kicker">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <p className="text-7 font-semibold">{item.period}</p>
                  <p className="mt-micro text-8 font-medium text-muted-foreground">{item.type}</p>
                </div>
                <div>
                  <h3 className="text-5 font-semibold">{item.role}</h3>
                  <p className="mt-micro text-7 font-semibold text-primary">at {item.company}</p>
                  <p className="mt-content text-8 font-semibold">{item.focus}</p>
                  <p className="mt-tight max-w-4xl text-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="container grid gap-hero lg:grid-cols-2">
          <div>
            <p className="editorial-kicker mb-content">Education</p>
            <ul className="grid gap-tight">
              {education.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.5rem] bg-surface-soft p-content text-7 font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="editorial-kicker mb-content">Contact</p>
            <div className="grid gap-tight">
              {contactLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group grid gap-micro rounded-[1.5rem] bg-surface-soft p-content transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="flex items-center justify-between gap-tight">
                    <span className="editorial-kicker">{link.label}</span>
                    {link.href.startsWith("http") ? (
                      <ExternalLink
                        className="size-4 opacity-50 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowUpRight
                        className="size-4 opacity-50 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    )}
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
