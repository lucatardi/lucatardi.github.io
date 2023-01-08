---
sidebar_position: 3
---

# Che cos'è JSX

JSX è un'estensione di sintassi per JavaScript. È stata introdotta in React come modo per descrivere come dovrebbe apparire l'interfaccia utente (UI). Essenzialmente, è un modo abbreviato per scrivere componenti React.

Ecco un semplice esempio di JSX:

```jsx
const element = <h1>Hello, world!</h1>;
```

Questo codice JSX verrà compilato nel seguente codice JavaScript:

```jsx
const element = React.createElement("h1", null, "Hello, world!");
```

JSX rende più facile scrivere e mantenere i componenti React, poiché consente di scrivere un codice simile a HTML che è più familiare agli sviluppatori che hanno lavorato con HTML in passato. Inoltre, permette la creazione di componenti riutilizzabili, che possono essere condivisi e utilizzati in tutte le applicazioni.