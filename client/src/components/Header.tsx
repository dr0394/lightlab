/**
 * Header Component - Silver & Purple Premium Design
 * Sticky navigation with logo and menu button
 */

import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "Über uns" },
  { href: "#services", label: "Leistungen" },
  { href: "#advantages", label: "Vorteile" },
  { href: "#process", label: "Ablauf" },
  { href: "#projects", label: "Projekte" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-black/90 backdrop-blur-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center group"
        >
          <img 
            src="/images/logo.png" 
            alt="LightLab Lichtdesign Berlin" 
            className="h-14 md:h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center gap-2 text-[#9B59B6] hover:text-[#C0C0C0] transition-colors font-display text-lg tracking-wider"
        >
          <Plus className={`w-5 h-5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`} />
          MENU
        </button>
      </div>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40"
          >
            <div className="container h-full flex flex-col justify-center items-center">
              <nav className="flex flex-col items-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className="font-display text-4xl md:text-6xl text-white hover:text-[#9B59B6] transition-colors tracking-wider"
                  >
                    {link.label.toUpperCase()}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  onClick={() => scrollToSection("#contact")}
                  className="mt-8 btn-neon-filled"
                >
                  Termin buchen
                </motion.button>
              </nav>
              
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-[#9B59B6] hover:text-[#C0C0C0] transition-colors"
              >
                <X size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
