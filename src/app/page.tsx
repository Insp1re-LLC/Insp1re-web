"use client";

import Header from "@/app/components/ui/Header";
import Hero from "@/app/components/ui/Hero";
import Footer from "@/app/components/ui/Footer";
import FeatureHighlight from "./components/ui/FeatureHighlight";
import Feature from "@/app/components/ui/Feature";
import { FaBrain, FaChartLine, FaDumbbell } from "react-icons/fa";
import WideSection from "./components/ui/WideSection";
import { motion } from "framer-motion";
import PromoBanner from "./components/ui/PromoBanner";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Hero
        variant="image"
        imageSrc="/assets/heroMeditation.png"
        title=""
        className="!py-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Feature
          title="Transform Yourself, Insp1re the World"
          body="Join thousands mastering self-awareness, fitness & mindfulness – all in one app."
          imageSrc="/assets/phoneMockup.png"
          cta={{ label: "Limited Time Offer" }}
          reverse
        >
          <FeatureHighlight
            items={[
              { icon: <FaBrain />, label: "Mindfulness" },
              { icon: <FaDumbbell />, label: "Fitness Plans" },
              { icon: <FaChartLine />, label: "Track Progress" },
            ]}
            className="mt-4"
          />
        </Feature>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Feature
          title="The app has helped me become more mindful and focused in my daily life"
          body="Inspire operates on a freemium model with subscription upgrades and affiliate wellness partnerships."
          imageSrc="/assets/profilepic.png"
          className="pt-0"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <WideSection
          title={"Get weekly inspiration tips and updates"}
          className="py-12"
        />
      </motion.div>

      <PromoBanner />

      <Footer />
    </main>
  );
}
