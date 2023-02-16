"use client";
import { Hero, AboutMe, CubeSpinner } from "../ui";

const HeroSection = () => {
  return (
    <section className="mt-2 mx-2 lg:mx-32 md:mt-0">
      <div className="mx-4 my-16 mb-44 md:mt-60 md:mb-56 lg:mx-52  lg:my-64 lg:mb-80 3xl:mx-72  3xl:my-96">
        <Hero />
      </div>

      <div className="3xl:max-w-9xl max-w-8xl mx-10 md:mx-auto 40p:max-w-4xl">
        <AboutMe />
      </div>

      <CubeSpinner />
    </section>
  );
};

export default HeroSection;
