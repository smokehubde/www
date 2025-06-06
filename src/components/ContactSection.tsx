
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lass uns <span className="gradient-text">connecten</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ich freue mich darauf, von dir zu hören und neue Verbindungen zu knüpfen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "hallo@michaelhense.de",
                href: "mailto:hallo@michaelhense.de",
              },
              {
                icon: Phone,
                title: "Telefon",
                content: "+49 123 456 789",
                href: "tel:+49123456789",
              },
              {
                icon: MapPin,
                title: "Standort",
                content: "Deutschland",
                href: "#",
              },
            ].map((contact, index) => (
              <a
                key={contact.title}
                href={contact.href}
                className="group block p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {contact.title}
                  </h3>
                  <p className="text-muted-foreground">{contact.content}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">
                Bereit für ein <span className="gradient-text">Gespräch</span>?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ob für neue Projekte, Kooperationen oder einfach nur für einen Austausch - 
                ich bin immer offen für interessante Gespräche.
              </p>
              <a
                href="mailto:hallo@michaelhense.de"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                Nachricht senden
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              © 2024 Michael Hense. Mit ❤️ erstellt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
