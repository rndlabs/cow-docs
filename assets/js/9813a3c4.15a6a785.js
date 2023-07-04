"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[2647],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,l(l({ref:e},d),{},{components:r})):n.createElement(f,l({ref:e},d))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5988:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l="Introduction",i={unversionedId:"smart-contracts/introduction",id:"smart-contracts/introduction",title:"Introduction",description:"CoW Protocol is a collection of smart contracts that settle user orders on-chain while leveraging other sources of liquidity. The goal of the protocol is bundling multiple user orders together to minimise liquidity provider fees deriving from using external liquidity sources and stave off miner-extractable value.",source:"@site/docs/3_smart-contracts/1_introduction.md",sourceDirName:"3_smart-contracts",slug:"/smart-contracts/introduction",permalink:"/cow-docs/docs/smart-contracts/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3_smart-contracts/1_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts",permalink:"/cow-docs/docs/category/smart-contracts"},next:{title:"Allow-list authenticator",permalink:"/cow-docs/docs/category/allow-list-authenticator"}},c={},s=[],d={toc:s},u="wrapper";function p(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"CoW Protocol is a collection of smart contracts that settle user orders on-chain while leveraging other sources of liquidity. The goal of the protocol is bundling multiple user orders together to minimise ",(0,a.kt)("a",{parentName:"p",href:"../overview/definitions"},"liquidity provider fees")," deriving from using external liquidity sources and stave off miner-extractable value."),(0,a.kt)("p",null,"User orders are collected off-chain and settled at a later step by a solver. A solver is any of the addresses authorised to settle user orders together in GPv2. They are in charge of monitoring on-chain sources of liquidity and providing users the best on-chain prices in the case where the order cannot be matched perfectly with each other."),(0,a.kt)("p",null,"A settlement is a list of orders traded together, their prices, and the on-chain interactions necessary to retrieve external liquidity."),(0,a.kt)("p",null,"The protocol uses three smart contracts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Settlement contract:")," The entry point of GPv2. Collects and verifies user orders, interacts with on-chain liquidity, stores information on the state of the orders."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Allow-list authentication contract:")," Determines which addresses are solvers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Vault relayer contract:")," The target of user allowances. It is called by the settlement contract to receive the funds of the orders. It is also closely integrated with the Balancer protocol and can use funds from Balancer.")),(0,a.kt)("p",null,"The following tables contain the contract address for each network:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Settlement Contract")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Network"),(0,a.kt)("th",{parentName:"tr",align:null},"Address"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,a.kt)("td",{parentName:"tr",align:null},"0x9008D19f58AAbD9eD0D60971565AA8510560ab41")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gnosis Chain"),(0,a.kt)("td",{parentName:"tr",align:null},"0x9008D19f58AAbD9eD0D60971565AA8510560ab41")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rinkeby"),(0,a.kt)("td",{parentName:"tr",align:null},"0x9008D19f58AAbD9eD0D60971565AA8510560ab41")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allow-list authentication contract")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Network"),(0,a.kt)("th",{parentName:"tr",align:null},"Address"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,a.kt)("td",{parentName:"tr",align:null},"0x2c4c28DDBdAc9C5E7055b4C863b72eA0149D8aFE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gnosis Chain"),(0,a.kt)("td",{parentName:"tr",align:null},"0x2c4c28DDBdAc9C5E7055b4C863b72eA0149D8aFE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rinkeby"),(0,a.kt)("td",{parentName:"tr",align:null},"0x2c4c28DDBdAc9C5E7055b4C863b72eA0149D8aFE")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Vault relayer contract")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Network"),(0,a.kt)("th",{parentName:"tr",align:null},"Address"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,a.kt)("td",{parentName:"tr",align:null},"0xC92E8bdf79f0507f65a392b0ab4667716BFE0110")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gnosis Chain"),(0,a.kt)("td",{parentName:"tr",align:null},"0xC92E8bdf79f0507f65a392b0ab4667716BFE0110")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rinkeby"),(0,a.kt)("td",{parentName:"tr",align:null},"0xC92E8bdf79f0507f65a392b0ab4667716BFE0110")))),(0,a.kt)("p",null,"Each contract is described in more detail in its own section."))}p.isMDXComponent=!0}}]);