import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/hero";
import AboutSection from "@/components/About";
import ProjectsSection from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import ContactSection from "@/components/Contact";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <ThemeCustomizer />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <footer className="bg-background-primary py-12 border-t border-border-primary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-[10px] text-text-secondary font-bold tracking-[0.4em] uppercase mb-4">
            System_Status: Operational // Build_0x2AF
          </div>
          <div className="text-xs text-text-secondary font-mono">
            © {new Date().getFullYear()} {portfolioData.name}. Handcrafted with
            [NEXT.JS + FRAMER_MOTION]
          </div>
        </div>
      </footer>
    </>
  );
}
