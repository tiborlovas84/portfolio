"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const caseStudyIterations = [
  {
    href: "/case-study/managing-memberships-at-scale-1-1",
    label: "1.3",
  },
  {
    href: "/case-study/managing-memberships-at-scale-1-0",
    label: "1.2",
  },
  {
    href: "/case-study/managing-memberships-at-scale-1-2",
    label: "1.1",
  },
  {
    href: "/case-study/internal-platform",
    label: "1.0",
  },
];

export function CaseStudyIterationTabs({ currentHref }: { currentHref?: string }) {
  const pathname = usePathname();
  const activeHref =
    caseStudyIterations.find((iteration) => iteration.href === pathname)?.href ??
    currentHref ??
    caseStudyIterations[0].href;

  return (
    <nav
      className="mb-card overflow-x-auto scrollbar-none md:fixed md:right-6 md:top-1/2 md:z-30 md:mb-0 md:-translate-y-1/2 md:overflow-visible"
      aria-label="Case study iterations"
    >
      <div className="inline-flex min-w-full gap-micro rounded-pill bg-surface-soft p-micro shadow-editorial md:min-w-0 md:flex-col">
        {caseStudyIterations.map((iteration) => {
          const isActive = iteration.href === activeHref;

          return (
            <Link
              key={iteration.href}
              href={iteration.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "inline-flex shrink-0 justify-center rounded-pill px-content py-compact text-center text-9 font-semibold uppercase text-foreground transition-colors hover:bg-background hover:text-primary focus-visible:bg-background focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft md:size-16 md:items-center md:p-0",
                isActive &&
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground",
              )}
            >
              {iteration.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
