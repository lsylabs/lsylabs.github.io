import { motion } from "framer-motion";

interface LandingScreenProps {
  onEnter: () => void;
}

const LandingScreen = ({ onEnter }: LandingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <h1 className="text-display font-light tracking-tight text-foreground mb-4">
          LSY Labs
        </h1>
        <p className="text-caption text-muted-foreground tracking-wide mb-12">
          Design-led apps. Built with care.
        </p>
        <button
          onClick={onEnter}
          className="group relative text-micro uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-400"
        >
          <span>Enter</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-400 group-hover:w-full" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default LandingScreen;
