"use client";

// import Link from "next/link";
// import { cn } from "@/app/lib/utils";

type PromoBannerProps = {
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
};

export default function PromoBanner({}: // headline = "Follow us on social for a chance to win a free month of Insp1re Limitless!",
// subtext = "Winners announced monthly. Tap below to join the community.",
// ctaText = "See our socials",
// ctaLink = "/links",
// className,
PromoBannerProps) {
  return (
    <section
      role="region"
      aria-label="Social promo"
      className="bg-accent-gold py-8 px-4 md:px-8 text-center"
    >
      <div className="pt-32 pb-10 px-4 md:px-20">
        <p className="text-6xl text-white font-heading">
          Find us on social for a chance to win{" "}
        </p>
        <p className="font-bold text-white text-6xl font-heading">1 month</p>
        <p className="text-brand text-6xl font-heading"> Insp1re Limitless!</p>
      </div>
    </section>
  );
}
