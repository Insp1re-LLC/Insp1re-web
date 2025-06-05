"use client";

import Image from "next/image";
import CTAButton from "@/app/components/ui/CTA";
import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface HeroProps {
  variant?: "image" | "text";
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  cta?: {
    label: string;
    onClick?: () => void;
  };
  className?: string;
  children?: ReactNode;
}

export default function Hero({
  variant = "text",
  title,
  subtitle,
  imageSrc,
  imageAlt = "Hero Image",
  cta,
  className,
  children,
}: HeroProps) {
  if (variant === "image" && imageSrc && !title && !subtitle && !cta) {
    return (
      <section
        className={cn(
          "w-full h-[50vh] md:h-[60vh] overflow-hidden relative",
          className
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover w-full h-full"
        />
      </section>
    );
  }

  return (
    <section
      className={cn(
        "px-6 flex flex-col items-center justify-center text-center bg-white",
        className
      )}
    >
      <div className="max-w-3xl space-y-4">
        {subtitle && (
          <p className="text-accent-gold text-sm uppercase tracking-wide font-semibold">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-heading text-brand font-bold">
          {title}
        </h1>
        {cta && (
          <div className="mt-6">
            <CTAButton onClick={cta.onClick}>{cta.label}</CTAButton>
          </div>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
