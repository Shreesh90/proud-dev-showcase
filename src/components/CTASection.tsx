import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <div className="border border-border rounded-sm p-8 bg-card text-center">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Let's work together
        </h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
          Have a project in mind or looking for a collaborator? I'd love to hear from you.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-foreground text-background font-mono text-xs rounded-sm hover:bg-foreground/90 transition-colors"
        >
          Get in Touch
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.section>
  );
};

export default CTASection;
