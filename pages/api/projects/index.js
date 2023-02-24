import {
  deleteProject,
  getAllProject,
  getProject,
  updateProject,
  createProject,
} from "@/lib/projects";

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          const project = await getProject(req.query.id);
          return res.status(200).json(project);
        } else {
          const projects = await getAllProject();
          return res.status(200).json(projects);
        }
      }
      case "POST": {
        const { title, info, img, github, live, tech } = req.body;
        console.log(req.body);
        const project = await createProject(req.body);
        return res.status(200).json(project);
      }
      case "PUT": {
        const { id, ...updateData } = req.body;
        const project = await updateProject(id, updateData);
        return res.status(200).json(project);
      }
      case "DELETE": {
        const { id } = req.body;
        const project = await deleteProject(id);
        return res.status(200).json(project);
      }
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
