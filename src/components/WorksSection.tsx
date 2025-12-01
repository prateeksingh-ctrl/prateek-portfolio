import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Layers, Code2, Camera, Megaphone } from "lucide-react";
import ProjectModal from "./ProjectModal"; 

// Data Structure - Highly Detailed
const projects = [
  {
    id: 1,
    title: "Trello-Clone",
    category: "Full Stack Engineering",
    role: "Sole Developer",
    year: "2025",
    icon: <Code2 className="w-5 h-5" />,
    image: "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764499007/Gemini_Generated_Image_vf57s3vf57s3vf57_yapj2t.png",
    description: "A production-grade Kanban board application engineered for performance. It solves complex state synchronization challenges using optimistic UI patterns, ensuring zero-latency interactions even on slow networks.",
    tech: ["React.js", "Zustand State", "dnd-kit", "Tailwind CSS"],
    features: ["Drag-and-Drop Architecture", "Persistent Local Storage", "Optimistic Updates"],
    link: "https://github.com/prateeksingh-ctrl/trello-clone",
    gallery: []
  },
  {
    id: 2,
    title: "SponsorConnect",
    category: "Marketing & Strategy",
    role: "Sponsorship Lead",
    year: "2025",
    icon: <Megaphone className="w-5 h-5" />,
    image: "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764498512/merakist-jyoSxjUE22g-unsplash_bxsvb3.jpg",
    description: "Spearheaded the sponsorship acquisition strategy for the college entrpreneurial organisation. Developed a data-driven pitch deck that bridged the gap between student demographics and corporate ROI targets.",
    tech: ["B2B Sales", "CRM Management", "Market Analysis", "Negotiation"],
    features: ["Secured ₹50k+ in Sponsorships", "Drafted Pitch desks for sponsorships", "Increased Footfall by 20%"],
    link: null,
    gallery: []
  },
  {
    id: 3,
    title: "Portrait Series",
    category: "Photography & Art Direction",
    role: "Photographer",
    year: "2023-25",
    icon: <Camera className="w-5 h-5" />,
    image: "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764499174/edits-18_uqdq1z.jpg",
    description: "A cinematic exploration of human emotion through portraiture. This series focuses on high-contrast lighting and color grading to tell stories without words. Featured in the college art gallery.",
    tech: ["Smartphone Camera", "Adobe Lightroom", "Color Grading", "Composition"],
    features: ["Cinematic Color Science", "Studio Lighting Setup", "Visual Storytelling"],
    link: null,
    gallery: [
       "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764499174/edits-18_uqdq1z.jpg",
    ]
  },
  {
    id: 4,
    title: "Theatre Visuals",
    category: "Graphic Design",
    role: "Visual Designer",
    year: "2025",
    icon: <Layers className="w-5 h-5" />,
    image: "https://res.cloudinary.com/duv8bi3tc/image/upload/v1764499486/standee_theatre_workshop_wr6gsg.jpg",
    description: "Designed the visual identity for the campus theatre workshop. The goal was to create a disruptive, high-energy aesthetic that would stand out on crowded notice boards.",
    tech: ["Adobe Photoshop", "Canva", "Creative Direction"],
    features: ["Large Format Print Design", "Brand Identity System", "Social Media Assets"],
    link: null,
    gallery: []
  },
];

const ProjectCard = ({ project, index, onClick }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center py-16 md:py-24 border-b border-gray-200 last:border-0`}
    >
      
      {/* 1. VISUAL SIDE (Image) */}
      <div 
        className="w-full lg:w-3/5 relative group cursor-pointer"
        onClick={onClick}
      >
        {/* Subtle Glow Effect behind image */}
        <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" />
        
        <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-lg border border-gray-100">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Hover Overlay Button */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-white/90 backdrop-blur text-black px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
              View Details <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>

      {/* 2. CONTENT SIDE (Details) */}
      <div className="w-full lg:w-2/5 flex flex-col items-start text-left space-y-6">
        
        {/* Meta Header */}
        <div className="flex items-center gap-3 w-full border-b border-gray-100 pb-4">
          <div className="p-2 bg-gray-50 rounded-lg text-black">
            {project.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{project.category}</span>
            <span className="text-xs font-medium text-gray-400">{project.role} • {project.year}</span>
          </div>
        </div>

        {/* Title & Desc */}
        <div>
          <h3 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">{project.title}</h3>
          <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
        </div>

        {/* Tech Stack - Clean Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-md uppercase tracking-wide">
              {t}
            </span>
          ))}
        </div>

        {/* Key Features List (The "Detailed" Part) */}
        <ul className="space-y-2 pt-2">
          {project.features.map((feat, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-800 font-medium">
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              {feat}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button 
            onClick={onClick}
            className="px-6 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest rounded hover:bg-gray-800 transition-colors"
          >
            View Gallery
          </button>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-3 border border-gray-200 text-black rounded hover:bg-gray-50 transition-colors"
              aria-label="View Source"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
};

const WorksSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="works" className="py-24 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
        
        {/* Background Decorative Grid - Adds "Professional" Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-bold text-black tracking-tighter mb-6">
              Selected Works
            </h2>
            <div className="h-1 w-24 bg-black" />
          </div>

          {/* Project List */}
          <div className="flex flex-col">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
};

export default WorksSection;