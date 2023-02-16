import HeroSection from "@/components/sections/HeroSection";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <main className="bg-maroon scrollbar overflow-x-hidden">
      <Header />
      <HeroSection />
    </main>
  );
}
