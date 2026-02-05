import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";

interface PortfolioProps {
  onBack: () => void;
}

const projects = [
  {
    id: "astra",
    name: "Astra",
    type: "iOS Productivity App",
    description: "A calm task manager designed around focus and negative space.",
    extendedDescription:
      "Astra strips away the noise of traditional productivity apps. Every pixel serves a purpose. The interface breathes, giving your tasks room to exist without competing for attention. Built with a deep understanding that clarity enables focus.",
    gradientFrom: "hsl(45 20% 92%)",
    gradientTo: "hsl(35 15% 85%)",
  },
  {
    id: "drift",
    name: "Drift",
    type: "Personal Finance App",
    description: "A stripped-back budgeting experience focused on clarity and flow.",
    extendedDescription:
      "Financial anxiety often stems from visual overwhelm. Drift presents your money story with restraint—clean numbers, honest insights, no judgment. The interface flows like water, guiding you through your finances with gentle confidence.",
    gradientFrom: "hsl(200 15% 90%)",
    gradientTo: "hsl(180 10% 85%)",
  },
  {
    id: "mono",
    name: "Mono",
    type: "Concept Music Player",
    description: "A monochrome music player exploring tactile interaction.",
    extendedDescription:
      "Mono questions the visual excess of modern music apps. Working entirely in grayscale, it proves that color isn't essential—form, rhythm, and touch are. Each gesture feels intentional, each transition considered. Sound becomes the only color you need.",
    gradientFrom: "hsl(0 0% 92%)",
    gradientTo: "hsl(0 0% 82%)",
  },
];

const Portfolio = ({ onBack }: PortfolioProps) => {
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Header */}
      <header className="py-8 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center justify-between gap-6">
            <motion.button
              type="button"
              onClick={onBack}
              className="group -ml-2 inline-flex items-center gap-2 px-2 py-2 text-micro uppercase tracking-widest text-muted-foreground transition-colors duration-400 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Back to landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span className="relative inline-block">
                <span>Back</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-400 group-hover:w-full" />
              </span>
            </motion.button>

            <motion.p
              className="text-micro text-muted-foreground uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Selected Work
            </motion.p>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="px-6 pb-section">
        <div className="container max-w-5xl mx-auto">
          <div className="grid gap-section">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Portfolio;
