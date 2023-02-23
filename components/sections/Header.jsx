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
      className="align-center flex-col flex   gap-2 pt-5 lg:pt-10 md:flex-row   "
    >
      <a className="relative mx-auto font-medium " href={"/"}>
        {/* <BsOctagon color="#ffa500" className="text-6xl 2xl:text-7xl" /> */}
        <div className=" 2xl:left-[.75rem] max-w-[8rem] md:max-w-[8rem] xl:max-w-[10rem] 3xl:max-w-[13.9rem]">
          <Image
            src="/logo.png"
            className="rounded-md"
            width={4453}
            height={1209.64}
            alt="logo"
          />
        </div>
      </a>
      <nav className="flex mx-auto flex-wrap items-center justify-center text-base lg:text-xl  3xl:text-2xl">
        <a
          href={"/"}
          className="headlink before:content-['|'] before:mr-1 after:ml-1 md:before:mr-5 md:after:ml-5  "
        >
          {" "}
          About
        </a>
        <a
          href={"/"}
          className="headlink before:content-['|'] before:mr-1 after:ml-1  md:before:mr-5 md:after:ml-5  "
        >
          {" "}
          Work
        </a>
        <a
          href={"/"}
          className="headlink before:content-['|'] before:mr-1 after:ml-1 md:before:mr-5 md:after:ml-5 after:content-['|']"
        >
          {" "}
          Contact
        </a>
      </nav>
      <button className=" mx-auto font-mono px-4 py-2 my-auto text-xl 3xl:text-3xl  text-lightOrange bg-transparent rounded focus:outline-none hover:bg-darkOrange border-lightOrange border-2">
        Resume
      </button>
    </motion.header>
  );
};

export default Header;
