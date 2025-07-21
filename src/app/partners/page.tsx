"use client";

import Header from "@/app/components/ui/Header";
import Footer from "@/app/components/ui/Footer";
import Hero from "@/app/components/ui/Hero";
import Feature from "@/app/components/ui/Feature";
import FaqSection from "@/app/components/ui/FaqSection";
import FeatureBulletBlock from "../components/ui/FeatureBullets";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PartnerPage() {
  return (
    <main
      id="main-content"
      className="min-h-screen flex flex-col bg-accent-cream text-text"
    >
      <Header />
      {/* Hero Section with flowing background lines */}
      <div className="relative overflow-hidden bg-brand text-white">
        <Hero
          variant="text"
          title="Partner with Insp1re"
          subtitle="Join us in empowering individuals worldwide on their self-mastery journey through our innovative app."
          cta={{ label: "Get in Touch" }}
          className="py-24 px-6 relative z-10"
          withWave={true}
          withFlowLines={true}
        />
      </div>
      {/* Content Sections */}
      <div className="space-y-20 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Feature
            title="Insp1re is built for lasting impact."
            body="We're more than a self-improvement app — we're a platform for personal transformation.
By combining mindfulness, movement, and motivation, Insp1re helps individuals build lifelong habits of self-awareness and growth. Our mission is to make meaningful change approachable, accessible, and joyful."
            imageSrc="/assets/partnerImg.png"
            align="left"
            className="z-10"
          />
          <div className="absolute top-[3%] right-[-1%] w-[300px] h-[280px] md:w-[473px] md:h-[473px] md:top-[3%] md:right-[-1%] border-2 border-accent-gold z-10"></div>
          <div className="absolute top-[5%] right-[-2%] w-[300px] h-[280px] md:w-[473px] md:h-[473px] md:top-[5%] md:right-[-2%] border-2 border-accent-gold opacity-80 z-10"></div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Feature
            title="A partnership rooted in purpose."
            body="We take a thoughtful, human-centered approach to growth. Through curated content, engaging tools, and intentional design, we support users on their self-mastery journey — one small step at a time.
As a partner, you'll help amplify that mission while gaining access to collaborative campaigns and shared success."
            imageSrc="/assets/handShake.png"
            reverse
            align="left"
            className="z-10"
          />
          <div className="absolute top-[3%] left-[-1%] w-[300px] h-[280px] md:w-[473px] md:h-[473px] md:top-[3%] md:left-[-1%] border-2 border-accent-gold z-10"></div>
          <div className="absolute top-[5%] left-[-2%] w-[300px] h-[280px] md:w-[473px] md:h-[473px] md:top-[5%] md:left-[-2%] border-2 border-accent-gold opacity-80 z-10"></div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <FeatureBulletBlock
            title="Why Partner with Insp1re?"
            bullets={[
              "Reach a growth-focused audience aligned with self-improvement",
              "Co-create meaningful content and campaigns",
              "Amplify visibility across our app and social channels",
              "Align with a mission of empowerment and positive change",
              "Get dedicated support and partnership onboarding",
            ]}
            icon={<FaCheckCircle className="w-12 h-12 text-brand/60" />}
            cta={{
              label: "Let’s Connect",
              onClick: () => console.log("Clicked CTA"),
            }}
          />
        </motion.div>
        <FaqSection />
      </div>
      <Footer topWaveColor="#fff9f3" />{" "}
    </main>
  );
}
