import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../components/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:you@email.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
    window.location.href = mailtoLink;
  };

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
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="text-muted-foreground mt-3 max-w-lg leading-relaxed">
            Have a question or want to work together? Drop me a message.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5 max-w-md">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                maxLength={255}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                required
                maxLength={1000}
                rows={5}
              />
            </div>
            <Button type="submit" className="font-mono text-xs">
              Send Message
            </Button>
          </form>
        </motion.section>
      </main>
    </>
  );
};

export default Contact;
