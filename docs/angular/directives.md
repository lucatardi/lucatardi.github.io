---
sidebar_position: 14
---

# Directives

We can define directives in Angular as special properties that can be used to insert logic into our templates. There are several directives in Angular, but the main ones are two: the `ngFor` directive and the `ngIf` directive.

### The ngIf Directive

It allows you to specify a logical condition to instruct Angular whether to load the element to which the directive is applied or not. Let's consider having the following code:

```html
<div>
  <h3>
    Penguins
  </h3>
  <p>Penguins are birds that cannot fly</p>
</div>
```

Now let's say we want to load this `<div>` and its content only when the `animal` variable is equal to "penguin":

```html
<div *ngIf="animal === 'penguin'">
  <h3>
    Penguins
  </h3>
  <p>Penguins are birds that cannot fly</p>
</div>
```

Angular will load this HTML only when the `animal` variable has the value `"penguin"`.

### The ngFor Directive

It is used to load a specific element and its content a defined number of times. The syntax is similar to the previous directive, but in this case, instead of a condition, we iterate within a variable:

```html
<ul>
  <li *ngFor="let species of penguinSpecies">
    <p>{{ species }}</p>
  </li>
</ul>
```

Let's assume that the `penguinSpecies` variable is defined in the class as `['Magellanic', 'Emperor']`. The final result loaded in the browser will be:

```html
<ul>
  <li>
    <p>Magellanic</p>
  </li>
  <li>
    <p>Emperor</p>
  </li>
</ul>
```