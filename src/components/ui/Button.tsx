"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded";

    const variants = {
      primary:
        "bg-[#C9A84C] text-white hover:bg-[#a8872f] focus:ring-[#C9A84C]",
      secondary:
        "bg-[#2C1810] text-white hover:bg-[#4a2e20] focus:ring-[#2C1810]",
      outline:
        "border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white focus:ring-[#C9A84C]",
      ghost:
        "text-[#2C1810] hover:bg-[#2C1810]/10 focus:ring-[#2C1810]",
    };

    const sizes = {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
