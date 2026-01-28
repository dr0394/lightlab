/**
 * Footer Component - Shockwave DJ Event Brand
 * Clean Footer mit Cyan/Orange Neon Styling
 */

import { useState } from "react";
import ImpressumModal from "./ImpressumModal";
import DatenschutzModal from "./DatenschutzModal";

export default function Footer() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="relative bg-black border-t border-cyan/20">
        {/* Main Footer */}
        <div className="container py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand & Info */}
            <div>
              <div className="mb-6">
                <span className="font-display text-3xl tracking-wider text-cyan" style={{
                  textShadow: '0 0 20px rgba(0, 255, 255, 0.4)'
                }}>
                  SHOCKWAVE
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Another Dimension of Sound. Premium DJ-Events in Graz & Beyond.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/shockwave_graz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-cyan/30 flex items-center justify-center text-cyan hover:bg-cyan hover:text-black transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="mailto:booking@shockwave-graz.com"
                  className="w-10 h-10 border border-cyan/30 flex items-center justify-center text-cyan hover:bg-cyan hover:text-black transition-all"
                  aria-label="E-Mail"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Menu */}
            <div>
              <h4 className="font-display text-lg text-white mb-6 tracking-wider">NAVIGATION</h4>
              <nav className="space-y-3">
                {[
                  { href: "#about", label: "About" },
                  { href: "#artists", label: "The Crew" },
                  { href: "#events", label: "Events" },
                  { href: "#gallery", label: "Gallery" },
                  { href: "#booking", label: "Booking" },
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-white/50 hover:text-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg text-white mb-6 tracking-wider">KONTAKT</h4>
              <div className="space-y-4 text-sm">
                <p className="text-white/50">
                  SHOCKWAVE<br />
                  Graz, Austria
                </p>
                <p>
                  <a href="tel:+4366412345678" className="text-cyan hover:text-white transition-colors">
                    +43 664 123 45 678
                  </a>
                </p>
                <p>
                  <a href="mailto:booking@shockwave-graz.com" className="text-cyan hover:text-white transition-colors">
                    booking@shockwave-graz.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan/10">
          <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              © {currentYear} SHOCKWAVE. Another Dimension of Sound.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => setShowDatenschutz(true)}
                className="text-white/30 hover:text-cyan transition-colors text-sm"
              >
                Datenschutz
              </button>
              <button
                onClick={() => setShowImpressum(true)}
                className="text-white/30 hover:text-cyan transition-colors text-sm"
              >
                Impressum
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ImpressumModal isOpen={showImpressum} onClose={() => setShowImpressum(false)} />
      <DatenschutzModal isOpen={showDatenschutz} onClose={() => setShowDatenschutz(false)} />
    </>
  );
}
