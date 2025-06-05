"use client";

import Header from "@/app/components/ui/Header";
import Hero from "@/app/components/ui/Hero";
// import WideSection from "@/app/components/ui/WideSection";
import Footer from "@/app/components/ui/Footer";
import Image from "next/image";
import FeatureHighlight from "./components/ui/FeatureHighlight";
import Feature from "@/app/components/ui/Feature";
import { FaBrain, FaChartLine, FaDumbbell } from "react-icons/fa";
import WideSection from "./components/ui/WideSection";

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

      <Feature
        title="The app has helped me become more mindful and focused in my daily life"
        body="Inspire operates on a freemium model with subscription upgrades and affiliate wellness partnerships."
        imageSrc="/assets/inspire.png"
        reverse
        className="pt-0"
      />

      <WideSection
        title={"Get weekly inspiration tips and updates"}
        className="py-12"
      />

      <section className="bg-accent-gold text-white py-5 text-center">
        <h2 className="text-3xl md:text-4xl font-heading">PROMO</h2>
      </section>

      <Footer />
    </main>
  );
}
