"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/motion";
import { ProjectsM, Projects, Projects3 } from "../ui";

const ProjectSection = () => {
  return (
    <motion.section
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="py-40  mx-auto"
    >
      <div className="flex items-center text-center justify-center mt-2 mb-10 text-lightOrange ">
        <h1 className="mr-2.5 lg:text-2xl">02.</h1>
        <h1 className="text-lg lg:text-3xl leading-5 text-darkOrange underline underline-offset-4 after:content-['\00a0\00a0\00a0\00a0\00a0\00a0'] ">
          Some Things I`ve Built
        </h1>
        <div className="md:block h-[1px] w-2/5 bg-darkOrange ml-5 hidden md:visible" />
      </div>
      <ul>
        <Projects />
      </ul>
    </motion.section>
  );
};

export default ProjectSection;
