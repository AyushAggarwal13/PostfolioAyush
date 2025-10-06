import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20"></div>

            {/* Experience items */}
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-20 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5">
                  <div className="absolute inset-0 rounded-full gradient-primary animate-pulse"></div>
                  <div className="absolute inset-1 rounded-full bg-background"></div>
                </div>

                <motion.div
                  className="glass-effect p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 gradient-primary rounded-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
