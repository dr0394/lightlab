/**
 * Artists Section - The Crew
 * Shockwave DJ/Artist Showcase
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Music } from "lucide-react";

const artists = [
  {
    name: "THE SHOCKWAVE DJs",
    role: "Founders & Resident DJs",
    genre: "Techno / Hard Techno / Bass House",
    instagram: "https://instagram.com/shockwave_graz",
    image: "https://i.imgur.com/gtyD3dl.jpeg",
  },
  {
    name: "SPECIAL GUESTS",
    role: "Rotating Lineup",
    genre: "Various Genres",
    instagram: "https://instagram.com/shockwave_graz",
    image: "https://i.imgur.com/XCiIjKr.jpeg",
  },
  {
    name: "UPCOMING TALENTS",
    role: "Support Acts",
    genre: "Electronic / House",
    instagram: "https://instagram.com/shockwave_graz",
    image: "https://i.imgur.com/agao1Lp.jpeg",
  },
];

export default function ArtistsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="artists" className="relative py-20 md:py-32 bg-gradient-to-b from-black to-black/95">
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
            THE CREW
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-[#FF6B00] mx-auto mb-6" />
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Die Masterminds hinter den Decks. Handverlesene Artists, die wissen, wie man eine Crowd bewegt.
          </p>
        </motion.div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden hover-glow"
            >
              {/* Background Image */}
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-center transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="font-display text-3xl md:text-4xl text-cyan mb-2" style={{
                    textShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
                  }}>
                    {artist.name}
                  </h3>
                  <p className="text-[#FF6B00] font-display text-sm tracking-wider mb-1">
                    {artist.role}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-white/70 text-sm mb-4">
                    <Music className="w-4 h-4" />
                    <span>{artist.genre}</span>
                  </div>

                  {/* Social Links */}
                  <a
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm">Follow</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
