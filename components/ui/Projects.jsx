import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { VscLinkExternal } from "react-icons/vsc";
const Projects3 = () => {
  const arr = [
    // {
    //   img: "/musicApp.png",
    //   title: "Apple top 100 dashboard",
    //   info: "A concept for a web app. View your top artists, top tracks,recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    //   tech: ["React", "Tailwind", "Responsive", "Context", "State"],
    //   urls: {
    //     github: "www.youtube.com",
    //     live: "www.youtube.com",
    //   },
    // },
    // {
    //   img: "/musicApp.png",
    //   title: "Apple top 100 dashboard",
    //   info: "A concept for a web app. View your top artists, top tracks,recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    //   tech: ["React", "Tailwind", "Responsive", "Context", "State"],
    //   urls: {
    //     github: "www.youtube.com",
    //     live: "www.youtube.com",
    //   },
    // },
    // {
    //   img: "/musicApp.png",
    //   title: "Apple top 100 dashboard",
    //   info: "A concept for a web app. View your top artists, top tracks,recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    //   tech: ["React", "Tailwind", "Responsive", "Context", "State"],
    //   urls: {
    //     github: "www.youtube.com",
    //     live: "www.youtube.com",
    //   },
    // },
    {
      img: "/musicApp.png",
      title: "Apple top 100 dashboard",
      info: "A concept for a web app. View your top artists, top tracks,recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      tech: ["React", "Tailwind", "Responsive", "Context", "State"],
      urls: {
        github: "www.youtube.com",
        live: "www.youtube.com",
      },
    },
  ];
  return (
    <>
      <div className="flex flex-col  gap-20 mt-10 lg:mx-80 3xl:mx-100 ">
        {arr.map((project) => {
          return (
            <div key={project.title} className={"grid grid-cols-12   "}>
              <div className="full lg:half  lg:opacity-20   relative -z-10">
                <div className="bg-lightOrange absolute h-full  w-full inset-0" />
                <Image
                  className="grayscale h-full w-full mix-blend-multiply "
                  width={"2559"}
                  height={"1306"}
                  src={project.img}
                  alt="app photo"
                />
              </div>
              <div className="  col-start-1 lg:col-start-5 col-span-12 lg:text-right p-6 pt-8 row-span-full text-slate lg:bg-transparent bg-ymaroon opacity-[.9] lg:text-2xl flex flex-col ">
                <h1 className="text-lightOrange font-mono">Featured Project</h1>

                <h1 className="text-lightslate leading-7 text-2xl mb-5 font-bold">
                  {project.title}
                </h1>

                <p>{project.info}</p>
                <div className="flex relative  justify-end align-bottom text-slate mt-2 gap-3   text-2xl  md:text-3xl ">
                  <a className="">
                    <TbBrandGithub className="" />
                  </a>
                  <a className="">
                    <VscLinkExternal className="" />
                  </a>
                </div>

                <div className="flex flex-col mt-10 ">
                  <div className="flex gap-2 pt-5 font-bold flex-wrap justify-center lg:justify-end">
                    {project.tech.map((tech) => {
                      return (
                        <div
                          key={tech}
                          className=" bg-black relative rounded-bl-lg float-right text-right box-content "
                        >
                          <h1 className="justify-end text-end ml-2 px-2 w-full  rounded-bl-xl">
                            {tech}
                          </h1>
                          <div className="absolute bottom-0 right-0 w-[80%] rounded-tl-xl   bg-darkOrange h-1" />
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
