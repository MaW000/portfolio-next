"use client";
import { Hero, AboutMe, CubeSpinner } from "../ui";

const HeroSection = () => {
  return (
    <section className="pt-28 mx-2 md:mx-5 md:pt-44 lg:pt-60  3xl:pt-96 ">
      <div className="pb-36 z-50 mx-5 md:mx-16 md:pb-64 lg:mx-28 xl:mx-44 2xl:mx-64 3xl:mx-96">
        <Hero />
      </div>

      <div className="lg:pt-28 2xl:pt-36">
        <AboutMe />
      </div>

      <CubeSpinner />
    </section>
  );
};

export default HeroSection;
