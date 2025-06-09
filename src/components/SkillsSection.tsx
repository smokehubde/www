
import { Target, Users, Zap, TrendingUp } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: TrendingUp,
      title: "Vertrieb",
      description: "Strategien entwickeln und Umsatzwachstum erzielen",
    },
    {
      icon: Target,
      title: "Geschäftsentwicklung",
      description: "Neue Märkte erschließen und Chancen identifizieren",
    },
    {
      icon: Users,
      title: "Kundenbindung",
      description: "Langfristige Beziehungen zu Kunden aufbauen",
    },
    {
      icon: Zap,
      title: "Kommunikation",
      description: "Klare Botschaften intern und extern vermitteln",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meine <span className="gradient-text">Stärken</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diese Eigenschaften definieren meinen Ansatz und meine Art zu arbeiten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">
                Immer bereit für neue <span className="gradient-text">Herausforderungen</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jeder Tag bietet neue Möglichkeiten zu lernen, zu wachsen und 
                etwas Bedeutsames zu schaffen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
