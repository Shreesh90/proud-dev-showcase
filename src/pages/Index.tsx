import { motion } from "framer-motion";
import Header from "../components/Header";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import CertificationsSection from "../components/CertificationsSection";
import EducationSection from "../components/EducationSection";
import StatsSection from "../components/StatsSection";
import SkillsSection from "../components/SkillsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

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
            Shreesh Swaraj
          </h1>
          <p className="text-muted-foreground mt-3 max-w-lg leading-relaxed">
            Backend-focused Software Engineer with 3+ years of experience building data ingestion and processing platform services.
          </p>
          <div className="flex gap-4 mt-5">
            <a
              href="https://github.com"
              target="https://github.com/Shreesh90"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              github
            </a>
            <a
              href="https://linkedin.com"
              target="https://www.linkedin.com/in/shreeswa/"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              linkedin
            </a>
            <a
              href="mailto:shreesh.swaraj300@gmail.com"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              email
            </a>
            <a
              href="https://leetcode.com"
              target="https://leetcode.com/u/raj2544/"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              leetcode
            </a>
          </div>
        </motion.section>

        {/* <div className="h-px bg-border" />
        <StatsSection /> */}
        <div className="h-px bg-border" />
        <ExperienceSection />
        <div className="h-px bg-border" />
        <ProjectsSection />
        <div className="h-px bg-border" />
        <SkillsSection />
        <div className="h-px bg-border" />
        <CertificationsSection />
        <div className="h-px bg-border" />
        <EducationSection />
        {/* <div className="h-px bg-border" />
        <TestimonialsSection /> */}
        <div className="h-px bg-border" />
        <CTASection />
      </main>
    </>
  );
};

export default Index;
