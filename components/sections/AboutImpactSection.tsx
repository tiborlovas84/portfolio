import Image from "next/image";

import { StatsStrip } from "@/components/sections/StatsStrip";
import { publicPath } from "@/lib/public-path";

export function AboutImpactSection() {
  return (
    <section id="about" className="py-section">
      <div className="container grid gap-hero lg:grid-cols-[0.48fr_0.52fr] lg:items-end">
        <div className="grid gap-hero lg:pb-hero lg:pl-section">
          <p className="max-w-xl text-5 font-bold">
            I work with product owners, managers, and engineers to turn fast-moving ideas and
            AI-generated output into scalable, production-ready systems.
          </p>
          <Image
            src={publicPath("/signature.svg")}
            alt="Tibor Lovas signature"
            width={170}
            height={65}
            className="h-auto w-44"
            unoptimized
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={publicPath("/about-image.png")}
            alt="Tibor Lovas portrait"
            width={1240}
            height={1208}
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="h-auto w-full max-w-[38rem] rounded-[2rem]"
            priority
            unoptimized
          />
        </div>
      </div>
      <div>
        <StatsStrip />
      </div>
    </section>
  );
}
