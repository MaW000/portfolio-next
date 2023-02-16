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
        className="absolute z-10 right-0 top-0 w-[320px] h-[844px] md:w-[900px] md:h-[1500px] lg:-top-20 lg:right-20 lg:w-[900px]  lg:h-[1500px] 40p:w-[900px] 40p:h-[1500px] overflow-hidden overflow-x-hidden"
      >
        <Suspense fallback={null}>
          <Cube />
        </Suspense>
      </motion.div>
    </>
  );
};

export default CubeSpinner;
