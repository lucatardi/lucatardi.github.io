---
sidebar_position: 8
---

# Componente missile

Creiamo il nostro primo componente.

Possiamo utilizzare il comando Angular CLI `ng generate component 🐧NOME🐧` per creare il nostro primo componente chiamato "missile" in questo modo:

```shell
ng generate component missile
```

Questo genererà una cartella all'interno di `src/app` chiamata "missile" contenente quattro file:

| **Nome**    | **Descrizione** |
| -------- | ------- |
| `missile.component.ts`  | Il file Typescript che contiene la definizione del componente missile |
| `missile.component.html` | Il template del componente missile   |
| `missile.component.css`    | Lo stile applicato al componente missile   |
| `missile.component.spec.ts`    | Un file di test per scrivere unit test per il componente missile  |

Oltre a creare questi file all'interno della nuova cartella, Angular CLI modifica un file esistente, ovvero `app.module.ts`. Parleremo dei moduli in dettaglio in seguito, ma per ora possiamo pensarli come contenitori in cui dobbiamo registrare tutto ciò che utilizziamo al loro interno. Angular CLI registra automaticamente il nuovo componente all'interno del modulo dell'app.