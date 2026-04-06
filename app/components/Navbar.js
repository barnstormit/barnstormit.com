"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/services", label: "Services", icon: "settings" },
  { href: "/about", label: "About", icon: "info" },
  { href: "/pricing", label: "Pricing", icon: "payments" },
  { href: "/service-area", label: "Service Area", icon: "map" },
  { href: "/remote-support", label: "Remote Support", icon: "terminal" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-deep-navy/95 backdrop-blur-xl shadow-lg shadow-deep-navy/50"
            : "bg-deep-navy/85 backdrop-blur-xl"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 w-full max-w-[1200px] mx-auto">
          {/* Brand */}
          <Link
            href="/"
            className="flex flex-col leading-none font-heading focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
          >
            <span className="text-3xl font-black text-snow-white tracking-tight">
              BARNSTORM
            </span>
            <span className="text-[10px] font-mono text-frost-gray tracking-[0.2em] mt-0.5">
              COMPUTER SERVICES
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-sm uppercase tracking-tight text-snow-white hover:text-vivid-teal transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+17198380435"
              className="hidden lg:flex items-center gap-2 bg-vivid-teal text-deep-navy px-6 py-3 rounded-lg font-heading font-bold text-sm tracking-wide hover:brightness-110 transition-[filter] duration-200 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">call</span>
              (719) 838-0435
            </a>
            <button
              className="md:hidden text-snow-white hover:text-vivid-teal transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-deep-navy/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 h-full w-72 z-[60] bg-midnight-slate flex flex-col p-6 gap-4 transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-black text-xl text-snow-white font-heading">
            BARNSTORM
          </span>
          <button
            className="text-frost-gray hover:text-snow-white transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-2 font-heading">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-frost-gray hover:text-snow-white hover:bg-deep-navy/50 p-3 flex items-center gap-3 transition-colors rounded-lg focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <a
            href="tel:+17198380435"
            className="w-full flex justify-center py-4 bg-vivid-teal text-deep-navy rounded-lg font-heading font-bold focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
          >
            Call (719) 838-0435
          </a>
        </div>
      </aside>
    </>
  );
}
