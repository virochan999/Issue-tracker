import fs from 'fs';

export function saveIssueData(newIssue, projectId) {
  try {
    const data = fs.readFileSync('./data/data.json', 'utf-8');
    const projects = JSON.parse(data);

    // Find the project by projectId
    const project = projects.projectData.find((project) => project.id === Number(projectId));

    if (!project) {
      console.error('Project not found')
      return;
    }

    // Add the new issue to the project's issues array
    project.labels.push(newIssue.labels)
    project.issues.push(newIssue)

    // Write the updated data back to data.json
    fs.writeFileSync('./data/data.json', JSON.stringify(projects, null, 2));

  } catch (error) {
    console.error('Error reading or writing project data:', error);
  }
}