/**
 * Contact Section - Silver & Purple Premium Design
 * Multi-Step-Formular mit Silber/Lila-Akzenten
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowLeft, Check, MessageCircle, Mail, Phone } from "lucide-react";

type ProjectType = "privat" | "gewerbe" | "architektur" | "";
type AreaType = "innen" | "aussen" | "beides" | "";
type BudgetType = "unter5k" | "5k-15k" | "15k-30k" | "ueber30k" | "";
type TimelineType = "sofort" | "3monate" | "6monate" | "flexibel" | "";

interface FormData {
  projectType: ProjectType;
  area: AreaType;
  budget: BudgetType;
  timeline: TimelineType;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  projectType: "",
  area: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;

  const projectTypeLabels: Record<string, string> = {
    privat: "Privatwohnung / Haus",
    gewerbe: "Gewerbe / Restaurant / Hotel",
    architektur: "Architekturprojekt",
  };

  const areaLabels: Record<string, string> = {
    innen: "Innenbereich",
    aussen: "Außenbereich",
    beides: "Innen & Außen",
  };

  const budgetLabels: Record<string, string> = {
    unter5k: "Unter 5.000 €",
    "5k-15k": "5.000 - 15.000 €",
    "15k-30k": "15.000 - 30.000 €",
    ueber30k: "Über 30.000 €",
  };

  const timelineLabels: Record<string, string> = {
    sofort: "So schnell wie möglich",
    "3monate": "In den nächsten 3 Monaten",
    "6monate": "In den nächsten 6 Monaten",
    flexibel: "Zeitlich flexibel",
  };

  const generateMessage = (): string => {
    const lines = [
      `Hallo LightLab Team,`,
      ``,
      `ich interessiere mich für ein Lichtdesign-Projekt.`,
      ``,
      `Projektart: ${projectTypeLabels[formData.projectType] || "Nicht angegeben"}`,
      `Bereich: ${areaLabels[formData.area] || "Nicht angegeben"}`,
      `Budget: ${budgetLabels[formData.budget] || "Nicht angegeben"}`,
      `Zeitrahmen: ${timelineLabels[formData.timeline] || "Nicht angegeben"}`,
      ``,
      formData.message ? `Nachricht: ${formData.message}` : "",
      ``,
      `Kontakt:`,
      `Name: ${formData.name}`,
      `E-Mail: ${formData.email}`,
      formData.phone ? `Telefon: ${formData.phone}` : "",
      ``,
      `Ich freue mich auf Ihre Rückmeldung!`,
    ];
    return lines.filter(line => line !== "").join("\n");
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(generateMessage());
    window.open(`https://wa.me/4915123456789?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Lichtdesign-Anfrage");
    const body = encodeURIComponent(generateMessage());
    window.location.href = `mailto:info@lightlab-lichtdesign.de?subject=${subject}&body=${body}`;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 1: return formData.projectType !== "";
      case 2: return formData.area !== "";
      case 3: return formData.budget !== "";
      case 4: return formData.timeline !== "";
      case 5: return formData.name !== "" && formData.email !== "";
      default: return false;
    }
  };

  const OptionButton = ({ 
    value, 
    label, 
    selected, 
    onClick 
  }: { 
    value: string; 
    label: string; 
    selected: boolean; 
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`w-full p-4 text-left font-display text-lg tracking-wider transition-all duration-300 border-2 ${
        selected
          ? "border-[#9B59B6] bg-[#9B59B6] text-white"
          : "border-[#C0C0C0]/30 bg-transparent text-white hover:border-[#9B59B6]"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #9B59B6 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div ref={ref} className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-display text-sm tracking-[0.3em] text-[#9B59B6] block mb-4">
            KONTAKT
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white">
            PROJEKT ANFRAGEN
          </h2>
        </motion.div>

        {/* Progress Bar */}
        {!isSubmitted && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-8 flex items-center justify-center font-display text-sm ${
                    s <= step ? "bg-[#9B59B6] text-white" : "bg-white/10 text-white/50"
                  }`}
                >
                  {s < step ? <Check size={16} /> : s}
                </div>
              ))}
            </div>
            <div className="h-1 bg-white/10">
              <div
                className="h-full bg-[#9B59B6] transition-all duration-300"
                style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-[#9B59B6] flex items-center justify-center">
                  <Check size={40} className="text-white" />
                </div>
                <h3 className="font-display text-3xl text-white mb-4">
                  ANFRAGE BEREIT
                </h3>
                <p className="text-white/70 mb-8">
                  Wählen Sie Ihren bevorzugten Kontaktweg:
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleWhatsApp}
                    className="btn-neon-filled group"
                  >
                    <MessageCircle size={20} />
                    Per WhatsApp senden
                  </button>
                  <button
                    onClick={handleEmail}
                    className="btn-neon group"
                  >
                    <Mail size={20} />
                    Per E-Mail senden
                  </button>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                    setFormData(initialFormData);
                  }}
                  className="mt-8 text-[#9B59B6] hover:text-white transition-colors font-display text-sm tracking-wider"
                >
                  NEUE ANFRAGE STARTEN
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Project Type */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl text-white mb-6">
                      WAS FÜR EIN PROJEKT PLANEN SIE?
                    </h3>
                    {(["privat", "gewerbe", "architektur"] as ProjectType[]).map((type) => (
                      <OptionButton
                        key={type}
                        value={type}
                        label={projectTypeLabels[type]}
                        selected={formData.projectType === type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                      />
                    ))}
                  </div>
                )}

                {/* Step 2: Area */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl text-white mb-6">
                      WELCHER BEREICH SOLL BELEUCHTET WERDEN?
                    </h3>
                    {(["innen", "aussen", "beides"] as AreaType[]).map((area) => (
                      <OptionButton
                        key={area}
                        value={area}
                        label={areaLabels[area]}
                        selected={formData.area === area}
                        onClick={() => setFormData({ ...formData, area })}
                      />
                    ))}
                  </div>
                )}

                {/* Step 3: Budget */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl text-white mb-6">
                      WIE HOCH IST IHR BUDGET?
                    </h3>
                    {(["unter5k", "5k-15k", "15k-30k", "ueber30k"] as BudgetType[]).map((budget) => (
                      <OptionButton
                        key={budget}
                        value={budget}
                        label={budgetLabels[budget]}
                        selected={formData.budget === budget}
                        onClick={() => setFormData({ ...formData, budget })}
                      />
                    ))}
                  </div>
                )}

                {/* Step 4: Timeline */}
                {step === 4 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl text-white mb-6">
                      WANN SOLL DAS PROJEKT STARTEN?
                    </h3>
                    {(["sofort", "3monate", "6monate", "flexibel"] as TimelineType[]).map((timeline) => (
                      <OptionButton
                        key={timeline}
                        value={timeline}
                        label={timelineLabels[timeline]}
                        selected={formData.timeline === timeline}
                        onClick={() => setFormData({ ...formData, timeline })}
                      />
                    ))}
                  </div>
                )}

                {/* Step 5: Contact Info */}
                {step === 5 && (
                  <div className="space-y-6">
                    <h3 className="font-display text-2xl text-white mb-6">
                      WIE KÖNNEN WIR SIE ERREICHEN?
                    </h3>
                    <div>
                      <label className="block text-[#C0C0C0] font-display text-sm tracking-wider mb-2">
                        NAME *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-4 bg-transparent border-2 border-[#C0C0C0]/30 text-white focus:border-[#9B59B6] outline-none transition-colors"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#C0C0C0] font-display text-sm tracking-wider mb-2">
                        E-MAIL *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-4 bg-transparent border-2 border-[#C0C0C0]/30 text-white focus:border-[#9B59B6] outline-none transition-colors"
                        placeholder="ihre@email.de"
                      />
                    </div>
                    <div>
                      <label className="block text-[#C0C0C0] font-display text-sm tracking-wider mb-2">
                        TELEFON (OPTIONAL)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-4 bg-transparent border-2 border-[#C0C0C0]/30 text-white focus:border-[#9B59B6] outline-none transition-colors"
                        placeholder="+49 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-[#C0C0C0] font-display text-sm tracking-wider mb-2">
                        NACHRICHT (OPTIONAL)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full p-4 bg-transparent border-2 border-[#C0C0C0]/30 text-white focus:border-[#9B59B6] outline-none transition-colors resize-none"
                        placeholder="Erzählen Sie uns mehr über Ihr Projekt..."
                      />
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  {step > 1 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-display tracking-wider"
                    >
                      <ArrowLeft size={20} />
                      ZURÜCK
                    </button>
                  ) : (
                    <div />
                  )}
                  
                  {step < totalSteps ? (
                    <button
                      onClick={() => canProceed() && setStep(step + 1)}
                      disabled={!canProceed()}
                      className={`btn-neon group ${!canProceed() ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      WEITER
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!canProceed()}
                      className={`btn-neon-filled group ${!canProceed() ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      ABSENDEN
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Direct Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 mb-4 font-display text-sm tracking-wider">
            ODER DIREKT KONTAKTIEREN
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+4915123456789"
              className="flex items-center gap-2 text-[#C0C0C0] hover:text-[#9B59B6] transition-colors"
            >
              <Phone size={20} />
              +49 151 234 567 89
            </a>
            <a
              href="mailto:info@lightlab-lichtdesign.de"
              className="flex items-center gap-2 text-[#C0C0C0] hover:text-[#9B59B6] transition-colors"
            >
              <Mail size={20} />
              info@lightlab-lichtdesign.de
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
