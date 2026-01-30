import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neu: "bg-background text-foreground shadow-[4px_4px_8px_hsl(220_25%_80%),-4px_-4px_8px_hsl(220_20%_100%)] hover:shadow-[8px_8px_16px_hsl(220_25%_80%),-8px_-8px_16px_hsl(220_20%_100%)] hover:-translate-y-0.5 active:shadow-[inset_2px_2px_4px_hsl(220_25%_80%),inset_-2px_-2px_4px_hsl(220_20%_100%)] active:translate-y-0",
        neuPrimary: "bg-gradient-to-br from-[hsl(215_50%_23%)] to-[hsl(215_45%_35%)] text-[hsl(220_20%_98%)] shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0",
        hero: "bg-gradient-to-br from-[hsl(215_50%_23%)] to-[hsl(215_45%_35%)] text-[hsl(220_20%_98%)] px-8 py-4 text-base font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 active:translate-y-0",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-8",
        xl: "h-14 rounded-2xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
