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
      <div className="flex items-center text-left justify-start mt-2 mb-10 text-lightOrange relative ">
        <div className="3xl:ml-100 ml-97 flex mb-1 ">
          <h1 className="mr-2.5 lg:text-lg 3xl:text-2xl">02.</h1>
          <h1 className="text-lg lg:text-xl 2xl:text-2xl leading-5 text-darkOrange   ">
            Some Things I`ve Built
          </h1>
        </div>
        <div className="md:absolute bottom-0 right-[25%] h-[2px] w-3/6 bg-lightOrange  md:visible" />
        {/* <div className="md:absolute bottom-0 h-[5px] w-1/5 bg-darkOrange ml-5 hidden md:visible" /> */}
      </div>
      <ul className="mx-5">
        <Projects />
      </ul>
    </motion.section>
  );
};

export default ProjectSection;
