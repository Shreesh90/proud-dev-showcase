import { motion } from "framer-motion";

const certifications = [
  {
    name: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
        Certifications
      </h2>
      <div className="space-y-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="grid grid-cols-[140px_1fr] gap-4"
          >
            <span className="font-mono text-xs text-muted-foreground pt-1">
              {cert.date}
            </span>
            <div>
              <h3 className="font-medium text-foreground">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
