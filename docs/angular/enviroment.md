---
sidebar_position: 3
---

# Enviroment

To develop an application using Angular some programs and dependencies need to be installed in the machine:

## Code editor

Each library and framework in the web development industry requires a code editor, Angular as well.
My personal choice and preference would be Visual Studio Code but amoung it there are also Atom and WebStorm.

## Terminal

A terminal is a graphic interface which allows us to interact with the computer without having to use the user interface for it. This allows us to run and execute commands by just typing on it.

Most major operating systems come with a default terminal or command-line interface installed. On macOS, the terminal is called **Terminal**, while on Windows, it's known as **Command Prompt**.

## Node.js
Node.js is the platform that allows you to run JavaScript code outside of the web browser. This means, for example, using JavaScript for server-side programming, whether it's on a server or a local computer.

## NPM
NPM (Node Package Manager) is a collection of third-party libraries and modules that can be installed and integrated into Node.js-based projects.

NPM is a fundamental tool for the development of Node.js applications as it simplifies dependency management and makes it easier to use third-party libraries and modules. It is widely used by the Node.js community and represents an essential component of the Node.js ecosystem.

## Angular CLI

The Angular Command Line Interface (or for short CLI) is a command-line tool that helps developers with the development and management of Angular applications. It provides a set of commands for various tasks involved in Angular application development, making it easier to create, build, test, and deploy Angular projects. Some of the common tasks that Angular CLI can assist with include:

**Project Generation**: Angular CLI allows you to quickly generate a new Angular project with all the necessary files and folder structure. You can use the `ng new` command to create a new project.

**Development Server**: It comes with a built-in development server that allows you to run your Angular application locally for testing and development. You can start the server using the `ng serve` command.

**Code Generation**: Angular CLI can generate code for various Angular components, services, modules, and more. For instance, you can create a new component with the `ng generate component` command.

**Building Production-Ready Code**: When you're ready to deploy your application, Angular CLI can help you build optimized and minified production-ready code with the `ng build` command.

**Testing**: Angular CLI integrates with testing frameworks like Jasmine and Karma, making it easy to write and run unit tests for your Angular application using commands like `ng test`.

**Linting**: It includes tools for code linting using TSLint or ESLint to help maintain code quality and consistency. You can lint your code with the `ng lint` command.

**Configuration Management**: Angular CLI manages configuration files for your project, such as angular.json and tsconfig.json, making it easier to adjust project settings.

**Dependency Management**: It can automatically install and manage project dependencies using npm or yarn, ensuring that your project uses the correct versions of libraries.

Angular CLI simplifies many of the common tasks associated with Angular development, automating configuration and providing a consistent project structure. This allows developers to focus more on writing application code and less on setting up and managing development environments.

To install Angular CLI we can open the terminal and run this command:

```shell
sudo npm install --location=global @angular/cli
```