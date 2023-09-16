---
sidebar_position: 5
---

# Angular's project structure

After generating a brand new Angular project by running the command `ng new 🐧NAME🐧` the CLI creates a folder containing a basic Angular project.
Let's explore some files and folders to have a better picture of it.

At a root level we find the entry point of any web application: the **package.json** file. This file contains all the information needed by npm, such as the name of the project, scripts and dependencies the project needs to install.
These dependencies are installed in a folder called  **node_modules**. We should never change or delete the content of this folder as It is directly handled for us by npm.

Let's expand now the **src** folder, inside we find some entry point files we don't want to modify, an assets folder in the case we want to keep some pictures or other assets and the most important folder is the **app** folder, this folder is the one we are going to create/edit files.