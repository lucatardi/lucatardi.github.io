---
sidebar_position: 14
---

# Le direttive

Possiamo definire le direttive in Angular come proprieta' speciali che possono essere utilizzate per inserire logica nei nostri template.
Ci sono diverse direttive in Angular ma le principali sono due:
La direttiva `ngFor` e la direttiva `ngIf`.

### La direttiva ngIf

Permette di specificare una condizione logica per istruire Angular di caricare o meno l'elemento al quale la direttica e' applicata.
Mettiamo il caso di avere il seguente codice:

```html
<div>
  <h3>
    I pinguini
  </h3>
  <p>I pinguini sono uccelli che non sanno volare<p>
</div>
```

Ora mettiamo il caso di volere caricare questo `<div>` ed il suo contenuto solo quando la variabile animale e' uguale a "pinguino":

```html
<div *ngIf="animale === 'pinguino'">
  <h3>
    I pinguini
  </h3>
  <p>I pinguini sono uccelli che non sanno volare<p>
</div>
```

Angular carichera' questo HTML solo quando la variabile `animale` avra' il valore `"pinguino"`.

### La direttiva ngFor

Utilizzata per caricare un determinato elemento ed il suo contenuto un numero definito di volte.
La sintassi e' simile a quella della direttiva precedente ma in questo caso invece di una condizione si itera all'interno di una variabile:

```html
<ul>
  <li *ngFor="let specie of speciePinguini">
    <p>{{specie}}</p>
  </li>
</div>
```

Mettiamo il caso di avere il valore `speciePinguini` definito nella classe come `['Magellano', 'Reale']` il risultato finale caricato nel browser sara':

```html
<ul>
  <li>
    <p>Magellano</p>
  </li>
  <li>
    <p>Reale</p>
  </li>
</div>
```

Mettiamo un po' in pratica le direttive partendo dal template del componente `missile`. proviamo a rimuovere l'oggetto missile che abbiamo applicato:

```diff title="missile.component.ts"
import { Component, Input } from '@angular/core';
import { Missile } from './missile';

@Component({
  selector: 'missile',
  templateUrl: './missile.component.html',
  styleUrls: ['./missile.component.css']
})
export class MissileComponent {
-  @Input() missile: Missile = { name: '', country: '', active: false}; 
+  @Input() missile?: Missile; 
}
```

Non vogliamo infatti avere nessun missile con un `name` o `country` vuoto. Il punto di domanda che mettiamo prima dei due punti dice a typescript che il valore puo' essere `undefined` oppure del tipo `Missile`.

In questo modo pero' notiamo che nel terminale compare ci notifica che:

```bash
✖ Failed to compile.
```

Perche' la compilazione e' fallita? perche' ora che abbiamo cambiato la definizione del componente missile dicendo che un missile puo' anche essere `undefined` Angular si lamenta del fatto che stiamo accedendo nel template ad un oggetto che potenzialmente puo' essere `undefined`.
Per risolvere questo problema possiamo inserire la direttiva ngIf nel template del componente missile in modo da caricare il template solo se le informazioni del missile sono disponibili:

```diff title="missile.component.html"
- <div class="card {{missile.active ? 'active' : 'inactive' }}">
+ <div *ngIf="missile" class="card {{missile.active ? 'active' : 'inactive' }}">
```

Ecco che abbiamo risolto l'errore con un caricamento condizionato implementato con il semplice utilizzo della direttiva ngIf.

Ora mettiamo in pratica la direttiva ngFor:

Spostiamoci nella definizione del componente listaMissili ed aggiungiamo altri due missili:

```diff title="lista-missili.component.ts"
{
      name: 'BrahMos',
      country: 'India',
      active: false
    },
+   {
+     name: 'Falcon 9',
+     country: 'United States',
+     active: true
+   },
+   {
+     name: 'Ariane 5',
+     country: 'France',
+     active: true
+   },
   ]
```

Ora in teoria quello che dobbiamo fare per visualizzare i due nuovi missili aggiunti  e' nel template aggiungere:

```html
<li>
  <missile [missile]="missili[3]"></missile>
</li>
<li>
  <missile [missile]="missili[4]"></missile>
</li>
```

Immaginiamo di aggiungere 1000 missili ora, come vediamo questo processo sembra molto manuale e ripetitivo ed infatti puo' essere automatizzato con ngFor in questo modo:

```diff title="lista-missili.component.html"
- <h2>Ecco una elenco di 3 missili:</h2>
+ <h2>Ecco una elenco di 5 missili:</h2>
<ul class="list">
-  <li>
+  <li *ngFor="let missile of missili">
-    <missile [missile]="missili[0]"></missile>
-    <missile [missile]="missile"></missile>
  </li>
-  <li>
-    <missile [missile]="missili[1]"></missile>
-  </li>
-  <li>
-    <missile [missile]="missili[2]"></missile>
-  </li>
</ul>
```

Ed ecco che ora abbiamo automatizzato la creazione di un `<li>` elemento contentente un missile utilizzando la direttiva ngFor.

:::info
Persi all'ultimo passaggio? Trovate [qui](https://github.com/lucatardi/spazio/commit/a1af00aebd17812d3a5c24a1f7645fc6a46e9781?diff=split) il codice cambiato in questa lezione.
:::

