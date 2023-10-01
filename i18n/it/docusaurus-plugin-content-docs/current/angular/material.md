---
sidebar_position: 18
---

# La libreria Material

Come ogni framework nello sviluppo Web una parte fondamentale sono tutte le librerie di terze parti che possiamo installare ed integrare nella nostra applicazione.

Vi sono librerie per ogni esigenza, nel nostro caso ci interessa una libreria che esporti componenti che possiamo utilizzare per rendere la nostra UI un pò più carina e professionale, la libreria in questione si chiama Material ed e' una libreria di componenti sviluppata da Google.

possiamo installare una libreria con il comando della CLI di Angular `ng add 🐧NOME_PACCHETTO_LIBRERIA🐧` nel caso di Material:

```shell
ng add @angular/material
```

verranno richieste alcune configurazioni durante l'installazione tra le quali il tipo di tema che si vuole utilizzare o la tipologia di animazioni ad esempio. Al fine di questo corso proseguiamo con l'installazione standard premento il tasto Invio in tutte le domande che ci vengono poste.

Fatto cio' vediamo che la CLI cambia diversi file di configurazione per abilitare la nuova libreria installata.

Vogliamo inizialmente utilizzare due componenti da Material: `<mat-card>` e `<mat-button`. Apriamo il file del modulo e importiamo:

```diff title="app.module.ts"
+ import {MatCardModule} from '@angular/material/card';
+ import {MatButtonModule} from '@angular/material/button';
```

infine registriamo i moduli importati aggiungendoli nell'array `imports`:

```diff title="app.module.ts"
imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
+   MatCardModule,
+   MatButtonModule
  ],
```

Cosi facendo ora possiamo utilizzarli nel template di tutti i componenti inclusi in questo modulo (tutta l'applicazione nel nostro caso).

Sostituiamo il template del componente `missile` con il seguente:

```html title="missile.component.html"
<mat-card *ngIf="missile">
  <mat-card-header>
    <mat-card-title-group>
      <mat-card-title>{{missile.name}}</mat-card-title>
      <mat-card-subtitle>{{missile.country}}</mat-card-subtitle>
      <img src="https://picsum.photos/id/967/100/100" >
    </mat-card-title-group>
  </mat-card-header>
  <mat-card-content>
    {{missile.active ? '✅ Attivo' : '❌ Disattivo'}}
  </mat-card-content>
</mat-card>
```

Come notiamo qui utilizziamo i nuovi componenti card che fanno tutti parte nel modulo `MatCardModule` importato precedentemente. Aggiungiamo ora un bottone per navigare nella pagina di dettaglio del missile:

```diff title="missile.component.html"
</mat-card-content>
+ <mat-card-actions align="end">
+   <button mat-button routerLink="/missile/{{missile.id}}">Dettagli</button>
+ </mat-card-actions>
</mat-card>
```

la proprieta' `routerLink` istruisce Angular router di aggiungere il valore che viene passato alla URL.
Ora ogni missile ha un bottone che permetta la navigazione nella pagina di dettaglio:

![La carta missile](./material.png)

Ora miglioramo la pagina di dettaglio. Importiamo e registriamo un altro modulo di Material chiamato `MatListModule` per inserire una lista.

Per poi utilizzare la lista nel componente `missile-info` in questo modo:

```html title="missile-info.component.html"
<mat-list *ngIf="missile">
  <img src="https://picsum.photos/id/967/500/500" />
  <mat-list-item *ngFor="let item of missile | keyvalue">
    <span matListItemTitle>{{item.key}}</span>
    <span matListItemLine>{{item.value}}</span>
  </mat-list-item>
</mat-list>
```

:::info
Trovate [qui](https://github.com/lucatardi/spazio/commit/e14fa4d90922f72a1b0e444c2a8d878ad983d9ac?diff=split) il codice modificato in questa lezione.
:::