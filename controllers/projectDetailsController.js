import { getProjectById, getIssuesForProject } from "../models/projectDetailsModel.js";

export function getProjectDetails(req, res) {
  const projectId = req.params.projectId
  const project = getProjectById(projectId)
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

export function getFilteredProjectDetails(req, res) {
  const projectId = req.params.projectId
  const project = getProjectById(projectId)
  const labels = req.query.labels
  const author = req.query.author
  const title = req.query.title
  let filteredIssues = project.issues;
  let selectedLabels = [];
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

  res.render('projectDetails', { project, issues: filteredIssues, selectedLabels, author, title })
}