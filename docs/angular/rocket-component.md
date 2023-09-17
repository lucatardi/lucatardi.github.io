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
