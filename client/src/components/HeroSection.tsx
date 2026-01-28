/**
 * Hero Section - Silver & Purple Premium Design
 * Vollbild-Hintergrundbild mit Outline-Text und Premium-Buttons
 * Event Lighting Focus
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/project-concert-1.jpg"
          alt="Professionelles Konzert-Lichtdesign mit Bühnenbeleuchtung"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Est. Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-sm tracking-[0.3em] text-[#C0C0C0]/70 block mb-4"
          >
            EST. 2022
          </motion.span>

          {/* Name Treatment - Outline + Filled */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            {/* Large filled text - Silver with Purple glow */}
            <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white block leading-none" style={{
              textShadow: '0 0 20px rgba(155, 89, 182, 0.5), 0 0 40px rgba(155, 89, 182, 0.3)'
            }}>
              LIGHTLAB
            </span>
            <span className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white block leading-none mt-2">
              LICHTDESIGN
            </span>
          </motion.div>

          {/* Tagline - Italic Style */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="tagline text-xl sm:text-2xl md:text-3xl text-[#9B59B6] mb-8"
          >
            Dein Event. Dein Licht. Dein Moment.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Wir sind LightLab – Experten für innovatives Lichtdesign, technisches Management 
            und Pre-Programming. Von Konzerten über Festivals bis zu Corporate Events – 
            wir bringen dein Event zum Strahlen.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="btn-neon-filled group"
            >
              Jetzt anfragen
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={scrollToServices}
              className="btn-neon"
            >
              Unsere Leistungen
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Social Icons - Fixed Right Side */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/4915123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <a
          href="mailto:info@lightlab-lichtdesign.de"
          className="w-12 h-12 rounded-full bg-[#9B59B6] flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="E-Mail"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
