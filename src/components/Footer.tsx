import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="py-section border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-micro text-muted-foreground">
          <span className="tracking-wide">LSY Labs</span>
          <a
            href="mailto:contact@lsylabs.com"
            className="hover:text-foreground transition-colors duration-400 tracking-wide"
          >
            contact@lsylabs.com
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
