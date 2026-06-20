"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function PageBackgroundTransition({ children }: { children: React.ReactNode }) {
  const [hasPassedHeroHalf, setHasPassedHeroHalf] = useState(false);

  useEffect(() => {
    document.body.classList.add("page-background-transition");

    function updateBackground() {
      const hero = document.querySelector<HTMLElement>("[data-page-hero]");
      if (!hero) return;

      const threshold = hero.offsetTop + hero.offsetHeight / 2;
      const hasPassedThreshold = window.scrollY >= threshold;

      setHasPassedHeroHalf(hasPassedThreshold);
      document.body.classList.toggle("page-background-transition-white", hasPassedThreshold);
    }

    updateBackground();

    window.addEventListener("scroll", updateBackground, { passive: true });
    window.addEventListener("resize", updateBackground);

    return () => {
      window.removeEventListener("scroll", updateBackground);
      window.removeEventListener("resize", updateBackground);
      document.body.classList.remove("page-background-transition", "page-background-transition-white");
    };
  }, []);

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-700 ease-out",
        hasPassedHeroHalf ? "bg-background" : "bg-surface-soft",
      )}
    >
      {children}
    </div>
  );
}
