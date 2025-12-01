import { motion } from "framer-motion";

const MarqueeSection = () => {
  const text = "DEVELOPER  •  DESIGNER  •  PHOTOGRAPHER  •  CREATOR  •  ";
  const repeatedText = text.repeat(4);

  return (
    <section className="py-16 overflow-hidden border-y border-border">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <span className="text-display text-6xl md:text-8xl lg:text-9xl text-foreground/10 tracking-tight">
          {repeatedText}
        </span>
        <span className="text-display text-6xl md:text-8xl lg:text-9xl text-foreground/10 tracking-tight">
          {repeatedText}
        </span>
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
