import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import { blogPosts } from "../data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
          <p className="text-muted-foreground">Post not found.</p>
          <Link to="/blog" className="text-accent hover:underline text-sm mt-4 inline-block">
            ← Back to blog
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </Link>

          <span className="font-mono text-xs text-muted-foreground block mb-2">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>

          <article className="mt-8 prose-custom">
            {post.content.split("\n").map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return <br key={i} />;
              if (trimmed.startsWith("## "))
                return (
                  <h2 key={i} className="text-lg font-semibold mt-8 mb-3 text-foreground">
                    {trimmed.slice(3)}
                  </h2>
                );
              if (trimmed.startsWith("---"))
                return <hr key={i} className="my-8 border-border" />;
              if (trimmed.startsWith("```"))
                return null;
              if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. ") || trimmed.startsWith("4. "))
                return (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed ml-4 my-1">
                    {trimmed}
                  </p>
                );
              return (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed my-3">
                  {trimmed}
                </p>
              );
            })}
          </article>
        </motion.div>
      </main>
    </>
  );
};

export default BlogPost;
