"use client"; // Required for Next.js App Router

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Discipline {
  title: string;
  desc: string;
}

const disciplines: Discipline[] = [
  { title: "Engineering", desc: "Building scalable web architecture with Next.js & Node." },
  { title: "Design", desc: "Crafting intuitive UI/UX with Figma and Canva." },
  { title: "Marketing", desc: "Strategizing campaigns and sponsorship acquisition." },
  { title: "Photography", desc: "Capturing moments through my lenses." },
];

export default function Disciplines() {
  // 1. Type the ref as an HTMLDivElement
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Context for cleanup in React
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // Pin the section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", 
        pin: true,
        scrub: true, 
      });

      // Animate items
      disciplines.forEach((_, i) => {
        gsap.fromTo(`.discipline-${i}`, 
          { opacity: 0, y: 50 }, 
          { 
            opacity: 1, y: 0, 
            scrollTrigger: {
              trigger: containerRef.current,
              start: `${i * 25}% top`, 
              end: `${(i * 25) + 25}% top`,
              scrub: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden relative">
      <div className="space-y-12 relative z-10">
        {disciplines.map((item, i) => (
          <div key={i} className={`discipline-${i} text-center opacity-0`}>
            {/* Added uppercase tracking for a more premium look */}
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">{item.title}</h2>
            <p className="text-lg md:text-xl text-gray-400 mt-2 font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}