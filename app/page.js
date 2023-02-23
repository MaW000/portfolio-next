import {
  ProjectSection,
  Header,
  HeroSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
