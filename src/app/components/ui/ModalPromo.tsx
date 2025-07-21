"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

interface ModalPromoProps {
  isOpen: boolean;
  onClose: () => void;
  headline: string;
  subtext?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export default function ModalPromo({
  isOpen,
  onClose,
  headline,
  subtext,
  ctaLabel = "Learn More",
  onCtaClick,
  icon,
  className = "",
}: ModalPromoProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.classList.add("overflow-hidden"); // 🚫 disable scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.classList.remove("overflow-hidden"); // ✅ re-enable scroll
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative bg-white shadow-xl w-full max-w-md p-8 text-center ${className}`}
      >
        {/* Gold accent bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#F1C453] to-[#a6923d] rounded-b-lg" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-4 right-4 text-xl text-gray-700 hover:text-black"
        >
          <FiX />
        </button>

        {/* Icon */}
        {icon && <div className="mb-4 mx-auto">{icon}</div>}

        {/* Headline */}
        <h2 className="text-4xl font-bold text-brand mb-2">{headline}</h2>

        {/* Subtext */}
        {subtext && <p className="text-lg text-text mb-6">{subtext}</p>}

        {/* CTA Button */}
        {ctaLabel && (
          <button
            onClick={onCtaClick}
            className="bg-brand text-white font-semibold py-2 px-6 rounded-md text-lg hover:bg-brand-dark"
          >
            {ctaLabel}
          </button>
        )}
      </div>
    </div>,
    document.body
  );
}
