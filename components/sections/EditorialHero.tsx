import Link from "next/link";
import { Button } from "@/components/ui/button";

export function EditorialHero() {
  return (
    <section className="container pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="max-w-6xl">
        <h1 className="text-[clamp(2.375rem,5.35vw,5.375rem)] font-black leading-[1.06]">
          I&apos;m a <span className="text-primary">Senior Product Designer</span> helping teams decide
          what to build, what to cut, and how to turn the right ideas into scalable systems with
          AI-assisted product thinking.
        </h1>
        <div className="mt-hero-lg">
          <Button asChild size="xl">
            <Link href="https://www.linkedin.com/in/tiborlovas/">
              Let&apos;s Connect
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
