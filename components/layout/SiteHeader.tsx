"use client";

import { type TransitionEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { cn } from "@/lib/utils";
import styles from "./SiteHeader.module.css";

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
  const [isVisible, setIsVisible] = useState(true);
  const [isFullyVisible, setIsFullyVisible] = useState(true);
  const [hasSurface, setHasSurface] = useState(false);
  const [hasScrolledAway, setHasScrolledAway] = useState(false);
  const [canAnimateHeader, setCanAnimateHeader] = useState(false);
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const lastScrollY = useRef(0);
  const hasScrolledAwayRef = useRef(false);
  const isLeavingStickyMode = useRef(false);
  const isNavigationVisible = !hasScrolledAway || isVisible;

  useEffect(() => {
    setIsMobileNavigationOpen(false);
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
    lastScrollY.current = window.scrollY;
    hasScrolledAwayRef.current = false;
    isLeavingStickyMode.current = false;
    setIsVisible(true);
    setIsFullyVisible(true);
    setHasSurface(window.scrollY >= NAV_SURFACE_OFFSET);
    setHasScrolledAway(false);
    setCanAnimateHeader(false);

    if (isGenomePage) {
      return;
    }

    function updateNavigationState() {
      const currentScrollY = window.scrollY;
      const isNearTop = currentScrollY < NAV_SURFACE_OFFSET;
      const isPastNavigation = currentScrollY > NAV_HIDE_OFFSET;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const heroElement = document.querySelector("[data-page-hero]");
      const heroRect = heroElement?.getBoundingClientRect();
      const isPastStickyThreshold = heroRect ? heroRect.bottom <= -NAV_HIDE_OFFSET : isPastNavigation;
      const nextHasScrolledAway = isPastNavigation && isPastStickyThreshold;
      const isEnteringStickyMode = nextHasScrolledAway && !hasScrolledAwayRef.current;
      const isExitingStickyMode = !nextHasScrolledAway && hasScrolledAwayRef.current;
      const shouldRevealStickyNavigation = nextHasScrolledAway && isScrollingUp;
      const nextIsVisible = !nextHasScrolledAway || shouldRevealStickyNavigation;

      if (!nextIsVisible || isExitingStickyMode) {
        setIsFullyVisible(false);
      }

      if (isExitingStickyMode) {
        isLeavingStickyMode.current = true;
        setCanAnimateHeader(true);
        setIsVisible(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      setCanAnimateHeader(nextHasScrolledAway && !isEnteringStickyMode);
      setIsVisible(nextIsVisible);
      setHasSurface(!isNearTop);
      setHasScrolledAway(nextHasScrolledAway);
      hasScrolledAwayRef.current = nextHasScrolledAway;
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
  }, [isGenomePage, pathname]);

  function handleHeaderTransitionEnd(event: TransitionEvent<HTMLElement>) {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") {
      return;
    }

    if (isLeavingStickyMode.current) {
      isLeavingStickyMode.current = false;
      hasScrolledAwayRef.current = false;
      setCanAnimateHeader(false);
      setHasScrolledAway(false);
      return;
    }

    if (isVisible) {
      setIsFullyVisible(true);
    }
  }

  if (isGenomePage) {
    return (
      <header className="z-40 pt-8">
        <div className="container p-1">
          <div
            className={cn(
              styles.surface,
              "relative flex h-20 items-center justify-between rounded-[2rem] px-micro",
            )}
          >
            <Link
              href="/"
              className="inline-flex rounded-pill py-3 pl-1 text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft"
              aria-label="Tibor Lovas home"
            >
              <BrandLogo className="h-12 w-auto" />
            </Link>
            <nav className="hidden items-center justify-center text-9 font-semibold uppercase text-foreground md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "rounded-pill px-5 py-5 text-center transition-all duration-200 ease-out hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft",
                    pathname === item.href && "text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <MobileNavigation
              pathname={pathname}
              isOpen={isMobileNavigationOpen}
              onOpenChange={setIsMobileNavigationOpen}
            />
          </div>
        </div>
      </header>
    );
  }

  return (
    <div className="relative h-[calc(5rem+2.5rem)]">
      <header
        className={cn(
          styles.header,
          "z-40",
          canAnimateHeader && styles.animatedHeader,
          hasScrolledAway
            ? "fixed inset-x-0 top-0"
            : "absolute inset-x-0 top-8",
          isNavigationVisible ? styles.visible : styles.hidden,
        )}
        aria-hidden={!isNavigationVisible}
        inert={!isNavigationVisible}
        onTransitionEnd={handleHeaderTransitionEnd}
      >
        <div className="container p-1">
          <div
            className={cn(
              styles.surface,
              "relative flex h-20 items-center justify-between rounded-[2rem] px-micro",
              hasSurface && hasScrolledAway && isNavigationVisible && isFullyVisible && styles.blurredSurface,
            )}
          >
            <Link
              href="/"
              className="inline-flex rounded-pill py-3 pl-1 text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft"
              aria-label="Tibor Lovas home"
            >
              <BrandLogo className="h-12 w-auto" />
            </Link>
            <nav className="hidden items-center justify-center text-9 font-semibold uppercase text-foreground md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "rounded-pill px-5 py-5 text-center transition-all duration-200 ease-out hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-soft",
                    pathname === item.href && "text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <MobileNavigation
              pathname={pathname}
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
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

function MobileNavigation({ pathname, isOpen, onOpenChange }: MobileNavigationProps) {
  return (
    <div className="flex justify-end md:hidden">
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
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            className={cn(
              styles.mobileOverlayLink,
              pathname === item.href && "text-primary",
            )}
            style={{ transitionDelay: isOpen ? `${100 + index * 45}ms` : "0ms" }}
            onClick={() => onOpenChange(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
