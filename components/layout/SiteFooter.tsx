import Link from "next/link";

const footerItems = [
  { href: "/#case-studies", label: "Projects" },
  { href: "/#capabilities", label: "Wirefigma" },
  { href: "/#about", label: "About" },
  { href: "/#success-stories", label: "Success Stories" },
  { href: "/#process", label: "FAQ" },
  { href: "https://www.linkedin.com/in/tiborlovas/", label: "Resume" },
];

export function SiteFooter() {
  return (
    <footer className="py-loose">
      <div className="container grid justify-items-center gap-content text-center text-[0.8rem] font-semibold uppercase text-muted-foreground">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-micro">
            {footerItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-pill px-5 py-5 transition-colors hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p>All Rights Reserved © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
