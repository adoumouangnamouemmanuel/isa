import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:from-primary/90 hover:to-primary/80 transform hover:scale-[1.02] active:scale-[0.98]",

        gradient:
          "bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg hover:shadow-xl hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 transform hover:scale-[1.02] active:scale-[0.98] animate-glow",

        destructive:
          "bg-gradient-to-r from-destructive to-destructive/90 text-white shadow-lg hover:shadow-xl hover:from-destructive/90 hover:to-destructive/80 transform hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",

        outline:
          "border-2 border-primary/20 bg-background/80 backdrop-blur-sm shadow-md hover:bg-primary/5 hover:border-primary/40 hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] dark:bg-background/50 dark:border-primary/30 dark:hover:bg-primary/10",

        secondary:
          "bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl hover:from-secondary/90 hover:to-secondary/80 transform hover:scale-[1.02] active:scale-[0.98]",

        ghost:
          "hover:bg-primary/10 hover:text-primary hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 dark:hover:bg-primary/20",

        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80 transition-colors duration-300",

        glass:
          "bg-white/10 backdrop-blur-md border border-white/20 text-foreground shadow-lg hover:bg-white/20 hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10",

        success:
          "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-4 has-[>svg]:px-3 text-xs",
        lg: "h-12 rounded-xl px-8 has-[>svg]:px-6 text-base font-semibold",
        xl: "h-14 rounded-xl px-10 has-[>svg]:px-8 text-lg font-bold",
        icon: "size-10 rounded-lg",
        "icon-sm": "size-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
