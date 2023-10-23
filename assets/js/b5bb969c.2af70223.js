"use strict";(self.webpackChunktardito_dev=self.webpackChunktardito_dev||[]).push([[2049],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:3},i="Enviroment",l={unversionedId:"angular/enviroment",id:"angular/enviroment",title:"Enviroment",description:"To develop an application using Angular some programs and dependencies need to be installed in the machine:",source:"@site/docs/angular/enviroment.md",sourceDirName:"angular",slug:"/angular/enviroment",permalink:"/docs/angular/enviroment",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"What is Angular",permalink:"/docs/angular/what-is-angular"},next:{title:"The Project's Purpose",permalink:"/docs/angular/project-intro"}},s={},p=[{value:"Code editor",id:"code-editor",level:2},{value:"Terminal",id:"terminal",level:2},{value:"Node.js",id:"nodejs",level:2},{value:"NPM",id:"npm",level:2},{value:"Angular CLI",id:"angular-cli",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enviroment"},"Enviroment"),(0,r.kt)("p",null,"To develop an application using Angular some programs and dependencies need to be installed in the machine:"),(0,r.kt)("h2",{id:"code-editor"},"Code editor"),(0,r.kt)("p",null,"Each library and framework in the web development industry requires a code editor, Angular as well.\nMy personal choice and preference would be Visual Studio Code but amoung it there are also Atom and WebStorm."),(0,r.kt)("h2",{id:"terminal"},"Terminal"),(0,r.kt)("p",null,"A terminal is a graphic interface which allows us to interact with the computer without having to use the user interface for it. This allows us to run and execute commands by just typing on it."),(0,r.kt)("p",null,"Most major operating systems come with a default terminal or command-line interface installed. On macOS, the terminal is called ",(0,r.kt)("strong",{parentName:"p"},"Terminal"),", while on Windows, it's known as ",(0,r.kt)("strong",{parentName:"p"},"Command Prompt"),"."),(0,r.kt)("h2",{id:"nodejs"},"Node.js"),(0,r.kt)("p",null,"Node.js is the platform that allows you to run JavaScript code outside of the web browser. This means, for example, using JavaScript for server-side programming, whether it's on a server or a local computer."),(0,r.kt)("h2",{id:"npm"},"NPM"),(0,r.kt)("p",null,"NPM (Node Package Manager) is a collection of third-party libraries and modules that can be installed and integrated into Node.js-based projects."),(0,r.kt)("p",null,"NPM is a fundamental tool for the development of Node.js applications as it simplifies dependency management and makes it easier to use third-party libraries and modules. It is widely used by the Node.js community and represents an essential component of the Node.js ecosystem."),(0,r.kt)("h2",{id:"angular-cli"},"Angular CLI"),(0,r.kt)("p",null,"The Angular Command Line Interface (or for short CLI) is a command-line tool that helps developers with the development and management of Angular applications. It provides a set of commands for various tasks involved in Angular application development, making it easier to create, build, test, and deploy Angular projects. Some of the common tasks that Angular CLI can assist with include:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Project Generation"),": Angular CLI allows you to quickly generate a new Angular project with all the necessary files and folder structure. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ng new")," command to create a new project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Development Server"),": It comes with a built-in development server that allows you to run your Angular application locally for testing and development. You can start the server using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ng serve")," command."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code Generation"),": Angular CLI can generate code for various Angular components, services, modules, and more. For instance, you can create a new component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ng generate component")," command."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Building Production-Ready Code"),": When you're ready to deploy your application, Angular CLI can help you build optimized and minified production-ready code with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ng build")," command."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Testing"),": Angular CLI integrates with testing frameworks like Jasmine and Karma, making it easy to write and run unit tests for your Angular application using commands like ",(0,r.kt)("inlineCode",{parentName:"p"},"ng test"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Linting"),": It includes tools for code linting using TSLint or ESLint to help maintain code quality and consistency. You can lint your code with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ng lint")," command."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configuration Management"),": Angular CLI manages configuration files for your project, such as angular.json and tsconfig.json, making it easier to adjust project settings."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dependency Management"),": It can automatically install and manage project dependencies using npm or yarn, ensuring that your project uses the correct versions of libraries."),(0,r.kt)("p",null,"Angular CLI simplifies many of the common tasks associated with Angular development, automating configuration and providing a consistent project structure. This allows developers to focus more on writing application code and less on setting up and managing development environments."),(0,r.kt)("p",null,"To install Angular CLI we can open the terminal and run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo npm install --location=global @angular/cli\n")))}c.isMDXComponent=!0}}]);