---
sidebar_position: 16
---

# Navigazione

Le applicazioni create con Angular sono SPA, o "Single Page Applications" (Applicazioni a Pagina Singola), sono un tipo di applicazione web che funziona all'interno di un'unica pagina web anziché richiedere il caricamento di diverse pagine separate. In sostanza, quando navighi in un'applicazione web SPA, la pagina web principale viene caricata una sola volta e, successivamente, le informazioni vengono aggiornate dinamicamente senza dover ricaricare l'intera pagina.

Per aiutarci ad implementare la navigazione Angular ci fornisce una serie di strumenti contenuti in una libreria chiamata `@angular/router`. 

Quando abbiamo generato la nostra app la CLI di angular ha incluso per noi il modulo per abilitare la navigazione in un file chiamato `app-routing.module.ts` che si trova all'interno della cartella `app`.

in quel file troviamo un array vuoto chiamato `routes`, qui Angular aspetta una lista di sotto domini che vogliamo utilizzare nella nostra applicazione, proviamo ad esempio a inserire un sotto dominio lista dove caricheremo la nostra lista missili:

```diff title="app-routing.module.ts"
const routes: Routes = [
+  { path: 'lista', component: ListaMissiliComponent }
];
```

adesso se proviamo ad inserire nella url il sotto dominio lista [http://localhost:4200/lista](http://localhost:4200/lista) troveremo una cosa inaspettata, due lista invece di una, come mai?

Apriamo il file `app.component.html` e troviamo il motivo:

Angular routing carica il componente che combacia con il rispettivo dominio all'interno dell'elemento `<router-outlet></router-outlet>`. e noi stiamo caricando una lista `<lista-missili>` al di sopra di esso.

```diff title="app.component.html"
<h1>Hello world {{titolo}}!</h1>
- <lista-missili></lista-missili>
<router-outlet></router-outlet>
```

Eliminando la lista missili al di fuori del router e vedremo che apparira' in maniera univoca e solamente quando il sotto dominio e' `/lista`.

Al momento un missile contiene solamente informazioni quali il nome, l'origine e lo stato, estendiamo il suo tipo per includere un codice univoco identificativo, l'altezza e la data del primo volo:

```diff title="missile.ts"
  active: boolean;
+ id: string;
+ height?: number;
+ first_flight: string;
}
```

dove tramite is simbolo `?` defininiamo che un missile puo' avere la proprieta' `height` definita o meno.

ora dobbiamo modificare l'array missile definito all'interno del file di definizione del servizio `missili`:

```diff title="missili.service.ts"
   country: 'Italy',
   active: false,
+  id: 'ita1',
+  first_flight: '10-09-2010',
  },
  {
    name: 'Tomahawk',
    country: 'United States',
    active: true,
+   id: 'fogir038',
+   first_flight: '10-09-2011',
+   height: 70,
  },
  {
    name: 'BrahMos',
    country: 'India',
    active: false,
+   id: '5o59kd038',
+   first_flight: '10-09-2020',
+   height: 80,
  },
  {
    name: 'Falcon 9',
    country: 'United States',
    active: true,
+   id: 'fjgoei29',
+   first_flight: '10-09-2016',
+   height: 40,
  },
  {
    name: 'Ariane 5',
    country: 'France',
    active: true,
+   id: 'mgksowi59',
+   first_flight: '10-09-2008',
+   height: 62,
  },
```

Dove per il primo missile non abbiamo l'altezza e quindi non inseriamo la proprieta' `height`.

Creiamo ora un altro componente chiamato `missile-info` che utilizzeremo per avere una pagina dedicata con tutte le informazioni relative di un missile.

```bash
ng generate component missile-info
```

Iniziamo dalla sua definizione:

```ts title="missile-info.component.ts"
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissiliService } from '../missili.service';
import { Missile } from '../missile/missile';

@Component({
  selector: 'missile-info',
  templateUrl: './missile-info.component.html',
  styleUrls: ['./missile-info.component.css']
})
export class MissileInfoComponent {
  constructor(private missiliService: MissiliService, private route: ActivatedRoute) {}
  
  missile?: Missile;

  getMissile(): Missile | undefined {
    const id = this.route.snapshot.paramMap.get('id');
    return this.missiliService.getMissili().find(missile => missile.id === id)
  }

  ngOnInit(): void {
    this.missile = this.getMissile();
  }
}
```

Descriviamo il contenuto del file:

Importiamo il decoratore `Component` dalla libreria `core` di Angular.
Importiamo il servizio `ActivatedRoute` dalla libreria `router` di Angular.
Importiamo il servizio `MissiliService`.
Importiamo il tipo `Missile`.

Utilizziamo il decoratore per registrare il nuovo componente in Angular e fornire il nome del selettore, il nome del file per il template e quello per il file di stile.

Creiamo ed esportiamo una classe chiamata `MissileInfoComponent` che:
1. Accetta nel suo contruttore i due servizi `missiliService` e `route` che ci servono al suo interno.
2. Definisce una proprietà `missile` ti tipo `Missile` o non definita.
3. Definisce un metodo chiamato `getMissile` che:
   1. utilizza il servizio `route` per recuperare l'`id` dall'url.
   2. utilizza il servizio `missiliService` per recuperare i missili e ritornare quello con lo stesso id dell'url o undefined se il missile non esiste.
4. Chiama il metodo `getMissile` e setta la proprieta' `missile` con il valore da esso tornato quando il componente viene costruito (`ngOnInit`).


Come template utilizziamo invece:

```html title="missile-info.component.html"
<div *ngIf="missile">
  <img src="https://picsum.photos/id/967/500/500" />
  <div>
    <h3>{{missile.name}}</h3>
    <p *ngFor="let item of missile | keyvalue">
      {{item.key}}: {{item.value}}
    </p>
  </div>
</div>
```

Nel quale la maggior parte della sintassi dovrebbe risultare familiare ma troviamo una particolarita' nella seguente linea:

```html
<p *ngFor="let item of missile | keyvalue">
```

il simbolo `|` e' l'identificativo per quello che viene chiamato in Angular pipe, vi sono diverse pipe in Angular e qui vediamo la pipe `keyvalue` che in questo caso trasforma l'oggetto missile in un array di oggetti `{key, value}` che ci permette nella linea successiva di caricare la chiave e successivamente il valore.

Ok il nostro `missile-info` componente e' pronto per essere caricato!

Aggiungiamo il sotto dominio nel quale vogliamo caricare il nuovo componente che abbiamo creato:

```diff title="app-routing.module.ts"
+ import { MissileInfoComponent } from './missile-info/missile-info.component';

const routes: Routes = [
  { path: 'lista', component: ListaMissiliComponent },
+  { path: 'missile/:id', component: MissileInfoComponent },
];
```

dove con la sintassi `:id` istruiamo Angular a trattare tutto quello che viene dopo il sotto dominio `missile/` come parametro chiamato `id` (parametro che viene usato poi dal `missile-info` componente).

ora navigando alla [http://localhost:4200/missile/ita1](http://localhost:4200/missile/ita1) dovremo vedere il nostro nuovo componente con il razzo con l'id `ita1`.

:::info
Vi siete persi qualcosa? [qui](https://github.com/lucatardi/spazio/commit/cc17998ba92e55ecc798d6662b43daf40e8facb8?diff=split) il codice di questa lezione.
:::



