"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/motion";
import { BsOctagon } from "react-icons/bs";
import Image from "next/image";
const Header = () => {
  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="align-center flex-col flex  gap-2 pt-2 md:pt-5 md:flex-row  "
    >
      <a className="relative mx-auto font-medium " href={"/"}>
        <BsOctagon size={55} color="#ffa500" />

        <Image
          src="/logo.svg"
          className="absolute top-2 left-[.6rem] "
          width="35"
          height={"35"}
          alt="logo"
        />
      </a>
      <nav className="flex mx-auto flex-wrap items-center justify-center text-base ">
        <a href={"/"} className="headlink before:content-['1.'] ">
          {" "}
          About
        </a>
        <a href={"/"} className="headlink before:content-['2.'] ">
          {" "}
          Experience
        </a>
        <a href={"/"} className="headlink before:content-['3.'] ">
          {" "}
          Work
        </a>
        <a href={"/"} className="headlink before:content-['4.']">
          {" "}
          Contact
        </a>
      </nav>
      <button className=" mx-auto font-mono px-4 py-1 text-base  text-lightOrange bg-transparent rounded focus:outline-none hover:bg-darkOrange border-lightOrange border-[1px]">
        Resume
      </button>
    </motion.header>
  );
};

export default Header;
