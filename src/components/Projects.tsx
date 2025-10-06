import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import portfolioData from "@/data/portfolio.json";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? portfolioData.projects : portfolioData.projects.slice(0, 3);

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative glass-effect rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {portfolioData.projects.length > 3 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 glass-effect rounded-full font-semibold border-2 border-primary/50 hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? "Show Less" : "View More Projects"}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
