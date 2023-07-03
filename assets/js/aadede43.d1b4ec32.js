"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[2875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||n;return r?o.createElement(h,s(s({ref:t},u),{},{components:r})):o.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={},s="Additional Use Cases",i={unversionedId:"tutorials/how-to-place-erc-1271-smart-contract-orders/additional-use-cases",id:"tutorials/how-to-place-erc-1271-smart-contract-orders/additional-use-cases",title:"Additional Use Cases",description:"GAT orders aren't the only thing that is possible:",source:"@site/docs/5_tutorials/how-to-place-erc-1271-smart-contract-orders/7_additional-use-cases.md",sourceDirName:"5_tutorials/how-to-place-erc-1271-smart-contract-orders",slug:"/tutorials/how-to-place-erc-1271-smart-contract-orders/additional-use-cases",permalink:"/cow-docs/docs/tutorials/how-to-place-erc-1271-smart-contract-orders/additional-use-cases",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5_tutorials/how-to-place-erc-1271-smart-contract-orders/7_additional-use-cases.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Good After Time (GAT) Orders",permalink:"/cow-docs/docs/tutorials/how-to-place-erc-1271-smart-contract-orders/good-after-time-gat-orders"},next:{title:"Build on top of CoW Protocol",permalink:"/cow-docs/docs/tutorials/build-on-top-of-cow-protocol"}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"additional-use-cases"},"Additional Use Cases"),(0,a.kt)("p",null,"GAT orders aren't the only thing that is possible:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stop-loss orders",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Orders that become valid only once an on-chain oracle reports that the order\'s sell token reaches some "stop-price".'),(0,a.kt)("li",{parentName:"ul"},"For example, you can place an Ether stop-loss order to buy USDC that only becomes valid once a price oracle reports that Ether dropped below $500.00."))),(0,a.kt)("li",{parentName:"ul"},"Time-weighted average price (TWAP) orders",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A large order that becomes available a little at a time."),(0,a.kt)("li",{parentName:"ul"},"This can be useful for a DAO that wants to sell a large portion of a token in their treasury over a month, a little at a time."))),(0,a.kt)("li",{parentName:"ul"},"And wherever else your imagination takes you!")),(0,a.kt)("p",null,"What, I believe is so interesting about Smart Orders is that they don't require any special integration. You just need an on-chain contract that follows the ERC-1271 signature verification standard! This allows anyone to extend CoW Protocol to add special orders with all kinds of on-chain logic without requiring any special integration. This democratises the ability of external parties to make special orders with special semantics that perfectly suits their needs, while having strong on-chain guarantees that the rules of their orders are being followed."))}p.isMDXComponent=!0}}]);