"use strict";(self.webpackChunktardito_dev=self.webpackChunktardito_dev||[]).push([[5674],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||r;return t?o.createElement(g,i(i({ref:n},u),{},{components:t})):o.createElement(g,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={sidebar_position:7},i="Componente",l={unversionedId:"angular/component",id:"angular/component",title:"Componente",description:"In Angular, un componente \xe8 simile a un mattone per la costruzione della tua applicazione web. Immagina di costruire una casa con mattoncini LEGO. Ogni LEGO pu\xf2 essere paragonato a un componente in Angular.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/angular/component.md",sourceDirName:"angular",slug:"/angular/component",permalink:"/it/docs/angular/component",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Hello world Angular",permalink:"/it/docs/angular/hello-world-angular"},next:{title:"React",permalink:"/it/docs/category/react"}},p={},c=[],u={toc:c};function s(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"componente"},"Componente"),(0,a.kt)("p",null,"In Angular, un componente \xe8 simile a un mattone per la costruzione della tua applicazione web. Immagina di costruire una casa con mattoncini LEGO. Ogni LEGO pu\xf2 essere paragonato a un componente in Angular."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"I componenti sono come i mattoncini Lego",src:t(7578).Z,width:"3000",height:"1966"})),(0,a.kt)("p",null,"Ecco come funziona:"),(0,a.kt)("p",null,"Proprio come un mattoncino LEGO ha una forma, un colore e uno scopo, un componente Angular ha fondamentalmente le stesse caratteristiche:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Classe"),": Iniziamo con un pezzo di LEGO meno comune: la ruota che vedi in alto a destra nella foto qui sopra. Dobbiamo definire un nome con il quale identificarlo da altri LEGO e definere come possa essere utilizzato e collegato ad altri mattoncini. In Angular viene utilizzato TypeScript in una classe per definire il comportamento e le funzionalit\xe0 del componente.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Template"),": Pensiamo alla forma del mattoncino LEGO, dove definisci come il componente apparir\xe0 nella tua pagina web. Possiamo utilizzare HTML per creare la parte visiva del componente.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Stile"),": Proprio come un mattoncino LEGO pu\xf2 essere di diversi colori, abbiamo bisogno di un modo per stilizzare i nostri componenti: CSS."))),(0,a.kt)("p",null,"Tipicamente, un componente \xe8 constituito da una cartella e la classe (TypeScript), il template (HTML) e lo stile (CSS) sono file contenuti in essa seguendo questa struttura:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ruota\n  |-- ruota.component.ts\n  |-- ruota.component.html\n  |-- ruota.component.css\n")),(0,a.kt)("p",null,"Perch\xe9 i componenti?"),(0,a.kt)("p",null,"Un'applicazione basata su componenti come quelle create con Angular offre tre principali vantaggi: il riutilizzo e la composizione."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"riutilizzo"),": Proprio come puoi utilizzare lo stesso mattoncino LEGO in diverse parti della tua casa LEGO, puoi riutilizzare i componenti Angular in diverse parti della tua applicazione web. Questo rende il tuo codice pi\xf9 organizzato e pi\xf9 facile da mantenere."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Composizione"),": I mattoncini LEGO si incastrano per creare strutture pi\xf9 complesse, e i componenti Angular possono interagire tra loro. Possono inviare e ricevere dati, rendendo la tua applicazione web dinamica e reattiva."),(0,a.kt)("p",null,"Quindi, in termini semplici, un componente Angular \xe8 come un mattoncino da utilizzare per creare diverse parti della tua applicazione web. Ogni componente ha la sua struttura (template), comportamento (classe) e aspetto (stile), e puoi usarli insieme per costruire un'applicazione web completa e interattiva."))}s.isMDXComponent=!0},7578:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/lego-6d01c81b1e021e387dac2d35b129ba59.jpeg"}}]);