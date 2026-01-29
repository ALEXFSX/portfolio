import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/alexfreitas", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alexfreitas", label: "LinkedIn" },
    { icon: Mail, href: "mailto:alexfrs.dev@gmail.com", label: "Email" },
  ];

  const techStack = [
    "React", "Next.js", "TypeScript", "Vue.js", "Node.js", "WordPress", "PHP", "Tailwind"
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Olá, meu nome é
          </p>

          {/* Name */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Alex Freitas
          </h1>

          {/* Title */}
          <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <span className="text-gradient">Front-end Developer</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            +7 anos criando soluções web escaláveis e eficientes. Especialista em 
            <span className="text-foreground"> React</span>, 
            <span className="text-foreground"> Next.js</span> e 
            <span className="text-foreground"> WordPress headless</span>. 
            Projetos de alto impacto para marcas como Alpargatas/Havaianas, Fluency Academy, Betway e Gizmodo Brasil.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <MapPin size={16} className="text-primary" />
            <span>Aquiraz, CE, Brasil</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold"
            >
              <a href="#projects">
                Ver Projetos
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-display font-semibold"
            >
              {/* <a href="https://afs.dev.br" target="_blank" rel="noopener noreferrer">
                Meu Site
              </a> */}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-primary transition-all hover:glow"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm text-muted-foreground mb-3 font-mono">Stack principal:</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-muted rounded-full text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
