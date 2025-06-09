
import { useCensoredText } from "../hooks/useCensoredText";
import GlassmorphismCard from "./GlassmorphismCard";
import Modern3DCard from "./Modern3DCard";

const AboutSection = () => {
  const censoredSurname = useCensoredText({ 
    originalText: "Hense", 
    animationSpeed: 180 
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Über mich
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lerne mehr über meine vertriebliche Leidenschaft und Strategie
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Modern3DCard>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Hallo! Ich bin <span className="text-primary font-semibold">Michael {censoredSurname}</span>,
                Sales Leader aus Bochum. Mein Fokus liegt auf Wachstum durch klare Kommunikation
                und strategisches Marketing.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Bei Darkside Corp. konnte ich Umsatzwachstum steigern, die Kundenzufriedenheit verbessern
                und gemeinsam mit meinem Team erfolgreiche Marketingkampagnen umsetzen.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Meine Stärken:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Umsatzwachstum erzielen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Kundenbeziehungen stärken
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Teams motivieren und führen
                  </li>
                </ul>
              </div>

              <GlassmorphismCard className="p-4">
                <p className="font-mono text-sm text-center">
                  "Vertrieb ist Kommunikation mit Herz"
                </p>
              </GlassmorphismCard>
            </div>
          </Modern3DCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
