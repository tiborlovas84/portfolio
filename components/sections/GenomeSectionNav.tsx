"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type GenomeSectionNavItem = {
  href: string;
  label: string;
};

export function GenomeSectionNav({ items }: { items: GenomeSectionNavItem[] }) {
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
      const activationLine = window.scrollY + 180;
      const nextActiveSection = sections.reduce((current, section) => {
        return section.offsetTop <= activationLine ? section : current;
      }, sections[0]);

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
      left:
        activeLink.offsetLeft -
        scrollContainer.clientWidth / 2 +
        activeLink.clientWidth / 2,
      behavior: "smooth",
    });
  }, [activeId]);

  return (
    <nav
      className="sticky top-0 z-30 container p-1"
      aria-label="Genome sections"
    >
      <div
        ref={scrollContainerRef}
        className="scrollbar-none flex items-center overflow-x-auto whitespace-nowrap rounded-[2rem] p-1 text-9 font-semibold uppercase text-foreground backdrop-blur-2xl"
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
                "shrink-0 rounded-pill px-5 py-4 transition-colors duration-200 ease-out hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft",
                isActive &&
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground",
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
