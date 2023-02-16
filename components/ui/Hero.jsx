"use client";

import { motion } from "framer-motion";
import { staggerContainer, slideIn } from "@/motion";
const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col z-50 rounded-2xl"
    >
      <motion.div variants={slideIn("down", "tween", 0.2, 1)}>
        <h1 className="font-mono text-lightOrange text-base  3xl:text-lg mb-5">
          Hi, my name is
        </h1>

        <h2 className="text-4xl  3xl:text-6xl font-semibold text-lightOrange">
          Matthew Wardlow.
        </h2>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
        <h3 className="text-slate mt-[10px] text-5xl  3xl:text-7xl">
          I build things for the web
        </h3>

        <div>
          <p className="max-w-xl mt-3 font-sans text-lg text-slate  3xl:max-w-2xl  3xl:text-2xl">
            I’m a full stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on finding my first fulltime role.
          </p>
        </div>
        <div>
          <button className=" 3xl:text-lg font-mono py-5 px-7  3xl:px-14  3xl:py-8 text-lightOrange bg-transparent mt-12 rounded focus:outline-none hover:bg-darkOrange hover:text-black md:mt-12 border-lightOrange border-2">
            Check out my Github!
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
