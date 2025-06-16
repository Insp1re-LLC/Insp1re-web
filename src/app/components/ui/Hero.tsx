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
        "px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center bg-brand",
        className
      )}
    >
      <div className="max-w-3xl space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-base md:text-lg font-medium leading-relaxed">
            {subtitle}
          </p>
        )}
        {cta && (
          <div className="mt-6">
            <CTAButton variant="primary" onClick={cta.onClick}>
              {cta.label}
            </CTAButton>
          </div>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
