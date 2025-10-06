import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Gallery", to: "gallery" },
    { name: "Blog", to: "blog" },
    { name: "Contact", to: "contact" },
  ];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-effect border-b border-primary/20" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="text-2xl font-bold gradient-text cursor-pointer"
            >
              Portfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-80}
                  className="cursor-pointer text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        className={`fixed top-0 right-0 bottom-0 w-64 glass-effect border-l border-primary/20 z-40 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-6 p-8 mt-20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={800}
              spy={true}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-xl text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
