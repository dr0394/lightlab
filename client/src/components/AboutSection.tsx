/**
 * About Section - Silver & Purple Premium Design
 * Passion/About mit großen Zitaten und Event-Bildern
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
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <img 
            src="/images/logo.png" 
            alt="LightLab Lichtdesign Berlin" 
            className="h-14 w-auto object-contain opacity-60"
          />
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
            className="font-display text-sm tracking-[0.3em] text-[#9B59B6]"
          >
            PASSION
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
              <span className="text-[#9B59B6]">"</span> Im Hier und Jetzt sein und mit dem Event verschmelzen <span className="text-[#9B59B6]">"</span>
            </blockquote>
            
            <blockquote className="text-lg md:text-xl text-white/70 leading-relaxed">
              <span className="text-[#9B59B6]">"</span> Licht bedeutet für uns: Events transformieren, Emotionen wecken und gemeinsam unvergessliche Momente schaffen. <span className="text-[#9B59B6]">"</span>
            </blockquote>

            <p className="text-[#C0C0C0]/70 text-base leading-relaxed mt-8">
              Seit 2022 kreieren wir bei LightLab innovative Lichtdesigns für Konzerte, Festivals und Corporate Events. 
              Unser kreatives Team kombiniert modernste Technologie mit künstlerischer Expertise, um einzigartige 
              Lichterlebnisse zu schaffen, die dein Publikum fesseln und einen bleibenden Eindruck hinterlassen.
            </p>

            {/* Signature - Logo */}
            <div className="mt-8">
              <img 
                src="/images/logo.png" 
                alt="LightLab Lichtdesign Berlin" 
                className="h-12 w-auto object-contain opacity-50"
              />
            </div>
          </motion.div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src="/images/project-concert-2.jpg"
                alt="Konzert Lichtdesign"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="aspect-[3/4] overflow-hidden mt-12"
            >
              <img
                src="/images/project-event-1.jpg"
                alt="Event Beleuchtung"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
