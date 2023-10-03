---
sidebar_position: 20
---

# Build

We've almost completed our application; we just have two final things to add:

We need to replace the image in the templates of the `missile-info` and `missile` components with the following:

```html
<img src="{{missile.flickr_images}}" width="250" />
```

To do that, we need to add `flickr_images` as a property of the `missile` type in the `missile.ts` file.

As the last step, let's automate the number of missiles displayed in the title in the missile list template. We'll use property binding (`{{}}`) and the length of the `missiles` array.

:::info
[Here](https://github.com/lucatardi/spazio/commit/fda80d7d9de56c39ce60de855cb6a945ac9a64be?diff=split) is the code.
:::

Now our project is complete, and we can talk about building:

The "build" of an Angular project is the process by which the Angular application is prepared for distribution or release. During the build process, the application is compiled, optimized, and packaged into a form that can be distributed and read by a browser. The final result of the build process is a set of static files (HTML, CSS, JavaScript) that make up the application ready to be served to clients.

In general, the build process of an Angular project is crucial to prepare the application for the production environment and ensure its optimization, performance, and stability. Once the build process is complete, you can upload the application to a web server or hosting service to make it accessible to end users.

To perform the build of an Angular application, you can use the Angular CLI, which greatly simplifies the build process:

Try running the following command in your terminal:

```shell
ng build
```

The result of this command will be visible inside a folder called `dist`, which will contain all the necessary code for the browser to run our application.