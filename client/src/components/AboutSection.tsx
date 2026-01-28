/**
 * About Section - Shockwave DJ Event Brand
 * Quote & Vision mit Event-Atmosphäre
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div ref={ref} className="container relative z-10">
        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-display text-2xl tracking-wider text-cyan/60" style={{
            textShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
          }}>
            SHOCKWAVE
          </span>
        </motion.div>

        {/* Section Labels */}
        <div className="flex gap-8 mb-8">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-sm tracking-[0.3em] text-white/50"
          >
            ABOUT
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-sm tracking-[0.3em] text-cyan"
          >
            VISION
          </motion.span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-8">
              <span className="text-cyan">"</span> Wir schaffen keine Events – wir kreieren Erlebnisse <span className="text-cyan">"</span>
            </blockquote>

            <blockquote className="text-lg md:text-xl text-white/70 leading-relaxed">
              <span className="text-[#FF6B00]">"</span> Musik ist unsere Sprache. Die Crowd unsere Familie. Der Bass unser Herzschlag. <span className="text-[#FF6B00]">"</span>
            </blockquote>

            <p className="text-white/60 text-base leading-relaxed mt-8">
              Seit 2024 definiert SHOCKWAVE die Clubszene in Graz neu. Von Underground-Techno bis zu
              Progressive House – unsere Lineups sind handverlesen, unsere Produktionswerte höchste Liga.
              Wir glauben an die transformative Kraft der Musik und an die Gemeinschaft, die sie erschafft.
            </p>

            {/* Signature */}
            <div className="mt-8">
              <span className="font-display text-lg tracking-wider text-cyan/40" style={{
                textShadow: '0 0 10px rgba(0, 255, 255, 0.2)'
              }}>
                — THE SHOCKWAVE CREW
              </span>
            </div>
          </motion.div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-[3/4] overflow-hidden relative"
            >
              <img
                src="https://i.imgur.com/wB7zV1V.jpeg"
                alt="Shockwave Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan/20 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="aspect-[3/4] overflow-hidden mt-12 relative"
            >
              <img
                src="https://i.imgur.com/G5wxs0d.jpeg"
                alt="Shockwave Crowd"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B00]/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
