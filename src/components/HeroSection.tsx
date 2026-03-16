import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import isaacPhoto from "@/assets/isaac-photo.jpeg";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
    {/* Grid background */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    {/* Radial glow */}
    <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

    <div className="container relative z-10 flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl md:max-w-xl"
      >
        <p className="mb-4 font-mono text-sm text-primary">
          {">"} hello_world<span className="animate-blink">_</span>
        </p>
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          Isaac{" "}
          <span className="text-primary text-glow">Busee</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Software Engineer specializing in object-oriented design across{" "}
          <span className="text-foreground font-medium">JavaScript</span>,{" "}
          <span className="text-foreground font-medium">Python</span>, and{" "}
          <span className="text-foreground font-medium">Java</span>. Building
          clean, scalable solutions from concept to deployment.
        </p>
        <div className="flex gap-4">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-all hover:box-glow"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-border px-6 py-3 font-mono text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="shrink-0"
      >
        <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-primary/30 shadow-lg md:h-72 md:w-72">
          <img
            src={isaacPhoto}
            alt="Isaac Busee"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
