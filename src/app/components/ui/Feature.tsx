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
  withOverlayLines?: boolean;
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
  withOverlayLines = false,
}: FeatureSectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 px-6 py-10",
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
        <h2 className="text-5xl md:text-6xl font-heading text-brand font-bold py-4">
          {title}
        </h2>
        {body && (
          <p className="text-text text-xl md:text-2xl max-w-prose">{body}</p>
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

      {/* Image + optional overlay */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        {withOverlayLines && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.05"
              strokeWidth="2"
              d="M0,40 C240,80 400,20 720,60 C1040,100 1200,40 1440,80"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.05"
              strokeWidth="2"
              d="M0,90 C220,130 460,70 780,100 C1080,130 1320,90 1440,100"
            />
          </svg>
        )}

        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={600}
          className="max-h-[400px] md:max-h-[500px] w-auto h-auto object-contain relative z-10"
        />
      </div>
    </section>
  );
}
