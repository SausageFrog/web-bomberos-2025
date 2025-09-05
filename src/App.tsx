import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { FireSafetySection } from "./components/FireSafetySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { DonationSection } from "./components/DonationSection";
import { AuthoritiesSection } from "./components/AuthoritiesSection";
import { UnitsSection } from "./components/UnitsSection";
import { LocationSection } from "./components/LocationSection";

// <ContactSection />
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <AuthoritiesSection />
        <UnitsSection />
        <FireSafetySection />
        <DonationSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
