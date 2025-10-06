import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Blog = () => {
  return (
    <section id="blog" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Blog & Insights
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioData.blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="group glass-effect rounded-2xl p-6 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
