import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const baseStyles =
      "btn-interactive focus-ring font-medium inline-flex items-center justify-center";

    const variants = {
      primary: "bg-accent-primary text-white",
      secondary: "bg-secondary text-secondary-foreground",
      outline:
        "border-2 border-accent-primary text-accent-primary bg-transparent hover:bg-accent-primary hover:text-accent-primary-foreground",
    };

    const sizes = {
      sm: "px-4 py-2 text-body-sm rounded-button",
      md: "px-6 py-3 text-body rounded-button",
      lg: "px-8 py-4 text-body-lg rounded-button",
    };

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";
export { Button };
