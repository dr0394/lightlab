/**
 * Rental Section - Silver & Purple Premium Design
 * Equipment Rental Preisliste
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Lightbulb, Volume2, Zap, Network, Sparkles, Package } from "lucide-react";

const categories = [
  {
    id: "light",
    name: "LIGHT",
    icon: Lightbulb,
    items: [
      { product: "grandMA3 Light", price: "450€ / Tag*" },
      { product: "grandMA3 2Port Node", price: "150€ / Tag*" },
      { product: "grandMA3 Viz-Key", price: "50€ / Tag*" },
      { product: "Depence R4 Dongle", price: "200€ / Tag*" },
      { product: "ADJ Jolt Bar FX2", price: "100€ / Tag*" },
      { product: "Botex SP-1500 DMX Strobe", price: "30€ / Tag*" },
      { product: "WOLFMIX W1", price: "60€ / Tag*" },
    ],
  },
  {
    id: "sound",
    name: "SOUND",
    icon: Volume2,
    items: [
      { product: "dB Technologies 15\" 1500W/2500W Subwoofer", price: "50€ / Tag*" },
      { product: "dB Technologies 18\" 1800W/2800W Subwoofer", price: "70€ / Tag*" },
      { product: "dB Technologies 15\" 1500W/1800W Full-Range", price: "50€ / Tag*" },
      { product: "EV Audio 15\" 2000W Full-Range", price: "70€ / Tag*" },
    ],
  },
  {
    id: "laser",
    name: "LASER",
    icon: Zap,
    items: [
      { product: "Laserworld CS-12.000RGB FX MK2", price: "250€ / Tag*" },
      { product: "Pangolin 30W RGB Laser + FB4-SE", price: "450€ / Tag*" },
      { product: "Pangolin FB4-BOX", price: "50€ / Tag*" },
      { product: "Laserworld 3W RGB Laser", price: "50€ / Tag*" },
      { product: "Laserworld 2W RGB Laser", price: "30€ / Tag*" },
      { product: "Laserworld 1W RGB Laser", price: "15€ / Tag*" },
      { product: "Pangolin Beyond Essentials V5.5", price: "150€ / Tag*" },
    ],
  },
  {
    id: "network",
    name: "NETWORK + DJ",
    icon: Network,
    items: [
      { product: "UniFi USW48 Switch", price: "150€ / Tag*" },
      { product: "TP-LINK 5-Port Switch", price: "10€ / Tag*" },
      { product: "TP-LINK 16-Port Switch", price: "25€ / Tag*" },
      { product: "Pioneer CDJ3000", price: "80€ / Tag*" },
      { product: "Pioneer CDJ2000-NX2", price: "60€ / Tag*" },
      { product: "Pioneer DJM A9", price: "90€ / Tag*" },
      { product: "Pioneer XDJ RX", price: "80€ / Tag*" },
    ],
  },
  {
    id: "sfx",
    name: "SPECIAL FX",
    icon: Sparkles,
    items: [
      { product: "MagicFX StageFlame", price: "250€ / Tag*" },
      { product: "Showven Sparkular", price: "250€ / Tag*" },
      { product: "MOKA SFX CO2 Jet", price: "30€ / Tag*" },
      { product: "Smoke Factory Tour-Hazer II \"S\"", price: "100€ / Tag*" },
      { product: "beamZ 3kW Bodennebel LF6000", price: "150€ / Tag*" },
    ],
  },
  {
    id: "extras",
    name: "EXTRAS",
    icon: Package,
    items: [
      { product: "AKAI APC Mini MK2", price: "20€ / Tag*" },
      { product: "AKAI APC40 MK2", price: "50€ / Tag*" },
      { product: "Zipper Generator 1,8kW", price: "100€ / Tag*" },
      { product: "Hyundai Generator 6,5kW", price: "150€ / Tag*" },
      { product: "König & Söhne Generator 10kW", price: "200€ / Tag*" },
      { product: "EcoFlow Delta MAX 2kWh", price: "100€ / Tag*" },
    ],
  },
];

export default function RentalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("light");

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeItems = categories.find(c => c.id === activeCategory)?.items || [];

  return (
    <section id="rental" className="relative py-20 md:py-32 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #000000 0%, #1a1a2e 50%, #000000 100%)'
    }}>
      <div ref={ref} className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-4">
            RENTAL
          </h2>
          <p className="text-[#C0C0C0] text-lg max-w-2xl mx-auto">
            Professionelles Equipment für dein Event – von Licht über Sound bis zu Special Effects.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 font-display text-sm tracking-wider transition-all ${
                activeCategory === category.id
                  ? "bg-[#9B59B6] text-white"
                  : "border border-[#C0C0C0]/30 text-[#C0C0C0] hover:border-[#9B59B6] hover:text-white"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Price Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="border border-[#C0C0C0]/20 bg-black/50 backdrop-blur-sm">
            {/* Table Header */}
            <div className="grid grid-cols-2 gap-4 p-4 border-b border-[#C0C0C0]/20 bg-[#9B59B6]/10">
              <span className="font-display text-sm tracking-wider text-[#9B59B6]">PRODUCT</span>
              <span className="font-display text-sm tracking-wider text-[#9B59B6] text-right">PRICE</span>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-[#C0C0C0]/10">
              {activeItems.map((item, index) => (
                <motion.div
                  key={item.product}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="grid grid-cols-2 gap-4 p-4 hover:bg-[#9B59B6]/5 transition-colors"
                >
                  <span className="text-white text-sm">{item.product}</span>
                  <span className="text-[#C0C0C0] text-sm text-right">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-[#C0C0C0]/50 text-xs text-center mt-4">
            *Preise können je nach Produktion variieren. Für aktuelle Preise bitte anfragen.
          </p>
        </motion.div>

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
            EQUIPMENT ANFRAGEN
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
