import express from 'express'
const projectRouter = express.Router()
import { createProject } from '../controllers/projectController.js'
import { getProjectDetails, getFilteredProjectDetails } from '../controllers/projectDetailsController.js'
import { createIssueForm, createIssue } from '../controllers/issueController.js'

const app = express()

projectRouter.use(express.urlencoded({extended: 'true'}))
projectRouter.use(express.json())

app.set('view engine', 'ejs')

projectRouter.get('/new', (req, res) => {
  res.render("newProject")
})

/* Route to handle the project submission */
projectRouter.post('/new', createProject) 

projectRouter.get('/:projectId', getProjectDetails)

projectRouter.get('/:projectId/filter', getFilteredProjectDetails)

projectRouter.get('/:projectId/new-issue', createIssueForm)

projectRouter.post('/:projectId/create-issue', createIssue)

export default projectRouter