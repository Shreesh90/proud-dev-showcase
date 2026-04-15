import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "An exceptional engineer who delivers clean, maintainable code on every project.",
    author: "Jane Doe",
    role: "CTO, TechCorp",
  },
  {
    quote: "Consistently exceeded expectations. Great communicator and problem solver.",
    author: "John Smith",
    role: "Product Manager, StartupXYZ",
  },
  {
    quote: "Rare combination of technical depth and design sensibility. Highly recommended.",
    author: "Alex Johnson",
    role: "Engineering Lead, ScaleUp Inc.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
        Testimonials
      </h2>

      <div className="relative p-6 border border-border rounded-sm bg-card">
        <Quote className="w-5 h-5 text-muted-foreground/40 mb-4" />
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-foreground leading-relaxed">
              "{testimonials[current].quote}"
            </p>
            <div className="mt-4">
              <p className="text-sm font-medium text-foreground">
                {testimonials[current].author}
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-2 mt-6">
          <button
            onClick={prev}
            className="p-1.5 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="p-1.5 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1.5 ml-auto">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === current ? "bg-foreground" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
