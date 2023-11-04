import { saveIssueData } from '../models/issueModel.js'
import { getProjectById } from '../models/projectDetailsModel.js';
import { generateProjectId } from '../models/projectModel.js'

export function createIssueForm(req, res) {
  const projectId = req.params.projectId
  const project = getProjectById(projectId)
  res.render('new_issue', { projectId, project })
}

export function createIssue(req, res) {
  try {
    const { title, description, labels, author } = req.body

    // Validation of the data
    if (!title || !description || !author || !labels) {
      res.status(400).send("Bad Request: Missing required data");
      return;
    }
    const projectId = req.params.projectId
    const newIssue = { id: generateProjectId(), title, description, labels, author }
    saveIssueData(newIssue, projectId)
    res.redirect(`/projects/${projectId}`)
  } catch (error) {
    console.error("Error processing form submission:", error)
    res.status(500).send("Internal Server Error")
  }
}

