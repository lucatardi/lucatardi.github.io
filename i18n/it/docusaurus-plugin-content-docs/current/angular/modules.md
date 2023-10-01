---
sidebar_position: 17
---

# Moduli

Un modulo in Angular è come un contenitore che raggruppa parti specifiche di un'applicazione. È un modo per organizzare e separare il codice in diverse unità funzionali. In modo semplice, puoi pensare a un modulo come a un contenitore per componenti, servizi e altre risorse che appartengono a una parte specifica dell'applicazione.

Immagina di costruire un'auto: hai il motore, le ruote, gli interni e così via. Ogni parte di quest'auto può essere considerata un modulo. Il motore ha componenti interni che lavorano insieme per farlo funzionare, proprio come un modulo in Angular contiene componenti e servizi che collaborano per svolgere una funzione specifica nell'applicazione.

I moduli aiutano a mantenere l'applicazione organizzata, a rendere il codice più gestibile e a promuovere la riusabilità delle diverse parti dell'applicazione. Inoltre, Angular offre un modulo radice, chiamato AppModule, che è il modulo principale dell'applicazione e funge da punto di partenza per l'organizzazione di tutti gli altri moduli.

Per la creazione e la registrazione di un modulo si utilizza il decoratore `NgModule` il quale accetta diversi paramatri quali ad esempio i componenti registrati ed inclusi all'interno del modulo o gli altri moduli importati ed utilizzati all'interno di esso.

Piu' l'applicazione e' complessa e elaborata piu' ha senso l'utilizzo dei moduli per la sua suddivisione e favorirne la manutenzione.