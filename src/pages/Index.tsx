import { useState, useEffect } from "react";

import IntroAnimation from "@/components/IntroAnimation";

import Navbar from "@/components/Navbar";

import HeroSection from "@/components/HeroSection";

import ServicesSection from "@/components/ServicesSection";

import WorksSection from "@/components/WorksSection";

import MarqueeSection from "@/components/MarqueeSection";

import SkillsSection from "@/components/SkillsSection";

import AboutSection from "@/components/AboutSection";

import ContactSection from "@/components/ContactSection";

import Footer from "@/components/Footer";



const Index = () => {

const [introComplete, setIntroComplete] = useState(() => {

// Check if intro has been shown in this session

return sessionStorage.getItem("introShown") === "true";

});



useEffect(() => {

if (introComplete) {

sessionStorage.setItem("introShown", "true");

}

}, [introComplete]);



return (

<>

{!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}


<div className={introComplete ? "opacity-100" : "opacity-0"}>

<Navbar />

<main>

<HeroSection />

<div className="section-divider" />

<ServicesSection />

<MarqueeSection />

<WorksSection />

<SkillsSection />

<AboutSection />

<ContactSection />

</main>

<Footer />

</div>

</>

);

};



export default Index;