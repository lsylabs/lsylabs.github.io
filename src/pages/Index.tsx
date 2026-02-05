import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LandingScreen from "@/components/LandingScreen";
import Portfolio from "@/components/Portfolio";

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!hasEntered && (
          <LandingScreen key="landing" onEnter={() => setHasEntered(true)} />
        )}
      </AnimatePresence>
      
      {hasEntered && <Portfolio />}
    </div>
  );
};

export default Index;
