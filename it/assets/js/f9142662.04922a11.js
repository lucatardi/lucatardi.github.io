"use strict";(self.webpackChunktardito_dev=self.webpackChunktardito_dev||[]).push([[3992],{3905:(e,i,n)=>{n.d(i,{Zo:()=>p,kt:()=>d});var t=n(7294);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function l(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?l(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function s(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=t.createContext({}),m=function(e){var i=t.useContext(r),n=i;return e&&(n="function"==typeof e?e(i):o(o({},i),e)),n},p=function(e){var i=m(e.components);return t.createElement(r.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},u=t.forwardRef((function(e,i){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,g=u["".concat(r,".").concat(d)]||u[d]||c[d]||l;return n?t.createElement(g,o(o({ref:i},p),{},{components:n})):t.createElement(g,o({ref:i},p))}));function d(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var r in i)hasOwnProperty.call(i,r)&&(s[r]=i[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<l;m++)o[m]=n[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7507:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var t=n(7462),a=(n(7294),n(3905));const l={sidebar_position:13},o="Una lista di missili",s={unversionedId:"angular/rockets-list",id:"angular/rockets-list",title:"Una lista di missili",description:"Ora che abbiamo il componente missile possiamo riutilizzarlo per rappresentara quanti missili vogliamo.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/angular/rockets-list.md",sourceDirName:"angular",slug:"/angular/rockets-list",permalink:"/it/docs/angular/rockets-list",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Stilizzare un componente",permalink:"/it/docs/angular/how-to-css"},next:{title:"Le direttive",permalink:"/it/docs/angular/directives"}},r={},m=[],p={toc:m};function c(e){let{components:i,...l}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,l,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"una-lista-di-missili"},"Una lista di missili"),(0,a.kt)("p",null,"Ora che abbiamo il componente missile possiamo riutilizzarlo per rappresentara quanti missili vogliamo."),(0,a.kt)("p",null,"Creiamo un componente tramite Angular CLI chiamato ",(0,a.kt)("inlineCode",{parentName:"p"},"lista-missili")," che conterr\xe0 tutti i missili che vogliamo mostrare all'utente:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ng generate component lista-missili\n")),(0,a.kt)("p",null,"All'interno della cartella creata dalla CLI andiamo ad inserire il template del nuovo componente:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="lista-missili.component.html"',title:'"lista-missili.component.html"'},"<h2>Ecco una elenco di 3 missili</h2>\n<ul>\n  <li>\n    <missile></missile>\n  </li>\n  <li>\n    <missile></missile>\n  </li>\n  <li>\n    <missile></missile>\n  </li>\n</ul>\n")),(0,a.kt)("p",null,"Come vediamo la lista dei missili avra' un titolo e una lista non ordinata di tre missili all'interno di ",(0,a.kt)("inlineCode",{parentName:"p"},"<li>"),"."),(0,a.kt)("p",null,"Andiamo ora nel file ",(0,a.kt)("inlineCode",{parentName:"p"},"app.component.html")," per apportare una modifica: vogliamo ora caricare il componente ",(0,a.kt)("inlineCode",{parentName:"p"},"lista-missili")," e non piu' il singolo ",(0,a.kt)("inlineCode",{parentName:"p"},"missile")," che abbiamo li, sara' poi il componente ",(0,a.kt)("inlineCode",{parentName:"p"},"lista-missili")," responsabile di caricare i tre componenti ",(0,a.kt)("inlineCode",{parentName:"p"},"missile")," al suo interno:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="app.component.html"',title:'"app.component.html"'},"<h1>Hello world {{titolo}}!</h1>\n- <missile></missile>\n+ <lista-missili></lista-missili>\n<router-outlet></router-outlet>\n")),(0,a.kt)("p",null,"Controlliamo ora il risultato nel browser e \ud83d\udca5..."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Errore nel browser",src:n(2226).Z,width:"1292",height:"1194"})),(0,a.kt)("p",null,"Come mai non riusciamo a vedere piu' l'applicazione e compare questo errore nel nostro browser? Il primo passo per un buon trouble shooting di un problema e' leggere gli indizi che ci vengono presentati:"),(0,a.kt)("p",null,"Prima di tutto l'errore menziona il fatto che ",(0,a.kt)("inlineCode",{parentName:"p"},"lista-missili")," non e' un componente riconosciuto da Angular per poi mostrare che il problema appare quando utilizziamo ",(0,a.kt)("inlineCode",{parentName:"p"},"<lista-missili>")," all'interno del template."),(0,a.kt)("p",null,"Ci siamo dimenticati qualcosa? Si.. quando creiamo un componente con la CLI il nome che viene assegnato al selettore e' ",(0,a.kt)("inlineCode",{parentName:"p"},"app-\ud83d\udc27NOME_COMPONENTE\ud83d\udc27"),".\nQuando abbiamo creato il componente ",(0,a.kt)("inlineCode",{parentName:"p"},"missile")," abbiamo modificato il selettore ma nel caso del componente ",(0,a.kt)("inlineCode",{parentName:"p"},"lista-missili")," non lo abbiamo fatto, il che vuol dire che Angular non capisce coda noi intendiamo per ",(0,a.kt)("inlineCode",{parentName:"p"},"<lista-missili>")," dato che il componente che conosce e' ",(0,a.kt)("inlineCode",{parentName:"p"},"<app-lista-missili>"),".\nper risolvere queto problema dobbiamo apportare una semplice modifica nella definizione del componente ",(0,a.kt)("inlineCode",{parentName:"p"},"lista-missili"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="lista-missili.component.ts"',title:'"lista-missili.component.ts"'},"@Component({\n- selector: 'app-lista-missili',\n+ selector: 'lista-missili',\n  templateUrl: './lista-missili.component.html',\n  styleUrls: ['./lista-missili.component.css']\n})\n")),(0,a.kt)("p",null,"L'errore dovrebbe essere risolto e il browser dovrebbe caricare la seguente interfaccia:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"La prima lista di missili",src:n(335).Z,width:"1290",height:"1136"})),(0,a.kt)("p",null,"Osservando la pagina possiamo notare due cose da sistemare:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dobbiamo stilizzare la lista per renderla un po piu' appagante all'occhio."),(0,a.kt)("li",{parentName:"ul"},"Abbiamo una lista di tre missili che sono copie, dobbiamo estendere la lista in modo da avere missili diversi tra loro.")),(0,a.kt)("p",null,"Iniziando con il primo punto possiamo assegnare una classe ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," alla lista:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="lista-missili.component.html"',title:'"lista-missili.component.html"'},'<h2>Ecco una elenco di 3 missili</h2>\n- <ul>\n+ <ul class="list">\n')),(0,a.kt)("p",null,"Per poi aggiungere un po' di stile nel corrispettivo file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="lista-missili.component.css"',title:'"lista-missili.component.css"'},".list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n")),(0,a.kt)("p",null,"Ora che lo stile del nostro componente e' sistemato occupiamoci del secondo punto:"),(0,a.kt)("p",null,"Al momento le informazioni di un missile sono contenute della definizione del componente missile. Quello che dobbiamo fare e' accettare nel componenete missile queste informazioni dalla lista. Iniziamo ad aggiungere alla lista un array contenente tre missili:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="lista-missile.component.ts"',title:'"lista-missile.component.ts"'},"export class ListaMissiliComponent {\n   missili: Missile[] = [\n    {\n     name: 'Vega',\n     country: 'Italy',\n     active: false\n    },\n    {\n      name: 'Tomahawk',\n      country: 'United States',\n      active: true\n    },\n    {\n      name: 'BrahMos',\n      country: 'India',\n      active: false\n    },\n   ]\n}\n")),(0,a.kt)("p",null,"ora abbiamo a disposizione questo array di ",(0,a.kt)("inlineCode",{parentName:"p"},"missili")," da utilizzare nel template del componente ",(0,a.kt)("inlineCode",{parentName:"p"},"lista-missili"),". Ma come facciamo a passare l'informazione al componente ",(0,a.kt)("inlineCode",{parentName:"p"},"missile"),"?"),(0,a.kt)("p",null,"Possiamo utilizzare un meccanismo simile al property binding, infatti possiamo passare informazioni da un componente padre, nel nostro caso ",(0,a.kt)("inlineCode",{parentName:"p"},"lista-missile")," ad un componente figlio (",(0,a.kt)("inlineCode",{parentName:"p"},"missile"),") tramite questa sintassi:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<nome-componente [nome-propriet\xe0]="valore-propriet\xe0">\n')),(0,a.kt)("p",null,"all'interno del ",(0,a.kt)("inlineCode",{parentName:"p"},"nome-componente")," abbiamo quindi accesso al ",(0,a.kt)("inlineCode",{parentName:"p"},"valore-propriet\xe0")," attraverso una propriet\xe0 chiamata ",(0,a.kt)("inlineCode",{parentName:"p"},"nome-propriet\xe0")," che attua da input per ",(0,a.kt)("inlineCode",{parentName:"p"},"nome-componente"),"."),(0,a.kt)("p",null,"All'interno del template del ",(0,a.kt)("inlineCode",{parentName:"p"},"lista-missili")," proviamo a passare missili diversi come proprieta' per il componenti figlio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'"lista-missili.component.html"','"lista-missili.component.html"':!0},'<li>\n-  <missile></missile>\n+  <missile [missile]="missili[0]"></missile>\n</li>\n<li>\n-  <missile></missile>\n+  <missile [missile]="missili[1]"></missile>\n</li>\n<li>\n-  <missile></missile>\n+  <missile [missile]="missili[2]"></missile>\n</li>\n')),(0,a.kt)("p",null,"Ora dobbiamo istruire il componente ",(0,a.kt)("inlineCode",{parentName:"p"},"missile")," ad accettare la nuova proprieta' ",(0,a.kt)("inlineCode",{parentName:"p"},"[missile]")," per fare cio' modifichiamo la definizione del componente ",(0,a.kt)("inlineCode",{parentName:"p"},"missile")," utilizzando il decoratore ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," che troviamo in Angular proprio come abbiamo importato il decoratore ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="missile.component.ts"',title:'"missile.component.ts"'},"- import { Component } from '@angular/core';\n+ import { Component, Input } from '@angular/core';\nimport { Missile } from './missile';\n\n@Component({\n  selector: 'missile',\n  templateUrl: './missile.component.html',\n  styleUrls: ['./missile.component.css']\n})\nexport class MissileComponent {\n-  missile: Missile = {\n-    name: 'Vega',\n-    country: 'Italy',\n-    active: true\n-  };\n+ @Input() missile: Missile = { name: '', country: '', active: false}; \n}\n")),(0,a.kt)("p",null,"Ricapitoliamo cosa abbiamo cambiato:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Abbiamo importato il decorate ",(0,a.kt)("inlineCode",{parentName:"li"},"Input")," da Angular."),(0,a.kt)("li",{parentName:"ol"},"Abbiamo rimosso l'oggetto statico ",(0,a.kt)("inlineCode",{parentName:"li"},"missile")," che avevamo assegnato all'interno del componente."),(0,a.kt)("li",{parentName:"ol"},"Tramite il decoratore ",(0,a.kt)("inlineCode",{parentName:"li"},"@Input()")," abbiamo definito ",(0,a.kt)("inlineCode",{parentName:"li"},"missile")," come una proprieta' accettata al di fuori dal componente del tipo Missile con un valore di default.")),(0,a.kt)("p",null,"Ora nel browser dovremmo vedere la giusta rappresentazione della lista con i tre missili:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"La lista di missili",src:n(9649).Z,width:"843",height:"745"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Ti sei perso nei passaggi di questa lezione? Controlla ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lucatardi/spazio/commit/6666649eed09f155f2043d8343f4ff865c8692f1?diff=split"},"qui")," il codice.")))}c.isMDXComponent=!0},9649:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/rockets_list-6ac875b41d861ee9357a87840394453c.png"},2226:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/rockets_list_error-2bacea77604e073a1aaa6dcf2da2a599.png"},335:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/rockets_list_unstyled-b56d38850e316fce99f83e7b75d45770.png"}}]);