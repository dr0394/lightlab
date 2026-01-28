/**
 * Booking Section - Shockwave DJ Event Brand
 * Simplified Booking/Contact Form with Cyan/Orange Neon
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Check, Mail, Phone, User } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  date: "",
  message: "",
};

export default function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Event Type: ${formData.eventType}\nPreferred Date: ${formData.date}\n\n${formData.message}`,
        }),
      });

      if (!response.ok) throw new Error("Fehler beim Senden");

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      setError("Fehler beim Senden. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="relative py-20 md:py-32 bg-black">
      <div ref={ref} className="container max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4" style={{
            textShadow: '0 0 30px rgba(255, 107, 0, 0.5)'
          }}>
            BOOKING
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-cyan mx-auto mb-6" />
          <p className="text-lg md:text-xl text-white/70">
            Du willst uns für dein Event buchen? Hol dir die Shockwave-Crew für deine Party!
          </p>
        </motion.div>

        {/* Form or Success Message */}
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-cyan/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-cyan" />
            </div>
            <h3 className="font-display text-3xl text-white mb-4">ANFRAGE ERHALTEN!</h3>
            <p className="text-white/70 mb-6">
              Danke für deine Anfrage! Wir melden uns innerhalb von 24 Stunden bei dir.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-neon"
            >
              Neue Anfrage
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-12 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-white/80 mb-2 font-display text-sm tracking-wider">
                <User className="w-4 h-4 text-cyan" />
                NAME *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-cyan/30 text-white focus:border-cyan focus:outline-none transition-colors"
                placeholder="Dein Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-white/80 mb-2 font-display text-sm tracking-wider">
                <Mail className="w-4 h-4 text-cyan" />
                EMAIL *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-cyan/30 text-white focus:border-cyan focus:outline-none transition-colors"
                placeholder="deine@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 text-white/80 mb-2 font-display text-sm tracking-wider">
                <Phone className="w-4 h-4 text-cyan" />
                TELEFON
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-cyan/30 text-white focus:border-cyan focus:outline-none transition-colors"
                placeholder="+43 123 456789"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="text-white/80 mb-2 font-display text-sm tracking-wider block">
                EVENT TYPE *
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-cyan/30 text-white focus:border-cyan focus:outline-none transition-colors"
              >
                <option value="">Bitte wählen</option>
                <option value="club">Club Event</option>
                <option value="festival">Festival</option>
                <option value="private">Private Party</option>
                <option value="corporate">Corporate Event</option>
                <option value="other">Sonstiges</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="text-white/80 mb-2 font-display text-sm tracking-wider block">
                WUNSCHDATUM
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-cyan/30 text-white focus:border-cyan focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-white/80 mb-2 font-display text-sm tracking-wider block">
                NACHRICHT *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black/50 border border-cyan/30 text-white focus:border-cyan focus:outline-none transition-colors resize-none"
                placeholder="Erzähl uns mehr über dein Event..."
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-neon-filled flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? "WIRD GESENDET..." : "ANFRAGE SENDEN"}
              <Send className="w-5 h-5" />
            </button>
          </motion.form>
        )}

        {/* Direct Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 mb-4">Oder kontaktiere uns direkt:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:booking@shockwave-graz.com"
              className="text-cyan hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              booking@shockwave-graz.com
            </a>
            <span className="text-white/30 hidden sm:block">|</span>
            <a
              href="tel:+4366412345678"
              className="text-cyan hover:text-white transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +43 664 123 45 678
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
