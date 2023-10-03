---
sidebar_position: 19
---

# Connessione con il server

Come tutti le librerie per lo sviluppo front end la comunicazione con il back end e' una parte fondamentale di esse.
Vi sono diversi approacci in Angular ma sicuramente quello piu' utilizzato e' la comunicazione HTTP dove il client comunica con il server attraverso richieste che vengono elaborate dal server che risponde inviando il risultato indietro al client che ha richiesto.

Angular fornisce un servizio HttpClient che semplifica le chiamate HTTP al server. Possiamo utilizzare questo servizio per effettuare richieste qualsiasi tipo di richiesta HTTP (GET, POST, PUT, DELETE).

Importiamo il modulo `HttpClientModule` all'interno del nostro modulo nell'app:

```ts title="app.module.ts"
import { HttpClientModule } from '@angular/common/http';
```

E includiamolo nell'array degli imports.

Iniziamo a modificare il nostro servizio missili, eliminiamo l'array missili, vogliamo infatti recuperate queste informazioni tramite una chiamata GET HTTP dal server di SpaceX attraverso una API pubblica:

Iniziamo con iniettare il servizio HttpClient all'interno del constructor per poterlo utilizzare
```diff title="missili.service.ts"
+ constructor(private http: HttpClient) { }
```

Per poi usufruirne nella funzione `getMissili` in questo modo:

```ts title="missili.service.ts"
getMissili(): Missile[] {
  return this.http.get<Missile[]>('https://api.spacexdata.com/v4/rockets')
}
```

come vediamo chiamiamo il metodo `get` contenuto nel servizio `http` e lo informiamo di cosa ci aspettiamo di ottenere, in questo caso `Missile[]` per poi eseguire la chiamata passando l'URL dell'api.

Ora vediamo che abbiamo un errore, infatti la funzione `getMissili` non ritorna piu' come prima un array di missili ma invece ritorna quello che viene chiamato in Angular `Observable`.

```diff title="missili.service.ts"
- getMissili(): Missile[] {
+ getMissili(): Observable<Missile[]> {
```

ma che cos'e' un Observable? qui dobbiamo parlare di RXJS:

# RXJS: Javascript reattivo

RxJS (Reactive Extensions for JavaScript) è una libreria JavaScript ampiamente utilizzata per la programmazione reattiva e la gestione di flussi di dati asincroni. In Angular, RxJS è una parte integrante del framework e viene utilizzato per gestire eventi, chiamate HTTP, flussi di dati e altre operazioni asincrone, I concetti fondamentali sono due:

Observable: Un Observable è una sequenza di valori che possono essere emessi nel tempo. Gli Observable sono utilizzati per rappresentare flussi di dati asincroni, come eventi DOM, chiamate HTTP o dati in tempo reale da WebSocket. Gli Observable possono essere pensati come una pipeline di dati.

Subscription: Una Subscription rappresenta la connessione tra un Observable e un Observer. Quando sottoscrivi un Observable, viene creata una Subscription. Puoi utilizzare Subscription per gestire le risorse e liberare le risorse quando non sono più necessarie. Ad esempio, puoi annullare una Subscription per smettere di ascoltare un Observable.

Ritornando alla nostra funzione `getMissili` vediamo che abbiamo specificato che ritorna un observable che a sua volta ritornera' un array di missili. Questo vuol dire che a differenza di prima che eseguendo la funzione `getMissili` in maniera instantanea avevamo l'array di missili, questa volta dobbiamo aspettare per la risposta del server che potrebbe metterci alcuni secondi, dato che non vogliamo bloccare tutto il browser in attesa della risposta decidiamo di utilizzare del codice asincrono e rxjs che ci permette di reagire ai cambiamenti.

Ecco che ora ci accorgiamo che dobbiamo modificare come utilizziamo il metodo `getMissili` nei componenti che utilizzano il servizio missili.

Partiamo dalla lista dei missili dove cambiamo all'interno del metodo `ngOnInit`:

```diff title="lista-missili.component.ts"
- this.missili = this.missiliService.getMissili();
+ this.missiliService.getMissili().subscribe(missili => this.missili = missili);
```

Ora ricordiamoci che `this.missiliService.getMissili()` e' un Observable, agli Observable possiamo iscriverci per ricevere le informazioni in maniera reattiva, ed e' proprio cio che stiamo facendo in questa nuova riga di codice dove con il metodo `subscribe` specifichiamo una funzione che vogliamo eseguire che come argomento avra' quello che viene ricevuto dall'Observable, in questo caso quando riceviamo i missili vogliamo assegnarli alla nostra proprieta' missili.

facciamo la stessa cosa nel componente `missile-info`:

```diff title="missile-info.component.ts"
- getMissile(): Missile | undefined {
+ getMissile() {
    const id = this.route.snapshot.paramMap.get('id');
-   return this.missiliService.getMissili().find(missile => missile.id === id)
+   this.missiliService.getMissili().subscribe(missili =>  this.missile = missili.find(missile => missile.id === id))
  }

  ngOnInit(): void {
-   this.missile = this.getMissile();
+   this.getMissile();
  }
```

Ed ora dovremo essere in grado di vedere la lista di componenti con missili veri provenienti dal server di SpaceX.

:::info
Persi un pezzo? [Codice qui](https://github.com/lucatardi/spazio/commit/632bf7ab41cb2b839e3a31289e3ba2a38dad33ec?diff=split).
:::

