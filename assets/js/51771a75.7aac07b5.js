"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[57],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var s=n.createContext({}),l=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):c(c({},e),t)),o},p=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=l(o),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return o?n.createElement(m,c(c({ref:e},p),{},{components:o})):n.createElement(m,c({ref:e},p))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,c=new Array(a);c[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:r,c[1]=i;for(var l=2;l<a;l++)c[l]=o[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},9142:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={},c="ETH Flow Contract",i={unversionedId:"smart-contracts/eth-flow-contract/introduction",id:"smart-contracts/eth-flow-contract/introduction",title:"ETH Flow Contract",description:"The CoW ETH Flow Contract is a new way of trading on CoW Protocol. This new way of trading is specifically designed to handle ETH, since the CoW Protocol Settlement Contract is only compatible with ERC-20 tokens.",source:"@site/docs/3_smart-contracts/eth-flow-contract/1_introduction.md",sourceDirName:"3_smart-contracts/eth-flow-contract",slug:"/smart-contracts/eth-flow-contract/introduction",permalink:"/cow-docs/docs/smart-contracts/eth-flow-contract/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3_smart-contracts/eth-flow-contract/1_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ETH Flow",permalink:"/cow-docs/docs/category/eth-flow"},next:{title:"High Level Description",permalink:"/cow-docs/docs/smart-contracts/eth-flow-contract/overview"}},s={},l=[],p={toc:l},u="wrapper";function d(t){let{components:e,...o}=t;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eth-flow-contract"},"ETH Flow Contract"),(0,r.kt)("p",null,"The CoW ETH Flow Contract is a new way of trading on CoW Protocol. This new way of trading is specifically designed to handle ETH, since the CoW Protocol Settlement Contract is only compatible with ERC-20 tokens."),(0,r.kt)("p",null,"This new swapping method was developed for those users who have ETH (and no WETH) in their wallets, and thus do not have WETH approved in the settlement contract. The goal of this new swapping flow is to avoid forcing the user to convert their ETH into WETH and having them set the approval of WETH in the settlement contract, thus saving time and costs in the process."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/1600/0*3_pVJhfBelMB--Tf",alt:null})),(0,r.kt)("p",null,"The reason that an intermediary smart contract needs to be involved in this process is because you cannot sign an intent to trade with ETH. Since you cannot sign an intent to trade, and CoW Protocol only works with intents, we developed a custom smart contract that auto-converts your ETH into WETH to later place an ERC-1271 order (intent) on your behalf."))}d.isMDXComponent=!0}}]);