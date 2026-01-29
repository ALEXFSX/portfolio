import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

const ProjectCard = ({ project, onClick, index }: ProjectCardProps) => {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="relative overflow-hidden rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:glow">
        {/* Thumbnail */}
        <div className="aspect-video overflow-hidden bg-muted relative">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
              const placeholder = document.createElement('div');
              placeholder.className = 'text-4xl font-display font-bold text-muted-foreground/30';
              placeholder.textContent = project.title.charAt(0);
              target.parentElement!.appendChild(placeholder);
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          
          {/* Category Badge */}
          <span className="absolute top-4 left-4 px-3 py-1 bg-black/20  text-white border-primary border text-xs font-medium rounded-full backdrop-blur-sm">
            {project.category}
          </span>

          {/* View Icon */}
          <div className="absolute top-4 right-4 p-2 bg-black/20 text-white border-primary border rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
            <ExternalLink size={16} />
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-muted-foreground font-mono">
              {project.year}
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-muted rounded text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 text-xs bg-muted rounded text-muted-foreground">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
