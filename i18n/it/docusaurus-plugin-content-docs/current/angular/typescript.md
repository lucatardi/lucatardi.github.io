---
sidebar_position: 10
---

# Typescript

Abbiamo visto che la classe di un componente e' definita in un file Typescript.

Ma che cos'e' Typescript?

Mi piace definire typescript come JavaScript + types:
Rispetto ad altri linguggi di programmazione Javascript non ha bisogno di dichiarare la tipologia di una variabile, questo puo' causare problemi in applicazioni di grandi dimensioni dove piu' di un sviluppatore collaborano.
Facciamo un esempio:


Uno sviluppatore dichiara una variabile chiamata saldo ed assegna un valore numerico `10`. Il suo intento e' quello di esprimere il valore percentuale del saldo sui prodotti, in questo modo:

```js
let saldo = 10;
```

Un secondo sviluppatore aggiunge della logica per modificare il valore del saldo per i clienti che possiedono una carta sconto al 30%:

```js
saldo = "30%"
```

Ecco che si crea un potenziale problema perché la variabile saldo e' cambiato il suo valore da un numero ad una stringa senza che nessuno dei due sviluppatori si sia accorto del problema.

Typescript aiuta ad identificare questi problemi durante lo sviluppo prima che essi si materializzino in bug.

L'idea di Typescript e' semplice:

Tutte le volte che si dichiara una variabile bisogna definirne la tipologia, nel caso precedente la variabile saldo diventerebbe:

```ts
let saldo: number = 10;
```

la sintassi e' quindi quella di specificare il tipo di variabile tra il dichiarazione e l'assegnazione, possiamo quindi leggere il codice come: definiamo una variabile chiamata saldo che sarà un numero e assegnamo il valore 10 ed essa.

Se successivamente un altro sviluppatore provera' a riassegnare un valore diverso da un numero:

```ts
saldo = '30%';
```

questa volta ricevera' un errore in fase di scrittura del codice e poi successivamente in caso di compilazione del codice, evitando percio' la creazione di malfunzionamenti dell'app.

I tipi base piu' utilizzati sono `number`, `string` e `boolean`.

Con questi tipi possiamo poi creare tipi piu' complessi come ad esempio:

```ts
const saldi: number[] = [10, 20, 30, 50]
```
dove con `number[]` classifichiamo saldi come un array contenente numeri.

Oppure:

```ts
const saldi: string[] = ['10%', '20%', '30%', '50%']
```
dove con `string[]` classifichiamo saldi come un array contenente stringhe.

Ma il vero vantaggio di Typescript si apprezza quando si creano tipi per descrivere oggetti. Mettiamo il caso che ci serva creare un oggetto:

```ts
const saldo = {
  leggenda: '15%',
  valore: 15, 
  attivo: true
}
```

dove un saldo ha un valore numerico, una stringa che rappresenta la leggenda e un boolean che indica se il saldo e' attivo. Se volessimo creare un tipo che describa l'oggetto `saldo` sarebeb il seguente:

```ts
type Saldo = {
  leggenda: string;
  valore: number;
  attivo: boolean;
}
```

dove abbiamo la keyword `type` per indicare quello che stiamo creando e il nome che come standard e' maiuscolo.
Una volta creato un tipo si puo' utilizzare come utilizziamo quelli base e quindi:

```ts
const saldo: Saldo = {
  leggenda: '15%', 
  valore: 15, 
  attivo: true
};
```

oppure:

```ts
const saldo: Saldo[] = [
  {
    leggenda: '15%', 
    valore: 15, 
    attivo: true
  },
  {
    leggenda: '30%', 
    valore: 30, 
    attivo: false
  },
];
```

Typescript richiederebbe un corso di approfodimento, ma le basi che abbiamo visto in questa lezione sarà tutto quello che ci serve per questo corso su Angular.