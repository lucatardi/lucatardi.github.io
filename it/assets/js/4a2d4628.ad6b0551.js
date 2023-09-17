"use strict";(self.webpackChunktardito_dev=self.webpackChunktardito_dev||[]).push([[2504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:8},l="Componente missile",i={unversionedId:"angular/rocket-component",id:"angular/rocket-component",title:"Componente missile",description:"Creiamo il nostro primo componente.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/angular/rocket-component.md",sourceDirName:"angular",slug:"/angular/rocket-component",permalink:"/it/docs/angular/rocket-component",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Componente",permalink:"/it/docs/angular/component"},next:{title:"React",permalink:"/it/docs/category/react"}},p={},m=[],s={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"componente-missile"},"Componente missile"),(0,a.kt)("p",null,"Creiamo il nostro primo componente."),(0,a.kt)("p",null,"Possiamo utilizzare il comando Angular CLI ",(0,a.kt)("inlineCode",{parentName:"p"},"ng generate component \ud83d\udc27NOME\ud83d\udc27"),' per creare il nostro primo componente chiamato "missile" in questo modo:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ng generate component missile\n")),(0,a.kt)("p",null,"Questo generer\xe0 una cartella all'interno di ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app"),' chiamata "missile" contenente quattro file:'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Nome")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Descrizione")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"missile.component.ts")),(0,a.kt)("td",{parentName:"tr",align:null},"Il file Typescript che contiene la definizione del componente missile")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"missile.component.html")),(0,a.kt)("td",{parentName:"tr",align:null},"Il template del componente missile")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"missile.component.css")),(0,a.kt)("td",{parentName:"tr",align:null},"Lo stile applicato al componente missile")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"missile.component.spec.ts")),(0,a.kt)("td",{parentName:"tr",align:null},"Un file di test per scrivere unit test per il componente missile")))),(0,a.kt)("p",null,"Oltre a creare questi file all'interno della nuova cartella, Angular CLI modifica un file esistente, ovvero ",(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts"),". Parleremo dei moduli in dettaglio in seguito, ma per ora possiamo pensarli come contenitori in cui dobbiamo registrare tutto ci\xf2 che utilizziamo al loro interno. Angular CLI registra automaticamente il nuovo componente all'interno del modulo dell'app."),(0,a.kt)("p",null,"Esaminiamo da piu' vicino il contenuto dei file del nostro componente missile:"),(0,a.kt)("p",null,"Il file di stile ",(0,a.kt)("inlineCode",{parentName:"p"},"missile.component.css")," e' vuoto ma pronto nel caso volessimo inserire regole CSS."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="missile.component.html"',title:'"missile.component.html"'},"<p>missile works!</p>\n")),(0,a.kt)("p",null,'La struttura del nostro componente e\' quindi un paragrafo con "missile works!".'),(0,a.kt)("p",null,"Un altro file che troviamo e' il file Typescript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="missile.component.ts"',title:'"missile.component.ts"'},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-missile',\n  templateUrl: './missile.component.html',\n  styleUrls: ['./missile.component.css']\n})\nexport class MissileComponent {}\n")),(0,a.kt)("p",null,"nel file Typescrit troviamo alcune linee di codice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Viene importato un decoratore chiamato ",(0,a.kt)("inlineCode",{parentName:"li"},"Component")," dalla libreria ",(0,a.kt)("inlineCode",{parentName:"li"},"@angular/core"),"."),(0,a.kt)("li",{parentName:"ul"},"Il decoratore viene eseguito passando diversi parametri:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Nome")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Descrizione")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"Il nome univoco che vogliamo utilizzare per il nostro componente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"templateUrl"),(0,a.kt)("td",{parentName:"tr",align:null},"Il file contenente la struttura HTML del component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"styleUrls"),(0,a.kt)("td",{parentName:"tr",align:null},"I file contenenti il CSS che si vuole applicare al componente")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Una classe ",(0,a.kt)("inlineCode",{parentName:"li"},"MissileComponent")," viene create vuota e esportata.")))}c.isMDXComponent=!0}}]);