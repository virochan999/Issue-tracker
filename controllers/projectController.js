
import { saveProjectData, generateProjectId } from '../models/projectModel.js'

export const createProject = (req, res) => {
  try {
    const { name, description, author } = req.body;

    // Validation of the data
    if (!name || !description || !author) {
      res.status(400).send("Bad Request: Missing required data");
      return;
    }
    const newProject = { id: generateProjectId(), name, description, author, labels: [], issues: [] };
    saveProjectData(newProject);
    res.redirect('/');
  } catch (error) {
    console.error("Error processing form submission:", error);
    res.status(500).send("Internal Server Error");
  }
}