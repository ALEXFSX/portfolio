import { X, ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl card-gradient border border-border card-shadow animate-scale-in md:w-[1024px] md:h-[768px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-muted hover:bg-muted/80 rounded-full text-foreground hover:text-primary transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Preview Area */}
          <div className="relative aspect-video bg-muted border-b border-border overflow-hidden">
            {project.previewUrl ? (
              <iframe
                src={project.previewUrl}
                title={`Preview de ${project.title}`}
                className="w-full h-full"
                loading="lazy"
              />
            ) : project.images && project.images.length > 0 ? (
              <Carousel className="h-full">
                <CarouselContent className="h-full">
                  {project.images.map((img, idx) => (
                    <CarouselItem key={img} className="flex items-center justify-center h-full">
                      <div className="w-full h-full overflow-auto flex items-center justify-center">
                        <img
                          src={img}
                          alt={project.title + ' imagem ' + (idx + 1)}
                          className="object-contain max-w-full max-h-full"
                          style={{ display: 'block' }}
                          onError={e => (e.currentTarget.style.display = 'none')}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-10" />
              </Carousel>
            ) : (
              <div className="w-full h-full overflow-y-auto flex items-center justify-center">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-auto max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            )}
            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-muted-foreground font-mono">
                    {project.year}
                  </span>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                  {project.title}
                </h2>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.liveUrl && (
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Site
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-muted"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                Sobre o Projeto
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                Tecnologias Utilizadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-muted rounded-lg text-secondary-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
