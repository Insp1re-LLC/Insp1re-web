"use client";

// import Link from "next/link";
import { cn } from "@/app/lib/utils";

type PromoBannerProps = {
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
};

export default function PromoBanner({
  // headline = "Follow us on social for a chance to win a free month of Insp1re Limitless!",
  // subtext = "Winners announced monthly. Tap below to join the community.",
  // ctaText = "See our socials",
  // ctaLink = "/links",
  className,
}: PromoBannerProps) {
  return (
    <section
      role="region"
      aria-label="Social promo"
      className={cn("bg-accent-gold py-8 px-4 md:px-8 text-center", className)}
    >
      <div className="py-10 px-20">
        <p className="text-6xl text-white font-heading">
          Find us on social for a chance to win{" "}
          <p className="font-bold text-white">1 month</p>
          <p className="text-brand"> Insp1re Limitless!</p>
        </p>
      </div>
    </section>
  );
}
