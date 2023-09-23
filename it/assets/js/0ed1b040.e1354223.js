"use strict";(self.webpackChunktardito_dev=self.webpackChunktardito_dev||[]).push([[2497],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>d});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(i),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return i?n.createElement(f,o(o({ref:t},c),{},{components:i})):n.createElement(f,o({ref:t},c))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5520:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const a={sidebar_position:11},o="Il tipo Missile",l={unversionedId:"angular/type-rocket",id:"angular/type-rocket",title:"Il tipo Missile",description:"Iniziamo ad arricchire il nostro componente missile, nella sua definizione nel file missile.component.ts aggiungiamo una propriet\xe0 chiamata missile.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/angular/type-rocket.md",sourceDirName:"angular",slug:"/angular/type-rocket",permalink:"/it/docs/angular/type-rocket",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Typescript",permalink:"/it/docs/angular/typescript"},next:{title:"Stilizzare un componente",permalink:"/it/docs/angular/how-to-css"}},s={},p=[],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"il-tipo-missile"},"Il tipo Missile"),(0,r.kt)("p",null,"Iniziamo ad arricchire il nostro componente missile, nella sua definizione nel file ",(0,r.kt)("inlineCode",{parentName:"p"},"missile.component.ts")," aggiungiamo una propriet\xe0 chiamata missile."),(0,r.kt)("p",null,"Come rappresentiamo un missile?"),(0,r.kt)("p",null,"Le informazioni che un missile deve avere sono le seguenti:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),": una stringa che rappresenta il nome del missile."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"country"),": una stringa che rappresenta il paese d'origine del missile"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"active"),": un boolean che esprime se il missile e' attivo o meno.")),(0,r.kt)("p",null,"Creiamo un tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"Missile")," per descrivere queste tre propriet\xe0, in tre step:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creiamo un file nella cartella ",(0,r.kt)("inlineCode",{parentName:"li"},"missile")," chiamato ",(0,r.kt)("inlineCode",{parentName:"li"},"missile.ts"),". Sar\xe0 il file contenente tutti i tipi che ci serviranno per il componente missile."),(0,r.kt)("li",{parentName:"ol"},"Definiamo il tipo ",(0,r.kt)("inlineCode",{parentName:"li"},"Missile")),(0,r.kt)("li",{parentName:"ol"},"Esportiamo il tipo appena creato in modo da poterlo utilizzare in altri file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="missile.ts"',title:'"missile.ts"'},"export type Missile = {\n  name: string;\n  country: string;\n  active: boolean;\n}\n")),(0,r.kt)("p",null,"Ora che abbiamo il tipo Missile disponibile importiamo nel nostro file ",(0,r.kt)("inlineCode",{parentName:"p"},"missile.component.ts")," e utilizziamo come tipo per la propriet\xe0 creata precedentemente assegnando poi alcuni valori:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="missile.component.ts"',title:'"missile.component.ts"'},"export class MissileComponent {\n  missile: Missile = {\n    name: 'Vega',\n    country: 'Italy',\n    active: true\n  };\n}\n")),(0,r.kt)("p",null,"Ora spostiamoci nel template e creiamo una semplice struttura html per visualizzare i dati che abbiamo inserito nella definizione del componente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="missile.component.html"',title:'"missile.component.html"'},"<div>\n  <h3>{{missile.name}}</h3>\n  <p>country: <b>{{missile.country}}</b></p>\n  <p>active: <b>{{missile.active}}</b></p>\n</div>\n")),(0,r.kt)("p",null,"Come vedete dobbiamo prima accedere la proprieta' missile e poi il suo contenuto."),(0,r.kt)("p",null,"Il risultato nel browser sar\xe0 il seguente:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Risultato del tipo Missile",src:i(2288).Z,width:"1040",height:"782"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Trovi ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lucatardi/spazio/commit/1f798725fd8eb2eff80a2a09220408c4ccd9ed22?diff=split"},"qui")," le modifiche apportate in questa lezione.")))}m.isMDXComponent=!0},2288:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/type_rocket-d7b5a5b78e1caae52a03ee1b099f306d.png"}}]);