/**
 * Process Section - Silver & Purple Premium Design
 * Ablauf mit Silber-Nummern und klarem Layout
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "ANFRAGE",
    description: "Erzählen Sie uns von Ihrem Projekt. In einem ersten Gespräch lernen wir Ihre Wünsche kennen.",
  },
  {
    number: "02",
    title: "KONZEPT",
    description: "Wir analysieren die Architektur und entwickeln ein maßgeschneidertes Lichtkonzept.",
  },
  {
    number: "03",
    title: "PLANUNG",
    description: "Detaillierte technische Ausarbeitung: Leuchtenauswahl, Positionierung, Elektroplanung.",
  },
  {
    number: "04",
    title: "UMSETZUNG",
    description: "Koordination der Installation und finale Einrichtung – bis alles perfekt ist.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="process" className="relative py-20 md:py-32 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #9B59B6 0%, #7D3C98 50%, #5B2C6F 100%)'
    }}>
      <div ref={ref} className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-sm tracking-[0.3em] text-white/60 block mb-4">
            UNSER ABLAUF
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white">
            IHR WEG ZUM LICHT
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Number */}
              <span className="font-display text-8xl text-white/10 absolute -top-4 -left-2">
                {step.number}
              </span>
              
              <div className="relative pt-12">
                <h3 className="font-display text-2xl text-[#C0C0C0] mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-white/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#C0C0C0] font-display text-sm tracking-wider hover:bg-black/80 transition-all group"
          >
            JETZT PROJEKT STARTEN
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
