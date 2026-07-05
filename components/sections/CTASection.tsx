import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/sections/Section";

export function CTASection() {
  return (
    <Section>
      <div className="mx-auto grid max-w-4xl justify-items-center gap-loose text-center">
        <div>
          <h2 className="text-1 font-bold">Let&apos;s Chat</h2>
        </div>
        <div className="grid max-w-2xl justify-items-center">
          <p className="text-5 text-muted-foreground">
            If you&apos;re seeking a strategic design partner who helps you to tackle difficult
            challenges, let&apos;s connect.
          </p>
          <div className="mt-hero">
            <Button asChild size="xl">
              <Link href="https://www.linkedin.com/in/tiborlovas/">Let&apos;s Connect</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
