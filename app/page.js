import {
  ProjectSection,
  Header,
  HeroSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
