---
sidebar_position: 15
---

# Servizi

I servizi in Angular sono degli oggetti che vengono utilizzati per condividere informazioni tra diversi componenti all'interno dell'applicazione.

Nella nostra applicazione i missili sono definiti nel componente lista-missili e vengono poi passati uno ad uno in instanze del componente missile.

Tutto questo funziona perche' i componenti missile sono figli del componente lista-missili.

Ma mettiamo il caso che vogliamo inserire un nuovo componente chiamato missile-info per mostrare in una pagina separata i dettagli di un missile. Dato che il componente verra caricato non come figlio del componente lista-missili come facciamo a passare i missili a quel componente?

Ecco che qui entra in gioco l'utilizzo di un servizio, per creare un servizio possiamo utilizzare il comando cli `ng generate service 🐧NOME🐧`.

Creiamo un servizio chiamato missili:

```bash
ng generate service missili
```

Il risultato e' leggermente diverso da quello che abbiamo ottenuto quando creiamo componenti, in questo caso non viene creata nessuna cartella ed i file creati sono solo due:
- un file typescript contentente tutta la logica del servizio.
- un file di test.

analizziamo il file typescript e proviamo a descriverne il contenuto:

1. Come prima cosa vediamo che viene importato da Angular un decoratore chiamato `Injectable`.
2. Viene evocato il decoratore con un oggetto di configurazione con una proprieta' chiamata `providedIn`.
3. Crea e esporta una classe chiamata `MissiliService`.

Come prima cosa spostiamo il nostro array di missili dal file `lista-missili.component.ts` nel nostro nuovo file del servizio:

```ts title="missili.service.ts"
import { Injectable } from '@angular/core';

const missili = [
  {
   name: 'Vega',
   country: 'Italy',
   active: false
  },
  {
    name: 'Tomahawk',
    country: 'United States',
    active: true
  },
  {
    name: 'BrahMos',
    country: 'India',
    active: false
  },
  {
    name: 'Falcon 9',
    country: 'United States',
    active: true
  },
  {
    name: 'Ariane 5',
    country: 'France',
    active: true
  },
];

@Injectable({
  providedIn: 'root'
})
export class MissiliService {

  constructor() { }
}

```

ora rimuoviamo il metodo `constructor` che non ci serve per il momento e aggiungiamo alla classe `MissiliService` un metodo che ritorni il nostro array di missili, in questo modo:

```diff title="missili.service.ts"
export class MissiliService {
-  constructor() { }
+  getMissili(): Missile[] {
+    return missili;
+  }
}
```

Da notare come in typescript possiamo utilizzare la stessa sintassi anche per specificare il tipo ritornato da una funzione/metodo (in questo caso un array di missili `Missile[]`).

Ora che abbiamo il servizio pronto vediamo come consumare un metodo di un servizio nel nostro componente `lista-missili`, apriamo il file typescript e lo facciamo in quattro step:

1. Importiamo il servizio all'interno del file.
```ts
import { MissiliService } from '../missili.service';
```
2. Iniettiamo il servizio nella classe `ListaMissiliComponent`.
```ts
constructor(private missiliService: MissiliService) {}
```
3. Inizializiamo la proprieta' `missili` in un array vuoto.
```ts
missili: Missile[] = [];
```
4. Istruiamo il componente, al momento dell'assemblaggio, ad eseguire il metodo `getMissili` del servizio.
```ts
ngOnInit(): void {
  this.missili = this.missiliService.getMissili();
}
```

ci sono due metodi che non vediamo per la prima volta qui: 
Il primo e' il `constructor` che semplicemente ci permette di elencare i servizi che verranno utilizzati all'interno di quella classe, nel nostro caso `missiliService`.
Il secondo e' il metodo `ngOnInit` che ogni componente possiede e viene eseguito tutte le volte il componente viene assemblato per la prima volta. in questo caso quando il componente viene assemblato assegnamo alla proprieta' missili quello ritornato dal metodo getMissili del servizio.

:::info
Come sempre trovate [qui](https://github.com/lucatardi/spazio/commit/50a5718201ed9c3b56e7515c77600d9cbee7d355?diff=split) il codice modificato in questa lezione.
:::