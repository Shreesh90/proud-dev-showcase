import { motion } from "framer-motion";

const education = [
  {
    degree: "M.S. Computer Science",
    school: "University of Technology",
    period: "2016 — 2018",
  },
  {
    degree: "B.S. Computer Science",
    school: "State University",
    period: "2012 — 2016",
  },
];

const EducationSection = () => {
  return (
    <section className="py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="grid grid-cols-[140px_1fr] gap-4"
          >
            <span className="font-mono text-xs text-muted-foreground pt-1">
              {edu.period}
            </span>
            <div>
              <h3 className="font-medium text-foreground">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.school}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
