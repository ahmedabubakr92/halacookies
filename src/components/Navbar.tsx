"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/hala-cookies-logo.png"
              alt="Hala Cookies Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="font-heading text-xl font-semibold text-brown-dark">
              Hala Cookies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#collections"
              className="font-body text-charcoal-light hover:text-brown transition-colors"
            >
              The Bakes
            </Link>
            <Link
              href="#how-it-works"
              className="font-body text-charcoal-light hover:text-brown transition-colors"
            >
              How to Order
            </Link>
            <Link
              href="#about"
              className="font-body text-charcoal-light hover:text-brown transition-colors"
            >
              Hala's Story
            </Link>
            <Link
              href={`https://wa.me/97450371941?text=${encodeURIComponent("Hello Hala! I'm looking to sweeten up my day (or an event!) with your amazing bakes. 🍪")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown hover:bg-brown-dark text-white font-body font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              Order Now 🍪
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4">
            <Link
              href="#collections"
              onClick={() => setIsOpen(false)}
              className="font-body text-charcoal-light hover:text-brown transition-colors py-2"
            >
              The Bakes
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="font-body text-charcoal-light hover:text-brown transition-colors py-2"
            >
              How to Order
            </Link>
            <Link
                href="#about"
                onClick={() => setIsOpen(false)}
                className="font-body text-charcoal-light hover:text-brown transition-colors py-2"
            >
                Hala's Story
            </Link>
            <Link
              href={`https://wa.me/97450371941?text=${encodeURIComponent("Hello Hala! I'm looking to sweeten up my day (or an event!) with your amazing bakes. 🍪")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-brown hover:bg-brown-dark text-white font-body font-medium px-5 py-2.5 rounded-full transition-colors text-center"
            >
              Order Now 🍪
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
