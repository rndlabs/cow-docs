"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[5127],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={},s="Sign and Post orders",i={unversionedId:"cow-sdk/sign-and-post-orders/intro",id:"cow-sdk/sign-and-post-orders/intro",title:"Sign and Post orders",description:"In order to trade, you will need to create a valid order first.",source:"@site/docs/6_cow-sdk/sign-and-post-orders/1_intro.md",sourceDirName:"6_cow-sdk/sign-and-post-orders",slug:"/cow-sdk/sign-and-post-orders/intro",permalink:"/cow-docs/docs/cow-sdk/sign-and-post-orders/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/6_cow-sdk/sign-and-post-orders/1_intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sign and Post orders",permalink:"/cow-docs/docs/category/sign-and-post-orders"},next:{title:"Enable Tokens",permalink:"/cow-docs/docs/cow-sdk/sign-and-post-orders/enable-tokens"}},c={},d=[],l={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sign-and-post-orders"},"Sign and Post orders"),(0,o.kt)("p",null,"In order to trade, you will need to create a valid order first."),(0,o.kt)("p",null,"On the contrary to other decentralised exchanges, creating orders is free in CoW Protocol. This is because, one of the most common ways to do it is by created off-chain signed messages (meta-transactions, uses ",(0,o.kt)("inlineCode",{parentName:"p"},"EIP-712")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"EIP-1271"),")."),(0,o.kt)("p",null,"Posting orders is a three steps process:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Get Market Price"),": Fee & Price"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Sign the order"),": Using off-chain signing or Meta-transactions"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Post the signed order to the API"),": So, the order becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"OPEN"))),(0,o.kt)("p",null,"The next sections will guide you through the process of creating a valid order step by step. If you feel impatient and you want just a quick example, please out the the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cowprotocol/cow-sdk/blob/main/examples/cra/src/pages/quickStart/index.tsx"},"Quick start example"),"."))}u.isMDXComponent=!0}}]);