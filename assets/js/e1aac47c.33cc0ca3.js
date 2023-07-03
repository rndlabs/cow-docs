"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[7093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),l=d(r),p=n,m=l["".concat(s,".").concat(p)]||l[p]||u[p]||a;return r?o.createElement(m,c(c({ref:t},f),{},{components:r})):o.createElement(m,c({ref:t},f))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:n,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const a={},c="Introduction",i={unversionedId:"off-chain-services/intro",id:"off-chain-services/intro",title:"Introduction",description:"On CoW Protocol, orders are placed off-chain and are not immediately executed, but rather collected and aggregated to be settled in batches. CoW Protocol does not need to work with executed transactions in order for users to be able to trade. The smart contract architecture is composed of an allowance manager and a settlement smart contract. There are two main components that work off-chain, which are the API used for the protocol fee mechanism and price estimations, and the solvers, used for finding different settlements solutions for each batch auction. Let's deep dive into how these work:",source:"@site/docs/4_off-chain-services/1_intro.md",sourceDirName:"4_off-chain-services",slug:"/off-chain-services/intro",permalink:"/cow-docs/docs/off-chain-services/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4_off-chain-services/1_intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Off Chain Services",permalink:"/cow-docs/docs/category/off-chain-services"},next:{title:"API",permalink:"/cow-docs/docs/category/api"}},s={},d=[],f={toc:d},l="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"On CoW Protocol, orders are placed off-chain and are not immediately executed, but rather collected and aggregated to be settled in batches. CoW Protocol does not need to work with executed transactions in order for users to be able to trade. The smart contract architecture is composed of an allowance manager and a settlement smart contract. There are two main components that work off-chain, which are the API used for the ",(0,n.kt)("a",{parentName:"p",href:"../overview/definitions"},"protocol fee")," mechanism and price estimations, and the solvers, used for finding different settlements solutions for each batch auction. Let's deep dive into how these work:"))}u.isMDXComponent=!0}}]);