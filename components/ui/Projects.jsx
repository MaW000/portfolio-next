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
      <div className="flex flex-col  gap-20 mt-10 lg:mx-10  3xl:mx-100 ">
        {arr.map((project) => {
          return (
            <div
              key={project.title}
              className={"grid grid-cols-12 max-w-6xl mx-auto group   "}
            >
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
              <div className="col-start-1 lg:group-even:col-start-1 lg:group-odd:col-start-5  lg:group-even:col-end-9  col-span-12 lg:group-odd:text-right p-6 pt-8 row-span-full text-slate lg:bg-transparent bg-ymaroon opacity-[.9] lg:text-2xl flex flex-col ">
                <h1 className="text-lightOrange font-mono">Featured Project</h1>

                <h1 className="text-lightslate leading-7 text-2xl mb-5 font-bold">
                  {project.title}
                </h1>

                <p>{project.info}</p>
                <div className="flex relative lg:group-even:justify-start   justify-end align-bottom text-slate mt-2 gap-3   text-2xl  md:text-3xl ">
                  <a className="" href={project.urls.github}>
                    <TbBrandGithub className="" />
                  </a>
                  <a className="" href={project.urls.live}>
                    <VscLinkExternal className="" />
                  </a>
                </div>

                <div className="flex flex-col mt-10 ">
                  <div className="flex gap-2 pt-5 font-bold flex-wrap justify-center lg:group-even:justify-start  lg:justify-end">
                    {project.tech.map((tech) => {
                      return (
                        <div
                          key={tech}
                          className=" bg-darkOrange-500  relative rounded-bl-lg float-right lg:group-even:text-left  lg:group-even:rounded-br-lg text-right box-content "
                        >
                          <h1 className="justify-end lg:group-even:text-start lg:group-even:ml-0 lg:group-even:px-0 lg:group-even:pr-6     text-end ml-2 px-2 w-full opacity-100  rounded-bl-xl">
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
