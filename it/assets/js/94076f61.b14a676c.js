"use strict";(self.webpackChunktardito_dev=self.webpackChunktardito_dev||[]).push([[4898],{3905:(e,i,n)=>{n.d(i,{Zo:()=>p,kt:()=>d});var t=n(7294);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function l(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var i=t.useContext(s),n=i;return e&&(n="function"==typeof e?e(i):r(r({},i),e)),n},p=function(e){var i=c(e.components);return t.createElement(s.Provider,{value:i},e.children)},m={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},u=t.forwardRef((function(e,i){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?t.createElement(v,r(r({ref:i},p),{},{components:n})):t.createElement(v,r({ref:i},p))}));function d(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7030:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(7462),a=(n(7294),n(3905));const o={sidebar_position:15},r="Servizi",l={unversionedId:"angular/services",id:"angular/services",title:"Servizi",description:"I servizi in Angular sono degli oggetti che vengono utilizzati per condividere informazioni tra diversi componenti all'interno dell'applicazione.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/angular/services.md",sourceDirName:"angular",slug:"/angular/services",permalink:"/it/docs/angular/services",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Le direttive",permalink:"/it/docs/angular/directives"},next:{title:"Navigazione",permalink:"/it/docs/angular/routing"}},s={},c=[],p={toc:c};function m(e){let{components:i,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"servizi"},"Servizi"),(0,a.kt)("p",null,"I servizi in Angular sono degli oggetti che vengono utilizzati per condividere informazioni tra diversi componenti all'interno dell'applicazione."),(0,a.kt)("p",null,"Nella nostra applicazione i missili sono definiti nel componente lista-missili e vengono poi passati uno ad uno in instanze del componente missile."),(0,a.kt)("p",null,"Tutto questo funziona perche' i componenti missile sono figli del componente lista-missili."),(0,a.kt)("p",null,"Ma mettiamo il caso che vogliamo inserire un nuovo componente chiamato missile-info per mostrare in una pagina separata i dettagli di un missile. Dato che il componente verra caricato non come figlio del componente lista-missili come facciamo a passare i missili a quel componente?"),(0,a.kt)("p",null,"Ecco che qui entra in gioco l'utilizzo di un servizio, per creare un servizio possiamo utilizzare il comando cli ",(0,a.kt)("inlineCode",{parentName:"p"},"ng generate service \ud83d\udc27NOME\ud83d\udc27"),"."),(0,a.kt)("p",null,"Creiamo un servizio chiamato missili:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate service missili\n")),(0,a.kt)("p",null,"Il risultato e' leggermente diverso da quello che abbiamo ottenuto quando creiamo componenti, in questo caso non viene creata nessuna cartella ed i file creati sono solo due:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"un file typescript contentente tutta la logica del servizio."),(0,a.kt)("li",{parentName:"ul"},"un file di test.")),(0,a.kt)("p",null,"analizziamo il file typescript e proviamo a descriverne il contenuto:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Come prima cosa vediamo che viene importato da Angular un decoratore chiamato ",(0,a.kt)("inlineCode",{parentName:"li"},"Injectable"),"."),(0,a.kt)("li",{parentName:"ol"},"Viene evocato il decoratore con un oggetto di configurazione con una proprieta' chiamata ",(0,a.kt)("inlineCode",{parentName:"li"},"providedIn"),"."),(0,a.kt)("li",{parentName:"ol"},"Crea e esporta una classe chiamata ",(0,a.kt)("inlineCode",{parentName:"li"},"MissiliService"),".")),(0,a.kt)("p",null,"Come prima cosa spostiamo il nostro array di missili dal file ",(0,a.kt)("inlineCode",{parentName:"p"},"lista-missili.component.ts")," nel nostro nuovo file del servizio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="missili.service.ts"',title:'"missili.service.ts"'},"import { Injectable } from '@angular/core';\n\nconst missili = [\n  {\n   name: 'Vega',\n   country: 'Italy',\n   active: false\n  },\n  {\n    name: 'Tomahawk',\n    country: 'United States',\n    active: true\n  },\n  {\n    name: 'BrahMos',\n    country: 'India',\n    active: false\n  },\n  {\n    name: 'Falcon 9',\n    country: 'United States',\n    active: true\n  },\n  {\n    name: 'Ariane 5',\n    country: 'France',\n    active: true\n  },\n];\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class MissiliService {\n\n  constructor() { }\n}\n\n")),(0,a.kt)("p",null,"ora rimuoviamo il metodo ",(0,a.kt)("inlineCode",{parentName:"p"},"constructor")," che non ci serve per il momento e aggiungiamo alla classe ",(0,a.kt)("inlineCode",{parentName:"p"},"MissiliService")," un metodo che ritorni il nostro array di missili, in questo modo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="missili.service.ts"',title:'"missili.service.ts"'},"export class MissiliService {\n-  constructor() { }\n+  getMissili(): Missile[] {\n+    return missili;\n+  }\n}\n")),(0,a.kt)("p",null,"Da notare come in typescript possiamo utilizzare la stessa sintassi anche per specificare il tipo ritornato da una funzione/metodo (in questo caso un array di missili ",(0,a.kt)("inlineCode",{parentName:"p"},"Missile[]"),")."),(0,a.kt)("p",null,"Ora che abbiamo il servizio pronto vediamo come consumare un metodo di un servizio nel nostro componente ",(0,a.kt)("inlineCode",{parentName:"p"},"lista-missili"),", apriamo il file typescript e lo facciamo in quattro step:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Importiamo il servizio all'interno del file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { MissiliService } from '../missili.service';\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Iniettiamo il servizio nella classe ",(0,a.kt)("inlineCode",{parentName:"li"},"ListaMissiliComponent"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(private missiliService: MissiliService) {}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Inizializiamo la proprieta' ",(0,a.kt)("inlineCode",{parentName:"li"},"missili")," in un array vuoto.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"missili: Missile[] = [];\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Istruiamo il componente, al momento dell'assemblaggio, ad eseguire il metodo ",(0,a.kt)("inlineCode",{parentName:"li"},"getMissili")," del servizio.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"ngOnInit(): void {\n  this.missili = this.missiliService.getMissili();\n}\n")),(0,a.kt)("p",null,"ci sono due metodi che non vediamo per la prima volta qui:\nIl primo e' il ",(0,a.kt)("inlineCode",{parentName:"p"},"constructor")," che semplicemente ci permette di elencare i servizi che verranno utilizzati all'interno di quella classe, nel nostro caso ",(0,a.kt)("inlineCode",{parentName:"p"},"missiliService"),".\nIl secondo e' il metodo ",(0,a.kt)("inlineCode",{parentName:"p"},"ngOnInit")," che ogni componente possiede e viene eseguito tutte le volte il componente viene assemblato per la prima volta. in questo caso quando il componente viene assemblato assegnamo alla proprieta' missili quello ritornato dal metodo getMissili del servizio."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Come sempre trovate ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lucatardi/spazio/commit/50a5718201ed9c3b56e7515c77600d9cbee7d355?diff=split"},"qui")," il codice modificato in questa lezione.")))}m.isMDXComponent=!0}}]);