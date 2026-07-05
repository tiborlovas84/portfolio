import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink, Mail } from "lucide-react";

import { PageBackgroundTransition } from "@/components/sections/PageBackgroundTransition";
import { Button } from "@/components/ui/button";

const resumePdfHref = "/webflow/documents/Resume—Tibor-Lovas—May-2026.pdf";

const highlights = [
  { value: "17", label: "Years of experience" },
  { value: "2020-2026", label: "Senior Product Designer at Lumenalta" },
  { value: "AI", label: "Product systems from idea to production" },
];

const skills = [
  "Artificial Intelligence",
  "UX | UI design",
  "Design Systems",
  "Information Architecture",
  "Figma",
  "Animation",
  "Management",
  "Research",
  "Problem Solving",
  "Leadership",
  "Critical Thinking",
  "Prioritization",
  "Facilitation",
];

const experience = [
  {
    role: "Senior Product Designer",
    company: "Lumenalta",
    type: "Agency",
    period: "2020-2026",
    description:
      "Working with teams ranging from small startups to large Fortune 500 brands, product owners, managers, and engineering teams to identify objectives, integrate design processes, research, design, and deliver software products.",
  },
  {
    role: "Product Design Manager",
    company: "ScreamingBox",
    type: "Agency",
    period: "2014-2020",
    description:
      "Worked with HR to establish hiring processes for design talent and ran designer interviews. Joined startup and enterprise teams as a product designer to design and build products and experiences.",
  },
  {
    role: "Design Lead",
    company: "Gooten",
    type: "Startup",
    period: "2012-2016",
    description:
      "Scoped and distributed work within the design team, maintained workflow efficiency, and reported to senior management. Led the user experience for a print on-demand and drop-shipping platform with founders and engineers.",
  },
  {
    role: "Earlier Career",
    company: "Freelance, agency, TV, and press",
    type: "Startup / Agency / Media",
    period: "2007-2012",
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
  title: "Resume",
  description:
    "Resume for Tibor Lovas, a senior product designer building systems and products that scale from idea to production with AI.",
};

export default function ResumePage() {
  return (
    <PageBackgroundTransition>
      <section className="pb-section pt-hero md:pt-section" data-page-hero>
        <div className="container">
          <div className="grid gap-hero lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="editorial-kicker mb-content">Resume</p>
              <h1 className="text-2 font-bold">
                Tibor Lovas
              </h1>
              <p className="mt-content max-w-4xl text-5 text-muted-foreground">
                Senior Product Designer building systems and products that scale from idea to
                production, leveraging AI across complex product work.
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

            <div className="grid gap-tight rounded-[2rem] bg-surface-soft p-card md:grid-cols-3 lg:grid-cols-1">
              {highlights.map((highlight) => (
                <article key={highlight.label} className="border-b border-border pb-tight last:border-0 last:pb-0 md:border-b-0 md:border-r md:pb-0 md:pr-tight md:last:border-r-0 lg:border-b lg:border-r-0 lg:pb-tight lg:pr-0 lg:last:border-b-0">
                  <p className="text-4 font-bold">{highlight.value}</p>
                  <p className="mt-micro text-8 font-medium text-muted-foreground">
                    {highlight.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="container grid gap-hero lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="editorial-kicker mb-content">Core Practice</p>
            <h2 className="text-4 font-semibold">Product design, systems thinking, and AI-assisted execution.</h2>
          </div>
          <ul className="flex flex-wrap gap-tight">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-pill border border-border bg-background px-content py-tight text-8 font-semibold"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-section">
        <div className="container">
          <div className="mb-hero max-w-3xl">
            <p className="editorial-kicker mb-content">Experience</p>
            <h2 className="text-3 font-semibold">Roles across startups, agencies, and enterprise teams.</h2>
          </div>
          <div className="grid gap-content">
            {experience.map((item, index) => (
              <article
                key={`${item.role}-${item.company}`}
                className="grid gap-card border-t border-border py-card md:grid-cols-[0.16fr_0.28fr_0.56fr]"
              >
                <p className="editorial-kicker">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <p className="text-7 font-semibold">{item.period}</p>
                  <p className="mt-micro text-8 font-medium text-muted-foreground">{item.type}</p>
                </div>
                <div>
                  <h3 className="text-5 font-semibold">{item.role}</h3>
                  <p className="mt-micro text-7 font-semibold text-primary">at {item.company}</p>
                  <p className="mt-content max-w-4xl text-7 text-muted-foreground">
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
                <li key={item} className="rounded-[1.5rem] bg-background p-content text-7 font-medium">
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
                  className="group grid gap-micro rounded-[1.5rem] bg-background p-content transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="flex items-center justify-between gap-tight">
                    <span className="editorial-kicker">{link.label}</span>
                    <ExternalLink className="size-4 opacity-50 transition-opacity group-hover:opacity-100" aria-hidden="true" />
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
