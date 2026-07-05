import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-pill border transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-accent px-3 py-1 text-[0.8rem] font-semibold uppercase leading-[1.25] tracking-[0.08em] text-white shadow-editorial",
        secondary:
          "border-transparent bg-surface-soft px-3 py-1 text-[0.8rem] font-semibold uppercase leading-[1.25] tracking-[0.08em] text-primary shadow-editorial",
        large:
          "w-fit max-w-full whitespace-nowrap border-[0.1875rem] border-foreground bg-background px-6 py-4 text-[1.375rem] font-medium leading-tight text-foreground sm:px-card sm:py-content sm:text-[1.625rem]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
