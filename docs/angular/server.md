---
sidebar_position: 19
---

# Connecting to the Server

Like all front-end development libraries, communication with the back end is a fundamental part of them. There are different approaches in Angular, but certainly, the most used one is HTTP communication where the client communicates with the server through requests that are processed by the server, which responds by sending the result back to the client that made the request.

Angular provides an HttpClient service that simplifies HTTP calls to the server. We can use this service to make various types of HTTP requests (GET, POST, PUT, DELETE).

Let's start by importing the `HttpClientModule` module into our app module:

```ts
import { HttpClientModule } from '@angular/common/http';
```

And include it in the imports array.

Let's begin modifying our `missili` service. We'll remove the `missili` array because we want to retrieve this information through a GET HTTP request from SpaceX's server via a public API.

First, inject the `HttpClient` service in the constructor so that we can use it:

```diff
constructor(private http: HttpClient) { }
```

Then, utilize it in the `getMissili` function like this:

```ts
getMissili(): Observable<Missile[]> {
  return this.http.get<Missile[]>('https://api.spacexdata.com/v4/rockets')
}
```

As you can see, we're calling the `get` method from the `http` service and informing it about our expected response type, which is `Missile[]`. We pass the API's URL to execute the request.

Now, we see that we have an error. The `getMissili` function no longer returns an array of missiles as before; instead, it returns what Angular calls an `Observable`.

```diff
- getMissili(): Missile[] {
+ getMissili(): Observable<Missile[]> {
```

But what is an Observable? This is where we need to talk about RXJS:

# RXJS: Reactive JavaScript

RxJS (Reactive Extensions for JavaScript) is a widely used JavaScript library for reactive programming and handling asynchronous data streams. In Angular, RxJS is an integral part of the framework and is used for managing events, HTTP calls, data streams, and other asynchronous operations. The fundamental concepts are as follows:

- **Observable**: An Observable is a sequence of values that can be emitted over time. Observables are used to represent asynchronous data streams, such as DOM events, HTTP requests, or real-time data from WebSockets. You can think of Observables as a pipeline of data.

- **Subscription**: A Subscription represents the connection between an Observable and an Observer. When you subscribe to an Observable, a Subscription is created. You can use a Subscription to manage resources and free up resources when they are no longer needed. For example, you can unsubscribe from a Subscription to stop listening to an Observable.

Returning to our `getMissili` function, we see that we have specified that it returns an Observable, which in turn will return an array of missiles. This means that, unlike before, where we immediately had the array of missiles when calling the `getMissili` function, this time we need to wait for the server's response, which could take a few seconds. Since we don't want to block the entire browser while waiting for the response, we decide to use asynchronous code and RxJS to react to changes.

Now, let's remember that `this.missiliService.getMissili()` is an Observable. With Observables, we can subscribe to receive information reactively. That's precisely what we're doing in this new line of code where we specify a function to execute when receiving something from the Observable. In this case, when we receive missiles, we want to assign them to our `missili` property.

We do the same thing in the `missile-info` component:

```diff
getMissile() {
    const id = this.route.snapshot.paramMap.get('id');
-   return this.missiliService.getMissili().find(missile => missile.id === id)
+   this.missiliService.getMissili().subscribe(missili =>  this.missile = missili.find(missile => missile.id === id))
  }

  ngOnInit(): void {
-   this.missile = this.getMissile();
+   this.getMissile();
  }
```

Now, we should be able to see a list of components with real missiles coming from SpaceX's server.

:::info
Did you miss something? [Here](https://github.com/lucatardi/spazio/commit/632bf7ab41cb2b839e3a31289e3ba2a38dad33ec?diff=split) is the code for this lesson.
:::

