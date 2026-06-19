"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#case-studies", label: "Projects" },
  { href: "/#capabilities", label: "Wirefigma" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process & Collaboration" },
  { href: "/genome", label: "Genome" },
  { href: "https://www.linkedin.com/in/tiborlovas/", label: "Contact" },
];

const NAV_SURFACE_OFFSET = 12;
const NAV_HIDE_OFFSET = 120;
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function SiteHeader() {
  const pathname = usePathname();
  const isGenomePage = pathname === "/genome";
  const [isVisible, setIsVisible] = useState(false);
  const [hasSurface, setHasSurface] = useState(true);
  const [hasScrolledAway, setHasScrolledAway] = useState(true);
  const lastScrollY = useRef(0);

  useIsomorphicLayoutEffect(() => {
    function updateNavigationState() {
      const currentScrollY = window.scrollY;
      const isNearTop = currentScrollY < NAV_SURFACE_OFFSET;
      const isPastNavigation = currentScrollY > NAV_HIDE_OFFSET;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      setIsVisible(!isPastNavigation || isScrollingUp);
      setHasSurface(!isNearTop);
      setHasScrolledAway(isPastNavigation);
      lastScrollY.current = currentScrollY;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      lastScrollY.current = window.scrollY;
      updateNavigationState();
    });

    window.addEventListener("scroll", updateNavigationState, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateNavigationState);
    };
  }, []);

  if (isGenomePage) {
    return (
      <header className="z-40">
        <div className="container p-1">
          <div className="flex h-20 items-center justify-between rounded-[2rem] bg-background/70 px-micro backdrop-blur-2xl transition-colors duration-300 ease-out">
            <Link
              href="/"
              className="inline-flex rounded-pill py-3 pl-1 text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft"
              aria-label="Tibor Lovas home"
            >
              <BrandLogo className="h-12 w-auto" />
            </Link>
            <nav className="hidden items-center justify-center text-[0.8rem] font-semibold uppercase text-foreground md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "rounded-pill px-5 py-5 text-center transition-all duration-200 ease-out hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft",
                    pathname === item.href &&
                      "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    );
  }

  return (
    <div className="relative h-[calc(5rem+2.5rem)]">
      <header
        className={cn(
          "z-40 transition-transform duration-300 ease-out",
          hasScrolledAway && isVisible
            ? "fixed inset-x-0 top-0"
            : "absolute inset-x-0 top-8",
          isVisible || !hasScrolledAway ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="container p-1">
          <div
            className={cn(
              "flex h-20 items-center justify-between rounded-[2rem] px-micro transition-colors duration-300 ease-out",
              hasSurface && "bg-background/70 backdrop-blur-2xl",
            )}
          >
            <Link
              href="/"
              className="inline-flex rounded-pill py-3 pl-1 text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft"
              aria-label="Tibor Lovas home"
            >
              <BrandLogo className="h-12 w-auto" />
            </Link>
            <nav className="hidden items-center justify-center text-[0.8rem] font-semibold uppercase text-foreground md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "rounded-pill px-5 py-5 text-center transition-all duration-200 ease-out hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft",
                    pathname === item.href &&
                      "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
