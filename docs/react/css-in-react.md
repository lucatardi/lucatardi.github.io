---
sidebar_position: 4
---

# How to use CSS in React

In a React application, you can use CSS in a couple of different ways.

One way is to include a `style` tag in your JSX that contains a JavaScript object with the styles you want to apply. For example:

```jsx
const divStyles = {
  color: 'red',
  fontSize: '20px'
}

function MyComponent() {
  return <div style={divStyles}>Hello World!</div>;
}
```

Another way is to write your CSS in a separate file and import it into your component file. For example, you might have a styles.css file that looks like this:

```jsx
.red-text {
  color: red;
}

.big-font {
  font-size: 20px;
}
```

You can then import that file into your component file and apply the styles like this:

```jsx
import './styles.css';

function MyComponent() {
  return <div className="red-text big-font">Hello World!</div>;
}
```





