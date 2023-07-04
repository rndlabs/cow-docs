"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[9873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Order Intents",s={unversionedId:"overview/order-intents",id:"overview/order-intents",title:"Order Intents",description:"CoW Protocol does not require users to execute a transaction on chain in order for users to be able to trade. Using a separation-of-concerns logic, the smart contract architecture is composed of allowance manager (vault relayer) and settlement smart contracts. The combination of these two contracts allow the protocol to offer users gas-free trades using off-chain signed order intents submitted via API.",source:"@site/docs/1_overview/5_order-intents.md",sourceDirName:"1_overview",slug:"/overview/order-intents",permalink:"/cow-docs/docs/overview/order-intents",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1_overview/5_order-intents.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Coincidence of Wants",permalink:"/cow-docs/docs/overview/coincidence-of-wants"},next:{title:"Learnings & Improvements",permalink:"/cow-docs/docs/overview/learnings-and-improvements-of-gpv1"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"order-intents"},"Order Intents"),(0,a.kt)("p",null,"CoW Protocol does not require users to execute a transaction on chain in order for users to be able to trade. Using a separation-of-concerns logic, the smart contract architecture is composed of ",(0,a.kt)("a",{parentName:"p",href:"../smart-contracts/vault-relayer/introduction"},"allowance manager (vault relayer)")," and ",(0,a.kt)("a",{parentName:"p",href:"../smart-contracts/settlement-contract/introduction"},"settlement")," smart contracts. The combination of these two contracts allow the protocol to offer users gas-free trades using off-chain ",(0,a.kt)("em",{parentName:"p"},"signed order intents")," submitted via API."),(0,a.kt)("p",null,"Before an off-chain order intent can be accepted as valid by the API, the user first needs to approve the vault relayer contract to execute the signed order intent on their behalf. This means that the ",(0,a.kt)("em",{parentName:"p"},"only")," transaction to be executed by the user in which they will have to pay a ",(0,a.kt)("a",{parentName:"p",href:"definitions"},"gas fee"),", is the token approval. Once you approve CoW Protocol's allowance manager to spend your funds, you can submit signed order intents that contain the trade's details, such as limit price, amount, expiry, etc."),(0,a.kt)("p",null,"Signed order intents are really what allow CoW Protocol's batch auction mechanism to function. After the users have submitted their signed order intent, the solvers check the order submission and include them in the batch auction where the trade fits best. Once an order intent, has been included in a batch, the solvers send the transaction to the ",(0,a.kt)("a",{parentName:"p",href:"../smart-contracts/settlement-contract/introduction"},"settlement contract"),", which checks with the ",(0,a.kt)("a",{parentName:"p",href:"../smart-contracts/vault-relayer/introduction"},"allowance manager")," if the sender of the order intent has given the approval to CoW Protocol spend (swap) the sell token. The combination of these two smart contracts allow CoW Protocol to work with off-chain order submission, as ultimately, the user has the ",(0,a.kt)("strong",{parentName:"p"},"guarantee that the settlement contract will not be able to spend any funds that have not previously been approved in the allowance manager contract"),". To sum up, the CoW Protocol smart contracts guarantee the users that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Funds can ",(0,a.kt)("strong",{parentName:"li"},"ONLY")," be transferred if a trader has approved the ",(0,a.kt)("a",{parentName:"li",href:"../smart-contracts/vault-relayer/introduction"},"allowance manager (vault relayer)")," ",(0,a.kt)("strong",{parentName:"li"},"AND")," signed an order to sell the given token for another."),(0,a.kt)("li",{parentName:"ul"},"Limit prices and amounts of the ",(0,a.kt)("em",{parentName:"li"},"signed")," order intent will ",(0,a.kt)("strong",{parentName:"li"},"ALWAYS")," be satisfied."),(0,a.kt)("li",{parentName:"ul"},"Order intents have an ",(0,a.kt)("em",{parentName:"li"},"expiry date"),", can be ",(0,a.kt)("em",{parentName:"li"},"cancelled on-chain"),", and ",(0,a.kt)("strong",{parentName:"li"},"NOT")," be replayed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ONLY")," solvers at risk of slashing (ie. bonded) can execute a batch auction settlement."),(0,a.kt)("li",{parentName:"ul"},"Smooth transaction management, in the case of multi-signature wallets, as once the first signature is done, the minimum price shown is guaranteed. If the protocol can find the promised price no matter when the rest of the signatures are done, the trade will be executed, if not, the order will simply expire without any cost to the trading participants.")))}p.isMDXComponent=!0}}]);