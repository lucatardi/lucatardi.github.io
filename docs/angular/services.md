---
sidebar_position: 15
---

# Services

In Angular, services are objects used to share information among different components within the application.

In our application, missiles are defined in the `lista-missili` component and are then passed one by one to instances of the `missile` component. All of this works because the `missile` components are children of the `lista-missili` component.

But let's consider a scenario where we want to insert a new component called `missile-info` to display missile details on a separate page. Since the `missile-info` component will not be loaded as a child of the `lista-missili` component, how do we pass the missiles to that component?

This is where the use of a service comes into play. To create a service, we can use the CLI command `ng generate service 🐧NAME🐧`.

Let's create a service called `missili`:

```bash
ng generate service missili
```

The result is slightly different from what we got when creating components. In this case, no folder is created, and only two files are generated:
- A TypeScript file containing all the service logic.
- A test file.

Let's analyze the TypeScript file and describe its contents:

1. First, we see that Angular imports a decorator called `Injectable`.
2. The decorator is invoked with a configuration object containing a property called `providedIn`.
3. It creates and exports a class called `MissiliService`.

First, let's move our array of missiles from the `lista-missili.component.ts` file to our new service file:

```ts title="missili.service.ts"
import { Injectable } from '@angular/core';

const missili = [
  {
   name: 'Vega',
   country: 'Italy',
   active: false
  },
  {
    name: 'Tomahawk',
    country: 'United States',
    active: true
  },
  {
    name: 'BrahMos',
    country: 'India',
    active: false
  },
  {
    name: 'Falcon 9',
    country: 'United States',
    active: true
  },
  {
    name: 'Ariane 5',
    country: 'France',
    active: true
  },
];

@Injectable({
  providedIn: 'root'
})
export class MissiliService {

  constructor() { }
}
```

Now, let's remove the `constructor` method that we don't need at the moment and add a method to the `MissiliService` class that returns our array of missiles:

```diff title="missili.service.ts"
export class MissiliService {
-  constructor() { }
+  getMissili(): Missile[] {
+    return missili;
+  }
}
```

Notice how in TypeScript, we can use the same syntax to specify the return type of a function/method (in this case, an array of missiles `Missile[]`).

Now that we have the service ready, let's see how to consume a service's method in our `lista-missili` component. Open the TypeScript file and do it in four steps:

1. Import the service into the file.

```ts
import { MissiliService } from '../missili.service';
```

2. Inject the service into the `ListaMissiliComponent` class.

```ts
constructor(private missiliService: MissiliService) {}
```

3. Initialize the `missili` property as an empty array.

```ts
missili: Missile[] = [];
```

4. Instruct the component, during assembly, to execute the `getMissili` method of the service.

```ts
ngOnInit(): void {
  this.missili = this.missiliService.getMissili();
}
```

There are two methods here that we might be seeing for the first time:

The first one is the `constructor`, which simply allows us to list the services that will be used within that class, in our case, `missiliService`.

The second one is the `ngOnInit` method, which every component possesses and is executed every time the component is assembled for the first time. In this case, when the component is assembled, we assign to the `missili` property what is returned by the `getMissili` method of the service.

:::info
As always, you can find the modified code for this lesson [here](https://github.com/lucatardi/spazio/commit/50a5718201ed9c3b56e7515c77600d9cbee7d355?diff=split).
:::