"use client";

import React from "react";
import CTAButton from "@/app/components/ui/CTA";
import Header from "@/app/components/ui/Header";
import Footer from "@/app/components/ui/Footer";
import Hero from "@/app/components/ui/Hero";
import HeroText from "@/app/components/ui/Hero";
import WideSection from "@/app/components/ui/WideSection";
import Accordion from "@/app/components/ui/Accordion";
import { FaArrowRight } from "react-icons/fa";

export default function DesignSystemPreview() {
  return (
    <div className="space-y-20 p-10">
      {/* Typography */}
      <section>
        <h2 className="text-2xl font-heading mb-4 text-brand">Typography</h2>
        <div className="space-y-2">
          <h1 className="heading-1">Heading 1 – Playfair 5xl</h1>
          <h2 className="heading-2">Heading 2 – Playfair 4xl</h2>
          <p className="body-lg">Body Large – Inter lg</p>
          <p className="body-base">Body Base – Inter base</p>
        </div>
      </section>

      {/* Color Palette */}
      <section>
        <h2 className="text-2xl font-heading mb-4 text-brand">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Brand", class: "bg-brand" },
            { name: "Brand Light", class: "bg-brand-light" },
            { name: "Brand Dark", class: "bg-brand-dark" },
            { name: "Gold", class: "bg-accent-gold" },
            { name: "Cream", class: "bg-accent-cream" },
            { name: "Black", class: "bg-accent-black" },
            { name: "Text", class: "text-text bg-white border" },
          ].map((color) => (
            <div
              key={color.name}
              className={`p-4 h-24 rounded shadow-md flex items-center justify-center text-sm font-medium ${color.class}`}
            >
              {color.name}
            </div>
          ))}
        </div>
      </section>

      {/* Spacing Scale */}
      <section>
        <h2 className="text-2xl font-heading mb-4 text-brand">Spacing</h2>
        <div className="space-y-2">
          {[0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20].map((n) => (
            <div key={n} className="flex items-center space-x-4">
              <div
                className="bg-brand h-4"
                style={{ width: `var(--space-${n})` }}
              ></div>
              <span className="text-sm">--space-{n}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Buttons */}
      <section>
        <h2 className="text-2xl font-heading mb-4 text-brand">CTA Buttons</h2>
        <div className="space-y-4">
          <div className="space-x-4">
            <CTAButton variant="primary">Primary</CTAButton>
            <CTAButton variant="secondary">Secondary</CTAButton>
            <CTAButton variant="ghost">Ghost</CTAButton>
            <CTAButton variant="link">Link</CTAButton>
          </div>
          <div className="space-x-4">
            <CTAButton size="sm">Small</CTAButton>
            <CTAButton size="base">Base</CTAButton>
            <CTAButton size="lg">Large</CTAButton>
          </div>
          <div className="space-x-4">
            <CTAButton isLoading>Loading</CTAButton>
            <CTAButton startIcon={<FaArrowRight />}>Start Icon</CTAButton>
            <CTAButton endIcon={<FaArrowRight />}>End Icon</CTAButton>
          </div>
        </div>
      </section>

      {/* Header */}
      <section>
        <h2 className="text-2xl font-heading mb-4 text-brand">Header</h2>
        <Header />
      </section>

      {/* Hero Sections */}
      <section>
        <h2 className="text-2xl font-heading mb-4 text-brand">
          Hero with Image
        </h2>
        <Hero title={""} />
      </section>
      <section>
        <h2 className="text-2xl font-heading mb-4 text-brand">
          Hero Text Only
        </h2>
        <Hero title={""} />
      </section>

      {/* Wide Section */}
      <section>
        <h2 className="text-2xl font-heading mb-4 text-brand">Wide Section</h2>
        <WideSection title={""} />
      </section>

      {/* Accordion */}
      <section>
        <h2 className="text-2xl font-heading mb-4 text-brand">Accordion</h2>
        <Accordion items={[]} />
      </section>

      {/* Footer */}
      <section>
        <h2 className="text-2xl font-heading mb-4 text-brand">Footer</h2>
        <Footer />
      </section>
    </div>
  );
}
