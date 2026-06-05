"use client";

import { useEffect, useState, type MouseEvent } from "react";

type Anchor = readonly [string, string];

export function CaseStudyAnchorNav({
  items,
  className,
  containerClassName,
}: {
  items: readonly Anchor[];
  className: string;
  containerClassName: string;
}) {
  const [activeId, setActiveId] = useState(items[0]?.[1] ?? "");

  useEffect(() => {
    const sections = items
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const navOffset = Math.min(340, window.innerHeight * .36);
      const atPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const activeSection = atPageBottom
        ? sections.at(-1)
        : sections.reduce<HTMLElement | undefined>((current, section) => (
            section.getBoundingClientRect().top <= navOffset ? section : current
          ), sections[0]);

      if (activeSection) setActiveId(activeSection.id);
    };

    updateActiveSection();
    const animationFrame = window.requestAnimationFrame(updateActiveSection);
    const settleTimeout = window.setTimeout(updateActiveSection, 250);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(settleTimeout);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [items]);

  function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
    const target = document.getElementById(id);

    if (!target) return;

    event.preventDefault();
    event.stopPropagation();
    setActiveId(id);
    window.history.pushState(null, "", `#${id}`);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className={className} aria-label="Case study sections">
      <div className={containerClassName}>
        {items.map(([label, id]) => (
          <a
            aria-current={activeId === id ? "location" : undefined}
            href={`#${id}`}
            key={id}
            onClick={(event) => scrollToSection(event, id)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
