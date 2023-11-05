import express from 'express'
import fs from 'fs'
import expressLayouts from "express-ejs-layouts"

const app = express()

app.use(expressLayouts);
const port = process.env.PORT || 3000


app.use(express.static("public")); 
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.set('view engine', 'ejs')

function readProjectData() {
  const data = fs.readFileSync('public/data/data.json', 'utf-8')
  return JSON.parse(data)
}

app.get('/', (req, res) => {
  const projects = readProjectData()
  res.render('index', { projects })
}) 

import projectRouter from './routes/projectRoutes.js'
app.use('/projects', projectRouter)

app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})
