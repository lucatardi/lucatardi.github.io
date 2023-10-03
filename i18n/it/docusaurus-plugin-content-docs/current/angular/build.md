---
sidebar_position: 20
---

# Build

Abbiamo quasi ultimato la nostra applicazione, ci mancano solo due ultime cose da aggiungere:

Dobbiamo sostituire nei template dei due componenti `missile-info` e `missile` l'immagine che abbiamo con la seguente:

```html
<img src="{{missile.flickr_images}}" width="250" />
```

per fare cio' dobbiamo aggiungere `flickr_images` come proprieta' del tipo missile file `missile.ts`.

Come ultima cosa automatizziamo il numero di missili che appare nel titolo nel template della lista dei missili. utilizziamo la sintassi del property binding (`{{}}`) e la lunghezza dell'array missili.

:::info
[Qui](https://github.com/lucatardi/spazio/commit/fda80d7d9de56c39ce60de855cb6a945ac9a64be?diff=split) il codice.
:::

Ora il nostro progetto e' ultimato e possiamo parlare di build:

Il "build" di un progetto Angular è il processo mediante il quale l'applicazione Angular viene preparata per la distribuzione o il rilascio. Durante il processo di build, l'applicazione viene compilata, ottimizzata e confezionata in una forma che può essere distribuita e letta da un browser. 
Il risultato finale del processo di build è un insieme di file statici (HTML, CSS, JavaScript) che costituiscono l'applicazione pronta per essere servita ai client.

In generale, il processo di build di un progetto Angular è fondamentale per preparare l'applicazione per l'ambiente di produzione e garantirne l'ottimizzazione, le prestazioni e la stabilità. Una volta completato il processo di build, è possibile caricare l'applicazione su un server web o un servizio di hosting per renderla accessibile agli utenti finali.

Per effettuare il build di un'applicazione Angular, puoi utilizzare la Angular CLI, che semplifica notevolmente il processo di build:

proviamo nel nostro terminal ad eseguire

```shell
ng build
```

il risultato di questo comando sara' visibile all'interno di una cartella chiamata dist che conterra' tutto il codice necessario al browser per eseguire la nostra applicazione.