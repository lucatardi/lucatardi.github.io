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

Esaminiamo da piu' vicino il contenuto dei file del nostro componente missile:

Il file di stile `missile.component.css` e' vuoto ma pronto nel caso volessimo inserire regole CSS.

```html title="missile.component.html"
<p>missile works!</p>
```

La struttura del nostro componente e' quindi un paragrafo con "missile works!".

Un altro file che troviamo e' il file Typescript:

```ts title="missile.component.ts"
import { Component } from '@angular/core';

@Component({
  selector: 'app-missile',
  templateUrl: './missile.component.html',
  styleUrls: ['./missile.component.css']
})
export class MissileComponent {}
```

nel file Typescrit troviamo alcune linee di codice:
- Viene importato un decoratore chiamato `Component` dalla libreria `@angular/core`.
- Il decoratore viene eseguito passando diversi parametri:

| **Nome**    | **Descrizione** |
| -------- | ------- |
| selector | Il nome univoco che vogliamo utilizzare per il nostro componente |
| templateUrl | Il file contenente la struttura HTML del component |
| styleUrls    | I file contenenti il CSS che si vuole applicare al componente   |

- Una classe `MissileComponent` viene create vuota e esportata.

### Utilizziamo il nostro 🚀 componente

Prima di iniziare a modificare il nostro componente missile, proviamo a visualizzarlo nella nostra app.

Un componente può essere caricato come un tag HTML utilizzando il nome del selettore racchiuso tra `<` e `>`. 

Quindi, nel caso del componente missile, il selettore è `app-missile`, quindi possiamo andare nel file `app.component.html` e incollare il seguente codice sotto il nostro `Hello world Angular`:

```html
<app-missile></app-missile>
```

Salvando il file dovremmo essere in grado di vedere che il nostro componente missile si carica e mostra il suo contenuto: `missile works!`.

Testiamo i nostri progressi. Il selettore `app-missile` non e' molto carino, cambiamolo in `missile` soltanto.

Dobbiamo cambiarlo nel parametro del selettore e poi cambiare anche il tag HTML relativo.

:::info
Bloccati all'ultimo punto? Controlla [qui](https://github.com/lucatardi/spazio/commit/6d3285bbbbbc64a7eb4ebbd14043cdc3bcc500f6?diff=split) le modifiche e prova ad applicarle nel tuo codice sorgente.
:::