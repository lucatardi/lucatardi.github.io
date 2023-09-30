"use strict";(self.webpackChunktardito_dev=self.webpackChunktardito_dev||[]).push([[8139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:9},o="Data binding",l={unversionedId:"angular/data-binding",id:"angular/data-binding",title:"Data binding",description:"We have seen how the HTML used in the template file is loaded into the browser when we instantiate a new component through the selector.",source:"@site/docs/angular/data-binding.md",sourceDirName:"angular",slug:"/angular/data-binding",permalink:"/docs/angular/data-binding",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Rocket component",permalink:"/docs/angular/rocket-component"},next:{title:"TypeScript",permalink:"/docs/angular/typescript"}},p={},s=[],c={toc:s};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-binding"},"Data binding"),(0,r.kt)("p",null,"We have seen how the HTML used in the template file is loaded into the browser when we instantiate a new component through the selector."),(0,r.kt)("p",null,"While we have seen that, through the TypeScript file, we define a class that represents the functionality of the component."),(0,r.kt)("p",null,"Let's take the ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," component as an example. In its TypeScript file, we find:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"export class AppComponent {\n  title = 'spazio';\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," is defined within the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppComponent")," class as a property."),(0,r.kt)("p",null,"How do we use this property within the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.component.html")," template?"),(0,r.kt)("p",null,"We can access each property through a mechanism in Angular called data binding. Here is the first syntax difference between an HTML document and an Angular template: by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"{{\ud83d\udc27PROPERTY_NAME\ud83d\udc27}}")," syntax, we can retrieve any property from the class."),(0,r.kt)("p",null,"We can use this syntax anywhere within the HTML structure, both outside:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<h3>Wish List:</h3>\n{{title}}\n<ul>\n  <li>I want a penguin<li>\n</ul>\n")),(0,r.kt)("p",null,"And inside tags:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<h3>Wish List:</h3>\n<ul>\n  <li>I want a penguin {{title}}<li>\n</ul>\n")),(0,r.kt)("p",null,"Let's now use data binding in the title of our app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="app.component.html"',title:'"app.component.html"'},"- <h1>Hello world Angular!</h1>\n+ <h1>Hello world {{title}}!</h1>\n")),(0,r.kt)("p",null,"The browser will now load the final result:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data binding result",src:n(4782).Z,width:"790",height:"560"})),(0,r.kt)("p",null,"Now, as a small task, let's change ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"titolo"),". The changes need to be made in two files, and the final result in the browser should not change."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Confused? You can find the code changes made in this lesson ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lucatardi/spazio/commit/ac7b178539748aa1ceee67bbf007c15095bf2db9?diff=split"},"here"),".")))}u.isMDXComponent=!0},4782:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data_binding-123e6b7c87938c90fd32787c57c55bad.png"}}]);