import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { VscLinkExternal } from "react-icons/vsc";
const Projects2 = () => {
  const projects = {
    "music-app": {
      img: "/musicApp.png",
      title: "Apple top 100 dashboard",
      info: "A concept for a web app. View your top artists, top tracks,recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      tech: ["React", "Tailwind", "Responsive", "Context", "State"],
      urls: {
        github: "www.youtube.com",
        live: "www.youtube.com",
      },
    },
  };
  const arr = [
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
      <div className="flex flex-col  gap-20 mt-10 lg:mx-20 3xl:mx-100 ">
        {arr.map((project) => {
          return (
            <div key={project.title} className={"grid grid-cols-12  mx-auto"}>
              <div className="col-start-1 relative  row-span-full col-span-4 lg:col-span-10">
                <div className="max-w-full row-span-full bg-black h-96 lg:h-full relative -z-10">
                  <div className="bg-lightOrange absolute inset-0" />
                  <Image
                    className="grayscale w-max mix-blend-multiply h-96 lg:h-max"
                    width={2559}
                    height={1306}
                    src={project.img}
                    alt="app photo"
                  />
                </div>
              </div>
              <div className="flex justify-end  text-right float-right min-w-xl right-0 text-slate flex-wrap z-20 mt-20  row-span-full col-start-5 col-span-9">
                <div className="row-span-full col-start-5 col-span-7">
                  <h1 className="text-lightOrange font-mono">
                    Featured Project
                  </h1>
                  <div className="relative">
                    <h1 className="text-lightslate leading-7 text-2xl mb-5 font-bold">
                      {project.title}
                    </h1>
                    <div className="flex  justify-end align-bottom text-slate mt-2 gap-3 absolute -top-8 -right-4 text-2xl md:text-3xl">
                      <a>
                        <TbBrandGithub className="" />
                      </a>
                      <a>
                        <VscLinkExternal className="" />
                      </a>
                    </div>
                  </div>
                  <p>{project.info}</p>
                  <div className="flex flex-col mt-10 ">
                    <div className="flex gap-2 pt-5 font-bold flex-wrap justify-center">
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects2;
