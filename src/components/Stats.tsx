import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Award, Code, Trophy } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Counter = ({ value, icon: Icon, label }: { value: number; icon: any; label: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, value, { duration: 2 });
    return animation.stop;
  }, [count, value]);

  return (
    <motion.div
      className="glass-effect p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
      <motion.div className="text-5xl font-bold gradient-text mb-2">
        {rounded}
      </motion.div>
      <p className="text-muted-foreground">{label}</p>
      <div className="mt-4 h-1 w-full bg-gradient-to-r from-primary/50 to-primary rounded-full"></div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Counter
            value={portfolioData.stats.projectsCompleted}
            icon={Code}
            label="Projects Completed"
          />
          <Counter
            value={portfolioData.stats.hackathonsParticipated}
            icon={Trophy}
            label="Hackathons Participated"
          />
          <Counter
            value={portfolioData.stats.certificationsEarned}
            icon={Award}
            label="Certifications Earned"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
