import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: portfolioData.contact.github, label: "GitHub" },
    { icon: Linkedin, url: portfolioData.contact.linkedin, label: "LinkedIn" },
    { icon: Twitter, url: portfolioData.contact.twitter, label: "Twitter" },
    { icon: Mail, url: `mailto:${portfolioData.contact.email}`, label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-full border-2 border-primary/20 hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-primary" />
              </motion.a>
            ))}
          </div>

          {/* Quote */}
          <motion.p
            className="text-xl gradient-text font-semibold text-center italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            "{portfolioData.footer.quote}"
          </motion.p>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 gradient-primary opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 gradient-primary opacity-10 blur-3xl"></div>
    </footer>
  );
};

export default Footer;
