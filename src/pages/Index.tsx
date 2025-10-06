import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import PhotoGallery from "@/components/PhotoGallery";
import TechStack from "@/components/TechStack";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} duration={3500} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <div className="relative">
          <Navigation />
          <ThemeToggle />
          <main>
            <Hero />
            <About />
            <Skills />
            <TechStack />
            <Projects />
            <Stats />
            <PhotoGallery />
            <Experience />
            <Testimonials />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
