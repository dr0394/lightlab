/**
 * Home Page - Shockwave DJ Event Brand
 * Premium Club/Festival Landing Page
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ArtistsSection from "@/components/ArtistsSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ArtistsSection />
        <EventsSection />
        <GallerySection />
        <BookingSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
