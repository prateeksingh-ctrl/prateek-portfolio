import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12">
      {/* Main Name */}
      <div className="mb-12">
        <div className="overflow-hidden">
          <motion.h1
            className="text-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter text-foreground"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 3.4, ease: [0.4, 0, 0.2, 1] }}
          >
            PRATEEK
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="text-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter text-foreground"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 3.5, ease: [0.4, 0, 0.2, 1] }}
          >
            SINGH
          </motion.h1>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end">
        {/* Left - Description */}
        <motion.div
          className="md:col-span-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.8 }}
        >
          <ArrowDownRight className="w-6 h-6 mb-4 text-muted-foreground" />
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm">
            Open to opportunities worldwide. Passionate about crafting polished,
            intuitive, and memorable digital experiences across web, design, and visual media.
          </p>
          <motion.a
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-2 mt-8 px-8 py-4 border border-foreground rounded-full text-foreground text-sm font-medium uppercase tracking-wider"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Contact ↗</span>
          </motion.a>
        </motion.div>

        {/* Center - Image */}
        <motion.div
          className="md:col-span-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 4 }}
        >
          <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden">
            <img
              src="https://res.cloudinary.com/duv8bi3tc/image/upload/v1764497588/DSC02884_ercmpx.jpg"
              alt="Prateek Singh"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-foreground/5" />
          </div>
        </motion.div>

        {/* Right - Availability */}
        <motion.div
          className="md:col-span-1 text-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.2 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Available for work
          </p>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            SEP'25
          </p>
         
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
