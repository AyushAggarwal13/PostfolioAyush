import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";
import Background3D from "./Background3D";
import portfolioData from "@/data/portfolio.json";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const tagline = portfolioData.tagline;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= tagline.length) {
        setDisplayedText(tagline.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [tagline]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Background3D />
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/50 relative">
              <img
                src={portfolioData.image}
                alt={portfolioData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-primary opacity-10"></div>
            </div>
            <div className="absolute inset-0 rounded-full gradient-primary opacity-20 blur-xl -z-10"></div>
          </motion.div>

          {/* Greeting Animation */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl text-muted-foreground mb-2">
              Hi, I'm
            </p>
          </motion.div>

          {/* Name with 3D Effect */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold gradient-text cursor-pointer select-none text-center"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
          >
            <span className="text-glow">{portfolioData.name}</span>
          </motion.h1>

          {/* Typewriter Tagline */}
          <motion.div
            className="h-16 md:h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-light text-center">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-primary ml-1"
              />
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 justify-center flex-wrap mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link to="projects" smooth={true} duration={800}>
              <motion.button
                className="px-8 py-3 gradient-primary rounded-full text-white font-semibold hover:glow-effect transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </Link>
            
            <a href={portfolioData.resumeUrl} download>
              <motion.button
                className="px-8 py-3 glass-effect rounded-full text-foreground font-semibold border-2 border-primary/50 hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <Link to="about" smooth={true} duration={800}>
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
