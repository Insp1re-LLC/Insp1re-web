"use client";

import Image from "next/image";
import CTAButton from "@/app/components/ui/CTA";
import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  body?: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
  align?: "left" | "center" | "right";
  cta?: {
    label: string;
    onClick?: () => void;
  };
  className?: string;
  children?: ReactNode;
}

export default function FeatureSection({
  title,
  subtitle,
  body,
  imageSrc,
  imageAlt = "Feature Image",
  reverse = false,
  align = "center",
  cta,
  className,
  children,
}: FeatureSectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 px-6 py-12 md:py-20",
        reverse && "md:flex-row-reverse",
        className
      )}
    >
      {/* Text content */}
      <div
        className={cn(
          "w-full md:w-1/2 space-y-6",
          align === "left" && "text-left",
          align === "right" && "text-right",
          align === "center" && "text-center"
        )}
      >
        {subtitle && (
          <p className="text-accent-gold text-base md:text-lg uppercase tracking-wide font-semibold py-2">
            {subtitle}
          </p>
        )}
        <h2 className="text-5xl md:text-6xl font-heading text-brand font-bold py-2">
          {title}
        </h2>
        {body && (
          <p className="text-text text-xl md:text-2xl max-w-prose py-">
            {body}
          </p>
        )}
        {cta && (
          <div className="mt-8">
            <CTAButton
              className="glow-subtle"
              variant="primary"
              onClick={cta.onClick}
            >
              {cta.label}
            </CTAButton>
          </div>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={600}
          className="max-h-[400px] md:max-h-[500px] w-auto h-auto object-contain"
        />
      </div>
    </section>
  );
}
