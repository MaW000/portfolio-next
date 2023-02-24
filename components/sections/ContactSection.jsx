"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/motion";
import { ProjectsM, Projects, Projects3, ContactButton } from "../ui";

const ContactSection = () => {
  return (
    <motion.section
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="py-10 pb-40 mx-auto"
    >
      <div className="flex items-center text-center  justify-center mt-2 mb-10 text-lightOrange ">
        <h1 className="mr-2.5 lg:text-2xl">03.</h1>
        <h1 className="text-lg lg:text-3xl leading-5 text-darkOrange ">
          What&apos;s Next
        </h1>
      </div>

      <ContactButton />
    </motion.section>
  );
};

export default ContactSection;
