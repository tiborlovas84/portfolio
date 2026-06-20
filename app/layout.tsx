import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

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
      <body className={`${poppins.variable} ${oswald.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
