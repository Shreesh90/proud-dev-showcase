import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2022 — Present",
    description: "Leading backend architecture and distributed systems design.",
  },
  {
    role: "Software Engineer",
    company: "StartupXYZ",
    period: "2020 — 2022",
    description: "Built core product features and scaled the platform to 100K users.",
  },
  {
    role: "Junior Developer",
    company: "Agency Inc",
    period: "2018 — 2020",
    description: "Full-stack development for client projects across various industries.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="grid grid-cols-[140px_1fr] gap-4"
          >
            <span className="font-mono text-xs text-muted-foreground pt-1">
              {exp.period}
            </span>
            <div>
              <h3 className="font-medium text-foreground">{exp.role}</h3>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
