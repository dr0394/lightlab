/**
 * Advantages Section - Silver & Purple Premium Design
 * Vorteile mit Silber/Lila-Akzenten auf schwarzem Hintergrund
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Layers, Target, Award, ArrowRight } from "lucide-react";

const advantages = [
  {
    icon: Sparkles,
    title: "MASSGESCHNEIDERT",
    description: "Jedes Projekt ist einzigartig. Wir entwickeln Lichtkonzepte, die exakt auf Ihre Architektur abgestimmt sind.",
  },
  {
    icon: Layers,
    title: "DESIGN + TECHNIK",
    description: "Die perfekte Symbiose aus ästhetischem Anspruch und technischer Exzellenz.",
  },
  {
    icon: Target,
    title: "PRÄZISE PLANUNG",
    description: "Durchdacht bis ins Detail. Von der Lichtberechnung bis zur Elektroplanung.",
  },
  {
    icon: Award,
    title: "PREMIUM QUALITÄT",
    description: "Wir arbeiten mit führenden Herstellern für ein perfektes Ergebnis.",
  },
];

export default function AdvantagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="advantages" className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, #9B59B6 50px, #9B59B6 51px)`,
        }} />
      </div>

      <div ref={ref} className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-sm tracking-[0.3em] text-[#9B59B6] block mb-4">
            WARUM LIGHTLAB
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white">
            DER UNTERSCHIED
          </h2>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 border border-[#C0C0C0]/20 hover:border-[#9B59B6] transition-all duration-300"
            >
              <advantage.icon className="w-10 h-10 text-[#9B59B6] mb-4" />
              <h3 className="font-display text-xl text-[#C0C0C0] mb-3">
                {advantage.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button onClick={scrollToContact} className="btn-neon group">
            Unverbindlich sprechen
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
