import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SponsorConnect",
    category: "Marketing & Design",
    image: "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764498512/merakist-jyoSxjUE22g-unsplash_bxsvb3.jpg",
  },
  {
    id: 2,
    title: "Trello-Clone",
    category: "Web Development",
    image: "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764499007/Gemini_Generated_Image_vf57s3vf57s3vf57_yapj2t.png",
  },
  {
    id: 3,
    title: "Portrait Series",
    category: "Photography",
    image: "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764499174/edits-18_uqdq1z.jpg",
  },
  {
    id: 4,
    title: "Theatre Workshop Standee",
    category: "Graphic Design",
    image: "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764499486/standee_theatre_workshop_wr6gsg.jpg",
  },
];

const WorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-secondary/30" ref={ref}>
      {/* Section Header */}
      <motion.div
        className="mb-16 md:mb-24"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">
          Selected Works/
        </h2>
        <p className="text-muted-foreground text-sm tracking-wider uppercase">
          (Projects)
        </p>
      </motion.div>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-16 leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Thoughtfully crafted digital experiences that blend utility and aesthetics 
        into something functional, memorable, and refined.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card group"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              
              {/* Hover Arrow */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowUpRight className="w-5 h-5 text-foreground" />
              </motion.div>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-display text-2xl md:text-3xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.category}</p>
              </div>
              <span className="text-muted-foreground text-sm">0{project.id}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
