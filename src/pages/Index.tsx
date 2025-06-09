
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import AsciiBackground from "@/components/AsciiBackground";
import ParticleSystem from "@/components/ParticleSystem";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleSystem />
      <AsciiBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
