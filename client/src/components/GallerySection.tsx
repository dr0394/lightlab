/**
 * Gallery Section - Past Events & Impressions
 * Shockwave Event Gallery
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  { src: "https://i.imgur.com/wB7zV1V.jpeg", alt: "Shockwave Event 1" },
  { src: "https://i.imgur.com/G5wxs0d.jpeg", alt: "Shockwave Event 2" },
  { src: "https://i.imgur.com/XCiIjKr.jpeg", alt: "Shockwave Event 3" },
  { src: "https://i.imgur.com/agao1Lp.jpeg", alt: "Shockwave Festival" },
  { src: "https://i.imgur.com/S3ArS3g.jpeg", alt: "Shockwave Stage" },
  { src: "https://i.imgur.com/dStIUHx.jpeg", alt: "Shockwave Crowd" },
  { src: "https://i.imgur.com/dC56pp0.jpeg", alt: "Shockwave Night" },
  { src: "https://i.imgur.com/kd7AMhE.jpeg", alt: "Shockwave Energy" },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-gradient-to-b from-black/95 to-black">
      <div ref={ref} className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4" style={{
            textShadow: '0 0 30px rgba(0, 255, 255, 0.5)'
          }}>
            GALLERY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-[#FF6B00] mx-auto mb-6" />
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Momente, die bleiben. Die besten Impressionen unserer vergangenen Events.
          </p>
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden hover-glow ${
                index === 0 || index === 4 ? "md:row-span-2" : ""
              } ${index === 0 || index === 4 ? "aspect-[3/5]" : "aspect-square"}`}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Effects */}
              <div className="absolute inset-0 border-2 border-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/shockwave_graz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Mehr auf Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
