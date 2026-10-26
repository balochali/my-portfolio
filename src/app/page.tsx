import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import SkillsMatrix from "@/components/SkillsMatrix";
import WorkExperience from "@/components/WorkExperience";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <FeaturedProjects />
        <Services />
        <SkillsMatrix />
        <WorkExperience />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
