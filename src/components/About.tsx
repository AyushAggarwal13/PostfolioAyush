import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <img
                src={portfolioData.image}
                alt={portfolioData.name}
                className="relative w-full h-full object-cover rounded-full border-4 border-primary/30"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.bio}
            </p>

            <div className="glass-effect p-6 rounded-2xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 gradient-primary rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {portfolioData.education.degree}
                  </h3>
                  <p className="text-muted-foreground">
                    {portfolioData.education.institution}
                  </p>
                  <p className="text-sm text-primary font-medium mt-1">
                    {portfolioData.education.year} • {portfolioData.education.duration}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {Object.entries(portfolioData.contact).map(([key, value]) => {
                if (key === "email") return null;
                return (
                  <motion.a
                    key={key}
                    href={value as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-effect rounded-full hover:glow-effect transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">{key}</span>
                    <div className="w-6 h-6 gradient-text font-bold uppercase">
                      {key[0]}
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
