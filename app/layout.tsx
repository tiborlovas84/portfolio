import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tiborlovas.com"),
  title: {
    default: "Tibor Lovas — Senior Product Designer",
    template: "%s — Tibor Lovas",
  },
  description:
    "Senior product designer focused on design systems, complex product workflows, and AI-assisted product design.",
  openGraph: {
    title: "Tibor Lovas — Senior Product Designer",
    description:
      "Premium editorial portfolio for design systems, complex UX, and AI-assisted product design.",
    url: "https://tiborlovas.com",
    siteName: "Tibor Lovas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
