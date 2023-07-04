"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[6019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="Submitting Invalidation",c={unversionedId:"tutorials/onchain-order-cancellation/submitting-invalidation",id:"tutorials/onchain-order-cancellation/submitting-invalidation",title:"Submitting Invalidation",description:'* After placing your order from the interface, in the top right corner click on "Pending"',source:"@site/docs/5_tutorials/onchain-order-cancellation/2_submitting-invalidation.md",sourceDirName:"5_tutorials/onchain-order-cancellation",slug:"/tutorials/onchain-order-cancellation/submitting-invalidation",permalink:"/cow-docs/docs/tutorials/onchain-order-cancellation/submitting-invalidation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5_tutorials/onchain-order-cancellation/2_submitting-invalidation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Onchain Order Cancellation",permalink:"/cow-docs/docs/tutorials/onchain-order-cancellation/introduction"},next:{title:"Verifying with Orderbook API Services",permalink:"/cow-docs/docs/tutorials/onchain-order-cancellation/verifying-with-orderbook-api-services"}},l={},u=[],s={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"submitting-invalidation"},"Submitting Invalidation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'After placing your order from the interface, in the top right corner click on "Pending"'),(0,o.kt)("li",{parentName:"ul"},'From here you can navigate to your order in the explorer (click on the purple button "order") and copy the OrderUid ("Order Id") to your clipboard. Note that this Order ID can also be found in the URL here.')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/d8DeXt2jNhW9g5Mru6PkzOS-JdSFfRXBUZDowG4ZNQvI3Xn6_lahACWNQB9LVZS0xWfKCpNADSqNsKbm6Sn7nzVecFqMC8QnlPDyp_6fyg5atm-8IbSxkkYzCvk-fqsqfzw2u5xI",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the bottom left corner of the web interface there is a link to the settlement contract on Etherscan")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/_STDY7a2verH4wBQzFeK2JLrFd3nIe3nIjXD24IR75moyeXAVz980h82V05esLckgzJOEbdUOdcdnl4tEkMcn6ARnJaU4eKFxHp0ZMiznX3vTx7VH1aRJlHm0rxJbgY1M3t3DqEj",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'On Etherscan, click on the "Contract" tab and navigate to "Write Contract".'),(0,o.kt)("li",{parentName:"ul"},'In the "Write Contract" tab find item number 3 "invalidateOrder"; here you can paste your Order Id and click "write" (note that you will have to send this transaction from the same wallet that you placed the order with).')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/aqYQl6-6Ijy_C5V56SpOcm3aYpLj6kBaCgYwER34lS0fxFmEEnv3IuLBKpRdhSfvzFFecaR_vv6skmvctcg1uLbyEnBEg0Yf2GRe4PWWbjqEMQXkgsHDcCo7-qY5CXV_hL1EwKV1",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After the order invalidation has been mined, your order has been successfully invalidated!")))}p.isMDXComponent=!0}}]);