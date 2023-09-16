---
sidebar_position: 5
---

# Struttura di un progetto Angular

Il comando `ng new 🐧NOME🐧` della CLI di Angular crea una cartella contenente la base di un progetto Angular. Vediamo i file e le cartelle piu' importanti contenuti in esso:

Il punto di accesso, in Angular e in tutte le applicazioni web e' il **package.json** file che si trova nella root del progetto. Questo file contiene tutte le infomazioni necessarie a npm: il nome del progetto, un elenco dei comandi, e i pacchetti di terze parti che il progetto utilizza come dipendenze.

Le dipendenze vengono installate in una cartella chiamata **node_modules**. Il contenuto di questa cartella viene modificato direttamente da npm, quindi non bisogna mai modificarlo direttamente.

Apriamo ora la cartella **src**, il contenuto di questa cartella e' formato da vari file utilizzati da Angular che non dobbiamo modificare e due cartelle: una cartella chiamata **assets** creata per contenere immagini o altri file statici e una cartella piu' importante chiamata **app** contentente tutto il codice che andremo a scrivere per la creazione della nostra app.
