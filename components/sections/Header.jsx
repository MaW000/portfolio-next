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
      className="align-center flex-col flex  gap-2 pt-5 lg:pt-10 md:flex-row   "
    >
      <a className="relative mx-auto font-medium " href={"/"}>
        <BsOctagon color="#ffa500" className="text-6xl 2xl:text-7xl" />
        <div className="absolute top-[.65rem] left-[.7rem] 2xl:left-[.75rem] max-w-[2.4rem]  2xl:max-w-[2.9rem]">
          <Image src="/logo.svg" width={64} height={64} alt="logo" />
        </div>
      </a>
      <nav className="flex mx-auto flex-wrap items-center justify-center text-base lg:text-xl">
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
      <button className=" mx-auto font-mono px-4 py-2 my-auto text-base 2xl:text-xl  text-lightOrange bg-transparent rounded focus:outline-none hover:bg-darkOrange border-lightOrange border-[1px]">
        Resume
      </button>
    </motion.header>
  );
};

export default Header;
