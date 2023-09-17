---
sidebar_position: 7
---

# Component

In Angular, a component is like a building block for your web application. Imagine you're building a house with LEGO bricks. Each LEGO brick can be compared to a component in Angular.

![Components like legos](./lego.jpeg)

Here's how it works:

Just like a LEGO brick has a specific shape, colour and meaning an Angular component has basically the same:

- **Class**: Let's start with a less commun piece of LEGO: the wheel you see on the top right of the lego picture above. We need to declare its name and how it should be use and connect with other bricks. We use TypeScript code in a class to define the behavior and functionality of your component.

- **Template**: This is like the shape of the LEGO brick, where you define what the component will look like in your web page. We can use HTML to create the visual part of your component.
  
- **Style**: As a LEGO brick can be in different colours we need as well a way to style our components. We can style our components with css.

Typically a component is rappresented in a folder and the class (Typescript), template (HTML) and style (CSS) are contained in files following this structure:

```
wheel
  |-- wheel.component.ts
  |-- wheel.component.html
  |-- wheel.component.css
```

Why components?

A component based application like the ones created with Angular offers three main advantages: reusability and composition.

**Reusability**: Just as you can use the same LEGO brick in different parts of your LEGO house, you can reuse Angular components in different parts of your web application. This makes your code more organized and easier to maintain.

**Composition**: LEGO bricks can snap together to create more complex structures, and Angular components can interact with each other. They can send and receive data, making your web application dynamic and responsive.

So, in simple terms, an Angular component is like a building block that you use to create different parts of your web application. Each component has its own structure (template), behavior (class), and look (style), and you can use them together to build a complete and interactive web application.