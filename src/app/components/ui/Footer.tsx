"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";
type FooterProps = {
  topWaveColor?: string; // default to accent gold if none provided
};

export default function Footer({ topWaveColor = "#a6923d" }: FooterProps) {
  return (
    <footer className="bg-brand text-white relative">
      {/* Wave at the top */}
      <div className="w-full overflow-hidden leading-none -mb-1">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fill={topWaveColor}
            d="M0,160 C120,140 240,120 360,130 C480,140 600,180 720,190 C840,200 960,180 1080,160 C1200,140 1320,120 1440,100 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Brand and copyright */}
        <div>
          <h2 className="font-heading text-2xl font-semibold">Insp1re</h2>
          <p className="text-sm mt-2 opacity-80">
            &copy; {new Date().getFullYear()} Insp1re. All rights reserved.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <Link
            href="/partners"
            className="hover:underline hover:text-accent-gold"
          >
            Partners
          </Link>
          <Link
            href="/newsletter"
            className="hover:underline hover:text-accent-gold"
          >
            Newsletter
          </Link>
          <Link
            href="/contact"
            className="hover:underline hover:text-accent-gold"
          >
            Contact
          </Link>
          <Link
            href="/download"
            className="hover:underline hover:text-accent-gold"
          >
            Download App
          </Link>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-start justify-start md:justify-end space-x-4 text-2xl">
          <a
            href="https://youtube.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-accent-gold"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent-gold"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-accent-gold"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com/@yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-accent-gold"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* Bottom row: Terms and Legal Notice */}
      <div className="mt-8 border-t border-white/10 pt-4 text-sm text-center">
        <Link href="/terms" className="underline hover:text-accent-gold">
          Terms of Service
        </Link>
        <span className="mx-2">|</span>
        <Link href="/legal" className="underline hover:text-accent-gold">
          Legal Notice
        </Link>
      </div>
    </footer>
  );
}
