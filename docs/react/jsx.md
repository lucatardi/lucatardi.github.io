---
sidebar_position: 3
---

# What is JSX

JSX is a syntax extension for JavaScript. It was introduced to React as a way to describe what the user interface (UI) should look like. Essentially, it is a shorthand for writing React components.

Here is a simple example of JSX:

```jsx
const element = <h1>Hello, world!</h1>;
```

This JSX code will be compiled into the following JavaScript code:

```jsx
const element = React.createElement("h1", null, "Hello, world!");
```

JSX makes it easier to write and maintain React components, as it allows you to write HTML-like code that is more familiar to developers who have worked with HTML before. It also allows for the creation of reusable components, which can be shared and used throughout an application.