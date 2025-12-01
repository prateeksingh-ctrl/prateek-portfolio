import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

// Define the type for the project data
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech?: string[];
  gallery?: string[]; // The extra photos
  link?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [project]);

  if (!project) return null;

  // Combine main image with gallery for a full list
  const allImages = [project.image, ...(project.gallery || [])];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-5xl max-h-[90vh] bg-background border border-border rounded-xl shadow-2xl overflow-y-auto"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-background/50 rounded-full hover:bg-background transition-colors border border-border"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* LEFT: Image Gallery Scroll */}
              <div className="w-full md:w-2/3 bg-black/5 p-4 md:p-8 space-y-4">
                {allImages.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-border/20 shadow-sm">
                    <img src={img} alt={`${project.title} detail ${idx}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>

              {/* RIGHT: Project Details (Sticky) */}
              <div className="w-full md:w-1/3 p-6 md:p-8 bg-card flex flex-col h-full md:sticky md:top-0">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                    {project.category}
                  </span>
                  <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.tech && (
                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase text-foreground mb-3">Tools / Tech</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs bg-secondary px-2 py-1 rounded text-foreground/80">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optional Link Button */}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-auto w-full py-4 bg-foreground text-background font-bold uppercase tracking-widest text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    View Live <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;