---
sidebar_position: 4
---

# From JavaScript to Python

A short guide for JavaScript developers who want to learn Python.

## Origin

It was invented by Guido Van Rossum in the 1991. While you may know the python as a large snake, the name of the Python programming language comes from an old BBC television comedy sketch series called Monty Python's Flying Circus.

## Environment

We can install Python from its [official website](https://www.python.org/downloads/).

In Python `1.X` and Python `2.X`:

```py
10 / 3 = 3
```

so We really want to download a `3.X` version. 😅

We can validate the correct installation by running in the terminal:

```bash
Python3 —-version
```

## Primitives

Python shares most of the primitives with JavaScript:
- **String** can be single or double quoted.
- **List** (Array in JS) are rappresented with square brackets and they are mutable as in JS.
- **Dictionary** (Object in JS) are Key-value pairs where keys are typically strings and and they are mutable as in JS.

## Operators

Python uses the same operators we find in JavaScript with just a few differences:

Operator|Python|JavaScript|
|---|---|---|
|comparation|`==`|  `==` or `===` |
|not comparation|`!=`|  `!=` or `!==` |
|and|`and`|  `&&` |
|or|`or`|  <code>&#124;&#124;</code> |
|not|`not`|  `!` |
|true|`True`|  `true` |
|false|`False`|  `false` |



## Variables 

You can name them starting with a letter or underscore, they are case sensitive but they don’t accept signs. Basically really similar to the naming convension for JS variables:

|Python|JavaScript|
|---|---|
|`price = 4`|  `let price = 4` |

## Strings
Let's declare:
```python
favorite_animal = 'Penguin'
```

A string in Python has the following similarities with a string in JS:
- It can be express with single or double quotes. eg `'Penguin'` or `"Penguin"`.
- It is iterable and indexed. eg `favorite_animal[0]` is `'P'`.
- It is immutable. eg `favorite_animal[0] = 'p'` would throw an error.

We can compare also some methods available from the strings:
Description|Python|JavaScript|
|---|---|---|
| To turn a string uppercase |`upper()`| `toUpperCase()` |
| To turn a string lowercase |`lower()`| `toLowerCase()` |

## Lists

A JS Array is called list in Python, an empty array can be created:

```python
prices = [30, 40]
```

As a JS array a Python list can:
- Includes values of different types. eg `[True, 30, 'Penguin']`
- 