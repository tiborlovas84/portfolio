import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title?: string;
  intro?: string;
  contained?: boolean;
};

export function Section({
  eyebrow,
  title,
  intro,
  contained = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-section", className)} {...props}>
      <div className={cn(contained && "container")}>
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow ? <p className="editorial-kicker mb-5">{eyebrow}</p> : null}
            {title ? <h2 className="text-3 font-semibold">{title}</h2> : null}
            {intro ? <p className="mt-6 text-6 text-muted-foreground">{intro}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
