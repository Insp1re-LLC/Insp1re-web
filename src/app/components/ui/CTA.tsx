"use client";

import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

type CTAProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "base" | "lg";
  isLoading?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

export default function CTAButton({
  children,
  variant = "primary",
  size = "base",
  isLoading = false,
  disabled = false,
  startIcon,
  endIcon,
  type = "button",
  onClick,
  className,
}: CTAProps) {
  const baseClass = "btn";
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    link: "btn-link",
  }[variant];

  const sizeClass = {
    sm: "btn-sm",
    base: "btn-base",
    lg: "btn-lg",
  }[size];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        baseClass,
        variantClass,
        sizeClass,
        isLoading && "btn-loading",
        className
      )}
    >
      {startIcon && <span className="btn-icon-start">{startIcon}</span>}
      {children}
      {endIcon && <span className="btn-icon-end">{endIcon}</span>}
    </button>
  );
}
