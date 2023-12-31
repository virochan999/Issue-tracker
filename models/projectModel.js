import fs from 'fs';

/* To generate a unique project Id */
export function generateProjectId() {
  return Date.now()
}

/* Function to save the project data */
export function saveProjectData(newProject) {
  let projects = []
  try {
    const data = fs.readFileSync('public/data/data.json', 'utf-8')
    projects = JSON.parse(data)
  } catch (error) {
    console.error('Error reading project data:', error);
  }
  projects.projectData.push(newProject)

  try {
    fs.writeFileSync('public/data/data.json', JSON.stringify(projects, null, 2))
  } catch (error) {
    console.error('Error writing project data:', error)
  }
}