---
sidebar_position: 4
---

# Come usare CSS in React

In un'applicazione React, puoi utilizzare CSS in diversi modi.

Un modo è quello di includere un tag `style` nel tuo JSX che contenga un oggetto JavaScript con gli stili che vuoi applicare. Ad esempio:


```jsx
const divStyles = {
  color: 'red',
  fontSize: '20px'
}

function MyComponent() {
  return <div style={divStyles}>Hello World!</div>;
}
```

Un altro modo è quello di scrivere il tuo CSS in un file separato e importarlo nel file del tuo componente. Ad esempio, potresti avere un file styles.css che assomiglia a questo:

```jsx
.red-text {
  color: red;
}

.big-font {
  font-size: 20px;
}
```

Puoi quindi importare quel file nel file del tuo componente e applicare gli stili in questo modo:

```jsx
import './styles.css';

function MyComponent() {
  return <div className="red-text big-font">Hello World!</div>;
}
```





