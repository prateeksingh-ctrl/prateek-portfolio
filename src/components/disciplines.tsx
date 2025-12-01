import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const disciplines = [
  { 
    title: "Engineering", 
    desc: "Full Stack Development & Data Structures", 
    color: "bg-[#0a0a0a]", // Deepest Black
    text: "text-white",
    sub: "Clean Code"
  },
  { 
    title: "Design", 
    desc: "creative Direction & Visual Storytelling", 
    color: "bg-[#1a1a1a]", // Slightly lighter
    text: "text-white",
    sub: "Bold Ideas"
  },
  { 
    title: "Marketing", 
    desc: "Sponsorship Strategy & Brand Positioning", 
    color: "bg-[#2a2a2a]", // Dark Grey
    text: "text-white",
    sub: "Growth & ROI"
  },
  { 
    title: "Photography", 
    desc: "Cinematic Portraits & Color Grading", 
    color: "bg-white", // Contrast Pop
    text: "text-black",
    sub: "Visual Poetry"
  },
];

const Card = ({ item, index, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }} 
        className={`flex flex-col relative w-[85vw] md:w-[70vw] h-[60vh] rounded-3xl p-8 md:p-14 shadow-2xl origin-top ${item.color} ${item.text} border border-white/5 overflow-hidden`}
      >
        {/* Card Header */}
        <div className="flex justify-between items-center mb-10 z-10">
           <span className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-70">{item.sub}</span>
           <span className="text-4xl md:text-6xl font-bold opacity-10 font-display">0{index + 1}</span>
        </div>
        
        {/* Card Content */}
        <div className="mt-auto z-10 relative">
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4 leading-tight">{item.title}</h2>
          <p className="text-base md:text-xl opacity-80 max-w-lg leading-relaxed">{item.desc}</p>
        </div>

        {/* Gradient Fade Overlay (Fixes the "Flat" look) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  )
}

export default function Disciplines() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    // Added negative margin to pull it closer to previous section
    <div id="services" ref={container} className="relative mt-0 mb-20 bg-background">
      {disciplines.map((item, i) => {
        // Subtle scaling effect for the stack
        const targetScale = 1 - ( (disciplines.length - i) * 0.05);
        return (
          <Card 
            key={i} 
            item={item} 
            index={i} 
            progress={scrollYProgress} 
            range={[i * 0.25, 1]} 
            targetScale={targetScale} 
          />
        );
      })}
    </div>
  );
}