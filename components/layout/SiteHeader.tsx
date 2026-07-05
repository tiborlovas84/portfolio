"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { cn } from "@/lib/utils";
import styles from "./SiteHeader.module.css";

const navItems = [
  { href: "/genome", label: "Genome" },
  { href: "/#RoadsideAssistance", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process & Collaboration" },
  { href: "/resume", label: "Resume" },
  { href: "https://www.linkedin.com/in/tiborlovas/", label: "Contact" },
];

const projectSubNavItems = [{ href: "/projects", label: "Projects 1.1" }];
const resumeSubNavItems = [
  { href: "/resume-1-1", label: "Resume 1.1" },
  { href: "/resume-1-2", label: "Resume 1.2" },
];

const NAV_SURFACE_OFFSET = 12;
const NAV_HIDE_OFFSET = 120;
const ACTIVE_SECTION_VIEWPORT_OFFSET = 0.35;
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function getSectionIdFromHref(href: string) {
  return href.startsWith("/#") ? href.slice(2) : null;
}

function isNavItemActive(href: string, pathname: string, activeSectionHref: string) {
  if (href === "/#RoadsideAssistance" && pathname === "/projects") {
    return true;
  }

  if (href === "/resume" && pathname.startsWith("/resume")) {
    return true;
  }

  if (href.startsWith("/#")) {
    return pathname === "/" && activeSectionHref === href;
  }

  return pathname === href;
}

function DesktopNavigation({
  pathname,
  activeSectionHref,
}: {
  pathname: string;
  activeSectionHref: string;
}) {
  return (
    <nav className="hidden items-center justify-center text-9 font-semibold uppercase text-foreground lg:flex">
      {navItems.map((item) => {
        const isProjectsItem = item.href === "/#RoadsideAssistance";
        const isResumeItem = item.href === "/resume";
        const subNavItems = isProjectsItem ? projectSubNavItems : isResumeItem ? resumeSubNavItems : [];
        const isActive = isNavItemActive(item.href, pathname, activeSectionHref);
        const link = (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-pill px-5 py-5 text-center transition-all duration-200 ease-out hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft",
              isActive &&
                "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground",
            )}
          >
            {item.label}
          </Link>
        );

        if (!subNavItems.length) {
          return link;
        }

        return (
          <div key={item.href} className="group relative">
            {link}
            <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="grid min-w-44 gap-micro rounded-[1.5rem] bg-background p-micro shadow-editorial ring-1 ring-border">
                {subNavItems.map((subItem) => {
                  const isSubItemActive = pathname === subItem.href;

                  return (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      aria-current={isSubItemActive ? "page" : undefined}
                      className={cn(
                        "rounded-pill px-content py-compact text-center transition-colors hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background",
                        isSubItemActive &&
                          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground",
                      )}
                    >
                      {subItem.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isGenomePage = pathname === "/genome";
  const usesStaticHeader = pathname.startsWith("/case-study");
  const usesNonStickyHeader = isGenomePage;
  const [activeSectionHref, setActiveSectionHref] = useState("");
  const [hasSurface, setHasSurface] = useState(false);
  const [hasScrolledAway, setHasScrolledAway] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const activeSectionFrameRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const isNavigationVisible =
    usesStaticHeader || usesNonStickyHeader || !hasScrolledAway || isVisible || isMobileNavigationOpen;

  useEffect(() => {
    setIsMobileNavigationOpen(false);
  }, [pathname]);

  useIsomorphicLayoutEffect(() => {
    if (pathname !== "/") {
      setActiveSectionHref("");
      return;
    }

    const sectionEntries = navItems
      .map((item) => {
        const id = getSectionIdFromHref(item.href);
        const section = id ? document.getElementById(id) : null;

        return section ? { href: item.href, section } : null;
      })
      .filter((entry): entry is { href: string; section: HTMLElement } => Boolean(entry));

    if (!sectionEntries.length) {
      setActiveSectionHref("");
      return;
    }

    function updateActiveSection() {
      const activationLine =
        window.scrollY + Math.min(window.innerHeight * ACTIVE_SECTION_VIEWPORT_OFFSET, 320);
      const nextActiveEntry = sectionEntries.reduce<(typeof sectionEntries)[number] | null>(
        (current, entry) => {
          const sectionTop = entry.section.getBoundingClientRect().top + window.scrollY;

          return sectionTop <= activationLine ? entry : current;
        },
        null,
      );

      setActiveSectionHref(nextActiveEntry?.href ?? "");
    }

    function scheduleActiveSectionUpdate() {
      if (activeSectionFrameRef.current !== null) return;

      activeSectionFrameRef.current = window.requestAnimationFrame(() => {
        updateActiveSection();
        activeSectionFrameRef.current = null;
      });
    }

    updateActiveSection();
    window.addEventListener("scroll", scheduleActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", scheduleActiveSectionUpdate);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      if (activeSectionFrameRef.current !== null) {
        window.cancelAnimationFrame(activeSectionFrameRef.current);
        activeSectionFrameRef.current = null;
      }

      window.removeEventListener("scroll", scheduleActiveSectionUpdate);
      window.removeEventListener("resize", scheduleActiveSectionUpdate);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isMobileNavigationOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileNavigationOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileNavigationOpen]);

  useIsomorphicLayoutEffect(() => {
    if (usesStaticHeader || usesNonStickyHeader) {
      setHasSurface(false);
      setHasScrolledAway(false);
      setIsVisible(true);
      return;
    }

    lastScrollY.current = window.scrollY;
    setHasSurface(window.scrollY >= NAV_SURFACE_OFFSET);
    const heroElement = document.querySelector<HTMLElement>("[data-page-hero]");
    const heroRect = heroElement?.getBoundingClientRect();
    const isPastHero = heroRect ? heroRect.bottom <= -NAV_HIDE_OFFSET : window.scrollY > NAV_HIDE_OFFSET;

    setHasScrolledAway(isPastHero);
    setIsVisible(!isPastHero);

    function updateNavigationState() {
      const currentScrollY = window.scrollY;
      const isNearTop = currentScrollY < NAV_SURFACE_OFFSET;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const heroElement = document.querySelector<HTMLElement>("[data-page-hero]");
      const heroRect = heroElement?.getBoundingClientRect();
      const nextHasScrolledAway = heroRect
        ? heroRect.bottom <= -NAV_HIDE_OFFSET
        : currentScrollY > NAV_HIDE_OFFSET;

      setHasSurface(!isNearTop);
      setHasScrolledAway(nextHasScrolledAway);
      setIsVisible(!nextHasScrolledAway || isScrollingUp);
      lastScrollY.current = currentScrollY;
    }

    const animationFrame = window.requestAnimationFrame(updateNavigationState);
    window.addEventListener("scroll", updateNavigationState, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateNavigationState);
    };
  }, [usesStaticHeader, usesNonStickyHeader, pathname]);

  return (
    <div className={cn("relative", usesStaticHeader ? "h-auto pt-8" : "h-[calc(5rem+2.5rem)]")}>
      <header
        className={cn(
          styles.header,
          "z-40",
          usesStaticHeader
            ? "relative inset-x-auto top-auto"
            : [
                styles.animatedHeader,
                usesNonStickyHeader
                  ? "absolute inset-x-0 top-8"
                  : hasScrolledAway
                    ? "fixed inset-x-0 top-0"
                    : "absolute inset-x-0 top-8",
                isNavigationVisible ? styles.visible : styles.hidden,
              ],
        )}
        aria-hidden={!isNavigationVisible}
        inert={!isNavigationVisible}
      >
        <div className="container p-1">
          <div
            className={cn(
              styles.surface,
              "relative flex h-20 items-center justify-between rounded-[2rem] px-micro",
              hasSurface && hasScrolledAway && isNavigationVisible && styles.blurredSurface,
            )}
          >
            <Link
              href="/"
              className="inline-flex rounded-pill py-3 pl-1 text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft"
              aria-label="Tibor Lovas home"
            >
              <BrandLogo className="h-12 w-auto" />
            </Link>
            <DesktopNavigation pathname={pathname} activeSectionHref={activeSectionHref} />
            <MobileNavigation
              pathname={pathname}
              activeSectionHref={activeSectionHref}
              isOpen={isMobileNavigationOpen}
              onOpenChange={setIsMobileNavigationOpen}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

type MobileNavigationProps = {
  pathname: string;
  activeSectionHref: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

function MobileNavigation({
  pathname,
  activeSectionHref,
  isOpen,
  onOpenChange,
}: MobileNavigationProps) {
  return (
    <div className="flex justify-end lg:hidden">
      <button
        type="button"
        className={cn(styles.menuButton, isOpen && styles.menuButtonOpen)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => onOpenChange(!isOpen)}
      >
        <span className={styles.menuLine} aria-hidden="true" />
        <span className={styles.menuLine} aria-hidden="true" />
        <span className={styles.menuLine} aria-hidden="true" />
      </button>
      <nav
        id="mobile-navigation"
        className={cn(
          styles.mobileOverlay,
          isOpen ? styles.mobileOverlayOpen : styles.mobileOverlayClosed,
        )}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        {navItems.map((item, index) => {
          const isProjectsItem = item.href === "/#RoadsideAssistance";
          const isResumeItem = item.href === "/resume";
          const subNavItems = isProjectsItem ? projectSubNavItems : isResumeItem ? resumeSubNavItems : [];
          const isActive = isNavItemActive(item.href, pathname, activeSectionHref);

          return (
            <div key={item.href} className="grid gap-micro">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  styles.mobileOverlayLink,
                  isActive &&
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground",
                )}
                style={{ transitionDelay: isOpen ? `${100 + index * 45}ms` : "0ms" }}
                onClick={() => onOpenChange(false)}
              >
                {item.label}
              </Link>
              {subNavItems.map((subItem) => {
                const isSubItemActive = pathname === subItem.href;

                return (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    aria-current={isSubItemActive ? "page" : undefined}
                    className={cn(
                      styles.mobileOverlayLink,
                      "ml-content text-9",
                      isSubItemActive &&
                        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground",
                    )}
                    style={{ transitionDelay: isOpen ? `${130 + index * 45}ms` : "0ms" }}
                    onClick={() => onOpenChange(false)}
                  >
                    {subItem.label}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
