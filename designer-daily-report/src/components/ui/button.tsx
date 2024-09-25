import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define button styles using class variance authority
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 duration-500 relative", // added relative for pseudo-elements
  {
    variants: {
      variant: {
        // Default variant with a background color and hover effect for shadow
        default:
          "bg-primary text-primary-foreground shadow-lg  border-2 border-[#111] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:translate-x-[4px] before:translate-y-[4px] before:bg-[#111] before:rounded-md before:transition-transform before:duration-200 before:z-[-1] hover:before:translate-x-0 hover:before:translate-y-0 ",

        // Outline variant with border and shadow effect on hover
        outline:
          "border border-primary text-foreground bg-background shadow-lg hover:bg-primary hover:text-primary-foreground border-2 border-[#111] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:translate-x-[4px] before:translate-y-[4px] before:bg-[#111] before:rounded-md before:transition-transform before:duration-200 before:z-[-1] hover:before:translate-x-0 hover:before:translate-y-0",

        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:scale-105",
        ghost: "hover:bg-primary hover:text-primary-foreground",
        link: "text-primary-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8 py-7",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define ButtonProps and export the Button component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
