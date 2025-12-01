import { motion } from "framer-motion";
import { useState } from "react";

// Simple SVG Icons to avoid installing extra libraries
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Expertise", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      // ADDED: mix-blend-difference ensures text is visible on both white and black backgrounds
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 mix-blend-difference text-white"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex items-center justify-between">
        
        {/* LEFT: Branding */}
        <div className="flex-1">
          <a href="#" className="text-lg font-bold tracking-tighter uppercase">
            PS
          </a>
        </div>

        {/* CENTER: Navigation Links (Moved here for balance) */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:underline hover:underline-offset-4 decoration-1 transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* RIGHT: Socials (Fills the empty space) */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-6">
          <a 
            href="https://github.com/prateeksingh-ctrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative text-white" 
        >
          <motion.span
            className="w-6 h-0.5 bg-current block"
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-current block"
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-current block"
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="md:hidden fixed inset-0 bg-black text-white" 
        initial={{ x: "100%" }}
        animate={{
          x: isMenuOpen ? "0%" : "100%",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-bold uppercase tracking-tighter"
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: isMenuOpen ? 0 : 50,
                opacity: isMenuOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            >
              {item.name}
            </motion.a>
          ))}
          
          {/* Mobile Socials */}
          <div className="flex gap-8 mt-8">
            <a href="https://github.com/prateeksingh-ctrl" target="_blank"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/prateek-singh-4425b8311/" target="_blank"><LinkedinIcon /></a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;