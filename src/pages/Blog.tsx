import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
          <p className="text-muted-foreground mt-3">
            Thoughts on software engineering, architecture, and craft.
          </p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block p-5 -mx-5 rounded-sm hover:bg-secondary/60 transition-colors"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <h2 className="font-medium text-foreground mt-1 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {post.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;
