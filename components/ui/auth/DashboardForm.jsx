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
        // const { data } = res;

        setProject(res);
      });
  };
  console.log(project);
  if (session) {
    return (
      <form onSubmit={handleSubmit} className={"grid text-center gap-2"}>
        <label>
          title
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, title: e.target.value }))
            }
            className="bg-black  ml-2 text-white"
            id="title"
          />
        </label>

        <label className="">
          img
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, img: e.target.value }))
            }
            className="bg-black ml-2 text-white"
            id="image"
          />
        </label>
        <label className="">
          info
          <textarea
            onChange={(e) =>
              setData((prev) => ({ ...prev, info: e.target.value }))
            }
            className="bg-black ml-2 text-white"
            type="text-box"
            id="info"
          />
        </label>
        <label className="">
          github
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, github: e.target.value }))
            }
            className="bg-black ml-2 text-white"
            type="text-box"
            id="info"
          />
        </label>
        <label className="">
          live
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, live: e.target.value }))
            }
            className="bg-black ml-2 text-white"
            type="text-box"
            id="info"
          />
        </label>
        <label className="">
          tech
          <input
            className="bg-black ml-2 text-white"
            type="text-box"
            id="info"
          />
          <button
            type="button"
            onClick={(e) => {
              console.log(e.target.previousSibling.value);
              setData((prev) => ({
                ...prev,
                tech: [...prev.tech, e.target.previousSibling.value],
              }));
            }}
          >
            add
          </button>
        </label>
        {data.tech && (
          <div>
            {data.tech.map((tech) => {
              return <h1 key={tech}>{tech}</h1>;
            })}
          </div>
        )}
        <button type="submit">SUBMIT</button>
        {project && <p>{project.title} has been saved </p>}
      </form>
    );
  }
}
