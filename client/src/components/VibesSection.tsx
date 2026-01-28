/**
 * Vibes Section - Shockwave Experience Video
 * 16:9 Video Section mit Atmosphäre
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function VibesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div ref={ref} className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4" style={{
            textShadow: '0 0 30px rgba(255, 107, 0, 0.5)'
          }}>
            THE VIBES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-cyan mx-auto mb-6" />
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Fühle die Energy. Erlebe die Atmosphäre. Werde Teil der Bewegung.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video max-w-6xl mx-auto overflow-hidden"
        >
          {/* Neon Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan via-[#FF6B00] to-cyan opacity-50 blur-xl" />

          {/* Video */}
          <div className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://i.imgur.com/S3ArS3g.jpeg"
            >
              <source src="https://i.imgur.com/neGLAF1.mp4" type="video/mp4" />
            </video>

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none" />
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/50 text-sm tracking-wider">
            SHOCKWAVE — WHERE SOUND MEETS SOUL
          </p>
        </motion.div>
      </div>
    </section>
  );
}
