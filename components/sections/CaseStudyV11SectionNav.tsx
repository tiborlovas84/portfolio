"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type CaseStudyV11SectionNavItem = {
  href: string;
  label: string;
};

export function CaseStudyV11SectionNav({
  items,
  side = "left",
  ariaLabel = "Case study sections",
}: {
  items: CaseStudyV11SectionNavItem[];
  side?: "left" | "right";
  ariaLabel?: string;
}) {
  const [activeId, setActiveId] = useState(items[0]?.href.replace("#", "") ?? "");
  const [sideNavPosition, setSideNavPosition] = useState({
    isStuck: false,
    top: 0,
  });
  const sideNavRef = useRef<HTMLElement | null>(null);
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const sideNavFrameRef = useRef<number | null>(null);
  useEffect(() => {
    const sectionIds = items.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    function updateActiveSection() {
      const activationLine = 180;
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
    const firstSectionId = items[0]?.href.replace("#", "");
    if (!firstSectionId) return;

    function updateSideNavPosition() {
      const firstSection = document.getElementById(firstSectionId);
      const anchor = firstSection?.querySelector<HTMLElement>(".editorial-kicker") ?? firstSection;

      if (!anchor) return;

      const stickyTop = 128;
      const anchorTop = anchor.getBoundingClientRect().top + window.scrollY;
      const isStuck = window.scrollY + stickyTop >= anchorTop;
      setSideNavPosition({
        isStuck,
        top: isStuck ? stickyTop : anchorTop,
      });
    }

    function scheduleSideNavPositionUpdate() {
      if (sideNavFrameRef.current !== null) return;

      sideNavFrameRef.current = window.requestAnimationFrame(() => {
        updateSideNavPosition();
        sideNavFrameRef.current = null;
      });
    }

    updateSideNavPosition();
    window.addEventListener("scroll", scheduleSideNavPositionUpdate, { passive: true });
    window.addEventListener("resize", scheduleSideNavPositionUpdate);

    return () => {
      if (sideNavFrameRef.current !== null) {
        window.cancelAnimationFrame(sideNavFrameRef.current);
      }

      window.removeEventListener("scroll", scheduleSideNavPositionUpdate);
      window.removeEventListener("resize", scheduleSideNavPositionUpdate);
    };
  }, [items]);

  useEffect(() => {
    const activeLink = activeLinkRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!activeLink || !scrollContainer) return;

    const isDesktopSideNav = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktopSideNav) {
      scrollContainer.scrollTo({
        top:
          activeLink.offsetTop -
          scrollContainer.clientHeight / 2 +
          activeLink.clientHeight / 2,
        behavior: "smooth",
      });

      return;
    }

    scrollContainer.scrollTo({
      left:
        activeLink.offsetLeft -
        scrollContainer.clientWidth / 2 +
        activeLink.clientWidth / 2,
      behavior: "smooth",
    });
  }, [activeId]);

  return (
    <nav
      ref={sideNavRef}
      className={cn(
        "sticky top-0 z-30 p-1",
        "md:top-[var(--case-study-v11-section-nav-top)] md:w-[min(24rem,calc(100vw-3rem))] md:p-0",
        side === "right" ? "md:right-6" : "md:left-6",
        sideNavPosition.isStuck ? "md:fixed" : "md:absolute",
      )}
      style={
        {
          "--case-study-v11-section-nav-top": `${sideNavPosition.top}px`,
        } as CSSProperties
      }
      aria-label={ariaLabel}
    >
      <span
        className={cn(
          "pointer-events-none hidden rounded-pill bg-surface-soft shadow-editorial md:absolute md:inset-y-0 md:block md:w-[4.5rem]",
          side === "right" ? "md:right-0" : "md:left-0",
        )}
        aria-hidden="true"
      />
      <div
        ref={scrollContainerRef}
        className={cn(
          "scrollbar-none relative inline-flex max-w-[calc(100vw-2rem)] items-start gap-micro overflow-x-auto whitespace-nowrap rounded-pill bg-surface-soft p-micro text-9 font-semibold uppercase text-foreground shadow-editorial md:max-h-[calc(100vh-3rem)] md:w-full md:max-w-none md:flex-col md:overflow-y-auto md:rounded-none md:bg-transparent md:shadow-none",
          side === "right" && "md:items-end",
        )}
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
              aria-label={item.label}
              className={cn(
                "group relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-visible rounded-pill text-left transition-colors duration-200 ease-out hover:bg-background hover:text-primary focus-visible:bg-background focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft md:h-16 md:w-16",
                isActive &&
                  "w-auto justify-start px-content py-compact bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground md:w-auto md:py-0",
              )}
            >
              {isActive ? (
                item.label
              ) : (
                <>
                  <span className="size-2.5 shrink-0 rounded-full bg-current transition-opacity duration-150 group-hover:opacity-0 group-focus-visible:opacity-0" aria-hidden="true" />
                  <span
                    className={cn(
                      "pointer-events-none absolute top-0 inline-flex h-full max-w-0 items-center overflow-hidden rounded-pill bg-background px-0 py-compact opacity-0 shadow-editorial transition-all duration-200 group-hover:max-w-80 group-hover:px-content group-hover:opacity-100 group-focus-visible:max-w-80 group-focus-visible:px-content group-focus-visible:opacity-100",
                      side === "right" ? "right-0" : "left-0",
                    )}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
