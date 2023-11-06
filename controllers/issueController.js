import { saveIssueData } from '../models/issueModel.js'
import { getProjectById } from '../models/projectDetailsModel.js';
import { generateProjectId } from '../models/projectModel.js'

/* Function to handle routing to create issue form */
export function createIssueForm(req, res) {
  const projectId = req.params.projectId
  const project = getProjectById(projectId)

  // Render the form with project Id and project data
  res.render('new_issue', { projectId, project })
}

/* Function to create a new issue */
export function createIssue(req, res) {
  try {
    // Get all the required values from the request
    const { title, description, labels, author } = req.body

    // Validation of the data
    if (!title || !description || !author || !labels) {
      res.status(400).send("Bad Request: Missing required data");
      return;
    }
    const projectId = req.params.projectId

    // Get new issue data
    const newIssue = { id: generateProjectId(), title, description, labels, author }

    //Save the issue data to the corresponding project 
    saveIssueData(newIssue, projectId)
    res.redirect(`/projects/${projectId}`) // Redirect to project page after creating the issue
  } catch (error) {
    console.error("Error processing form submission:", error)
    res.status(500).send("Internal Server Error")
  }
}

