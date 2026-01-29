import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project } from "@/data/projects";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("Todos");

  const categories = ["Todos", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-primary font-mono text-sm mb-2">Portfólio</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground">
            Uma seleção dos projetos que mais impactaram minha carreira e demonstram minhas habilidades em desenvolvimento front-end.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              index={index}
            />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
