import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LandingScreen from "@/components/LandingScreen";
import Portfolio from "@/components/Portfolio";

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setHasEntered(true);
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setHasEntered(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!hasEntered && (
          <LandingScreen key="landing" onEnter={handleEnter} />
        )}
      </AnimatePresence>
      
      {hasEntered && <Portfolio onBack={handleBack} />}
    </div>
  );
};

export default Index;
