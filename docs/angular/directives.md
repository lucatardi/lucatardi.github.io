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

Let's put directives into practice starting from the template of the `missile` component. Let's try removing the missile object that we applied:

```diff title="missile.component.ts"
import { Component, Input } from '@angular/core';
import { Missile } from './missile';

@Component({
  selector: 'missile',
  templateUrl: './missile.component.html',
  styleUrls: ['./missile.component.css']
})
export class MissileComponent {
-  @Input() missile: Missile = { name: '', country: '', active: false}; 
+  @Input() missile?: Missile; 
}
```

We don't want to have any missile with an empty `name` or `country`. The question mark placed before the colon tells TypeScript that the value can be `undefined` or of type `Missile`.

However, you may notice that now the terminal displays an error notification:

```bash
✖ Failed to compile.
```

Why did the compilation fail? Because now we've changed the definition of the missile component, saying that a missile can also be `undefined`, and Angular is complaining that we are potentially accessing an object that can be `undefined` in the template.

To resolve this issue, we can insert the `ngIf` directive into the missile component's template to conditionally load the template only if missile information is available:

```diff title="missile.component.html"
- <div class="card {{missile.active ? 'active' : 'inactive' }}">
+ <div *ngIf="missile" class="card {{missile.active ? 'active' : 'inactive' }}">
```

Here, we have resolved the error with conditional loading implemented using the `ngIf` directive.

Now, let's put the `ngFor` directive into practice:

Let's move to the definition of the `listaMissili` component and add two more missiles:

```diff title="lista-missili.component.ts"
{
      name: 'BrahMos',
      country: 'India',
      active: false
    },
+   {
+     name: 'Falcon 9',
+     country: 'United States',
+     active: true
+   },
+   {
+     name: 'Ariane 5',
+     country: 'France',
+     active: true
+   },
   ]
```

Now, theoretically, to display the two new added missiles, we need to add the following to the template:

```html
<li>
  <missile [missile]="missili[3]"></missile>
</li>
<li>
  <missile [missile]="missili[4]"></missile>
</li>
```

Imagine adding 1000 missiles now; as you can see, this process seems very manual and repetitive, and it can indeed be automated with `ngFor` like this:

```diff title="lista-missili.component.html"
- <h2>Here's a list of 3 missiles:</h2>
+ <h2>Here's a list of 5 missiles:</h2>
<ul class="list">
-  <li>
+  <li *ngFor="let missile of missili">
-    <missile [missile]="missili[0]"></missile>
-    <missile [missile]="missile"></missile>
  </li>
-  <li>
-    <missile [missile]="missili[1]"></missile>
-  </li>
-  <li>
-    <missile [missile]="missili[2]"></missile>
-  </li>
</ul>
```

Now, we have automated the creation of an `<li>` element containing a missile using the `ngFor` directive.

:::info
Lost in the final step? Find the code changes made in this lesson [here](https://github.com/lucatardi/spazio/commit/a1af00aebd17812d3a5c24a1f7645fc6a46e9781?diff=split).
:::