"use client";

import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import CTAButton from "./CTA";

interface ScrollPromoBannerProps {
  headline: string;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
}

export default function ScrollPromoBanner({
  headline,
  ctaLabel,
  ctaHref,
  className = "",
}: ScrollPromoBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150 && !isVisible && !dismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, dismissed]);

  if (!isVisible || dismissed) return null;

  return (
    <div
      className={`fixed top-[100px] z-40 w-full bg-brand text-white px-4 py-3 md:px-8 shadow-md flex items-center justify-between gap-4 transition-transform duration-300 ${className}`}
    >
      <p className="text-sm md:text-base font-semibold">{headline}</p>
      <div className="flex items-center gap-4">
        <CTAButton
          as="link"
          href={ctaHref}
          variant="glow"
          size="sm"
          className="text-sm"
        >
          {ctaLabel}
        </CTAButton>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
          className="text-white hover:text-accent-gold text-xl"
        >
          <FiX />
        </button>
      </div>
    </div>
  );
}
