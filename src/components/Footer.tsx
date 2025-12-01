import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          className="text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          © 2025 Prateek Singh. All rights reserved.
        </motion.p>

        <motion.p
          className="text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Designed & Built with passion
        </motion.p>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="link-hover text-foreground text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -2 }}
        >
          Back to top ↑
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
