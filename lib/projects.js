import prisma from "./prisma";

export const getAllProject = async () => {
  const projects = await prisma.project.findMany({});
  return projects;
};

export const getProject = async (id) => {
  const project = await prisma.project.findUnique({
    where: { id },
  });
  return project;
};

export const createProject = async (body) => {
  console.log(body);
  const project = await prisma.project.create({
    data: body,
  });
  return project;
};

export const updateProject = async ({ id, updateData }) => {
  const project = await prisma.project.update({
    where: {
      id,
    },
    data: { ...updateData },
  });
  return project;
};

export const deleteProject = async (id) => {
  const project = await prisma.project.delete({ where: { id } });
  return project;
};
