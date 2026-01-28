/**
 * Impressum Modal - Silver & Purple Premium Design
 * DSGVO-konform mit Silber/Lila-Akzenten
 */

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ImpressumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImpressumModal({ isOpen, onClose }: ImpressumModalProps) {
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
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full md:max-h-[80vh] bg-black border-2 border-[#C0C0C0]/30 z-50 overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-[#9B59B6]/20">
              <h2 className="font-display text-2xl text-white tracking-wider">IMPRESSUM</h2>
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
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-2">
                    ANGABEN GEMÄSS § 5 TMG
                  </h3>
                  <p className="text-white/70 text-sm">
                    LightLab Lichtdesign GmbH<br />
                    Musterstraße 123<br />
                    10115 Berlin<br />
                    Deutschland
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-2">
                    VERTRETEN DURCH
                  </h3>
                  <p className="text-white/70 text-sm">
                    Geschäftsführer: Max Mustermann
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-2">
                    KONTAKT
                  </h3>
                  <p className="text-white/70 text-sm">
                    Telefon: +49 151 234 567 89<br />
                    E-Mail: info@lightlab-lichtdesign.de
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-2">
                    REGISTEREINTRAG
                  </h3>
                  <p className="text-white/70 text-sm">
                    Eintragung im Handelsregister<br />
                    Registergericht: Amtsgericht Berlin-Charlottenburg<br />
                    Registernummer: HRB 123456
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-2">
                    UMSATZSTEUER-ID
                  </h3>
                  <p className="text-white/70 text-sm">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    DE 123 456 789
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-2">
                    VERANTWORTLICH FÜR DEN INHALT
                  </h3>
                  <p className="text-white/70 text-sm">
                    Max Mustermann<br />
                    Musterstraße 123<br />
                    10115 Berlin
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-2">
                    EU-STREITSCHLICHTUNG
                  </h3>
                  <p className="text-white/70 text-sm">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#9B59B6] hover:underline ml-1"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-2">
                    HAFTUNG FÜR INHALTE
                  </h3>
                  <p className="text-white/70 text-sm">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                    Informationen zu überwachen.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm text-[#9B59B6] tracking-wider mb-2">
                    URHEBERRECHT
                  </h3>
                  <p className="text-white/70 text-sm">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
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
