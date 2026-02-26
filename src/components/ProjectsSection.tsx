import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A high-performance CLI tool for managing cloud infrastructure deployments.",
    tech: ["Go", "AWS", "Terraform"],
    link: "#",
  },
  {
    title: "DataViz Engine",
    description: "Real-time data visualization library built for large-scale datasets.",
    tech: ["TypeScript", "D3.js", "WebGL"],
    link: "#",
  },
  {
    title: "Auth Microservice",
    description: "Lightweight authentication service with JWT and OAuth2 support.",
    tech: ["Rust", "PostgreSQL", "Docker"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
        Projects
      </h2>
      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group block p-5 -mx-5 rounded-sm hover:bg-secondary/60 transition-colors"
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
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
