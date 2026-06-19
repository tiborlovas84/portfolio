import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonHoverClasses =
  "hover:border-primary hover:bg-primary hover:text-primary-foreground";

const buttonVariants = cva(
  `inline-flex w-fit items-center justify-center gap-micro whitespace-nowrap rounded-pill border-6 border-foreground bg-transparent text-8 font-semibold text-foreground shadow-none transition-[background-color,color,border-color,padding] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45 ${buttonHoverClasses}`,
  {
    variants: {
      size: {
        default: "border-[0.1875rem] px-card py-content text-7 font-semibold hover:px-loose",
        sm: "border px-content py-micro text-8",
        lg: "px-card py-compact text-7 hover:px-loose",
        xl: "px-hero py-card text-4 font-semibold hover:px-hero-lg md:px-hero-lg md:py-loose md:hover:px-[6rem]",
        "2xl": "px-hero py-card text-5 font-semibold hover:px-hero-lg",
        icon: "size-11 border",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
