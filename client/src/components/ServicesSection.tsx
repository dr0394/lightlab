/**
 * Services Section - Silver & Purple Premium Design
 * Drei Hauptleistungen: Lighting Design, Technical Management, Pre-Programming
 * Lila Gradient Hintergrund
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Lightbulb, Settings, Code } from "lucide-react";

const services = [
  {
    number: "#1",
    icon: Lightbulb,
    title: "LIGHTING DESIGN",
    description: "Bei LightLab kreieren wir innovative und maßgeschneiderte Lichtdesigns, die dein Event zum Strahlen bringen. Ob Konzert, Festival oder Corporate Event – wir passen die Beleuchtung perfekt an die gewünschte Atmosphäre und Stimmung an. Unser kreatives Team kombiniert modernste Technologie mit künstlerischer Expertise.",
  },
  {
    number: "#2",
    icon: Settings,
    title: "TECHNICAL MANAGEMENT",
    description: "Unser erfahrenes technisches Management-Team stellt sicher, dass jedes Event von Anfang bis Ende reibungslos läuft. Wir übernehmen die Koordination aller technischen Aspekte – von der Planung bis zur Ausführung – damit du dich auf das Wesentliche konzentrieren kannst.",
  },
  {
    number: "#3",
    icon: Code,
    title: "PRE-PROGRAMMING",
    description: "Zeit ist bei Events oft begrenzt, deshalb bieten wir eine effiziente Vorprogrammierung. In unserer vollständig ausgestatteten Programmierumgebung bereiten wir die Lichtshow im Voraus bis ins kleinste Detail vor. Das spart wertvolle Setup-Zeit vor Ort und garantiert ein perfekt synchronisiertes Lichterlebnis.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden bg-black">
      <div ref={ref} className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6">
              UNSERE <span className="text-[#9B59B6]">LEISTUNGEN</span>
            </h2>
            <p className="text-[#C0C0C0] text-lg max-w-2xl mx-auto">
              Von der Lichtplanung bis zur perfekten Umsetzung: Mit uns habt ihr alles, 
              was ihr für ein unvergessliches Lichterlebnis braucht.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative p-8 border border-[#C0C0C0]/20 bg-black/50 backdrop-blur-sm h-full transition-all duration-500 hover:border-[#9B59B6]/50 hover:bg-[#9B59B6]/5">
                {/* Number Badge */}
                <span className="absolute -top-4 left-8 bg-[#9B59B6] text-white font-display text-sm px-4 py-1">
                  {service.number}
                </span>
                
                {/* Icon */}
                <div className="mb-6 mt-4">
                  <service.icon className="w-12 h-12 text-[#9B59B6]" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl text-white mb-4 group-hover:text-[#9B59B6] transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#C0C0C0]/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-dashed border-[#9B59B6] text-white font-display text-sm tracking-wider hover:bg-[#9B59B6] hover:border-solid transition-all duration-300"
          >
            JETZT ANFRAGEN
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
