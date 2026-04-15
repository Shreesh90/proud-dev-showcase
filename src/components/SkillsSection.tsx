import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "Rust"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    category: "Tools",
    skills: ["Git", "CI/CD", "AWS", "Terraform", "Figma"],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].category);

  return (
    <section className="py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
        Skills & Technologies
      </h2>

      <div className="flex gap-2 mb-6 flex-wrap">
        {skillCategories.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`font-mono text-xs px-3 py-1.5 rounded-sm border transition-colors ${
              activeCategory === cat.category
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/50"
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap gap-2"
      >
        {skillCategories
          .find((c) => c.category === activeCategory)
          ?.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-3 py-1.5 text-sm border border-border rounded-sm text-foreground hover:bg-secondary/60 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
