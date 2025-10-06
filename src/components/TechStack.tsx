import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import portfolioData from "@/data/portfolio.json";

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

const TechStack = () => {
  const allTechs = [
    ...portfolioData.skills.frontend,
    ...portfolioData.skills.backend,
    ...portfolioData.skills.tools,
  ];

  return (
    <section id="techstack" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack Visualization
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          {/* 3D Sphere */}
          <motion.div
            className="h-96 rounded-2xl overflow-hidden glass-effect border-2 border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <AnimatedSphere />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </motion.div>

          {/* Tech Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {allTechs.map((tech, index) => (
              <motion.div
                key={index}
                className="glass-effect p-4 rounded-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
              >
                <span className="font-semibold gradient-text">{tech}</span>
                <div className="mt-2 h-1 w-full bg-gradient-to-r from-primary/50 to-primary rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
