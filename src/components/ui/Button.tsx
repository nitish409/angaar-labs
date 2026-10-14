"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link" | "spark";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal disabled:opacity-50 disabled:pointer-events-none select-none overflow-hidden group";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 font-medium",
      md: "text-sm px-5 py-2.5 gap-2 font-medium tracking-wide",
      lg: "text-base px-7 py-3.5 gap-2.5 font-semibold tracking-wide",
      icon: "w-10 h-10 p-2 justify-center",
    };

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-ember via-flame to-ember bg-[length:200%_auto] hover:bg-[position:right_center] text-white shadow-ember hover:shadow-ember-lg border border-ember-400/30 hover:scale-[1.02] active:scale-[0.98]",
      secondary:
        "bg-surface-elevated/70 hover:bg-surface-elevated text-smoke border border-border hover:border-ember/60 hover:text-white shadow-sm hover:shadow-ember-sm hover:scale-[1.02] active:scale-[0.98]",
      spark:
        "bg-spark hover:bg-spark-hover text-charcoal font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
      ghost:
        "bg-transparent hover:bg-surface-elevated/60 text-ash hover:text-smoke border border-transparent hover:border-border-subdued active:scale-[0.98]",
      link:
        "bg-transparent text-ember hover:text-flame p-0 h-auto underline-offset-4 hover:underline rounded-none focus-visible:ring-0",
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const content = (
      <>
        {/* Subtle glow ray effect for primary buttons */}
        {variant === "primary" && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        )}
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0 transition-transform group-hover:-translate-x-0.5">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
          </>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
