"use client";

import Accordion from "@/app/components/ui/Accordion";
import { motion } from "framer-motion";

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
    <section className="bg-accent-cream py-2 pb-20 px-4 md:px-10 text-center overflow-hidden rounded-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-heading text-brand mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-text mb-12">
          Investors and partners often ask us…
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-left divide-y divide-muted rounded-2xl bg-white/60 shadow-xl backdrop-blur-md"
      >
        <Accordion items={faqItems} />
      </motion.div>
    </section>
  );
}
