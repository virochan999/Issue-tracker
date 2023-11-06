import fs, { read } from 'fs';

/* Function to read project data from the data file */
function readProjectData() {
  try {
    const data = fs.readFileSync('public/data/data.json', 'utf-8')
    const projectData =  JSON.parse(data)
    return projectData.projectData
  } catch (error) {
    console.log("error reading data", error)
    return [];
  }
}

/* To get the project by using its Id from the whole data */
export function getProjectById(projectId) {
  const project = readProjectData()
  return project.find((project) => project.id === Number(projectId))
}

/* To get the issues for a particular project */
export function getIssuesForProject(projectId) {
  const projects = readProjectData();
  const project = projects.find((p) => p.id === projectId);
  return project ? project.issues : [];
}

