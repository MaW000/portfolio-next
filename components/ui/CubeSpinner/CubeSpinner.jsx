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
        className="absolute -z-20 right-0 top-44 w-[320px] h-[844px] md:w-[600px] md:h-[1000px] lg:h-[2000px] lg:w-[1000px]"
      >
        <Suspense fallback={null}>
          <Cube />
        </Suspense>
      </motion.div>
    </>
  );
};

export default CubeSpinner;
