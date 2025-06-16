"use client";

import Accordion from "@/app/components/ui/Accordion";

export default function FaqSection() {
  const faqItems = [
    {
      title: "What is Insp1re’s business model?",
      content:
        "Insp1re operates on a freemium app model with subscription upgrades. We also monetize through affiliate wellness programs.",
    },
    {
      title: "How do you acquire new users?",
      content:
        "We acquire users through organic growth, referral programs, and strategic partnerships with wellness platforms and influencers.",
    },
    {
      title: "What makes Insp1re different from other wellness apps?",
      content:
        "Insp1re combines fitness, mindfulness, and behavioral psychology in a beautifully designed, gamified experience with community features.",
    },
    {
      title: "How do partnerships work?",
      content:
        "Partners can co-brand experiences, offer content in-app, or integrate services directly through our API and affiliate tools.",
    },
    {
      title: "How will funds be used if I invest?",
      content:
        "Funds are allocated toward product development, user acquisition, and strategic expansion into global markets.",
    },
  ];

  return (
    <section className="bg-accent-cream py-16 px-4 md:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-heading text-brand mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-text mb-10">Investors and partners often ask us…</p>
      <div className="max-w-2xl mx-auto text-left">
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
