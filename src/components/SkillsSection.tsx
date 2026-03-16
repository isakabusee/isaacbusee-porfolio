import { motion } from "framer-motion";
import { Code2, Terminal, Braces } from "lucide-react";

const skills = [
  {
    name: "JavaScript",
    icon: Braces,
    description: "ES6+, Node.js, React, TypeScript — building dynamic web experiences with modern JS.",
  },
  {
    name: "Python",
    icon: Terminal,
    description: "OOP design patterns, data structures, automation, and backend development.",
  },
  {
    name: "Java",
    icon: Code2,
    description: "Enterprise-grade applications, design patterns, and strong type-safe architectures.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const SkillCard = ({ skill }: { skill: typeof skills[0] }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      variants={item}
      className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-glow/30 hover:border-glow"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
        {skill.name}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {skill.description}
      </p>
    </motion.div>
  );
};

const SkillsSection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="mb-2 font-mono text-sm text-primary">// expertise</p>
        <h2 className="text-3xl font-bold md:text-4xl">Core Languages</h2>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-3"
      >
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
