import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Alteryx",
    period: "Jul 2023 - Present",
    description: [
      "Delivered multiple Excel ingestion and processing enhancements, resulting in improved data accuracy and strong customer appreciation.",
      "Implemented asynchronous conversion-service integration with BJR to stabilize local development and testing of workflows. Improved developer productivity.",
      "Led targeted load testing for file-processing-service. Enabled KEDA autoscaling and tuned CPU/memory settings, improving latency by 20%",
      "Integrated backend components to support Databricks SQL in Live Query mode, that contributed to having Databricks as happy customers. Won Quality, Scalability and Performance award.",
      "Added Job History support in job-planning-layer, integrating Kafka into the workflow to enable event-driven job tracking",
      "Participated multiple times in Innovation Days. Prototyped Transactional Query Support for file using DuckLake and created a dataset-as-DataFrame solution in Jupyter notebook."
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Alteryx",
    period: "Jan 2023 - June 2023",
    description: [
      "Performed POC comparing ApachePOI and FastExcel to determine preferred approach for Excel write throughput and memory behavior",
      "Implemented backend conversion logic to export dataset to Excel using ApachePOI, enabling customers to download data in Excel formats",
      "Contributed frontend changes and authored TypeScript unit tests to validate end-to-end Excel export functionality."
    ],
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
              <ul className="text-sm text-muted-foreground mt-2 list-disc ml-4 space-y-1">
                {exp.description.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
