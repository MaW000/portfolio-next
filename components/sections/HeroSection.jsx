"use client";
import { Hero, AboutMe, CubeSpinner, Header } from "../ui";

const HeroSection = () => {
  return (
    <section className="pt-60 mx-2 md:pt-44 lg:pt-60 2xl:pt-64 3xl:pt-96 min-h-screen relative">
      <Header />
      <div className="  mx-5 md:mx-16 lg:mx-28 xl:mx-44 2xl:mx-64 2xl:mb-72 3xl:mx-96 3xl:mb-96">
        <Hero />
      </div>

      <div className="pt-52 lg:pt-28 2xl:pt-20 3xl:pt-20">
        <AboutMe />
      </div>

      <CubeSpinner />
    </section>
  );
};

export default HeroSection;
