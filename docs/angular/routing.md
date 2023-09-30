---
sidebar_position: 16
---

# Navigation

Applications created with Angular are SPAs, or "Single Page Applications." They are a type of web application that operates within a single web page instead of requiring the loading of separate pages. In essence, when you navigate in a SPA, the main web page is loaded only once, and subsequently, information is dynamically updated without the need to reload the entire page.

To help us implement navigation, Angular provides a set of tools contained in a library called `@angular/router`.

When we generated our app, the Angular CLI included the module to enable navigation for us in a file called `app-routing.module.ts`, which is located in the `app` folder.

In that file, we find an empty array called `routes`. Here, Angular expects a list of subdomains we want to use in our application. Let's try, for example, to add a subdomain called "lista," where we will load our missile list:

```diff title="app-routing.module.ts"
const routes: Routes = [
+  { path: 'lista', component: ListaMissiliComponent }
];
```

Now, if we try to enter the "lista" subdomain in the URL [http://localhost:4200/lista](http://localhost:4200/lista), we will encounter something unexpected—two lists instead of one. Why is that?

Open the `app.component.html` file to find the reason:

Angular routing loads the component that matches the respective subdomain inside the `<router-outlet></router-outlet>` element, and we are loading a `<lista-missili>` list above it.

```diff title="app.component.html"
<h1>Hello world {{titolo}}!</h1>
- <lista-missili></lista-missili>
<router-outlet></router-outlet>
```

By removing the missile list outside of the router, we will see that it appears uniquely and only when the subdomain is `/lista`.

At the moment, a missile only contains information such as its name, country of origin, and status. Let's extend its type to include a unique identifying code, height, and the date of its first flight:

```diff title="missile.ts"
  active: boolean;
+ id: string;
+ height?: number;
+ first_flight: string;
}
```

Here, with the `?` symbol, we indicate that a missile may or may not have the `height` property defined.

Now we need to modify the missile definition array inside the `missili` service file:

```diff title="missili.service.ts"
   country: 'Italy',
   active: false,
+  id: 'ita1',
+  first_flight: '10-09-2010',
  },
  {
    name: 'Tomahawk',
    country: 'United States',
    active: true,
+   id: 'fogir038',
+   first_flight: '10-09-2011',
+   height: 70,
  },
  {
    name: 'BrahMos',
    country: 'India',
    active: false,
+   id: '5o59kd038',
+   first_flight: '10-09-2020',
+   height: 80,
  },
  {
    name: 'Falcon 9',
    country: 'United States',
    active: true,
+   id: 'fjgoei29',
+   first_flight: '10-09-2016',
+   height: 40,
  },
  {
    name: 'Ariane 5',
    country: 'France',
    active: true,
+   id: 'mgksowi59',
+   first_flight: '10-09-2008',
+   height: 62,
  },
```

For the first missile, we do not have the height, so we do not include the `height` property.

Now let's create another component called `missile-info`, which we will use to have a dedicated page with all the details of a missile.

```bash
ng generate component missile-info
```

Let's start with its definition:

```ts title="missile-info.component.ts"
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissiliService } from '../missili.service';
import { Missile } from '../missile/missile';

@Component({
  selector: 'missile-info',
  templateUrl: './missile-info.component.html',
  styleUrls: ['./missile-info.component.css']
})
export class MissileInfoComponent {
  constructor(private missiliService: MissiliService, private route: ActivatedRoute) {}
  
  missile?: Missile;

  getMissile(): Missile | undefined {
    const id = this.route.snapshot.paramMap.get('id');
    return this.missiliService.getMissili().find(missile => missile.id === id)
  }

  ngOnInit(): void {
    this.missile = this.getMissile();
  }
}
```

Let's describe the contents of the file:

- We import the `Component` decorator from Angular's `core` library.
- We import the `ActivatedRoute` service from Angular's `router` library.
- We import the `MissiliService` service.
- We import the `Missile` type.

- We use the decorator to register the new component in Angular and provide the selector name, the template file name, and the style file name.

- We create and export a class called `MissileInfoComponent` that:
  - Accepts in its constructor the two services, `missiliService` and `route`, which we need inside the component.
  - Defines a `missile` property of type `Missile` or undefined.
  - Defines a method called `getMissile` that:
    - Uses the `route` service to retrieve the `id` from the URL.
    - Uses the `missiliService` service to retrieve missiles and return the one with the same `id` as in the URL or undefined if the missile does not exist.
  - Calls the `getMissile` method and sets the `missile` property with the value it returns when the component is constructed (`ngOnInit`).

As a template, we use:

```html title="missile-info.component.html"
<div *ngIf="missile">
  <img src="https://picsum.photos/id/967/500/500" />
  <div>
    <h3>{{missile.name}}</h3>
    <p *ngFor="let item of missile | keyvalue">
      {{item.key}}: {{item.value}}
    </p>
  </div>
</div>
```

In this template, most of the syntax should be familiar, but we find a particularity in the following line:

```html
<p *ngFor="let item of missile | keyvalue">
```

The `|` symbol is an identifier for what is called a "pipe" in Angular. There are various pipes in Angular, and here we see the `keyvalue` pipe, which, in this case, transforms the `missile` object into an array of objects `{key, value}`. This allows us in the next line to load the key and then the value.

Okay, our `missile-info` component is ready to be loaded!

Let's add the subdomain where we want to load the new component we created:

```diff title="app-routing.module.ts"
+

 import { MissileInfoComponent } from './missile-info/missile-info.component';

const routes: Routes = [
  { path: 'lista', component: ListaMissiliComponent },
+  { path: 'missile/:id', component: MissileInfoComponent },
];
```

Here, with the syntax `:id`, we instruct Angular to treat everything that comes after the "missile/" subdomain as a parameter called `id` (a parameter used by the `missile-info` component).

Now, by navigating to [http://localhost:4200/missile/ita1](http://localhost:4200/missile/ita1), we should see our new component with the missile having the ID `ita1`.

:::info
Did you miss something? [Here](https://github.com/lucatardi/spazio/commit/cc17998ba92e55ecc798d6662b43daf40e8facb8?diff=split) is the code for this lesson.
:::