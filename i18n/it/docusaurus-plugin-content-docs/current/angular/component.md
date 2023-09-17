---
sidebar_position: 7
---

# Componente

In Angular, un componente è simile a un mattone per la costruzione della tua applicazione web. Immagina di costruire una casa con mattoncini LEGO. Ogni LEGO può essere paragonato a un componente in Angular.

![I componenti sono come i mattoncini Lego](./lego.jpeg)

Ecco come funziona:

Proprio come un mattoncino LEGO ha una forma, un colore e uno scopo, un componente Angular ha fondamentalmente le stesse caratteristiche:

- **Classe**: Iniziamo con un pezzo di LEGO meno comune: la ruota che vedi in alto a destra nella foto qui sopra. Dobbiamo definire un nome con il quale identificarlo da altri LEGO e definere come possa essere utilizzato e collegato ad altri mattoncini. In Angular viene utilizzato TypeScript in una classe per definire il comportamento e le funzionalità del componente.

- **Template**: Pensiamo alla forma del mattoncino LEGO, dove definisci come il componente apparirà nella tua pagina web. Possiamo utilizzare HTML per creare la parte visiva del componente.

- **Stile**: Proprio come un mattoncino LEGO può essere di diversi colori, abbiamo bisogno di un modo per stilizzare i nostri componenti: CSS.

Tipicamente, un componente è constituito da una cartella e la classe (TypeScript), il template (HTML) e lo stile (CSS) sono file contenuti in essa seguendo questa struttura:

```
ruota
  |-- ruota.component.ts
  |-- ruota.component.html
  |-- ruota.component.css
```

Perché i componenti?

Un'applicazione basata su componenti come quelle create con Angular offre tre principali vantaggi: il riutilizzo e la composizione.

**riutilizzo**: Proprio come puoi utilizzare lo stesso mattoncino LEGO in diverse parti della tua casa LEGO, puoi riutilizzare i componenti Angular in diverse parti della tua applicazione web. Questo rende il tuo codice più organizzato e più facile da mantenere.

**Composizione**: I mattoncini LEGO si incastrano per creare strutture più complesse, e i componenti Angular possono interagire tra loro. Possono inviare e ricevere dati, rendendo la tua applicazione web dinamica e reattiva.

Quindi, in termini semplici, un componente Angular è come un mattoncino da utilizzare per creare diverse parti della tua applicazione web. Ogni componente ha la sua struttura (template), comportamento (classe) e aspetto (stile), e puoi usarli insieme per costruire un'applicazione web completa e interattiva.