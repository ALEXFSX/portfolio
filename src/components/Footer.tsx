const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg">
            <span className="text-gradient">alex</span>
            <span className="text-foreground">.dev</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            Desenvolvido com{" "}
            <span className="text-primary">♥</span> por Alex Freitas © {currentYear}
          </p>
          
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-primary transition-colors">
              Início
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projetos
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
