"use strict";(self.webpackChunktardito_dev=self.webpackChunktardito_dev||[]).push([[5629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const s={sidebar_position:5},r="Lists \u3016\ud83d\udc27\u3017",o={unversionedId:"python/lists",id:"python/lists",title:"Lists \u3016\ud83d\udc27\u3017",description:"In Python, a list is a versatile and commonly used data structure that allows us to store a collection of items. Lists are ordered, mutable (changeable), and can contain elements of different data types.",source:"@site/docs/python/lists.md",sourceDirName:"python",slug:"/python/lists",permalink:"/it/docs/python/lists",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Strings \ud83d\udd24",permalink:"/it/docs/python/strings"},next:{title:"Da JavaScript a Python",permalink:"/it/docs/python"}},l={},p=[{value:"List Creation",id:"list-creation",level:2},{value:"Accessing List Elements",id:"accessing-list-elements",level:2},{value:"List Slicing",id:"list-slicing",level:2},{value:"List Mutability",id:"list-mutability",level:2},{value:"List Methods",id:"list-methods",level:2},{value:"List Comprehensions",id:"list-comprehensions",level:2},{value:"List Length",id:"list-length",level:2},{value:"Nesting Lists",id:"nesting-lists",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lists-"},"Lists \u3016\ud83d\udc27\u3017"),(0,a.kt)("p",null,"In Python, a list is a versatile and commonly used data structure that allows us to store a collection of items. Lists are ordered, mutable (changeable), and can contain elements of different data types.\nHere are some key characteristics and operations associated with lists in Python:"),(0,a.kt)("h2",{id:"list-creation"},"List Creation"),(0,a.kt)("p",null,"We can create a list by enclosing a comma-separated sequence of elements within square brackets ",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),". For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'penguin_species = ["Emperor", "Gentoo", "Ad\xe9lie", "Chinstrap", "King"]\n')),(0,a.kt)("p",null,"The just created ",(0,a.kt)("inlineCode",{parentName:"p"},"penguin_species")," list contains five strings but a list can have elements of any types.\nA list can contain elements of different types at the same time:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'a_mix_of_things = [1, "Emperor", 3.16, True]\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"a_mix_of_things")," list contains at the same time an integer, a string, a floating number and a boolean."),(0,a.kt)("h2",{id:"accessing-list-elements"},"Accessing List Elements"),(0,a.kt)("p",null,"List elements are accessed by their index, starting from 0 for the first element. We can also use negative indices to access elements from the end of the list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"first_specie = penguin_species[0]\nlast_specie = penguin_species[-1]\n")),(0,a.kt)("h2",{id:"list-slicing"},"List Slicing"),(0,a.kt)("p",null,"We can extract a sublist from a list using slicing. Slicing allows you to specify a range of indices to create a new list containing the selected elements. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'penguin_species[0:2]  # Returns ["Emperor", "Gentoo"]\n')),(0,a.kt)("h2",{id:"list-mutability"},"List Mutability"),(0,a.kt)("p",null,"Lists are mutable, which means you can change, add, or remove elements after the list is created. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"a_mix_of_things[1] = 42  # Changes \"Emperor\" to 42\na_mix_of_things.append('orange')  # Adds 'orange' to the end of the list\ndel a_mix_of_things[4]  # Removes the fifth element\n")),(0,a.kt)("h2",{id:"list-methods"},"List Methods"),(0,a.kt)("p",null,"Python provides a wide range of built-in methods for manipulating lists, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"append()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"extend()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"insert()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"remove()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pop()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"index()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"count()"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"sort()"),", among others."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To get a full list of the method available you can print ",(0,a.kt)("inlineCode",{parentName:"p"},"Dir[a_mix_of_things]"),".")),(0,a.kt)("h2",{id:"list-comprehensions"},"List Comprehensions"),(0,a.kt)("p",null,"List comprehensions are a concise way to create lists  on existing lists. They provide a more readable and efficient way to filter and transform list elements."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"numbers = [1, 2, 3, 4, 5]\nsquared_numbers = [x**2 for x in numbers]  # Creates [1, 4, 9, 16, 25]\n")),(0,a.kt)("h2",{id:"list-length"},"List Length"),(0,a.kt)("p",null,"We can find the number of elements in a list using the ",(0,a.kt)("inlineCode",{parentName:"p"},"len()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"length = len(my_list)\n")),(0,a.kt)("h2",{id:"nesting-lists"},"Nesting Lists"),(0,a.kt)("p",null,"Lists can be nested within other lists, allowing us to create more complex data structures. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nested_list = [[1, 2, 3], ['a', 'b', 'c']]\n")),(0,a.kt)("p",null,"Lists are widely used in Python for various tasks, from storing and manipulating data to implementing more complex data structures and algorithms. They are a fundamental part of Python programming."))}m.isMDXComponent=!0}}]);