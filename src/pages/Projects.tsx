import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Tunuku",
    description:
      "A modern digital payments platform enabling users to send, receive, and manage money globally with zero fees and instant transfers. Features bank-grade security, support for 180+ countries, and smart analytics.",
    tags: ["JavaScript", "React", "Fintech", "UI/UX"],
    liveUrl: "https://tunutech.com/",
  },
  {
    title: "Campbell SDA Church",
    description:
      "A community church website for Campbell Seventh-day Adventist Church featuring service schedules, online worship streaming, online giving integration, and ministry information.",
    tags: ["WordPress", "Web Design", "PHP"],
    liveUrl: "http://campbellsda.org/",
  },
  {
    title: "Lookmatic",
    description:
      "An e-commerce eyewear brand offering stylish frames for men, women, and youth. Built with Shopify featuring product catalogs, a face guide tool, and international shipping.",
    tags: ["Shopify", "E-Commerce", "JavaScript", "Liquid"],
    liveUrl: "https://lookmatic.com/",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    variants={item}
    className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-glow/30 hover:border-glow"
  >
    <div className="mb-3 flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-primary" />
      <h3 className="font-display text-lg font-semibold text-foreground">
        {project.title}
      </h3>
    </div>
    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
      {project.description}
    </p>
    <div className="mb-4 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex gap-4 border-t border-border pt-4">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Github className="h-4 w-4" />
          Code
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </a>
      )}
    </div>
  </motion.div>
);

const Projects = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pb-24 pt-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-2 font-mono text-sm text-primary">// projects</p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Things I've <span className="text-primary text-glow">Built</span>
          </h1>
          <p className="max-w-lg text-muted-foreground">
            A collection of projects showcasing object-oriented design, clean architecture, and full-stack development.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
    <footer className="border-t border-border py-8">
      <div className="container text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Isaac Busee. All rights reserved.
      </div>
    </footer>
  </div>
);

export default Projects;
