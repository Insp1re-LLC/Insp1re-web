"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-accent-cream text-text border-t border-accent-gold py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Brand and copyright */}
        <div>
          <h2 className="font-heading text-xl text-brand font-semibold">
            Insp1re
          </h2>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} Insp1re. All rights reserved.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-col space-y-2">
          <Link href="/partners" className="hover:underline hover:text-brand">
            Partners
          </Link>
          <Link href="/newsletter" className="hover:underline hover:text-brand">
            Newsletter
          </Link>
          <Link href="/contact" className="hover:underline hover:text-brand">
            Contact
          </Link>
          <Link href="/download" className="hover:underline hover:text-brand">
            Download App
          </Link>
        </div>

        {/* Right: Social Links */}
        <div className="flex space-x-4 text-xl text-brand">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-brand-dark"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-brand-dark"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-brand-dark"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
