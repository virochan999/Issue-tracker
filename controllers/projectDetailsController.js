import { getProjectById } from "../models/projectDetailsModel.js";

/* To get the project details */
export function getProjectDetails(req, res) {

  // Get the project Id from the request params
  const projectId = req.params.projectId 
  const project = getProjectById(projectId)
  // If there is no project, throw an error.
  if(!project) {
    res.status(404).send("project not found")
    return
  }

  const selectedLabels = [];
  const author = null;
  const title = null;

  let filteredIssues = project.issues;  
  res.render('projectDetails', { project, issues: filteredIssues, selectedLabels, author, title })
}

/* Function to filter issues data based on the applied filters */
export function getFilteredProjectDetails(req, res) {
  const projectId = req.params.projectId
  const project = getProjectById(projectId)

  // Get the values from the api query params which needs to be filtered
  const labels = req.query.labels
  const author = req.query.author
  const title = req.query.title
  let filteredIssues = project.issues;
  let selectedLabels = [];

  // If values in query params then filtere according to the these values
  if (labels) {
    selectedLabels = Array.isArray(labels) ? labels : [labels];
    filteredIssues = filteredIssues.filter((issue) =>
      selectedLabels.some((label) => issue.labels.includes(label))
    );
  }

  if (author) {
    filteredIssues = filteredIssues.filter((issue) => issue.author.toLowerCase() === author.toLowerCase());
  }

  if (title) {
    const searchTerm = title.toLowerCase();
    filteredIssues = filteredIssues.filter(
      (issue) =>
        issue.title.toLowerCase().includes(searchTerm) ||
        issue.description.toLowerCase().includes(searchTerm)
    );
  }

  // Render the projectDetails page based on the filtered values
  res.render('projectDetails', { project, issues: filteredIssues, selectedLabels, author, title })
}