import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/isakabusee",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/isaac-busee",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:isakabusee@gmail.com",
    icon: Mail,
  },
];

const ContactSection = () => (
  <section id="contact" className="border-t border-border py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="mb-2 font-mono text-sm text-primary">// contact</p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Let's <span className="text-primary text-glow">Connect</span>
        </h2>
        <p className="mx-auto max-w-md text-muted-foreground">
          Got a project in mind or just want to chat? Reach out through any of these channels.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.label}
              href={c.href}
              target={c.label !== "Email" ? "_blank" : undefined}
              rel={c.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-4 transition-all hover:border-glow/30 hover:border-glow"
            >
              <Icon className="h-5 w-5 text-primary" />
              <span className="font-mono text-sm text-foreground">{c.label}</span>
            </a>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
