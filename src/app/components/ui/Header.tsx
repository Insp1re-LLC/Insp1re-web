"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CTA from "./CTA";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Partners", href: "/partners" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-accent-cream px-6 py-4 flex items-center justify-between">
      {/* Brand logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="Insp1re Logo" width={28} height={28} />
        <span className="font-heading text-xl text-brand font-bold">
          Insp1re
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`transition-all duration-200 transform ${
              pathname === item.href
                ? "text-brand font-semibold"
                : "text-brand hover:text-brand-dark hover:scale-105"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <CTA
          as="link"
          href="/download"
          variant="secondary"
          size="base"
          className="ml-6"
        >
          Download App
        </CTA>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-brand text-xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-accent-cream py-4 px-6 flex flex-col space-y-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors ${
                pathname === item.href
                  ? "text-brand font-semibold"
                  : "text-brand hover:text-brand-dark"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <CTA
            as="link"
            href="/download"
            variant="secondary"
            size="base"
            className="text-center"
            onClick={() => setMenuOpen(false)}
          >
            Download App
          </CTA>
        </div>
      )}
    </header>
  );
}
