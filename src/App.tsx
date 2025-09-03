import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { FireSafetySection } from "./components/FireSafetySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

// <ContactSection />
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FireSafetySection />
      </main>
      <Footer />
    </div>
  );
}