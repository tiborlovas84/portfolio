import { impactSignals } from "@/content/projects";
import { QuoteBlock } from "@/components/sections/QuoteBlock";

export function SuccessStoriesSection() {
  return (
    <section id="success-stories" className="py-section">
      <div className="container grid gap-hero lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
        <QuoteBlock
          name="Carlos J. Gómez"
          title="VP, Product Design at Sotheby’s"
          quote="Reduced developer friction during handoff and set up a scalable token system for color, typography, and spacing."
          signals={impactSignals}
        />
        <div className="grid gap-hero">
          <figure className="grid gap-content">
            <span className="flex h-10 items-center font-accent text-5 font-bold leading-none" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="text-7">
              Tibor&apos;s leadership and talent enabled the team to pull off a really complex
              challenge - redesign of the entire Gooten interface and new Shopify app.
            </blockquote>
            <figcaption className="text-right">
              <p className="text-7 font-extrabold">Boris Krstovic</p>
              <p className="mt-1 text-7">Principal PM at Office Media Group</p>
            </figcaption>
          </figure>
          <figure className="grid gap-content">
            <span className="flex h-10 items-center font-accent text-5 font-bold leading-none" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="text-7">
              As lead of the design team, Tibor was very motivating and encouraging for other
              designers with brilliant ideas for presentation.
            </blockquote>
            <figcaption className="text-right">
              <p className="text-7 font-extrabold">Milan Jovanovic</p>
              <p className="mt-1 text-7">Data Analyst at Gooten</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
