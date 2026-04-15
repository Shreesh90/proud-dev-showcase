import { motion } from "framer-motion";

interface Education {
  degree: string;
  school: string;
  period: string;
  cgpa?: string;
}

const education: Education[] = [
  {
    degree: "B.Tech. Information Technology",
    school: "Indian Institute of Information Technology, Allahabad",
    period: "2019 — 2023",
    cgpa: "8.41"
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
              {edu.cgpa && (
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium">CGPA:</span> {edu.cgpa}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
