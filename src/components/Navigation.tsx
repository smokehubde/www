
import { useState, useEffect } from "react";
import GlassmorphismCard from "./GlassmorphismCard";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <GlassmorphismCard 
          variant={isScrolled ? "intense" : "subtle"}
          className="px-6 py-3"
        >
          <div className="flex items-center justify-between">
            <div
              className="text-xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => scrollToSection("hero")}
            >
              MH
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary transition-all duration-200 relative group hover:scale-105"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </GlassmorphismCard>
      </div>
    </nav>
  );
};

export default Navigation;
