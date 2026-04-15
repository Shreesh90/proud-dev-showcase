import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    name: "Kubernetes for Absolute Beginners",
    issuer: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/certificate/UC-c5bd51b9-9822-47b2-aec9-85586e41aa19/"
  },
  {
    name: "Docker for Absolute Beginner",
    issuer: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/certificate/UC-31af2137-3156-4662-b4c7-0f5b555c65d6/"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "2020",
    link: "https://www.coursera.org/account/accomplishments/specialization/5FFXUETL3MKJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
  },
  {
    name: "Machine Learning by Stanford University on Coursera",
    issuer: "Coursera",
    date: "2020",
    link: "https://www.coursera.org/account/accomplishments/verify/RAGJNJ8M5SF6"
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
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-foreground">{cert.name}</h3>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
