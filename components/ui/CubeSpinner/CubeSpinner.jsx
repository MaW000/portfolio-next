"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { Cube } from "./Cube";
import { slideIn } from "@/motion";

const CubeSpinner = () => {
  return (
    <>
      <motion.div
        layout
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="absolute z-20 bottom-[30rem]   md:bottom-[20rem] md:-right-[45rem] w-[150%]  h-[844px] md:h-[1000px] lg:h-full 3xl:lg:-right-[30rem]   2xl:w-[125%]"
      >
        <Suspense fallback={null}>
          <Cube />
        </Suspense>
      </motion.div>
    </>
  );
};

export default CubeSpinner;
