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