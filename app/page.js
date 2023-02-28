import {
  ProjectSection,
  HeroSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
