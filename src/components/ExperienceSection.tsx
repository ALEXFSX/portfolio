import { Briefcase } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    company: "Apiki",
    role: "Front-end Developer",
    period: "Ago 2023 - Presente",
    current: true,
    description: [
      "Desenvolvimento de sistemas headless utilizando React/Next.js e WordPress",
      "Integração de APIs RESTful e GraphQL para consumo de dados dinâmicos",
      "Aplicação de práticas avançadas de SEO técnico e otimização de performance",
    ],
  },
  {
    company: "Fluency Academy",
    role: "Front-end Developer",
    period: "Out 2022 - Mar 2023",
    description: [
      "Desenvolvimento de componentes otimizados para conversão de leads",
      "Criação de plugins WordPress para consumo de APIs externas",
      "Otimização de código e performance do site para melhorar SEO técnico",
    ],
  },
  {
    company: "E-deas Digital",
    role: "Gestor de Projetos",
    period: "Set 2021 - Out 2022",
    description: [
      "Gerenciamento e acompanhamento de projetos de desenvolvimento",
      "Desenvolvimento de temas WordPress personalizados",
      "Treinamento de novos colaboradores na stack utilizada",
    ],
  },
  {
    company: "Convertte Digital / Visual Page",
    role: "Front-end Developer",
    period: "Set 2018 - Nov 2021",
    description: [
      "Desenvolvimento de landing pages otimizadas para conversão",
      "Integração de sistemas de captação de leads",
      "Desenvolvimento de CMS e documentação de projetos",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-primary font-mono text-sm mb-2">Trajetória</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Experiência Profissional
          </h2>
          <p className="text-muted-foreground">
            Mais de 6 anos desenvolvendo soluções web para empresas de diversos segmentos.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 animate-fade-in-up ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1.5 translate-y-2 glow" />

                {/* Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-xl card-gradient border border-border hover:border-primary/30 transition-colors card-shadow">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-semibold text-lg text-foreground">
                            {exp.company}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                              Atual
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium text-sm">{exp.role}</p>
                        <p className="text-muted-foreground text-sm font-mono">{exp.period}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-primary mt-1.5">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
