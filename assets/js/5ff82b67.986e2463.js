"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[9699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Onchain Order Cancellation",c={unversionedId:"tutorials/onchain-order-cancellation/intro",id:"tutorials/onchain-order-cancellation/intro",title:"Onchain Order Cancellation",description:"Before we begin, please note that our solvers can be quite quick, so it is entirely possible that your order will have already been filled before it can be invalidated onchain.",source:"@site/docs/5_tutorials/onchain-order-cancellation/1_intro.md",sourceDirName:"5_tutorials/onchain-order-cancellation",slug:"/tutorials/onchain-order-cancellation/intro",permalink:"/cow-docs/docs/tutorials/onchain-order-cancellation/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5_tutorials/onchain-order-cancellation/1_intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"On-chain Order Cancellation",permalink:"/cow-docs/docs/category/on-chain-order-cancellation"},next:{title:"Submitting Invalidation",permalink:"/cow-docs/docs/tutorials/onchain-order-cancellation/submitting-invalidation"}},l={},s=[],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"onchain-order-cancellation"},"Onchain Order Cancellation"),(0,o.kt)("p",null,"Before we begin, please note that our solvers can be quite quick, so it is entirely possible that your order will have already been filled before it can be invalidated onchain."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can request to cancel any order while it is still pending via the UI, but that is only a soft cancellation, not an onchain one.")))}p.isMDXComponent=!0}}]);