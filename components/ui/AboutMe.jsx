import Image from "next/image";

import { motion } from "framer-motion";
import { slideIn } from "@/motion";
const AboutMe = () => {
  return (
    <motion.section
      initial={"hidden"}
      whileInView="show"
      variants={slideIn("right", "tween", 0.2, 1)}
      className="relative md:max-w-3xl 2xl:max-w-4xl 3xl:max-w-6xl mx-auto pt-2"
    >
      <div className="bg-[#301008] border-t-4 border-r-4 border-lightOrange absolute  inset-0 -z-10 w-[105%] rounded-2xl " />
      <div className="md:grid md:grid-cols-10 gap-12 ml-4 flex flex-col md:flex-row">
        <div className="col-span-5 2fr text-slate">
          <div className="flex items-center mt-2 mb-10 -ml-2 text-lightOrange relative">
            <h1 className="mr-2.5 lg:text-lg 2xl:text-2xl 3xl:text-3xl">01.</h1>
            <h1 className="3xl:text-4xl 2xl:text-xl lg:text-xl min-w-fit leading-5 text-darkOrange">
              About me
            </h1>
            <div className="block h-[1px] lg:h-1 mt-1 w-full bg-lightOrange ml-5" />
          </div>
          <div className="text-base lg:text-xl 2xl:text-xl 3xl:text-2xl">
            <p className="mb-3.5 ">
              I enjoy creating things that live on the internet. My intrest in
              the web started back when I built my first computer in elementary
              school. Since then I have lived on the internet and software.
            </p>
            <p className="mb-3.5 ">
              Fast-forward to today I have completed a bootcamp and have been
              furthering my skills everyday.
            </p>
          </div>
          <ul className="grid grid-cols-2 lg:text-lg 3xl:text-xl 2xl:text-xl">
            <li className='before:content-["▹"] before:text-lightOrange'>{`Javascript (ES6+)`}</li>
            <li className='before:content-["▹"] before:text-lightOrange'>{`React`}</li>
            <li className='before:content-["▹"] before:text-lightOrange'>{`Node.js`}</li>
            <li className='before:content-["▹"] before:text-lightOrange'>{`TypeScript`}</li>
            <li className='before:content-["▹"] before:text-lightOrange'>{`React`}</li>
            <li className='before:content-["▹"] before:text-lightOrange'>{`React`}</li>
          </ul>
        </div>
        <div className="relative col-start-6 col-end-11 flex mt-5 smm:w-4/5">
          <div className="top-5 left-5 absolute w-full h-full rounded-xl z-0 border-lightOrange border-2"></div>
          <div className="absolute bg-lightOrange w-full h-full rounded-xl"></div>
          <Image
            src="/cover.jpg"
            width={1000}
            height={1000}
            alt="cover"
            className="w-full z-11 grayscale mix-blend-multiply rounded-xl  hover:grayscale-0 hover:mix-blend-normal hover:ease-linear"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
