import { motion } from "framer-motion";
import Header from "../components/Header";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";

const Index = () => {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16"
        >
          <h1 className="text-3xl font-semibold tracking-tight">
            Your Name
          </h1>
          <p className="text-muted-foreground mt-3 max-w-lg leading-relaxed">
            Software engineer focused on building reliable systems and clean
            interfaces. I write code that lasts and occasionally write about it
            too.
          </p>
          <div className="flex gap-4 mt-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              github
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              linkedin
            </a>
            <a
              href="mailto:you@email.com"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              email
            </a>
          </div>
        </motion.section>

        <div className="h-px bg-border" />
        <ProjectsSection />
        <div className="h-px bg-border" />
        <ExperienceSection />
        <div className="h-px bg-border" />
        <EducationSection />
      </main>
    </>
  );
};

export default Index;
