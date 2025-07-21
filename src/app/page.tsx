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
import ModalPromo from "./components/ui/ModalPromo";
import { useEffect, useState } from "react";
import { FiZap } from "react-icons/fi";
import BannerPromo from "./components/ui/ScrollBanner";
import ScrollBanner from "./components/ui/ScrollBanner";
export default function HomePage() {
  // *****uncomment for Modal Usage ******
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  // ***********
  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      <Header />
      {/* uncomment for banner usage  */}
      <ScrollBanner
        headline="✨ Limited-time Offer: Get 20% Off Premium!"
        ctaLabel="Claim Now"
        ctaHref="/promo"
      />
      {/* *** end banner ****** */}
      {/* uncomment for modal Usage */}
      <ModalPromo
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        icon={<FiZap className="text-brandGold text-4xl mx-auto" />}
        headline="20% Off!"
        subtext="Limited-time offer — unlock premium features for less."
        ctaLabel="Claim Offer"
        onCtaClick={() => {
          console.log("Claim offer clicked");
          setIsModalOpen(false);
        }}
      />
      {/* **** end modal **** */}
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
          withOverlayLines
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
      {/* <div className="relative w-full overflow-hidden leading-none -mt-1">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fill="#a6923d" // or your promo banner background
            d="M0,224L80,208C160,192,320,160,480,160C640,160,800,192,960,186.7C1120,181,1280,139,1360,117.3L1440,96V0H0Z"
          />
        </svg>
      </div> */}
      <PromoBanner />

      <Footer />
    </main>
  );
}
