---
sidebar_position: 8
---

# Rocket component

Let's create our first component.

We can use the Angular CLI `ng generate component 🐧NAME🐧` command to create our first component called missile in this way:

```shell
ng generate component missile
```

this will generate one folder within `src/app` called `missile` containing four files:

| **Name**    | **Description** |
| -------- | ------- |
| `missile.component.ts`  | The Typescript file conaining the definition of the missile component |
| `missile.component.html` | The template of the missile component   |
| `missile.component.css`    | The style applied to the missile component   |
| `missile.component.spec.ts`    | A test file to write unit test for the missile component  |

Beside creating these files within the new folder Angular CLI modifies an existing file, the `app.module.ts`. We will talk about modules later on in more details, as for now we can think them as buckets where we need to register everything we use within them. The angular CLI register for us the new component within the module of the app.

Let's take a closer look at the contents of our missile component files:

The style file `missile.component.css` is empty but thee in case we want to add CSS rules.

```html title="missile.component.html"
<p>missile works!</p>
```

The structure of our component is therefore a paragraph with "missile works!".

Another file we find is the TypeScript file:

```ts title="missile.component.ts"
import { Component } from '@angular/core';

@Component({
  selector: 'app-missile',
  templateUrl: './missile.component.html',
  styleUrls: ['./missile.component.css']
})
export class MissileComponent {}
```

In the TypeScript file, we find some lines of code:

- A decorator called `Component` is imported from the `@angular/core` library.
- The decorator is executed with various parameters:

| **Name**   | **Description**                                   |
| ---------- | ------------------------------------------------- |
| selector   | The unique name we want to use for our component  |
| templateUrl | The file containing the HTML structure of the component |
| styleUrls  | The files containing the CSS you want to apply to the component |

- An empty class `MissileComponent` is created and exported.

### Let's use our 🚀 component

Before starting to modify our missile component let's try to render it in our app.

A component can be rendered as an HTML tag using the selector's name wrapped by `<` and `>`

so in the case of the missile component the selector is `app-missile` so we can go to the `app.component.html` and paste the following code below our `Hello world Angular`:

```html
<app-missile></app-missile>
```

Saving the file we should be able to see the our missile component renders and displaying its content: `missile works!`.

Let's test our progress. the `app-missile` is quite an ugly selector, let's change it to `missile` only.

We need to change it in the selector parameter and then change the relative HTML tag too.

:::info
Stuck in the last point? check [here](https://github.com/lucatardi/spazio/commit/6d3285bbbbbc64a7eb4ebbd14043cdc3bcc500f6?diff=split) the changes and try to apply them in your codebase.
:::