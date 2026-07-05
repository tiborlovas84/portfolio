import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { publicPath } from "@/lib/public-path";
import { cn } from "@/lib/utils";

type SourceProject = {
  id: string;
  eyebrow: string;
  title: string;
  byline: string;
  outcome: string;
  metrics?: readonly {
    label: string;
    value: string;
  }[];
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  logo?: string;
  logoAlt?: string;
  external?: boolean;
  featured?: boolean;
  surfaceClass: string;
  mediaClass?: string;
};

const sourceProjects: SourceProject[] = [
  {
    id: "RoadsideAssistance",
    eyebrow: "Internal Platform Redesign",
    title: "Managing Memberships\nat Scale",
    byline: "by Roadside Assistance Company",
    outcome: "Membership operations redesigned for scale, clarity, and safer handoff.",
    metrics: [
      { label: "Duration", value: "1+ year" },
      { label: "Workflow areas", value: "8" },
      { label: "Reusable patterns", value: "14" },
    ],
    cta: "See Case Study",
    href: "/case-study/managing-memberships-at-scale-1-1",
    image: "/webflow/images/Roadside-Assistance-cropped.png",
    imageAlt: "Roadside Assistance product interface mockups",
    featured: true,
    surfaceClass: "bg-surface-soft",
    mediaClass: "scale-[1.22] md:scale-[1.34] lg:scale-[1.28]",
  },
  {
    id: "BigMedia",
    eyebrow: "Product System",
    title: "Finding\nTalents\nFaster",
    byline: "by Big Media Brand",
    outcome: "Talent discovery flows made faster to scan, compare, and act on.",
    cta: "Request Access",
    href: "/request-access?project=Big%20Media%20Brand",
    image: "/webflow/images/Big-Media-Image.png",
    imageAlt: "Media talent search product mockups",
    surfaceClass: "bg-[#f5f8fb]",
    mediaClass: "scale-115 md:scale-125 lg:scale-[1.16] lg:translate-x-8 lg:-translate-y-2",
  },
  {
    id: "PKU-Lab",
    eyebrow: "Healthcare Product",
    title: "Home PHE Testing is Becoming a Reality",
    byline: "by Aptatek-Biosciences",
    outcome: "A complex testing journey translated into a calmer consumer experience.",
    cta: "Request Access",
    href: "/request-access?project=PKU%20Lab",
    image: "/webflow/images/PKU-Lab-Image.png",
    imageAlt: "Home PHE testing product mockups",
    surfaceClass: "bg-[#f4f8f6]",
    mediaClass: "scale-115 md:scale-125 lg:scale-[1.12] lg:translate-x-6 lg:-translate-y-2",
  },
  {
    id: "YouAligned",
    eyebrow: "Mobile App",
    title: "Premium\nOn-Demand Classes",
    byline: "by YouAligned",
    outcome: "A premium class library shaped around browse, preview, and repeat use.",
    cta: "See in App Store",
    href: "https://apps.apple.com/us/app/ya-classes-home-yoga-studio/id1414489703",
    image: "/webflow/images/YogiApproved--Image-Wrap.png",
    imageAlt: "YouAligned classes app screens",
    logo: "/webflow/images/YA-Logo-1.png",
    logoAlt: "YouAligned",
    external: true,
    surfaceClass: "bg-[#f7f6f2]",
    mediaClass: "scale-115 md:scale-125 lg:scale-[1.16] lg:-translate-x-8 lg:-translate-y-2",
  },
  {
    id: "Mercedes",
    eyebrow: "Enterprise AI",
    title: "AI at\nEnterprise Scale",
    byline: "by Mercedes-Benz",
    outcome: "Enterprise AI patterns shaped into usable workflows and decision surfaces.",
    cta: "See Case Study",
    href: "/webflow/case-study/mercedes-ai.html",
    image: "/webflow/images/Mercedes-Image.png",
    imageAlt: "Mercedes-Benz AI product mockups",
    logo: "/webflow/images/Mercedes-Logo.svg",
    logoAlt: "Mercedes-Benz",
    surfaceClass: "bg-[#f6f7fb]",
    mediaClass: "scale-115 md:scale-125 lg:scale-[1.16] lg:-translate-x-8 lg:-translate-y-2",
  },
  {
    id: "wirefigma",
    eyebrow: "Design System",
    title: "Wirefigma",
    byline: "Wireframe Design\nSystem for Figma",
    outcome: "A free Figma system built for fast wireframing and scalable iteration.",
    cta: "Get for Free",
    href: "https://www.figma.com/community/file/817668228861623746",
    image: "/webflow/images/Wirefigma-artwork-5.svg",
    imageAlt: "Wirefigma design system artwork",
    logo: "/webflow/images/Wirefigma-Logo-Wrap.svg",
    logoAlt: "Wirefigma",
    external: true,
    surfaceClass: "bg-background",
    mediaClass: "scale-115 md:scale-125 lg:scale-[1.14] lg:translate-x-6 lg:-translate-y-2",
  },
  {
    id: "genome-project",
    eyebrow: "Portfolio System",
    title: "Genome",
    byline: "Editorial Design\nSystem",
    outcome: "The design language, components, and content rules behind this portfolio.",
    cta: "Explore Genome",
    href: "/genome",
    image: "/genome-project-card.svg",
    imageAlt: "Genome design system specimen cards",
    surfaceClass: "bg-surface-soft",
    mediaClass: "scale-110 md:scale-125 lg:scale-[1.12] lg:-translate-x-6 lg:-translate-y-2",
  },
];

function ProjectAction({ project }: { project: SourceProject }) {
  if (project.external) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-content">
        <Button asChild>
          <a href={project.href} target="_blank" rel="noreferrer">
            {project.cta}
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-content">
      <Button asChild>
        <Link href={project.href}>{project.cta}</Link>
      </Button>
    </div>
  );
}

function SourceProjectArticle({ project, index }: { project: SourceProject; index: number }) {
  const imageFirst = index % 2 === 1;

  return (
    <article
      id={project.id}
      className={cn(
        "grid scroll-mt-24 rounded-[1.5rem] md:rounded-[2rem] lg:grid-cols-2",
        "lg:min-h-[44rem]",
        project.featured && "lg:grid-cols-[0.24fr_0.76fr]",
        project.surfaceClass,
        imageFirst && "lg:[&_.project-media]:order-first lg:[&_.project-copy]:order-last",
      )}
    >
      <div className="project-copy flex min-h-[22rem] items-center justify-center p-card text-center md:min-h-[30rem] md:p-hero">
        <div className="grid max-w-xl justify-items-center gap-card">
          {project.logo ? (
            <Image
              src={publicPath(project.logo)}
              alt={project.logoAlt ?? ""}
              width={192}
              height={96}
              className="h-auto max-h-24 w-fit max-w-48 object-contain"
              unoptimized
            />
          ) : null}
          <div className="grid justify-items-center gap-compact">
            <Badge variant="secondary">{project.eyebrow}</Badge>
            <h2
              className="whitespace-pre-line text-3 font-bold"
            >
              {project.title}
            </h2>
            <p className="whitespace-pre-line text-6 font-medium text-muted-foreground">
              {project.byline}
            </p>
            <p className="max-w-lg text-7 font-medium text-muted-foreground">
              {project.outcome}
            </p>
            {project.metrics ? (
              <div className="grid w-full max-w-lg gap-micro border-y border-foreground/10 py-compact sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="grid gap-1">
                    <p className="text-5 font-bold leading-none">{metric.value}</p>
                    <p className="editorial-kicker text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <ProjectAction project={project} />
        </div>
      </div>
      <div
        className={cn(
          "project-media relative flex min-h-[17rem] items-center justify-center md:min-h-[38rem] lg:min-h-[46rem]",
        )}
      >
        <Image
          src={publicPath(project.image)}
          alt={project.imageAlt}
          fill
          sizes={project.featured ? "(max-width: 1024px) 90vw, 52vw" : "(max-width: 1024px) 90vw, 44vw"}
          className={cn(
            "object-contain p-0 drop-shadow-[0_2rem_3rem_rgba(15,23,42,0.18)] transition-transform duration-500 ease-out",
            project.mediaClass,
          )}
          unoptimized
        />
      </div>
    </article>
  );
}

export function HomepageProjectCard() {
  return <SourceProjectArticle project={sourceProjects[0]} index={0} />;
}

export function SourceProjectsSection() {
  return (
    <section id="case-studies" className="scroll-mt-24 py-hero md:py-section">
      <div className="container">
        <div className="grid gap-hero md:gap-section">
          {sourceProjects.map((project, index) => (
            <Fragment key={project.id}>
              {project.id === "wirefigma" ? (
                <div id="experiments" className="scroll-mt-24">
                  <SourceProjectArticle project={project} index={index} />
                </div>
              ) : (
                <SourceProjectArticle project={project} index={index} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
