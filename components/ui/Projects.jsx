"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { VscLinkExternal } from "react-icons/vsc";
const Projects3 = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/api/projects", {
      method: "get",
    })
      .then(async (res) => await res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <div className="flex flex-col  gap-20 mt-10 lg:mx-10  3xl:mx-100 ">
        {data &&
          data.map((project) => {
            return (
              <div
                key={project.title}
                className={
                  "grid grid-cols-12 max-w-4xl 3xl:max-w-6xl mx-auto group relative  "
                }
              >
                <div className="absolute lg:group-even:left-0 lg:group-odd:right-0 hidden lg:block     h-full w-2 bg-darkOrange-500" />

                <div className="full lg:half  lg:opacity-20 lg:hover:opacity-100  transition hover:scale-105   ease-in-out duration-1000  relative lg:hover:z-20 ">
                  <div className="bg-lightOrange   absolute h-full  w-full inset-0   " />
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      className="grayscale h-full w-full mix-blend-multiply  lg:hover:grayscale-0 lg:hover:mix-blend-normal  transition   "
                      width={"2559"}
                      height={"1306"}
                      src={project.img}
                      alt="app photo"
                    />
                  </a>
                </div>
                <div className="col-start-1 relative lg:group-even:col-start-1 lg:group-odd:col-start-5 z-10  lg:group-even:col-end-9  col-span-12 lg:group-odd:text-right py-6 px-2 pt-8 row-span-full text-slate lg:bg-transparent bg-ymaroon opacity-[.9] lg:text-xl 3xl:text-2xl flex flex-col ">
                  <div className="px-2">
                    <h1 className="text-lightOrange font-mono">
                      Featured Project
                    </h1>

                    <h1 className="text-lightslate leading-7  mb-5 font-bold">
                      {project.title}
                    </h1>

                    <p className="text-base 3xl:text-xl">{project.info}</p>
                    <div className="flex relative lg:group-even:justify-start   justify-end align-bottom text-slate mt-2 gap-3   text-2xl  md:text-3xl ">
                      <a
                        className=""
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <TbBrandGithub className="" />
                      </a>
                      <a
                        className=""
                        href={project.live}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <VscLinkExternal className="" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col mt-10   bottom-14 lg:group-odd:right-2 lg:group-even:left-2">
                    <div className="flex gap-2 pt-5 font-bold flex-wrap justify-center lg:group-even:justify-start  lg:justify-end">
                      {project.tech.map((tech) => {
                        return (
                          <div
                            key={tech}
                            className=" bg-darkOrange-500 text-base  lg:group-odd:pr-1 lg:group-even:pl-1 relative lg:group-odd:rounded-bl-lg float-right lg:group-even:text-left  lg:group-even:rounded-br-lg text-right box-content "
                          >
                            <h1 className="justify-end lg:group-even:text-start lg:group-even:ml-0 lg:group-even:px-0 lg:group-even:pr-6     text-end ml-2 px-2 w-full opacity-100 ">
                              {tech}
                            </h1>
                            <div className="absolute bottom-0 right-0 lg:group-even:left-0 w-[80%] lg:group-even:rounded-tr-xl lg:group-odd:rounded-tl-xl   bg-darkOrange h-1" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Projects3;
