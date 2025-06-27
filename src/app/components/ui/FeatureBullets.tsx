"use client";

import CTAButton from "./CTA";

interface FeatureBulletBlockProps {
  title: string;
  bullets: string[];
  icon?: React.ReactNode;
  cta?: {
    label: string;
    onClick?: () => void;
  };
  centered?: boolean;
  className?: string;
}

export default function FeatureBulletBlock({
  title,
  bullets,
  icon,
  cta,
  //   centered = true,
  className = "",
}: FeatureBulletBlockProps) {
  return (
    <section className={`py-2 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto text-center text-brand">
        {icon && <div className="mb-6 flex justify-center">{icon}</div>}

        <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-8">
          {title}
        </h2>

        <div className="flex justify-center">
          <ul className="space-y-4 text-lg md:text-xl leading-relaxed text-left">
            {bullets.map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-gold mt-1 text-xl">✔</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {cta && (
          <div className="mt-12 text-center">
            <CTAButton onClick={cta.onClick} variant="primary" size="lg">
              {cta.label}
            </CTAButton>
          </div>
        )}
      </div>
    </section>
  );
}
