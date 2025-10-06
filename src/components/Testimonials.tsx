import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Testimonials = () => {
  return (
    <section id="testimonials" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-effect p-8 rounded-2xl relative border-2 border-primary/20 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold gradient-text">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-0 hover:opacity-10 blur-3xl transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
