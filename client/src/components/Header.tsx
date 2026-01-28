/**
 * Header Component - Shockwave DJ Event Brand
 * Sticky navigation with Cyan/Orange Neon styling
 */

import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#artists", label: "The Crew" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#booking", label: "Booking" },
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
          ? "py-3 bg-black/90 backdrop-blur-md border-b border-cyan/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center group"
        >
          <span className="font-display text-2xl md:text-3xl tracking-wider" style={{
            color: '#00FFFF',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
          }}>
            SHOCKWAVE
          </span>
        </a>

        {/* Desktop Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center gap-2 text-cyan hover:text-[#FF6B00] transition-colors font-display text-lg tracking-wider"
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
                    className="font-display text-4xl md:text-6xl text-white hover:text-cyan transition-colors tracking-wider"
                    style={{
                      textShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
                    }}
                  >
                    {link.label.toUpperCase()}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  onClick={() => scrollToSection("#booking")}
                  className="mt-8 btn-neon-filled"
                >
                  Booking Anfragen
                </motion.button>
              </nav>

              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-cyan hover:text-[#FF6B00] transition-colors"
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
