
import { ArrowDown } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { useParallaxScroll } from "../hooks/useScrollAnimation";
import { useCensoredText } from "../hooks/useCensoredText";
import Modern3DCard from "./Modern3DCard";
import GlassmorphismCard from "./GlassmorphismCard";

const HeroSection = () => {
  const scrollY = useParallaxScroll();
  const censoredSurname = useCensoredText({ 
    originalText: "Hense", 
    animationSpeed: 150 
  });

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const descriptorWords = [
    "Strategisch",
    "Kommunikativ",
    "Ergebnisorientiert",
    "Kundenfokussiert"
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced background gradient with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>

      {/* ASCII-style decorative elements */}
      <div className="absolute top-10 left-10 font-mono text-primary/20 text-xs animate-pulse-slow">
        {`>>> MICHAEL_${censoredSurname}.EXE`}
      </div>
      <div className="absolute bottom-10 right-10 font-mono text-primary/20 text-xs animate-pulse-slow">
        {`[STATUS: ONLINE]`}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <Modern3DCard className="animate-fade-in">
          <div className="mb-4 font-mono text-sm text-primary opacity-70">
            // Willkommen in meiner Vertriebswelt
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
            Michael <span className="font-mono text-primary/60">{censoredSurname}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Sales Leader – Wachstum durch klare Kommunikation & strategisches Marketing
          </p>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            <span className="matrix-text">
              Ich bin{" "}
              <AnimatedText 
                words={descriptorWords}
                className="gradient-text font-semibold"
                speed={3000}
              />
            </span>
            <br />
            <span className="text-primary">Gestalten wir</span> gemeinsam Wachstum.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <GlassmorphismCard className="px-6 py-3">
              <span className="font-mono text-sm text-primary animate-glow">
                {`{ kommunikativ: true, strategisch: true, kundenfokussiert: true }`}
              </span>
            </GlassmorphismCard>
          </div>

          {/* Typing effect indicator */}
          <div className="font-mono text-xs text-primary/60 mb-8 animate-pulse">
            <span className="animate-typewriter inline-block border-r-2 border-primary">
              _ready_to_explore()
            </span>
          </div>
        </Modern3DCard>

        <button
          onClick={scrollToAbout}
          className="animate-bounce mt-12 text-primary hover:text-primary/80 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_10px_hsl(142,76%,36%)]"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
