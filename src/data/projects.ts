export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  previewUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: string;
  year: string;
  images?: string[]; // Novas imagens para carrossel opcional
}

export const projects: Project[] = [

{
  id: "alpargatas",
  title: "Programa de Trainee Alpargatas",
  description: "Plataforma digital responsável por conectar talentos ao Programa de Trainee da Alpargatas, fortalecendo a marca empregadora e impulsionando a atração de candidatos qualificados em ciclos anuais do programa.",
  longDescription: "Projeto institucional desenvolvido e evoluído ao longo de três edições consecutivas do Programa de Trainee da Alpargatas. A plataforma atua como principal ponto de contato entre a marca e os candidatos, traduzindo cultura, valores e proposta de carreira em uma experiência digital clara e orientada à conversão. O projeto contribui diretamente para o sucesso do plano de trainees ao qualificar inscrições, organizar a jornada do candidato e reforçar o posicionamento da Alpargatas como uma empresa inovadora e comprometida com o desenvolvimento de talentos.",
  thumbnail: "/projects/alpargatas.png",
  // previewUrl: "https://web.archive.org/web/20240822090518/https://ciadetalentos.com.br/traineealpargatas/",
  technologies: ["React", "Next.js", "TypeScript", "API REST"],
  category: "Institucional",
  year: "2024",
  images: [
    "/projects/alpargatas-2022.png",
    "/projects/alpargatas-2023.png",
    "/projects/alpargatas-2024.png"
  ] 
},



  {
  id: "123questoes",
  title: "123Questões – Plataforma de Simulados",
  description: "Plataforma online de simulados para concursos públicos.",
  longDescription: "Desenvolvimento de uma plataforma de simulados para concursos públicos com mais de 1.500.000 questões disponíveis. O sistema permite a criação de simulados personalizados com filtros por banca, disciplina e nível de dificuldade, simulando o ambiente real de prova. Aplicação focada em performance, escalabilidade, experiência do usuário e acompanhamento de desempenho.",
 thumbnail: "/projects/123questoes-cover.png",
  technologies: ["Next.js", "React", "TypeScript", "REST API", "Prism", "Jest"],
  category: "Educação",
   previewUrl: "https://app.123questoes.com.br/questions/",
    liveUrl: "https://app.123questoes.com.br/questions/",
  year: "2024"
},
{
  id: "aiks-ai",
  title: "AIKS – Site Institucional com Chatbot de IA",
  description: "Site institucional com foco em navegação e comunicação inteligente.",
  longDescription: "Desenvolvimento do site institucional da AIKS utilizando WordPress, com foco em navegação clara, organização de conteúdo e experiência do usuário. O projeto conta com a integração de um chatbot com inteligência artificial para melhorar a comunicação com clientes, oferecendo respostas rápidas, suporte inicial e maior engajamento.",
  thumbnail: "/projects/aiks-crop.gif",
  technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS", "Chatbot com IA"],
  category: "Institucional",
   previewUrl: "https://aiks.ai/",
    liveUrl: "https://aiks.ai/",
  year: "2024"
},

  {
    id: "fluency-academy",
    title: "Fluency Academy",
    description: "Plataforma educacional para escola de inglês com foco em conversão de leads.",
    longDescription: "Desenvolvimento de componentes otimizados para conversão de leads, criação de plugins WordPress para consumo de APIs externas, e interfaces responsivas usando PHP, Sass e TypeScript. O projeto focou em otimização de código e performance para melhorar SEO técnico.",
    thumbnail: "/projects/fluency.jpg",
    previewUrl: "https://fluency.io/br",
    liveUrl: "https://fluency.io/br",
    technologies: ["React", "TypeScript", "WordPress", "PHP", "Sass"],
    category: "Educação",
    year: "2023"
  },
  {
    id: "betway",
    title: "Betway Brasil",
    description: "Plataforma de apostas esportivas com interface moderna e responsiva.",
    longDescription: "Desenvolvimento de interfaces headless utilizando React/Next.js integrado com WordPress como CMS. Implementação de soluções escaláveis e performáticas, com integração de APIs RESTful e GraphQL para consumo de dados dinâmicos.",
    thumbnail: "/projects/fluency.jpg",
    previewUrl: "https://betway.com.br",
    liveUrl: "https://betway.com.br",
    technologies: ["Next.js", "React", "GraphQL", "WordPress"],
    category: "Esportes",
    year: "2024"
  },
  {
    id: "gizmodo-brasil",
    title: "Gizmodo Brasil",
    description: "Portal de tecnologia e cultura geek com milhões de acessos mensais.",
    longDescription: "Desenvolvimento de sistema headless com React/Next.js e WordPress, focando em performance e SEO técnico. Implementação de práticas avançadas de otimização e colaboração em equipe multidisciplinar.",
    thumbnail: "/projects/fluency.jpg",
    previewUrl: "https://gizmodo.uol.com.br",
    liveUrl: "https://gizmodo.uol.com.br",
    technologies: ["Next.js", "React", "WordPress", "SEO"],
    category: "Mídia",
    year: "2024"
  },

  {
    id: "landing-pages",
    title: "Landing Pages de Alta Conversão",
    description: "Coleção de landing pages otimizadas para captação de leads.",
    longDescription: "Desenvolvimento de mais de 50 landing pages otimizadas para conversão durante atuação na Convertte Digital. Integração de sistemas de captação de leads, desenvolvimento de CMS personalizado e documentação completa dos projetos.",
    thumbnail: "/projects/fluency.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "Bootstrap"],
    category: "Marketing",
    year: "2021"
  },
  {
    id: "cms-custom",
    title: "CMS Personalizado",
    description: "Sistema de gerenciamento de conteúdo desenvolvido do zero.",
    longDescription: "Desenvolvimento de CMS completo com painel administrativo, gestão de usuários, e sistema de templates. Construído com PHP e MySQL, oferecendo alta customização e performance.",
    thumbnail: "/projects/fluency.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    category: "Sistema",
    year: "2020"
  },


];
