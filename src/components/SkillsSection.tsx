import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git",
  "Adobe Lightroom",
  "Photography",
  "Video Editing",
  "Brand Strategy",
  "Marketing",
  "Content Creation",
  "Social Media",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 md:px-12" ref={ref}>
      {/* Section Header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">
          Skills/
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="flex flex-wrap gap-3 md:gap-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="skill-pill cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.4 + index * 0.03,
              ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
