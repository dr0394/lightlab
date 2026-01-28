/**
 * Home Page - DJ Leon Style Design
 * LightLab Lichtdesign Onepager
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import RentalSection from "@/components/RentalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ServicesSection />
        <AboutSection />
        <AdvantagesSection />
        <ProcessSection />
        <ProjectsSection />
        <RentalSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
