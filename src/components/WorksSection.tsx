import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ProjectModal from "./ProjectModal"; // IMPORT THE NEW MODAL

const projects = [
  // 1. TRELLO (Featured)
  {
    id: 1,
    title: "Trello-Clone",
    category: "Engineering",
    type: "featured",
    image: "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764499007/Gemini_Generated_Image_vf57s3vf57s3vf57_yapj2t.png",
    description: "A high-performance production-grade task management application.",
    tech: ["React.js", "Zustand", "dnd-kit", "Tailwind"],
    features: ["Drag-and-Drop", "Local Storage", "Optimistic UI"],
    gallery: [] 
  },
  // 2. MARKETING 
  {
    id: 2,
    title: "SponsorConnect",
    category: "Marketing",
    type: "standard",
    image: "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764498512/merakist-jyoSxjUE22g-unsplash_bxsvb3.jpg",
    description: "Strategic sponsorship acquisition for college summits.",
    tech: ["Pitching", "Market Analysis"],
    gallery: []
  },
  // 3. PHOTOGRAPHY (Add your extra portrait links here)
  {
    id: 3,
    title: "Portrait Series",
    category: "Photography",
    type: "standard",
    image: "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764499174/edits-18_uqdq1z.jpg",
    description: "Capturing human emotion through a cinematic lens.",
    tech: ["Lightroom", "Color Grading"],
    // PASTE YOUR EXTRA LINKS HERE
    gallery: [
       "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764499174/edits-18_uqdq1z.jpg", // Example duplicate
       // Add new links here...
    ]
  },
  // 4. GRAPHIC DESIGN
  {
    id: 4,
    title: "Theatre Standee",
    category: "Design",
    type: "standard",
    image: "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764499486/standee_theatre_workshop_wr6gsg.jpg",
    description: "Visual identity design for theatre workshops.",
    tech: ["Photoshop", "Print Design"],
    gallery: []
  },
];

const WorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // STATE FOR MODAL
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="works" className="py-24 px-6 md:px-12 bg-secondary/30" ref={ref}>
        <motion.div
          className="mb-16 md:mb-24 border-b border-border/40 pb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">
            Selected Works/
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => {
            const isFeatured = project.type === "featured";
            return (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`} // For smooth animation transition
                onClick={() => setSelectedProject(project)} // OPEN MODAL ON CLICK
                className={`cursor-pointer group relative bg-background border border-border/50 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 ${isFeatured ? "md:col-span-2 grid md:grid-cols-2 gap-0" : ""}`}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                {/* Image */}
                <div className={`overflow-hidden relative ${isFeatured ? "h-full min-h-[300px]" : "aspect-[4/3]"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Gallery <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between bg-card">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-secondary text-muted-foreground border-transparent">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-3 text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    {project.tech && (
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="text-xs font-medium text-foreground/80 bg-secondary/50 px-2 py-1 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* RENDER THE MODAL OUTSIDE THE GRID */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
};

export default WorksSection;