import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Raas Medical Healthcare",
    description: "A common health platform for doctors and patients to access medical records benefitting analysis from ML models",
    detail: [
      "Designed and built a web platform integrating Machine Learning models for medical text and imagery data. Enabled clinicians to upload cases and receive automated triage predictions.",
      "Implemented end-to-end integration between a Node.js REST API and a Django ML server using ExpressJS, Django REST Framework, Firebase, MongoDB, and TensorFlow.",
      "Trained and deployed Logistic Regression, Random Forest and Residual U-Net models. Validation accuracy >80% on developed datasets."
    ],
    tech: ["ExpressJS", "Django REST", "Firebase", "MongoDB", "TensorFlow"],
    link: "https://github.com/Shreesh90/RAaS-IIT2019044",
  },
  {
    title: "Anti Spoof Facial Recognition",
    description: "An anti-spoof facial recognition system",
    detail: [
      "Developed an anti-spoof facial recognition system using OpenCV and TensorFlow. Detected facial and eye movement cues and validated authenticity via randomized gesture checks.",
      "Achieved ∼ 90% accuracy for spoof free identification on validation data through model tuning and gesture based verification."
    ],
    tech: ["Python", "OpenCV"],
    link: "https://github.com/Shreesh90/Anti-Spoof-Facial-Recognition",
  },
  {
    title: "Inclusivo",
    description: "An online DEI-focused hiring platform for the LGBTQIA+ community",
    detail: [
      "Built job and story listing pages for an LGBTQIA+ hiring platform. Project shortlisted in the Top 50 global solutions at the Google Solution Challenge 2021."
    ],
    tech: ["ReactJS", "Python", "Django", "Firebase"],
    link: "https://inclusivo.netlify.app/",
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
              initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-45%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-45%" }}
              transition={{ duration: 0.25 }}
              className="fixed left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-lg z-50 bg-card border border-border rounded-sm p-6 overflow-y-auto max-h-[90vh]"
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

              <ul className="text-sm text-muted-foreground mt-4 leading-relaxed list-disc ml-4 space-y-2">
                {projects[selected].detail.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>

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
                target={projects[selected].link}
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
