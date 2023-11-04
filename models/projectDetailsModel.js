import fs, { read } from 'fs';

function readProjectData() {
  try {
    const data = fs.readFileSync('./data/data.json', 'utf-8')
    const projectData =  JSON.parse(data)
    return projectData.projectData
  } catch (error) {
    console.log("error reading data", error)
    return [];
  }
}

export function getProjectById(projectId) {
  const project = readProjectData()
  return project.find((project) => project.id === Number(projectId))
}

export function getIssuesForProject(projectId) {
  const projects = readProjectData();
  const project = projects.find((p) => p.id === projectId);
  return project ? project.issues : [];
}

