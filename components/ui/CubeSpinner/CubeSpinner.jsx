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
        className="absolute z-20 right-0 top-48 md:-top-[8rem] lg:-right-[35rem] lg:-top-[40rem] w-[125%] h-[844px] md:h-[1000px] lg:h-[2000px]   2xl:w-[125%]"
      >
        <Suspense fallback={null}>
          <Cube />
        </Suspense>
      </motion.div>
    </>
  );
};

export default CubeSpinner;
