"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="Definitions",s={unversionedId:"overview/definitions",id:"overview/definitions",title:"Definitions",description:"General",source:"@site/docs/1_overview/2_definitions.md",sourceDirName:"1_overview",slug:"/overview/definitions",permalink:"/cow-docs/docs/overview/definitions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1_overview/2_definitions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/cow-docs/docs/overview/introduction"},next:{title:"Batch Auctions",permalink:"/cow-docs/docs/overview/batch-auctions"}},c={},l=[{value:"General",id:"general",level:2},{value:"Fees",id:"fees",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"definitions"},"Definitions"),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CoW"),": Co-incidence of Wants, the phenomenon whereby two or more orders have common elements allowing either a partial or whole-of-trade P2P settlement."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Gasless trading"),": The ability to make a trade between assets without having to pay a transaction fee."),(0,o.kt)("h2",{id:"fees"},"Fees"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Gas fee / transaction fee"),": A fee charged by the blockchain in it's native token for execution of a transaction (eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"xDAI"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Liquidity Provider fee"),": A fee charged by a liquidity provider, such as an AMM like Uniswap, for facilitating a swap against their assets."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Protocol fee"),": A fee charged to users during the settlement, paid in the sell token, as a fee for the trade being settled."))}d.isMDXComponent=!0}}]);