"use client";

import React from "react";
import { cn } from "@/app/lib/utils";

interface WideSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function WideSection({
  title,
  subtitle,
  className,
}: WideSectionProps) {
  return (
    <section className={cn("text-center px-30 py-35", className)}>
      <h2 className="text-8xl md:text-7xl font-heading text-brand mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </section>
  );
}
