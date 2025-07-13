import Hero from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useEffect } from "react";
import "@/styles/FadeIn.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Home = () => {
  const heroRef = useIntersectionObserver();
  const skillsRef = useIntersectionObserver();
  const portfolioRef = useIntersectionObserver();
  const contactRef = useIntersectionObserver();
  
  // Initialize scroll functionality
  useScrollToSection();
  
  useEffect(() => {
    // Set document title
    document.title = "אופיר זנגי | פורטפוליו";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div ref={heroRef} className="fade-in">
          <Hero />
        </div>
        <div ref={skillsRef} className="fade-in">
          <SkillsSection />
        </div>
        <div ref={portfolioRef} className="fade-in">
          <Portfolio />
        </div>
        <div ref={contactRef} className="fade-in">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
