"use strict";(self.webpackChunktardito_dev=self.webpackChunktardito_dev||[]).push([[1193],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return t?i.createElement(g,l(l({ref:n},u),{},{components:t})):i.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=t(7462),r=(t(7294),t(3905));const a={sidebar_position:4},l="Strings \ud83d\udd24",o={unversionedId:"python/strings",id:"python/strings",title:"Strings \ud83d\udd24",description:"In Python, a string is a sequence of characters, and it is used to represent text. Strings are one of the fundamental data types in Python and are typically enclosed in either single quotes (' '), double quotes (\" \"), or triple quotes for multiline strings (''', ' ' ', or \"\"\" \"\"\").",source:"@site/docs/python/strings.md",sourceDirName:"python",slug:"/python/strings",permalink:"/docs/python/strings",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Variables \ud83d\udce5",permalink:"/docs/python/variables"},next:{title:"Lists \u3016\ud83d\udc27\u3017",permalink:"/docs/python/lists"}},s={},p=[{value:"String Immutability",id:"string-immutability",level:2},{value:"String Methods",id:"string-methods",level:2},{value:"String Concatenation",id:"string-concatenation",level:2},{value:"String Indexing and Slicing",id:"string-indexing-and-slicing",level:2},{value:"String Formatting",id:"string-formatting",level:2},{value:"Escape Sequences",id:"escape-sequences",level:2},{value:"Raw Strings",id:"raw-strings",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"strings-"},"Strings \ud83d\udd24"),(0,r.kt)("p",null,"In Python, a string is a sequence of characters, and it is used to represent text. Strings are one of the fundamental data types in Python and are typically enclosed in either single quotes (",(0,r.kt)("inlineCode",{parentName:"p"},"' '"),"), double quotes (",(0,r.kt)("inlineCode",{parentName:"p"},'" "'),"), or triple quotes for multiline strings (",(0,r.kt)("inlineCode",{parentName:"p"},"'''"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"' ' '"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},'""" """'),")."),(0,r.kt)("p",null,"Here are some key points about strings in Python:"),(0,r.kt)("h2",{id:"string-immutability"},"String Immutability"),(0,r.kt)("p",null,'Strings in Python are immutable, which means we can not change the characters in an existing string.\nIn the following code we are trying to change the initial "G" with a "g".\nThis code will throw an error as we are trying to modify an immutable string.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'full_name = "Gioachino the penguin"\nfull_name[0] = "g"\n')),(0,r.kt)("h2",{id:"string-methods"},"String Methods"),(0,r.kt)("p",null,"Python provides numerous built-in methods to manipulate and work with strings.\nLet's see some examples of the most commun ones:\nlen(), upper(), lower(), strip(), split()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"len()")," returns the length of the string.\neg. ",(0,r.kt)("inlineCode",{parentName:"li"},"len(full_mane)")," Will return ",(0,r.kt)("inlineCode",{parentName:"li"},"21"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upper()")," returns a new string with all the characters uppercased.\neg. ",(0,r.kt)("inlineCode",{parentName:"li"},"upper(full_mane)")," will return ",(0,r.kt)("inlineCode",{parentName:"li"},'"GIOACHINO THE PENGUIN"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lower()")," returns a new string with all the characters lowercased.\neg. ",(0,r.kt)("inlineCode",{parentName:"li"},"lower(full_mane)")," will return ",(0,r.kt)("inlineCode",{parentName:"li"},'"gioachino the penguin"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"strip()")," returns a new string with the leading and trailing whitespace removed.\neg ",(0,r.kt)("inlineCode",{parentName:"li"},'strip("   Gioachino the penguin  ")')," will return ",(0,r.kt)("inlineCode",{parentName:"li"},'"Gioachino the penguin"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"split()")," returns a list of characters.\neg. ",(0,r.kt)("inlineCode",{parentName:"li"},'split("Gioachino")')," will return ",(0,r.kt)("inlineCode",{parentName:"li"},'["G","i","o","a","c","h","i","n","o"]'))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To get a full list of the method available you can print ",(0,r.kt)("inlineCode",{parentName:"p"},"Dir[favorite_animal]"),".")),(0,r.kt)("h2",{id:"string-concatenation"},"String Concatenation"),(0,r.kt)("p",null,"We can concatenate strings using the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'first_name = "Gioachino"\nlast_name = "the penguin"\nfull_name = first_name + " " + last_name\n# full_mane will be "Gioachino the penguin"\n')),(0,r.kt)("h2",{id:"string-indexing-and-slicing"},"String Indexing and Slicing"),(0,r.kt)("p",null,"We can access individual characters within a string using indexing and extract substrings using slicing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'full_name[0]  # Returns the character "A"\nfull_name[10:13]  # Returns "the"\nfull_name[10:]  # Returns "the penguin"\nfull_name[:9]  # Returns "Gioachino"\n')),(0,r.kt)("h2",{id:"string-formatting"},"String Formatting"),(0,r.kt)("p",null,"Python provides us various ways to format strings, including f-strings (introduced in Python 3.6), the ",(0,r.kt)("inlineCode",{parentName:"p"},"str.format()")," method, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," operator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'name = "Alice"\nage = 30\nformatted_string = f"My name is {name} and I am {age} years old."\n')),(0,r.kt)("h2",{id:"escape-sequences"},"Escape Sequences"),(0,r.kt)("p",null,"You can use escape sequences to include special characters within a string, like ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")," for a newline or ",(0,r.kt)("inlineCode",{parentName:"p"},'\\"')," to include a double quote within a double-quoted string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'escaped_string = "This is a \\"quoted\\" word."\n')),(0,r.kt)("h2",{id:"raw-strings"},"Raw Strings"),(0,r.kt)("p",null,"Prefixing a string with 'r' or 'R' makes it a raw string, which treats backslashes as literal characters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'raw_string = r"This is a \\n raw string."\n')),(0,r.kt)("p",null,"Strings are incredibly versatile in Python and are used for a wide range of tasks, from simple text manipulation to more complex data processing and manipulation."))}c.isMDXComponent=!0}}]);