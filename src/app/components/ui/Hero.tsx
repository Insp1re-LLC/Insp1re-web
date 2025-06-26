"use client";

import Image from "next/image";
import CTAButton from "@/app/components/ui/CTA";
import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

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
  withWave?: boolean;
  withFlowLines?: boolean;
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
  withWave = false,
  withFlowLines = false,
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
        "relative px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center bg-brand text-white overflow-hidden",
        className
      )}
    >
      <motion.div
        className="max-w-3xl space-y-6 md:space-y-10 z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {" "}
        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            {subtitle}
          </p>
        )}
        {cta && (
          <div className="mt-8">
            <CTAButton className="glow-pulse" variant="blue" onClick={cta.onClick}>
              {cta.label}
            </CTAButton>
          </div>
        )}
        {children && <div className="mt-6">{children}</div>}
      </motion.div>

      {withWave && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[80px] md:h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#FDF9F3"
              fillOpacity="1"
              d="M0,64L48,96C96,128,192,192,288,213.3C384,235,480,213,576,186.7C672,160,768,128,864,122.7C960,117,1056,139,1152,165.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      )}
      {withFlowLines && (
        <svg
          className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeOpacity="0.08"
            className="animate-pulse-second"
            d="M0,40 C240,80 400,20 720,60 C1040,100 1200,40 1440,80"
          />
          <path
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeOpacity="0.08"
            className="animate-pulse-once"
            d="M0,190 C200,240 520,160 840,200 C1120,230 1440,170 1440,170"
          />
          <path
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeOpacity="0.08"
            d="M0,270 C260,310 460,250 760,290 C1060,330 1300,270 1440,280"
          />
          <path
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeOpacity="0.08"
            d="M0,360 C180,400 400,340 720,370 C1040,400 1260,360 1440,370"
          />
          <path
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeOpacity="0.08"
            className="animate-pulse-once"
            d="M0,450 C220,490 480,430 780,460 C1080,490 1320,450 1440,460"
          />
          <path
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeOpacity="0.08"
            className="animate-pulse-second"
            d="M0,620 C300,590 720,660 1140,600 C1320,570 1440,580 1440,580"
          />
        </svg>
      )}
    </section>
  );
}
