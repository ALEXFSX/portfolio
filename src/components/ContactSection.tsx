import { Mail, MapPin, Globe, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alexfrs.dev@gmail.com",
      href: "mailto:alexfrs.dev@gmail.com",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.afs.dev.br",
      href: "https://afs.dev.br",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Aquiraz, CE, Brasil",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/alexfreitas", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/alexfreitas", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-mono text-sm mb-2">Contato</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades. Se você tem uma ideia ou projeto em mente, ficarei feliz em conversar.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold mb-12"
          >
            <a href="mailto:alexfrs.dev@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Enviar Email
            </a>
          </Button>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="p-6 rounded-xl card-gradient border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-primary transition-all hover:glow"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
