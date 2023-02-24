import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function DashboardForm() {
  const { data: session } = useSession();

  const [data, setData] = useState({
    title: "",
    info: "",
    img: "",

    github: "",
    live: "",
    tech: [],
  });
  const [project, setProject] = useState();
  console.log(session);
  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => await res.json())
      .then((res) => {
        setProject(res);
      });
  };

  if (session && session.user.email === "mwardlow0@gmail.com") {
    return (
      <form onSubmit={handleSubmit} className={" text-center "}>
        <div className="flex flex-col gap-2 w-55">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Title"
            className="bg-black  ml-2 text-white"
          />

          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, img: e.target.value }))
            }
            placeholder="Image"
            className="bg-black ml-2 text-white"
          />

          <textarea
            onChange={(e) =>
              setData((prev) => ({ ...prev, info: e.target.value }))
            }
            placeholder="Info"
            className="bg-black ml-2 text-white"
            type="text-box"
          />

          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, github: e.target.value }))
            }
            placeholder="Github"
            className="bg-black ml-2 text-white"
            type="text-box"
          />

          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, live: e.target.value }))
            }
            placeholder="Live"
            className="bg-black ml-2 text-white"
            type="text-box"
          />
          <div>
            <input
              placeholder="Tech"
              className="bg-black ml-2 text-white relative"
              type="text-box"
            />
            <button
              className="absolute capitalize ml-1 bg-gray-500 px-1 rounded"
              type="button"
              onClick={(e) => {
                console.log(e.target.previousSibling.value);
                setData((prev) => ({
                  ...prev,
                  tech: [...prev.tech, e.target.previousSibling.value],
                }));
              }}
            >
              add tech
            </button>
          </div>
        </div>
        {data.tech && (
          <div className=" justify-center ml-6  flex  ">
            {data.tech.map((tech) => {
              return (
                <h1
                  className="mr-2 after:ml-2 [&:not(:last-child)]:after:content-['|']"
                  key={tech}
                >
                  {tech}
                </h1>
              );
            })}
          </div>
        )}
        <button type="submit">SUBMIT</button>
        {project && <p>{project.title} has been saved </p>}
      </form>
    );
  } else if (session) {
    return <h1>Sign in with admin account</h1>;
  }
}
