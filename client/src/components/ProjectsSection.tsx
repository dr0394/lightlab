/**
 * Projects Section - Silver & Purple Premium Design
 * Projekt-Galerie mit Event-Bildern und Artists-Liste
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: "/images/project-concert-1.jpg",
    title: "KONZERT LIGHTING",
    category: "Live Event",
    year: "2024",
  },
  {
    image: "/images/project-concert-2.jpg",
    title: "BÜHNENDESIGN",
    category: "Festival",
    year: "2024",
  },
  {
    image: "/images/project-event-1.jpg",
    title: "CORPORATE EVENT",
    category: "Business",
    year: "2023",
  },
  {
    image: "/images/project-festival-1.jpg",
    title: "FESTIVAL STAGE",
    category: "Festival",
    year: "2023",
  },
];

const artists = [
  "A.D.H.S.", "ADAM TEN", "AINTRESTO", "AKKI", "ALIGNMENT", "ALOK", "ALLY", "ANIME", 
  "A.N.I.", "AXMO", "BASSMASSAGE", "BASSWELL", "BENITO", "BLVCK CROWZ", "BONEZ MC", 
  "CH4YN", "CHEAPEX", "COLOR K!D", "D-FENCE", "DIE GEBRÜDER BRETT", "DJ JORDAN", 
  "DOKINIK PAZZER", "DOPEBOYY", "DOS & MARIUS HOLM", "DR.DONK", "EL MEFTI", "EYCER", 
  "FABITEKK", "GRACE THOMPSON", "HARRIS & FORD", "HBz", "HOLY PRIEST", "ISEK", 
  "ISO3000", "JAXOMY", "JOHN DEE", "JOEL CORRY", "KISTENBRÜGGER", "KLANGKUENSTLER", 
  "KOMACASPER", "KXXMA", "LUNAX", "M3TR1CS", "MACON", "MARLON DIAZ", "MARK DEKODA", 
  "MARTIN BOOKS", "MARTIN GARRIX", "MATT SASSARI", "MEDUN", "MONERVO", "NENA POLAP", 
  "NEPTUNICA", "NICOLAS JULIAN", "NOEL HOLLER", "NOTMYTYPE", "NUSHA", "N-VIRTRAL", 
  "PARAÇEK", "PAUL WOLF", "PATRICK SCURO", "PHIESI & ABZOCKA", "REZNIK (KEINEMUSIK)", 
  "TARIK ASADI", "TIMMY TRUMPET", "TOBY RØMERØ", "YAMAS"
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div ref={ref} className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="font-display text-sm tracking-[0.3em] text-[#9B59B6] block mb-4">
              REFERENZEN
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-white">
              PROJEKTE
            </h2>
          </div>
          <button
            onClick={scrollToContact}
            className="btn-neon mt-6 md:mt-0 group"
          >
            Dein Projekt
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="font-display text-sm text-[#9B59B6] tracking-wider mb-2">
                  {project.category} • {project.year}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-[#C0C0C0] transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-[#9B59B6] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Artists Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border border-[#C0C0C0]/20 p-8 bg-black/50"
        >
          <h3 className="font-display text-2xl md:text-3xl text-white mb-2 text-center">
            ARTISTS WE WORKED FOR
          </h3>
          <p className="text-[#9B59B6] font-display text-sm tracking-wider text-center mb-6">A-Z</p>
          <p className="text-[#C0C0C0]/70 text-sm leading-relaxed text-center">
            {artists.join(" - ")} - and many more....
          </p>
        </motion.div>
      </div>
    </section>
  );
}
