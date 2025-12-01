import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5"/>, href: "https://www.linkedin.com/in/prateek-singh-4425b8311/" },
    { name: "GitHub", icon: <Github className="w-5 h-5"/>, href: "https://github.com/prateeksingh-ctrl" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5"/>, href: "https://www.instagram.com/prateek_singh.18/" }, 
  ];

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 bg-[#050505] text-white overflow-hidden" ref={ref}>
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
        
        {/* LEFT COLUMN: Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-6">
            ( Contact )
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8 text-white">
            Let's work <br /> <span className="text-zinc-500">together.</span>
          </h2>
          
          <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-lg">
            Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or ways to bring your vision to life.
          </p>

          <motion.a
            href="mailto:prateeksingh2543@gmail.com"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full text-lg font-bold tracking-wide hover:bg-zinc-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* RIGHT COLUMN: Details & Footer */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
               <div className="flex items-center gap-3 mb-2 text-zinc-400">
                 <Mail className="w-4 h-4" /> <span className="text-xs font-bold uppercase tracking-widest">Email</span>
               </div>
               <a href="mailto:prateeksingh2543@gmail.com" className="text-sm md:text-base font-medium hover:text-zinc-300 transition-colors">prateeksingh2543@gmail.com</a>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
               <div className="flex items-center gap-3 mb-2 text-zinc-400">
                 <Phone className="w-4 h-4" /> <span className="text-xs font-bold uppercase tracking-widest">Phone</span>
               </div>
               <a href="tel:+918874946299" className="text-sm md:text-base font-medium hover:text-zinc-300 transition-colors">+91 8874946299</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 gap-8">
            
            {/* Socials */}
            <div>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all border border-white/10"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright & Back to Top */}
            <div className="flex flex-col items-end gap-4">
              <button 
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                Back to Top
                <span className="p-2 bg-white/10 rounded-full group-hover:-translate-y-1 transition-transform border border-white/5">
                  <ArrowUp className="w-4 h-4" />
                </span>
              </button>
              <p className="text-zinc-600 text-xs">© 2025 Prateek Singh. Ghaziabad, India.</p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;