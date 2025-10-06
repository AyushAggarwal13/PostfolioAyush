import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

const Skills = () => {
  const allSkills = [
    ...portfolioData.skills.frontend,
    ...portfolioData.skills.backend,
    ...portfolioData.skills.tools,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {allSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                }}
                className="group relative"
              >
                <div className="glass-effect px-6 py-3 rounded-full border-2 border-primary/30 hover:border-primary transition-all duration-300 cursor-pointer">
                  <span className="text-lg font-medium group-hover:gradient-text transition-all">
                    {skill}
                  </span>
                  <div className="absolute inset-0 rounded-full gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <motion.div
                key={category}
                className="glass-effect p-6 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 gradient-text capitalize">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {(skills as string[]).map((skill, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full gradient-primary"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
