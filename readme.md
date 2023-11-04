# ISSUE TRACKER
## Features

## Home Page
1. Display a list of existing projects.
2. Include a button for creating a new project.
3. Upon creating a new project, it should be immediately added to the list.

## Create Project Page
### Accept the following fields for creating a project:
1. Name
2. Description
3. Author

## Project Detail Page
1. Redirect users to this page when they click on a project from the home page.
2. Show a list of issues related to the selected project.
3. Allow users to perform the following actions:
4. Filter issues by multiple labels (multiple selection allowed).
5. Filter issues by author.
6. Search for issues by title and description.
7. Include a button for creating a new issue for the project.

## Create Issue Page
1. Provide a dedicated page for users to create a new issue for a specific project.
*** Accept the following fields for creating an issue: ***
1. Title
2. Description
3. Labels (with support for adding multiple labels, and providing label suggestions based on existing project labels)
4. Author

## Implementation Details
### Technologies
1. Node.js: Used as the runtime environment.
2. EJS (Embedded JavaScript): Employed for creating dynamic HTML templates.
3. Express.js: Used for routing and handling HTTP requests.
4. File System (fs) module: Used for data storage and retrieval.
5. HTML and CSS: For front-end presentation and styling.
6. JSON: Employed for storing project and issue data in JSON format.

## Application Structure
1. Views: EJS templates for rendering project and issue pages.
2. Controllers: Node.js modules for handling application logic and routing.
3. Models: Modules for data storage and retrieval.

## Getting Started
1. Clone the repository to your local machine.
2. Install Node.js if not already installed.
3. Run npm install to install project dependencies.
4. Start the application using npm start.
5. Access the application in your web browser at http://localhost:3000.

## Usage
### Home Page:

1. View a list of existing projects.
2. Create a new project using the "Create Project" button.

### Create Project Page:

1. Provide project details, including name, description, and author.

### Project Detail Page:

1. Click on a project from the home page to access its details.
2. Filter issues based on labels, author, or search criteria.
3. Create a new issue for the selected project.

### Create Issue Page:

1. Specify issue details, including title, description, labels (with label suggestions), and author.