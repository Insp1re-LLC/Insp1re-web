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
  cta,
  className,
  children,
}: FeatureSectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 px-6",
        reverse && "md:flex-row-reverse",
        className
      )}
    >
      {/* Text content */}
      <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
        {subtitle && (
          <p className="text-accent-gold text-sm uppercase tracking-wide font-semibold">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-heading text-brand font-bold">
          {title}
        </h2>
        {body && (
          <p className="text-text text-base md:text-lg max-w-prose">{body}</p>
        )}
        {cta && (
          <div className="mt-4">
            <CTAButton onClick={cta.onClick}>{cta.label}</CTAButton>
          </div>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={600}
          className="rounded-xl max-h-[400px] md:max-h-[500px] w-auto h-auto object-contain"
        />
      </div>
    </section>
  );
}
