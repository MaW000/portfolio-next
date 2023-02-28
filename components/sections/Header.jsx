"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/motion";

import Image from "next/image";
const Header = () => {
  function scrollToTop(x) {
    scrollTo(document.body, x, 1250);
  }
  function scrollTo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      window.scrollBy({ top: val });
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="align-center flex-col flex z-30   gap-2 pt-5 lg:pt-10 md:flex-row  absolute top-0 w-screen   "
    >
      <a className="relative mx-auto font-medium " href={"/"}>
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
        <button
          onClick={() => scrollToTop(40)}
          className="headlink before:content-['|'] before:mr-1 after:ml-1 md:before:mr-5 md:after:ml-5  "
        >
          {" "}
          About
        </button>
        <button
          onClick={() => scrollToTop(65)}
          className="headlink before:content-['|'] before:mr-1 after:ml-1  md:before:mr-5 md:after:ml-5  "
        >
          {" "}
          Work
        </button>
        <button
          onClick={() => scrollToTop(110)}
          className="headlink before:content-['|'] before:mr-1 after:ml-1 md:before:mr-5 md:after:ml-5 after:content-['|']"
        >
          {" "}
          Contact
        </button>
      </nav>
      <button className=" mx-auto font-mono px-4 py-2 my-auto text-xl 3xl:text-3xl  text-lightOrange bg-transparent rounded focus:outline-none hover:bg-darkOrange border-lightOrange border-2">
        Resume
      </button>
    </motion.header>
  );
};

export default Header;
