/**
 * Marquee Section - Silver & Purple Premium Design
 * Horizontaler scrollender Text mit Bild
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MarqueeSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Marquee Text */}
      <div className="marquee py-4 border-y border-[#9B59B6]/30">
        <div className="marquee-content">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-display text-4xl md:text-6xl text-[#9B59B6] whitespace-nowrap px-8">
              LIGHTLAB LICHTDESIGN • PREMIUM DESIGN • JETZT ANFRAGEN •
            </span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/commercial-lighting.jpg"
            alt="Premium Lichtdesign"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-xl">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src="/images/logo.png" 
                alt="LightLab Lichtdesign Berlin" 
                className="h-16 w-auto object-contain opacity-80"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-neon group"
              >
                Jetzt Termin anfragen
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={scrollToServices}
                className="btn-neon group"
              >
                Meine Leistungen
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
