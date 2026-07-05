import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A magazine index spanning product systems, enterprise AI, mobile apps, and design systems.",
};

type ProjectGridItem = {
  number: string;
  title: string;
  eyebrow: string;
  byline: string;
  industry: string;
  role: string;
  system: string;
  outcome: string;
  href: string;
  image: string;
  imageAlt: string;
  external?: boolean;
  tone: string;
};

const projects: ProjectGridItem[] = [
  {
    number: "01",
    title: "Managing Memberships at Scale",
    eyebrow: "Membership Ops",
    byline: "Roadside Assistance Company",
    industry: "Automotive",
    role: "Product Strategy",
    system: "Operations Platform",
    outcome: "Membership operations redesigned for scale, clarity, and safer handoff.",
    href: "/request-access?project=Road%20Assistance",
    image: "/webflow/images/Roadside-Assistance-cropped.png",
    imageAlt: "Roadside Assistance product interface mockups",
    tone: "bg-[#f4f6f8]",
  },
  {
    number: "02",
    title: "Finding Talents Faster",
    eyebrow: "Talent Discovery",
    byline: "Big Media Brand",
    industry: "Media",
    role: "UX Systems",
    system: "Search Workflow",
    outcome: "Talent discovery flows made faster to scan, compare, and act on.",
    href: "/request-access?project=Big%20Media%20Brand",
    image: "/webflow/images/Big-Media-Image.png",
    imageAlt: "Media talent search product mockups",
    tone: "bg-[#eef5f8]",
  },
  {
    number: "03",
    title: "AI at Enterprise Scale",
    eyebrow: "Enterprise AI",
    byline: "Mercedes-Benz",
    industry: "Automotive",
    role: "AI Product Design",
    system: "Decision Surface",
    outcome: "Enterprise AI patterns shaped into usable workflows and decision surfaces.",
    href: "/webflow/case-study/mercedes-ai.html",
    image: "/webflow/images/Mercedes-Image.png",
    imageAlt: "Mercedes-Benz AI product mockups",
    tone: "bg-[#f3f3f6]",
  },
  {
    number: "04",
    title: "Home PHE Testing is Becoming a Reality",
    eyebrow: "Home Diagnostics",
    byline: "Aptatek-Biosciences",
    industry: "Healthcare",
    role: "Journey Design",
    system: "Testing Experience",
    outcome: "A complex testing journey translated into a calmer consumer experience.",
    href: "/request-access?project=PKU%20Lab",
    image: "/webflow/images/PKU-Lab-Image.png",
    imageAlt: "Home PHE testing product mockups",
    tone: "bg-[#f0f7f3]",
  },
  {
    number: "05",
    title: "Premium On-Demand Classes",
    eyebrow: "Subscription App",
    byline: "YouAligned",
    industry: "Wellness",
    role: "Mobile Product",
    system: "Content Library",
    outcome: "A premium class library shaped around browse, preview, and repeat use.",
    href: "https://apps.apple.com/us/app/ya-classes-home-yoga-studio/id1414489703",
    image: "/webflow/images/YogiApproved--Image-Wrap.png",
    imageAlt: "YouAligned classes app screens",
    external: true,
    tone: "bg-[#f7f4ed]",
  },
  {
    number: "06",
    title: "Wirefigma",
    eyebrow: "Design System",
    byline: "Figma Community",
    industry: "Design Tools",
    role: "System Creator",
    system: "Wireframe Kit",
    outcome: "A free Figma system built for fast wireframing and scalable iteration.",
    href: "https://www.figma.com/community/file/817668228861623746",
    image: "/webflow/images/Wirefigma-artwork-5.svg",
    imageAlt: "Wirefigma design system artwork",
    external: true,
    tone: "bg-background",
  },
];

function ProjectLink({
  project,
  children,
  className,
}: {
  project: ProjectGridItem;
  children: ReactNode;
  className?: string;
}) {
  if (project.external) {
    return (
      <a href={project.href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={project.href} className={className}>
      {children}
    </Link>
  );
}

function ProjectLeadSpread({ project }: { project: ProjectGridItem }) {
  return (
    <ProjectLink project={project} className="block">
      <article className="group grid overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-[var(--shadow-editorial)] transition-transform duration-300 ease-out hover:-translate-y-1 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="grid content-between gap-card border-b border-border p-card lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between gap-content">
            <p className="font-mono text-8 font-semibold uppercase text-primary">
              Feature {project.number}
            </p>
            <p className="editorial-kicker">{project.eyebrow}</p>
          </div>
          <div>
            <h2 className="text-2 font-bold">{project.title}</h2>
            <p className="mt-content text-6 font-medium text-muted-foreground">
              by {project.byline}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-content border-t border-border pt-content text-9 font-semibold uppercase text-muted-foreground">
            <span>{project.industry}</span>
            <span>{project.role}</span>
            <span>{project.system}</span>
          </div>
        </div>
        <div className={`relative min-h-[30rem] overflow-hidden ${project.tone}`}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1024px) 92vw, 56vw"
            className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.04] md:p-12"
            priority
          />
        </div>
        <div className="border-t border-border p-card lg:col-span-2">
          <div className="flex items-start justify-between gap-card">
            <p className="max-w-3xl text-5 font-medium">{project.outcome}</p>
            <ArrowUpRight
              className="mt-1 size-6 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </div>
        </div>
      </article>
    </ProjectLink>
  );
}

function ProjectMagazineSpread({
  project,
  index,
}: {
  project: ProjectGridItem;
  index: number;
}) {
  const reversed = index % 2 === 0;

  return (
    <ProjectLink project={project} className="block">
      <article className="group grid overflow-hidden rounded-[1.5rem] border border-border bg-background shadow-[var(--shadow-editorial)] transition-transform duration-300 ease-out hover:-translate-y-1 lg:grid-cols-3">
        <div
          className={`relative min-h-[22rem] overflow-hidden border-b border-border lg:col-span-2 lg:border-b-0 ${reversed ? "lg:order-last lg:border-l" : "lg:border-r"} ${project.tone}`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1024px) 92vw, 54vw"
            className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.04] md:p-10"
          />
        </div>
        <div className="grid content-between gap-card p-card">
          <div className="grid gap-content">
            <div className="flex items-center justify-between gap-content">
              <p className="font-mono text-8 font-semibold uppercase text-primary">
                Index {project.number}
              </p>
              <ArrowUpRight
                className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="editorial-kicker text-primary">{project.eyebrow}</p>
              <h2 className="mt-micro text-4 font-bold">{project.title}</h2>
              <p className="mt-content text-7 font-medium text-muted-foreground">
                by {project.byline}
              </p>
            </div>
          </div>
          <p className="text-7 text-muted-foreground">{project.outcome}</p>
          <div className="grid grid-cols-3 gap-micro border-t border-border pt-content text-9 font-semibold uppercase text-muted-foreground">
            <span>{project.industry}</span>
            <span>{project.role}</span>
            <span>{project.system}</span>
          </div>
        </div>
      </article>
    </ProjectLink>
  );
}

function ProjectMiniIndex({ projects }: { projects: ProjectGridItem[] }) {
  return (
    <div className="grid gap-card md:grid-cols-2">
      {projects.map((project) => (
        <ProjectLink key={project.title} project={project} className="block">
          <article className="group grid h-full overflow-hidden rounded-[1.5rem] border border-border bg-background shadow-[var(--shadow-editorial)] transition-transform duration-300 ease-out hover:-translate-y-1">
            <div className="flex items-center justify-between border-b border-border px-card py-content">
              <p className="font-mono text-8 font-semibold uppercase text-primary">
                Index {project.number}
              </p>
              <p className="editorial-kicker">{project.eyebrow}</p>
            </div>
            <div className={`relative min-h-[16rem] overflow-hidden border-b border-border ${project.tone}`}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 768px) 92vw, 42vw"
                className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.04] md:p-8"
              />
            </div>
            <div className="grid gap-content p-card">
              <h2 className="text-4 font-bold">{project.title}</h2>
              <p className="text-7 text-muted-foreground">{project.outcome}</p>
              <div className="grid grid-cols-3 gap-micro border-t border-border pt-content text-9 font-semibold uppercase text-muted-foreground">
                <span>{project.industry}</span>
                <span>{project.role}</span>
                <span>{project.system}</span>
              </div>
            </div>
          </article>
        </ProjectLink>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="bg-surface-soft">
      <section className="py-section">
        <div className="container">
          <div className="grid gap-hero">
            <div className="grid max-w-5xl gap-card">
              <Button asChild size="sm" className="w-fit">
                <Link href="/">
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Home
                </Link>
              </Button>
              <div className="grid gap-content">
                <p className="editorial-kicker text-primary">Selected Field Notes</p>
                <h1 className="text-2 font-bold">A magazine index of product work.</h1>
                <p className="max-w-3xl text-6 text-muted-foreground">
                  Art-directed project spreads that pair product imagery, metadata, and one
                  sharp signal from each system.
                </p>
              </div>
            </div>
            <div className="grid gap-card">
              <ProjectLeadSpread project={projects[0]} />
              {projects.slice(1, 4).map((project, index) => (
                <ProjectMagazineSpread
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
              <ProjectMiniIndex projects={projects.slice(4)} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
