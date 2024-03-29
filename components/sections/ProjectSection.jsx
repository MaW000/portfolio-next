"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/motion";
import { Projects } from "../ui";

const ProjectSection = () => {
  return (
    <motion.section
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="py-60  mx-auto"
    >
      <div className="flex items-center text-left justify-start mt-2 mb-10 text-lightOrange relative ">
        <div className="absolute left-[3%] md:left-[25%] bottom-2 flex">
          <h1 className="mr-2.5 lg:text-lg 3xl:text-2xl">02.</h1>
          <h1 className="text-lg lg:text-2xl 2xl:text-3xl leading-5 text-darkOrange   ">
            Some Things I`ve Built
          </h1>
        </div>
        <div className="md:absolute bottom-0 right-[25%] h-[2px] w-full md:w-3/6 bg-lightOrange  md:visible" />
      </div>
      <ul className="mx-5">
        <Projects />
      </ul>
    </motion.section>
  );
};

export default ProjectSection;
