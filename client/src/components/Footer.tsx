/**
 * Footer Component - Silver & Purple Premium Design
 * Minimalistischer Footer mit Logo und Premium-Akzenten
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
      <footer className="relative bg-black border-t border-[#9B59B6]/20">
        {/* Main Footer */}
        <div className="container py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Logo & Info */}
            <div>
              <div className="mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="LightLab Lichtdesign Berlin" 
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                LightLab Lichtdesign – Ihr Partner für individuelle 
                Lichtkonzepte in Architektur, Wohnraum und Gewerbe.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/4915123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#C0C0C0]/30 flex items-center justify-center text-[#C0C0C0] hover:bg-[#9B59B6] hover:border-[#9B59B6] hover:text-white transition-all"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a
                  href="mailto:info@lightlab-lichtdesign.de"
                  className="w-10 h-10 border border-[#C0C0C0]/30 flex items-center justify-center text-[#C0C0C0] hover:bg-[#9B59B6] hover:border-[#9B59B6] hover:text-white transition-all"
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
              <h4 className="font-display text-lg text-white mb-6 tracking-wider">MENÜ</h4>
              <nav className="space-y-3">
                {[
                  { href: "#services", label: "Leistungen" },
                  { href: "#advantages", label: "Vorteile" },
                  { href: "#process", label: "Ablauf" },
                  { href: "#projects", label: "Projekte" },
                  { href: "#about", label: "Über uns" },
                  { href: "#contact", label: "Termin buchen" },
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-white/50 hover:text-[#9B59B6] transition-colors text-sm"
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
                  LightLab Lichtdesign<br />
                  Musterstraße 123<br />
                  10115 Berlin
                </p>
                <p>
                  <a href="tel:+4915123456789" className="text-[#C0C0C0] hover:text-[#9B59B6] transition-colors">
                    +49 151 234 567 89
                  </a>
                </p>
                <p>
                  <a href="mailto:info@lightlab-lichtdesign.de" className="text-[#C0C0C0] hover:text-[#9B59B6] transition-colors">
                    info@lightlab-lichtdesign.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#9B59B6]/10">
          <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              © {currentYear} LightLab Lichtdesign Berlin. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => setShowDatenschutz(true)}
                className="text-white/30 hover:text-[#9B59B6] transition-colors text-sm"
              >
                Datenschutz
              </button>
              <button
                onClick={() => setShowImpressum(true)}
                className="text-white/30 hover:text-[#9B59B6] transition-colors text-sm"
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
