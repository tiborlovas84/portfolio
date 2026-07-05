"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type GenomeFoundationNavItem = {
  href: string;
  label: string;
};

export function GenomeFoundationNav({ items }: { items: GenomeFoundationNavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.href.replace("#", "") ?? "");
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const sectionIds = items.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    function updateActiveSection() {
      const activationLine = 128;
      const containingSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();

        return rect.top <= activationLine && rect.bottom > activationLine;
      });
      const nextActiveSection =
        containingSection ??
        sections.find((section) => section.getBoundingClientRect().top > activationLine) ??
        sections[sections.length - 1];

      setActiveId(nextActiveSection.id);
    }

    function scheduleActiveSectionUpdate() {
      if (animationFrameRef.current !== null) return;

      animationFrameRef.current = window.requestAnimationFrame(() => {
        updateActiveSection();
        animationFrameRef.current = null;
      });
    }

    updateActiveSection();
    window.addEventListener("scroll", scheduleActiveSectionUpdate, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener("scroll", scheduleActiveSectionUpdate);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [items]);

  useEffect(() => {
    const activeLink = activeLinkRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!activeLink || !scrollContainer) return;

    scrollContainer.scrollTo({
      top:
        activeLink.offsetTop -
        scrollContainer.clientHeight / 2 +
        activeLink.clientHeight / 2,
      behavior: "smooth",
    });
  }, [activeId]);

  return (
    <nav
      className="hidden self-start md:sticky md:top-32 md:block md:w-48"
      aria-label="Foundation sections"
    >
      <div
        ref={scrollContainerRef}
        className="scrollbar-none relative flex max-h-[calc(100vh-8rem)] w-48 flex-col items-start gap-micro overflow-visible rounded-none bg-transparent p-0 text-9 font-semibold uppercase text-foreground shadow-none"
      >
        {items.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeId === id;

          return (
            <Link
              key={item.href}
              ref={isActive ? activeLinkRef : null}
              href={item.href}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "relative inline-flex min-h-16 w-auto shrink-0 items-center justify-start overflow-visible rounded-pill px-content py-compact text-left transition-colors duration-200 ease-out hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft",
                isActive
                  ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground"
                  : "text-foreground",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
