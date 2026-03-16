import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: User,
    title: "Who I Am",
    text: "A passionate software engineer with a deep understanding of object-oriented programming and a drive to build products that make a real impact — from fintech platforms to community websites and e-commerce brands.",
  },
  {
    icon: Briefcase,
    title: "What I Do",
    text: "I design and develop full-stack applications with clean, maintainable code. My work spans payment systems, church community platforms, and retail e-commerce — always focusing on great user experiences.",
  },
  {
    icon: GraduationCap,
    title: "How I Think",
    text: "I approach every project with strong OOP principles, scalable architecture, and attention to detail. Whether it's JavaScript, Python, or Java, I pick the right tool for the job and build it right.",
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

const AboutSection = () => (
  <section className="border-t border-border py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="mb-2 font-mono text-sm text-primary">// about</p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          About <span className="text-primary text-glow">Me</span>
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          Hello! I am a software engineer with a strong foundation in JavaScript, Python, and Java, focused on building reliable, scalable, and efficient software systems. I enjoy solving complex problems and translating ideas into well-structured, maintainable code. My experience spans designing backend services, developing interactive web applications, and working with modern development workflows such as version control and CI/CD pipelines.

I approach engineering with a balance of technical precision and practical problem-solving. Whether implementing APIs, optimizing application performance, or integrating cloud-based services, I prioritize clean architecture, readability, and long-term maintainability. I am particularly interested in building systems that are both performant and user-centric.

Continuously learning and adapting to new technologies is a key part of my workflow. I stay engaged with evolving tools and frameworks across the JavaScript, Python, and Java ecosystems, allowing me to select the right technologies for each project.

My goal as an engineer is to create impactful software that solves real-world problems, collaborate effectively with teams, and contribute to products that are robust, scalable, and meaningful.

        </p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-3"
      >
        {highlights.map((h) => {
          const Icon = h.icon;
          return (
            <motion.div
              key={h.title}
              variants={item}
              className="rounded-lg border border-border bg-card p-6 transition-all hover:border-glow/30 hover:border-glow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {h.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {h.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
