---
sidebar_position: 10
---

# TypeScript

We have seen that a component's class is defined in a TypeScript file.

But what is TypeScript?

I like to define TypeScript as JavaScript + types:
Unlike other programming languages, JavaScript does not require you to declare the type of a variable. This can cause issues in large applications where multiple developers collaborate.

Let's take an example:

One developer declares a variable named `discount` and assigns a numerical value `10`. Their intention is to express the percentage value of the discount on products:

```js
let discount = 10;
```

Another developer adds logic to modify the value of `discount` for customers who have a 30% discount card:

```js
discount = "30%";
```

Now, a potential problem arises because the `discount` variable has changed its value from a number to a string without either developer noticing the issue.

TypeScript helps identify these problems during development before they turn into bugs.

The idea behind TypeScript is simple:

Every time you declare a variable, you must specify its type. In the previous case, the `discount` variable would become:

```ts
let discount: number = 10;
```

The syntax is to specify the variable's type between the declaration and the assignment. We can read the code as follows: we define a variable named `discount`, which will be a number, and assign it the value 10.

If another developer tries to reassign a value other than a number later on:

```ts
discount = '30%';
```

they will receive an error during code writing and later during code compilation. This prevents the creation of malfunctions in the app.

The most commonly used basic types are `number`, `string`, and `boolean`.

With these types, you can create more complex types. For example:

```ts
const discounts: number[] = [10, 20, 30, 50];
```

Here, with `number[]`, we classify `discounts` as an array containing numbers.

Or:

```ts
const discounts: string[] = ['10%', '20%', '30%', '50%'];
```

Here, with `string[]`, we classify `discounts` as an array containing strings.

However, the real advantage of TypeScript is realized when creating types to describe objects. Suppose we need to create an object:

```ts
const discount = {
  label: '15%',
  value: 15, 
  active: true
};
```

Where a `discount` has a numerical value, a string representing the legend, and a boolean indicating whether the balance is active. If we wanted to create a type that describes the `discount` object, it would look like this:

```ts
type Discount = {
  label: string;
  value: number;
  active: boolean;
};
```

Here, we use the `type` keyword to indicate what we are creating, and the name is typically capitalized. Once a type is created, you can use it just like the basic types:

```ts
const discount: discount = {
  label: '15%', 
  value: 15, 
  active: true
};
```

Or:

```ts
const discounts: discount[] = [
  {
    label: '15%', 
    value: 15, 
    active: true
  },
  {
    label: '30%', 
    value: 30, 
    active: false
  },
];
```

TypeScript requires further study, but the basics we've covered in this lesson will be all we need for this Angular course.