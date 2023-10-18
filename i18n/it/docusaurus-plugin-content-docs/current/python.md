---
sidebar_position: 4
---

# Da JavaScript a Python

Una breve guida per sviluppatori JavaScript che vogliono imparare Python.

## Origine

Python è stato inventato da Guido Van Rossum nel 1991. Anche se il nome viene spesso assonato al pitone, in realta' il nome del linguaggio di programmazione Python deriva da una vecchia serie comica televisiva della BBC chiamata Monty Python's Flying Circus.

## Ambiente di sviluppo

È possibile installare Python dal suo [sito ufficiale](https://www.python.org/downloads/).

In Python `1.X` e Python `2.X`:

```py
10 / 3 = 3
```

quindi.. utilizziamo una versione `3.X`. 😅

È possibile verificare l'installazione corretta eseguendo il seguente comando nel terminale:

```bash
Python3 --version
```

## Primitivi

Python condivide la maggior parte dei primitivi con JavaScript:

- Le **stringhe** possono essere racchiuse tra singoli o doppi apici.
- Le **liste** (array in JS) sono rappresentate tra parentesi quadre e sono mutabili come in JS.
- I **dizionari** (oggetti in JS) sono coppie chiave-valore, dove le chiavi sono di solito stringhe e sono mutabili come in JS.

## Operatori

Python utilizza gli stessi operatori che si trovano in JavaScript con alcune differenze:

| Operatore | Python | JavaScript |
| --- | --- | --- |
| Uguaglianza | `==` | `==` o `===` |
| Non uguaglianza | `!=` | `!=` o `!==` |
| E | `and` | `&&` |
| O | `or` | `||` |
| Non | `not` | `!` |

## Variabili

È possibile nominarle iniziando con una lettera o un trattino basso, sono sensibili alle maiuscole e non accettano segni. Fondamentalmente, sono molto simili alla convenzione di denominazione delle variabili in JavaScript:

| Python | JavaScript |
| --- | --- |
| `price = 4` | `let price = 4` |

## Stringhe
Dichiariamo:
```python
animale_preferito = 'Pinguino'
```

Una stringa in Python ha le seguenti somiglianze con una stringa in JavaScript:
- Può essere espressa con apici singoli o doppi. Ad esempio, `'Pinguino'` o `"Pinguino"`.
- È iterabile e indicizzabile. Ad esempio, `animale_preferito[0]` è `'P'`.
- È immutabile. Ad esempio, `animale_preferito[0] = 'p'` genererebbe un errore.

Possiamo anche confrontare alcuni dei metodi disponibili per le stringhe:
Descrizione|Python|JavaScript|
|---|---|---|
| Per convertire una stringa in maiuscolo |`upper()`| `toUpperCase()` |
| Per convertire una stringa in minuscolo |`lower()`| `toLowerCase()` |

## Liste

In Python, un array JavaScript è chiamato "lista". Una lista vuota può essere creata così:

```python
prezzi = [30, 40]
```

Come un array JavaScript, una lista Python può:
- Includere valori di diversi tipi. Ad esempio, `[True, 30, 'Pinguino']`