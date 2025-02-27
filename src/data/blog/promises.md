---
banner_alt: Promises in JavaScript
banner: https://images.pexels.com/photos/532414/pexels-photo-532414.jpeg
title_prefix: Code
title: Promises in JavaScript
description: Let's explore promises in JavaScript.
date: '2025-02-26'
---

**“Promises are only as strong as the person who gives them.”**  
— *Stephen Richards*

## What are promises?

In JavaScript, a `Promise` is an object that allow us to write some code which will be executed in the background by the event loop withount blocking the main tread.
It allows us to handle asynchronous tasks in a more readable and manageable way compared to traditional callback functions.
A promise has three different states: pending, fullfilled and rejected:

- The promise is `pending` when it is running in the background
- The `fullfilled` state rappresent a successful promise.
- A `rejected` promise is a completed promise which was unsuccessful

## How to create a promise

To create a promise we need to pass a callback which accepts two functions as arguments, the first one is the the one we call to resolve the promise and the second one is to reject it.
As an example let's create a promise call bake which after 1 second will return `'Cooked!'`:

```js
const bake = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Cooked!')
    }, 1000)
})
```

## How to consume a promise

Now that we have defined our bake promise, how do we use it?
Let's say we want to log the resolved value to be alered when the backing is over:

```js
bake.then(console.log)
```

The `then` method allows us to specify a callback we want to execute once the promise is fullfilled.
There are other two methods available which are the `catch` and the `finally`:

- The `catch` method accept a callback which get executed if the promise is rejected
- The `finally` method accep a callback which get executed after a promise has finished, regardless of its result.

We can concatenate the methods:

```js
bake.then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log('Profised finished'))
```

## Promises methods

Now what about we add one over so that we have two of them so we need to promises to notify us when each oven has finished:

```js
const bakeFirstOven = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Cooked!')
    }, 1000)
})

const bakeSecondOven = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Cooked!')
    }, 2000)
})
```

Our first bake will take 1 sec while the one in the second oven will take us 2 seconds, we want to be notified only when both have finished, how can we do that?

We can use one method exposed by the Promise class which takes an array of promises and treat them as only one, firing the `next` when all promises have been fullfilled:

```js
Promise.all([bakeFirstOven, bakeSecondOven])
    .then(([resultFirstOven, resultSecondOven]) => console.log(resultFirstOven, resultSecondOven))
```

There is an `any` method available which will call the `next` method with the first rejected promise value.

## Async/Await sugar-syntax

To have a more flatted code we can remove the concatenation by using the async/await pattern combined with the try-catch-finally blocks:

```js
async function backCakes () {
    try {
    await const results = Promise.all([bakeFirstOven, bakeSecondOven])
    console.log(...results)
    } catch (error) {
        console.log(error)
    }
}
```

This allows us to cover all the functionality provided by the methods concatatanation approach while keeping the code more readable.
