import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  extendedDescription: string;
  gradientFrom: string;
  gradientTo: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1, 
        ease: [0.4, 0, 0.2, 1] 
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Preview Image / Gradient Block */}
      <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-secondary">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/[0.02] transition-colors duration-400" />
      </div>

      {/* Project Info */}
      <div className="space-y-2">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-title font-light text-foreground">
            {project.name}
          </h2>
          <span className="text-micro text-muted-foreground uppercase tracking-widest whitespace-nowrap">
            {project.type}
          </span>
        </div>
        
        <p className="text-body text-muted-foreground leading-relaxed max-w-lg">
          {project.description}
        </p>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 border-t border-border mt-6">
                <p className="text-body text-muted-foreground leading-relaxed max-w-xl">
                  {project.extendedDescription}
                </p>
                <p className="text-micro text-stone uppercase tracking-widest mt-6">
                  Click to collapse
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isExpanded && (
          <p className="text-micro text-stone uppercase tracking-widest pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            Click to explore
          </p>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
