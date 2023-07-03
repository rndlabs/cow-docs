"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[1038],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>h});var o=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=o.createContext({}),l=function(t){var e=o.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,a=t.mdxType,n=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(r),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||n;return r?o.createElement(h,i(i({ref:e},u),{},{components:r})):o.createElement(h,i({ref:e},u))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3661:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));const n={},i="Submit orders via the API",s={unversionedId:"tutorials/how-to-submit-orders-via-the-api/intro",id:"tutorials/how-to-submit-orders-via-the-api/intro",title:"Submit orders via the API",description:"In case you would like to submit orders programmatically instead of via a UI, this tutorial will show you how to do that. There are a couple of use cases why you might want to do that",source:"@site/docs/5_tutorials/how-to-submit-orders-via-the-api/0_intro.md",sourceDirName:"5_tutorials/how-to-submit-orders-via-the-api",slug:"/tutorials/how-to-submit-orders-via-the-api/intro",permalink:"/cow-docs/docs/tutorials/how-to-submit-orders-via-the-api/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5_tutorials/how-to-submit-orders-via-the-api/0_intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Submitting orders to the API",permalink:"/cow-docs/docs/category/submitting-orders-to-the-api"},next:{title:"1. Set Allowance for the sell token",permalink:"/cow-docs/docs/tutorials/how-to-submit-orders-via-the-api/set-allowance-for-the-sell-token"}},c={},l=[],u={toc:l},p="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(p,(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"submit-orders-via-the-api"},"Submit orders via the API"),(0,a.kt)("p",null,"In case you would like to ",(0,a.kt)("strong",{parentName:"p"},"submit orders programmatically instead of via a UI"),", this tutorial will show you how to do that. There are a couple of use cases why you might want to do that"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Submitting \u201ctake profit\u201d limit orders, where the current market price would not allow execution (not yet supported by the CoW Swap interface)"),(0,a.kt)("li",{parentName:"ol"},"Actively listen for user orders and programmatically submitting matching orders them via a trading bot (active market making without order cost)"),(0,a.kt)("li",{parentName:"ol"},"Other more automated trading strategies")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"general API documentation can be found here"),": ",(0,a.kt)("a",{parentName:"p",href:"https://api.cow.fi/docs"},"https://api.cow.fi/docs"),"\nWe have also written a small ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gnosis/gp-v2-trading-bot"},"trading bot script")," which can serve as inspiration."))}d.isMDXComponent=!0}}]);