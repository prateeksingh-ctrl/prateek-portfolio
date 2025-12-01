import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building responsive, modern web applications with clean code and optimal performance. From concept to deployment, crafting digital solutions that work.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "REST APIs"],
  },
  {
    number: "02",
    title: "Graphic Design",
    description:
      "Creating visual identities and design systems that communicate brand essence. Bold typography, thoughtful layouts, and cohesive visual language.",
    skills: ["Adobe Illustrator", "Photoshop", "Figma", "Brand Identity", "Typography", "Layout Design"],
  },
  {
    number: "03",
    title: "Photography",
    description:
      "Capturing moments with an eye for composition and storytelling. Specializing in portraits, events, and creative visual narratives.",
    skills: ["Adobe Lightroom", "Portrait Photography", "Event Coverage", "Photo Editing", "Color Grading"],
  },
  {
    number: "04",
    title: "Marketing & Sponsorship",
    description:
      "Strategic thinking for brand partnerships and marketing campaigns. Understanding audience psychology and crafting compelling narratives.",
    skills: ["Brand Strategy", "Sponsorship Acquisition", "Campaign Management", "Content Strategy", "Social Media"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-6 md:px-12" ref={ref}>
      {/* Section Header */}
      <motion.div
        className="mb-16 md:mb-24"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">
          What I Do/
        </h2>
        <p className="text-muted-foreground text-sm tracking-wider uppercase">
          (Services)
        </p>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-16 leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I specialize in creating impactful digital experiences that blend technical precision with creative vision. 
        Whether it's code, design, or visual storytelling — I bring ideas to life with attention to detail.
      </motion.p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            className="service-card group"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-muted-foreground text-sm">({service.number})</span>
            </div>
            
            <h3 className="text-display text-3xl md:text-4xl text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {service.title}
            </h3>
            
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {service.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs text-muted-foreground border border-border px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
