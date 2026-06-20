import Link from "next/link";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import styles from "./site-shell.module.css";

const navigation = [
  ["Projects", "/#Wirefigma"],
  ["About", "/#About"],
  ["Success Stories", "/#Testimonials"],
  ["FAQ", "/#FAQ"],
  ["Contact", "/#Contact"],
] as const;

function loadHomepageLogo() {
  const homepage = readFileSync(
    join(process.cwd(), "legacy-webflow", "index.html"),
    "utf8",
  );
  const logo = homepage.match(/<svg width="" height="48"[\s\S]*?<\/svg>/i);

  if (!logo) {
    throw new Error("Could not find the homepage logo.");
  }

  return logo[0];
}

function Brand() {
  return (
    <Link className={styles.brand} href="/" aria-label="Tibor Lovas home">
      <span
        className={styles.brandLogo}
        dangerouslySetInnerHTML={{ __html: loadHomepageLogo() }}
      />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Brand />
        <nav className={styles.navigation} aria-label="Portfolio">
          {navigation.map(([label, href]) => (
            <Link className={styles.navigationLink} href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <details className={styles.mobileMenu}>
          <summary>Menu</summary>
          <nav aria-label="Portfolio mobile">
            {navigation.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <section className="section-footer" id="Footer">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-vflex stack-footer">
          <div className="footer-navbar">
            <Link className="footer-navbar-link w-inline-block" href="/#RoadsideAssistance">
              <div>Projects</div>
            </Link>
            <Link className="footer-navbar-link w-inline-block" href="/#wirefigma">
              <div>Wirefigma</div>
            </Link>
            <Link className="footer-navbar-link w-inline-block" href="/#About">
              <div>About</div>
            </Link>
            <Link className="footer-navbar-link w-inline-block" href="/#Testimonials">
              <div>Success Stories</div>
            </Link>
            <Link className="footer-navbar-link w-inline-block" href="/#FAQ">
              <div>FAQ</div>
            </Link>
            <Link className="footer-navbar-link w-inline-block" href="/#Contact">
              <div>Contact</div>
            </Link>
            <Link className="footer-navbar-link w-inline-block" href="/webflow/resume.html">
              <div>Resume</div>
            </Link>
            <a
              className="footer-navbar-link w-inline-block"
              data-cky-tag="revisit-consent"
              href="#"
              id="open_preferences_center"
            >
              <div>Cookie preferences</div>
            </a>
          </div>
          <div className="dep-copyright">All Rights Reserved © 2026</div>
        </div>
      </div>
    </section>
  );
}

export function SiteContactCta({ className = "" }: { className?: string }) {
  return (
    <section className={`section-cta ${className}`} data-scroll-time=".3" id="Contact">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-vflex stack-cta">
          <div className="w-layout-vflex stack-cta-text">
            <h2 className="dep-text-2">Let&apos;s Chat</h2>
            <div className="dep-text-6">
              If you&apos;re seeking a strategic design partner who helps you to
              tackle difficult challenges, let&apos;s connect.
            </div>
          </div>
          <a
            className="button-primary button-outline w-button"
            href="mailto:hello@tiborlovas.com?subject=Let%27s%20Connect"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
