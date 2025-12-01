import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"name" | "exit">("name");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("exit"), 2500);
    const timer2 = setTimeout(() => onComplete(), 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  const firstName = "PRATEEK";
  const lastName = "SINGH";

  return (
    <AnimatePresence>
      {phase !== "exit" || true ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "exit" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="relative overflow-hidden">
            <div className="flex flex-col items-center gap-2 md:gap-4">
              {/* First Name */}
              <div className="overflow-hidden">
                <motion.h1
                  className="text-display text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] text-foreground tracking-tighter"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.2,
                  }}
                >
                  {firstName.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.4, 0, 0.2, 1],
                        delay: 0.3 + i * 0.05,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>

              {/* Last Name */}
              <div className="overflow-hidden">
                <motion.h1
                  className="text-display text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] text-foreground tracking-tighter"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.5,
                  }}
                >
                  {lastName.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.4, 0, 0.2, 1],
                        delay: 0.6 + i * 0.05,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2,
                }}
              >
                Creative Developer & Designer
              </motion.p>
            </div>

            {/* Decorative line */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-foreground/30"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                delay: 1.5,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default IntroAnimation;
