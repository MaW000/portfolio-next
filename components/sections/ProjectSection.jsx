"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/motion";
import { ProjectsM } from "../ui";

const ProjectSection = () => {
  return (
    <motion.section
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="py-40  mx-10"
    >
      <div className="flex items-center mt-2 mb-10 text-lightOrange">
        <h1 className="mr-2.5 ">02.</h1>
        <h1 className="text-lg lg:text-2xl leading-5 text-darkOrange underline underline-offset-4 after:content-['\00a0\00a0\00a0\00a0\00a0\00a0'] ">
          Some Things I`ve Built
        </h1>
        <div className="md:block h-[1px] w-1/5 bg-darkOrange ml-5 hidden md:visible" />
      </div>
      <ul>
        <ProjectsM />
      </ul>
    </motion.section>
  );
};

export default ProjectSection;
