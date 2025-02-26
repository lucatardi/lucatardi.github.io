---
banner_alt: OOP with JavaScript
banner: https://images.pexels.com/photos/960540/pexels-photo-960540.jpeg
title_prefix: Code
title: OOP with JavaScript
description: Let's explore the OOP paradigm in JavaScript.
date: '2025-02-26'
---

**“A class is a blueprint for creating objects, encapsulating data and methods.”**  
— *MDN Web Docs*


## Is JavaScript an OOP language?

An object-oriented programming language is a language which organizes code into reusable objects. these objects are instances of classes which defines data and behaviours.

JavaScript is partially a OOP as It allows other paradigms (eg functional) while supporting the OOP.

## Before ES6

JavaScript was not created to be a OOP language form its first days so the class syntax was not part of the language.
Developers find a way to use OOP paradigm by using function constructors with prototypes concepts.
Let's create a class Ingredient to prototype ingredients for a cake:

```js
function Ingredient (name) {
    this.name = name;
}

Ingredient.prototype.melt = function () {
    console.log(this.name + ' is melting')
}

const butter = new Ingredient('butter');

butter.melt()
```

- We first defined a function constructor named `Ingredient` accepting `name` as an argument.
- Internally `Ingredient` set the name of the instance to the `name` passed as an argument by using the `this` keyword.
- We extend the definion of `Ingredient` by overriding the `melt` method via `prototype` and use the available `this` keyword to access the name of the instance.
- We initialise a butter ingredient passing its `name` and then calling the `melt` method of it to log `'butter is melting'`.

## Nowadays

JavaScript increases its support to OOP paradigm with ES6 by adding the classes and supporting constructors. Let's re-create our `Ingredient` class:

```js
class Ingredient {
    constructor(name) {
        this.name = name
    }

    melt() {
        console.log(this.name + ' is melting')
    }
}

const butter = new Ingredient('butter');

butter.melt()
```

It might seem just a sugar syntax to do exactly the same thing we were able to do using the prototype and function contructors approach.
In reality It allows us to extend our classes in a much easier and compact way:

```js
class Butter extends Ingredient {
    constructor(quantity) {
        super('butter')
        this.quantity = quantity
    }
}

const butter = new Butter('400 g');

butter.melt()
```



