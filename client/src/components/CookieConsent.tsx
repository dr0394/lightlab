/**
 * Cookie Consent Banner - Silver & Purple Premium Design
 * DSGVO-konformes Cookie-Banner mit Silber/Lila-Akzenten
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings, Check, X } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  statistics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "lightlab_cookie_consent";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!savedConsent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        setPreferences(parsed);
      } catch {
        setShowBanner(true);
      }
    }

    const handleOpenSettings = () => {
      setShowBanner(true);
      setShowSettings(true);
    };
    window.addEventListener("openCookieSettings", handleOpenSettings);
    return () => window.removeEventListener("openCookieSettings", handleOpenSettings);
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    savePreferences({ necessary: true, statistics: true, marketing: true });
  };

  const acceptNecessary = () => {
    savePreferences({ necessary: true, statistics: false, marketing: false });
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettings(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
          )}

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed z-[70] ${
              showSettings
                ? "inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:w-full"
                : "bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-md"
            }`}
          >
            <div className="bg-black border-2 border-[#C0C0C0]/30 overflow-hidden">
              {!showSettings ? (
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 border border-[#C0C0C0]/30 flex items-center justify-center flex-shrink-0">
                      <Cookie className="w-5 h-5 text-[#C0C0C0]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-white tracking-wider mb-1">
                        COOKIE-EINSTELLUNGEN
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer 
                        Website zu bieten. Sie können Ihre Einstellungen jederzeit anpassen.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={acceptAll}
                      className="flex-1 py-3 px-4 bg-[#9B59B6] text-white font-display text-sm tracking-wider hover:bg-[#9B59B6]/80 transition-colors"
                    >
                      ALLE AKZEPTIEREN
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="flex-1 py-3 px-4 border border-[#C0C0C0]/50 text-white font-display text-sm tracking-wider hover:bg-[#9B59B6]/10 transition-colors"
                    >
                      NUR NOTWENDIGE
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="py-3 px-4 border border-[#C0C0C0]/30 text-[#C0C0C0] hover:bg-[#9B59B6]/10 transition-colors"
                      aria-label="Einstellungen"
                    >
                      <Settings size={20} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col max-h-[80vh]">
                  <div className="flex items-center justify-between p-6 border-b border-[#9B59B6]/20">
                    <h3 className="font-display text-xl text-white tracking-wider">COOKIE-EINSTELLUNGEN</h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 text-white/50 hover:text-[#9B59B6] transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="p-6 overflow-y-auto flex-1">
                    <p className="text-sm text-white/60 mb-6">
                      Hier können Sie Ihre Cookie-Präferenzen verwalten. Notwendige Cookies 
                      sind für die Grundfunktionen der Website erforderlich und können nicht 
                      deaktiviert werden.
                    </p>

                    <div className="space-y-4">
                      <div className="p-4 border border-[#C0C0C0]/20">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-display text-white tracking-wider">NOTWENDIG</h4>
                          <div className="w-12 h-6 bg-[#9B59B6] flex items-center justify-end px-1">
                            <div className="w-4 h-4 bg-white" />
                          </div>
                        </div>
                        <p className="text-sm text-white/50">
                          Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                        </p>
                      </div>

                      <div className="p-4 border border-[#C0C0C0]/20">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-display text-white tracking-wider">STATISTIK</h4>
                          <button
                            onClick={() =>
                              setPreferences({ ...preferences, statistics: !preferences.statistics })
                            }
                            className={`w-12 h-6 flex items-center px-1 transition-colors ${
                              preferences.statistics
                                ? "bg-[#9B59B6] justify-end"
                                : "bg-white/20 justify-start"
                            }`}
                          >
                            <div className={`w-4 h-4 ${preferences.statistics ? "bg-white" : "bg-white"}`} />
                          </button>
                        </div>
                        <p className="text-sm text-white/50">
                          Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
                        </p>
                      </div>

                      <div className="p-4 border border-[#C0C0C0]/20">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-display text-white tracking-wider">MARKETING</h4>
                          <button
                            onClick={() =>
                              setPreferences({ ...preferences, marketing: !preferences.marketing })
                            }
                            className={`w-12 h-6 flex items-center px-1 transition-colors ${
                              preferences.marketing
                                ? "bg-[#9B59B6] justify-end"
                                : "bg-white/20 justify-start"
                            }`}
                          >
                            <div className={`w-4 h-4 ${preferences.marketing ? "bg-white" : "bg-white"}`} />
                          </button>
                        </div>
                        <p className="text-sm text-white/50">
                          Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border-t border-[#9B59B6]/20">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={saveCustom}
                        className="flex-1 py-3 px-4 bg-[#9B59B6] text-white font-display text-sm tracking-wider hover:bg-[#9B59B6]/80 transition-colors flex items-center justify-center gap-2"
                      >
                        <Check size={18} />
                        SPEICHERN
                      </button>
                      <button
                        onClick={acceptAll}
                        className="flex-1 py-3 px-4 border border-[#C0C0C0]/50 text-white font-display text-sm tracking-wider hover:bg-[#9B59B6]/10 transition-colors"
                      >
                        ALLE AKZEPTIEREN
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
