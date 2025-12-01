import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/prateek-singh-4425b8311/" },
    { name: "GitHub", href: "https://github.com/prateeksingh-ctrl" },
    { name: "Instagram", href: "https://www.instagram.com/prateek_singh.18/" }, 
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12" ref={ref}>
      {/* Section Header */}
      <motion.div
        className="mb-16 md:mb-24"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">
          Let's Work/
        </h2>
        <p className="text-muted-foreground text-sm tracking-wider uppercase">
          (Contact)
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left - CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            Have a project in mind? Let's create something extraordinary together. 
            I'm always open to discussing new opportunities, creative ideas, or 
            ways to bring your vision to life.
          </p>

          <motion.a
            href="mailto:prateeksingh2543@gmail.com"
            className="magnetic-btn inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-full text-lg font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Say Hello</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Right - Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <a
                href="mailto:prateeksingh2543@gmail.com"
                className="link-hover text-foreground hover:text-muted-foreground transition-colors"
              >
                prateeksingh2543@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <a
                href="tel:+91 8874946299"
                className="link-hover text-foreground hover:text-muted-foreground transition-colors"
              >
                +91 8874946299
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Ghaziabad, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm mb-4 tracking-wider uppercase">
              Follow Me
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="link-hover text-foreground hover:text-muted-foreground transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {link.name} ↗
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
