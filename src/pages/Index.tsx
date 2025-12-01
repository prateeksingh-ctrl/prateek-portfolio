import { useState, useEffect } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
// import ServicesSection from "@/components/ServicesSection"; // Removed: Replaced by Disciplines
import Disciplines from "@/components/disciplines"; // New: The GSAP Scroll Effect
import WorksSection from "@/components/WorksSection";
import MarqueeSection from "@/components/MarqueeSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(() => {
    // Check if intro has been shown in this session
    // Added safety check for window to prevent SSR errors
    if (typeof window !== "undefined") {
        return sessionStorage.getItem("introShown") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (introComplete) {
      sessionStorage.setItem("introShown", "true");
    }
  }, [introComplete]);

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      {/* 2. Added 'cursor-none' here to hide the default pointer */}
      <div className={`transition-opacity duration-500 cursor-none ${introComplete ? "opacity-100" : "opacity-0"}`}>
        
        <Navbar />

        <main>
          <HeroSection />

          <div className="section-divider" />

          {/* 3. Replaced ServicesSection with the new Disciplines scroll effect */}
          <Disciplines />

          <MarqueeSection />

          <WorksSection />

          <SkillsSection />
            
          {/* Note: We will add the Education section near AboutSection in the next step */}
          <AboutSection />

          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default Index;