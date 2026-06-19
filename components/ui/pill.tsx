import * as React from "react";

import { cn } from "@/lib/utils";

type PillProps = React.HTMLAttributes<HTMLSpanElement>;

export function Pill({ className, ...props }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-pill border-[0.1875rem] border-foreground bg-background px-card py-content text-[2rem] font-bold leading-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}
