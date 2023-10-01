---
sidebar_position: 17
---

# Modules

In Angular, a module is like a container that groups specific parts of an application. It's a way to organize and separate code into different functional units. Simply put, you can think of a module as a container for components, services, and other resources that belong to a specific part of the application.

Imagine building a car: you have the engine, the wheels, the interior, and so on. Each part of this car can be considered a module. The engine has internal components that work together to make it function, just like a module in Angular contains components and services that collaborate to perform a specific function in the application.

Modules help keep the application organized, make the code more manageable, and promote the reusability of different parts of the application. Additionally, Angular provides a root module called AppModule, which is the main module of the application and serves as a starting point for organizing all other modules.

For creating and registering a module, you use the `NgModule` decorator, which accepts various parameters such as the registered and included components within the module or other modules imported and used within it.

The more complex and sophisticated the application, the more sense it makes to use modules to divide it and facilitate maintenance.