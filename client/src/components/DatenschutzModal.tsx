/**
 * Datenschutz Modal - Silver & Purple Premium Design
 * Vollständige DSGVO-konforme Datenschutzerklärung mit Silber/Lila-Akzenten
 */

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DatenschutzModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DatenschutzModal({ isOpen, onClose }: DatenschutzModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-3xl md:w-full md:max-h-[85vh] bg-black border-2 border-[#C0C0C0]/30 z-50 overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-[#9B59B6]/20">
              <h2 className="font-display text-2xl text-white tracking-wider">DATENSCHUTZ</h2>
              <button
                onClick={onClose}
                className="p-2 text-white/50 hover:text-[#9B59B6] transition-colors"
                aria-label="Schließen"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-3">
                    1. DATENSCHUTZ AUF EINEN BLICK
                  </h3>
                  <h4 className="font-display text-xs text-white tracking-wider mb-2">ALLGEMEINE HINWEISE</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                    personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-xs text-white tracking-wider mb-2">DATENERFASSUNG</h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">
                    <strong className="text-white">Wer ist verantwortlich?</strong><br />
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                    Kontaktdaten finden Sie im Impressum.
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">
                    <strong className="text-white">Wie erfassen wir Ihre Daten?</strong><br />
                    Ihre Daten werden erhoben, wenn Sie uns diese mitteilen (z.B. Kontaktformular). 
                    Andere Daten werden automatisch beim Besuch der Website erfasst (technische Daten).
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    <strong className="text-white">Welche Rechte haben Sie?</strong><br />
                    Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer 
                    gespeicherten personenbezogenen Daten.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-3">
                    2. HOSTING
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
                    Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei 
                    kann es sich um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten handeln.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-3">
                    3. VERANTWORTLICHE STELLE
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    LightLab Lichtdesign GmbH<br />
                    Musterstraße 123<br />
                    10115 Berlin<br /><br />
                    Telefon: +49 151 234 567 89<br />
                    E-Mail: info@lightlab-lichtdesign.de
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-3">
                    4. COOKIES
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Unsere Website verwendet Cookies. Cookies sind kleine Datenpakete und richten 
                    auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend 
                    (Session-Cookies) oder dauerhaft (permanente Cookies) gespeichert. Sie können 
                    Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert 
                    werden und Cookies nur im Einzelfall erlauben.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-3">
                    5. KONTAKTFORMULAR
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                    zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht 
                    ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von 
                    Art. 6 Abs. 1 lit. b DSGVO.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-3">
                    6. WHATSAPP-KONTAKT
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Daten gemäß den 
                    Datenschutzbestimmungen von WhatsApp (Meta) verarbeitet. Wir speichern Ihre 
                    Kontaktdaten und Nachrichten zur Bearbeitung Ihrer Anfrage.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-3">
                    7. IHRE RECHTE
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Sie haben das Recht auf:<br />
                    • Auskunft über Ihre gespeicherten Daten<br />
                    • Berichtigung unrichtiger Daten<br />
                    • Löschung Ihrer Daten<br />
                    • Einschränkung der Verarbeitung<br />
                    • Datenübertragbarkeit<br />
                    • Widerruf erteilter Einwilligungen<br />
                    • Beschwerde bei einer Aufsichtsbehörde
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-3">
                    8. SSL-VERSCHLÜSSELUNG
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine 
                    verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des 
                    Browsers von "http://" auf "https://" wechselt.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-[#9B59B6]/20">
              <button
                onClick={onClose}
                className="w-full py-3 bg-[#9B59B6] text-white font-display text-sm tracking-wider hover:bg-[#9B59B6]/80 transition-colors"
              >
                SCHLIESSEN
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
