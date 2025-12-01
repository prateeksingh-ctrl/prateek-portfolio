import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-secondary/30" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left - Image (Kept exactly the same) */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src="https://res.cloudinary.com/duv8bi3tc/image/upload/v1764497825/WhatsApp_Image_2025-06-29_at_16.03.39_xqg65a.jpg"
              alt="Prateek Singh"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Decorative element */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-32 h-32 border border-foreground/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        {/* Right - Content */}
        <div>
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">
              About/
            </h2>
            <p className="text-muted-foreground text-sm tracking-wider uppercase">
              (Who I Am)
            </p>
          </motion.div>

          {/* THE NEW BIO: Professional Pitch */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold leading-tight text-foreground">
              I sit at the intersection of <span className="italic text-primary/80">Code</span> and <span className="italic text-primary/80">Culture</span>.
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              As a B.Tech student specializing in Electrical & Computer Science, I don't just write code—I build ecosystems. My work bridges the gap between technical logic and human experience.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently, I am focused on learning Data Structures and Algorithms ,alongwith sharping my skills in webdev  <strong>Full Stack (Next.js, React,javascript,html)</strong> to build scalable web apps and understand various patterns in data structures. Beyond the terminal, I lead marketing strategies and sponsorship acquisition for College Events and i am also a part of the entrpreneurial cell of ABESEC and i also have a good command over designing visuals through canva and figma , proving that I understand both the <em>product</em> and the <em>market</em>.
            </p>
            </motion.div>

          {/* NEW SECTION: Education (Replaces Stats) */}
          <motion.div
            className="mt-16 pt-10 border-t border-border"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
              Education Timeline
            </h4>

            <div className="space-y-8">
              {/* College */}
              <div className="relative pl-8 border-l border-foreground/20 hover:border-foreground/80 transition-colors duration-300">
                <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-foreground"></span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h5 className="text-lg font-bold text-foreground">ABES Engineering College</h5>
                  <span className="text-xs font-medium bg-foreground/10 text-foreground px-2 py-1 rounded">2024 — Present</span>
                </div>
                <p className="font-medium text-muted-foreground mb-2">B.Tech in Electrical & Computer Science</p>
                <p className="text-xs text-muted-foreground/80">
                  NEC Illuminate Finalist (IIT Bombay) • E-Cell Core Team Member • Graphic Designer in Samvaad Club
                </p>
              </div>

              {/* High School */}
              <div className="relative pl-8 border-l border-foreground/20 hover:border-foreground/80 transition-colors duration-300">
                <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-background border border-foreground"></span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h5 className="text-lg font-bold text-foreground">JC International Public School</h5>
                  <span className="text-xs font-medium text-muted-foreground">2022 — 2024</span>
                </div>
                <p className="font-medium text-muted-foreground">Intermediate (PCM)</p>
              </div>
            </div>
             <div className="relative pl-8 border-l border-foreground/20 hover:border-foreground/80 transition-colors duration-300">
                <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-background border border-foreground"></span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h5 className="text-lg font-bold text-foreground">HP Defence Academy</h5>
                  <span className="text-xs font-medium text-muted-foreground">2020 — 2022</span>
                </div>
                <p className="font-medium text-muted-foreground">HighSchool</p>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;