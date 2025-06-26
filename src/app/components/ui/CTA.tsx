import { cn } from "@/app/lib/utils";
import Link from "next/link"; // Add at top
import { ReactNode } from "react";

type CTAProps = {
  children: ReactNode;
  as?: "button" | "a" | "link";
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "link" | "blue" | "glow";
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
  as = "button",
  href,
  variant = "blue",
  size = "base",
  isLoading = false,
  disabled = false,
  startIcon,
  endIcon,
  type = "button",
  onClick,
  className,
}: CTAProps) {
  const baseClass = "btn transition-all duration-200 transform hover:scale-105";
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    link: "btn-link",
    blue: "btn-blue",
    glow: "btn-blue glow-pulse",
  }[variant];

  const sizeClass = {
    sm: "btn-sm",
    base: "btn-base",
    lg: "btn-lg",
  }[size];

  const allClasses = cn(
    baseClass,
    variantClass,
    sizeClass,
    isLoading && "btn-loading",
    className
  );

  if (as === "link" && href) {
    return (
      <Link href={href} className={allClasses}>
        {startIcon && <span className="btn-icon-start">{startIcon}</span>}
        {children}
        {endIcon && <span className="btn-icon-end">{endIcon}</span>}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a href={href} className={allClasses}>
        {startIcon && <span className="btn-icon-start">{startIcon}</span>}
        {children}
        {endIcon && <span className="btn-icon-end">{endIcon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={allClasses}
    >
      {startIcon && <span className="btn-icon-start">{startIcon}</span>}
      {children}
      {endIcon && <span className="btn-icon-end">{endIcon}</span>}
    </button>
  );
}
