import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-secondary/30" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[3/4] overflow-hidden">
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
            className="mb-12"
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

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              I'm Prateek Singh, a 2nd year B.Tech student at ABES Engineering College 
              with a passion for creating at the intersection of technology and design.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My journey spans across multiple creative disciplines — from building 
              responsive web applications to crafting visual identities and capturing 
              moments through my lens. I believe in the power of thoughtful design 
              and clean code to create experiences that resonate.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond technical skills, I bring experience in marketing strategy and 
              sponsorship acquisition, understanding how to connect brands with their 
              audiences. Whether it's pixels on a screen or partnerships on paper, 
              I approach every project with the same dedication to excellence.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding or designing, you'll find me exploring new photography 
              techniques, experimenting with Adobe Lightroom, or working on the next 
              creative challenge that comes my way.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <p className="text-display text-4xl md:text-5xl text-foreground">2+</p>
              <p className="text-muted-foreground text-sm mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-display text-4xl md:text-5xl text-foreground">5+</p>
              <p className="text-muted-foreground text-sm mt-2">Projects Done</p>
            </div>
            <div>
              <p className="text-display text-4xl md:text-5xl text-foreground">4</p>
              <p className="text-muted-foreground text-sm mt-2">Disciplines</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
