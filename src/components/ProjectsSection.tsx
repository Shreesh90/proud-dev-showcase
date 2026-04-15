import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Project Alpha",
    description: "A high-performance CLI tool for managing cloud infrastructure deployments.",
    detail: "Project Alpha streamlines cloud infrastructure management through an intuitive CLI interface. Built with Go for maximum performance, it integrates directly with AWS services and Terraform configurations to automate deployment pipelines, manage environment variables, and handle rollbacks gracefully.",
    tech: ["Go", "AWS", "Terraform"],
    link: "#",
  },
  {
    title: "DataViz Engine",
    description: "Real-time data visualization library built for large-scale datasets.",
    detail: "DataViz Engine is a high-performance visualization library capable of rendering millions of data points in real-time. It leverages WebGL for GPU-accelerated rendering and provides a declarative API built on top of D3.js for intuitive chart composition and interaction handling.",
    tech: ["TypeScript", "D3.js", "WebGL"],
    link: "#",
  },
  {
    title: "Auth Microservice",
    description: "Lightweight authentication service with JWT and OAuth2 support.",
    detail: "A production-ready authentication microservice written in Rust for minimal memory footprint and maximum throughput. Supports JWT token issuance and validation, OAuth2 flows with multiple providers, rate limiting, and secure session management backed by PostgreSQL.",
    tech: ["Rust", "PostgreSQL", "Docker"],
    link: "#",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
        Projects
      </h2>
      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.button
            key={project.title}
            onClick={() => setSelected(i)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group block w-full text-left p-5 -mx-5 rounded-sm hover:bg-secondary/60 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-muted-foreground border px-2 py-0.5 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg z-50 bg-card border border-border rounded-sm p-6 overflow-y-auto max-h-[90vh]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {projects[selected].title}
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  className="p-1.5 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors shrink-0"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                {projects[selected].detail}
              </p>

              <div className="flex gap-2 mt-5 flex-wrap">
                {projects[selected].tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-muted-foreground border px-2 py-0.5 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={projects[selected].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-foreground text-background font-mono text-xs rounded-sm hover:bg-foreground/90 transition-colors"
              >
                View Project
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
