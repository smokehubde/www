
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Über <span className="gradient-text">mich</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hallo! Ich bin Michael Hense, und ich freue mich, dass du den Weg 
                  zu meiner persönlichen Website gefunden hast.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hier teile ich meine Gedanken, Projekte und Leidenschaften mit der Welt. 
                  Jeder Mensch hat eine einzigartige Geschichte zu erzählen, und das ist meine.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    "Kreativität",
                    "Innovation",
                    "Authentizität",
                    "Leidenschaft",
                    "Wachstum"
                  ].map((trait) => (
                    <span
                      key={trait}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/10">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-primary-foreground">
                      MH
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Michael Hense</h3>
                    <p className="text-muted-foreground">
                      Immer auf der Suche nach neuen Möglichkeiten
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
