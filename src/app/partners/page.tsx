"use client";

import Header from "@/app/components/ui/Header";
import Footer from "@/app/components/ui/Footer";
import Hero from "@/app/components/ui/Hero";
import Feature from "@/app/components/ui/Feature";
import FaqSection from "@/app/components/ui/FaqSection";

export default function PartnerPage() {
  return (
    <main className="min-h-screen flex flex-col bg-accent-cream text-text">
      <Header />

      <Hero
        variant="text"
        title="Partner with Insp1re"
        subtitle="Join us in empowering individuals worldwide on their self-mastery journey through our innovative app."
        cta={{ label: "Get in Touch" }}
        className="py-24 px-6 text-white bg-brand"
      />

      {/* Content Sections */}
      <div className="space-y-20 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        {/* Frame around IMAGE only */}
        <div className="relative">
          <Feature
            title="About Us"
            body="Insp1re is a leading app dedicated to self-improvement, combining self-awareness, fitness, and mindfulness. We’re committed to fostering positive change and helping users achieve their fullest potential."
            imageSrc="/assets/partnerImg.png"
            align="left"
            className="z-10"
          />
          <div className="absolute top-[3%] right-[-1%] w-[300px] h-[280px] md:w-[508px] md:h-[488px] md:top-[3%] md:right-[-1%] border-2 border-accent-gold z-0"></div>
          <div className="absolute top-[5%] right-[-2%] w-[300px] h-[280px] md:w-[508px] md:h-[488px] md:top-[5%] md:right-[-2%] border-2 border-accent-gold opacity-80 z-0"></div>
        </div>

        {/* Frame around ENTIRE feature block */}
        <div className="relative">
          {/* <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent-gold z-10"></div>
          <div className="absolute -top-2 -left-2 w-full h-full border-2 border-accent-gold opacity-80 z-10"></div> */}
          <Feature
            title="Our Approach"
            body="We take a holistic approach to personal growth, providing users with a comprehensive suite of tools and resources to support their self-mastery journey. Our focus is on sustainable, meaningful progress."
            imageSrc="/assets/partnerImg.png"
            reverse
            align="left"
            className="relative bg-accent-cream"
          />
        </div>

        {/* No border - control */}
        <Feature
          title="Growth Opportunities"
          body="By partnering with Insp1re, you'll gain access to a growing user base that is passionate about self-improvement. Explore new revenue streams and make a positive impact with us."
          imageSrc="/assets/partnerImg.png"
          align="left"
        />

        <FaqSection />
      </div>

      <Footer />
    </main>
  );
}
