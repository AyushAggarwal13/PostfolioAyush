import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const greetings = [
  "Hello",
  "नमस्ते",
  "こんにちは",
  "Hola",
  "Bonjour",
  "안녕하세요",
  "مرحبا",
  "שלום"
];

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

const SplashScreen = ({ onComplete, duration = 3500 }: SplashScreenProps) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 400);

    const splashTimer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => {
      clearInterval(greetingInterval);
      clearTimeout(splashTimer);
    };
  }, [onComplete, duration]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentGreeting}
            className="text-6xl md:text-8xl font-bold gradient-text"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {greetings[currentGreeting]}
          </motion.h1>
        </AnimatePresence>
        
        <motion.div
          className="mt-8 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
