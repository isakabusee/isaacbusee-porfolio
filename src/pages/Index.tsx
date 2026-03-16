import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ContactSection />
    <footer className="border-t border-border py-8">
      <div className="container text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Isaac Busee. All rights reserved.
      </div>
    </footer>
  </div>
);

export default Index;
