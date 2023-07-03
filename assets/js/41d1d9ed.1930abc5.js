"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[5162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=r,p=h["".concat(c,".").concat(u)]||h[u]||f[u]||a;return n?o.createElement(p,i(i({ref:t},d),{},{components:n})):o.createElement(p,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={},i="Coincidence of Wants",s={unversionedId:"overview/coincidence-of-wants",id:"overview/coincidence-of-wants",title:"Coincidence of Wants",description:"CoW Protocol, because of its use of Batch Auctions, is optimized for finding Coincidence of Wants (CoWs) amongst the trades within a batch, as well as ring trades. But what exactly are Coincidence of Wants and ring trades?",source:"@site/docs/1_overview/3_coincidence-of-wants.md",sourceDirName:"1_overview",slug:"/overview/coincidence-of-wants",permalink:"/cow-docs/docs/overview/coincidence-of-wants",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1_overview/3_coincidence-of-wants.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Batch Auctions",permalink:"/cow-docs/docs/overview/batch-auctions"},next:{title:"Signed Orders",permalink:"/cow-docs/docs/overview/signed-orders"}},c={},l=[],d={toc:l},h="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"coincidence-of-wants"},"Coincidence of Wants"),(0,r.kt)("p",null,"CoW Protocol, because of its use of Batch Auctions, is optimized for finding Coincidence of Wants (CoWs) amongst the trades within a batch, as well as ring trades. But what exactly are Coincidence of Wants and ring trades?"),(0,r.kt)("p",null,'Coincidence of wants can be explained as "economic phenomenon where two parties each hold an item the other wants, and therefore exchange these items directly. This means that on CoW Protocol, when two trades or more, each hold an asset that the other wants, their orders can be settled directly between all of them without the need for an external market maker or liquidity provider. CoW Protocol can create CoWs in a two dimensional orderbook, but can also create them on a multi-dimensional orderbook.'),(0,r.kt)("p",null,"One of the advantages of using batch auctions is that not only can you find perfect Coincidence of Wants matching, but you can also create ring trades. Essentially, a ring trade shares liquidity across all orders, rather than a single token pair. This functionality allows the protocol to offer traders better prices as they do not need to wait to have the perfect match between trades since they can dissect the trades into pieces to improve the outcome of them. Ring trades are one of the solutions to work around the fragmented liquidity."),(0,r.kt)("p",null,"Once we know the theory behind Coincidence of Wants, and Ring trades, let's deep dive in an example for both of them to understand them deeper."),(0,r.kt)("p",null,"[https://etherscan.io/tx/0x71d6f5bb2f29d16a0649d2b6a2eb3fabde8040598c21e675511d54e27399f6d2]"),(0,r.kt)("p",null,"In this batch auction, CoW Protocol found a Coincidence of Wants, from multiple users' orders. In this CoW, what we can see is that 12 swaps were mixed together to share liquidity amongst all of them. This allowed the protocol to settle a portion of the trade size internally, via CoWs, while only needing to tap into two different on-chain AMMs to cover for the rest of the liquidity within the batch."),(0,r.kt)("p",null,"Ring trades are a form of Coincidence of Wants that not only maximize the liquidity on a two dimensional orderbook, but instead maximize on a multidimensional level, meaning that the Coincidence of wants can be found in minimum three different tokens. Because of it, the protocol is able to match different trading token pairs in the same batch auction, to avoid having to interact with multiple AMM pools. One important aspect to understand the slight difference between CoWs and ring trades is that every ring trade is a CoW, but not every CoW is a ring trade. An example of a ring trade would be the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1540).Z,width:"4063",height:"2166"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"In our example, we have 3 different people, Alice is trying to sell DAI -OWL, Daniel is trying to sell OWL-USDC, and Bob & Carry are trying to sell USDC-DAI. Instead of having all of them trading against multiple liquidity pools to get the liquidity for their trade, the protocol forms a ring matching the three traders directly amongst each other.")),(0,r.kt)("p",null,"Overall, by leveraging Batch Auctions which are tailored for Coincidence of Wants, CoW Protocol is able to give better prices for trades because batching transactions results in a lower spread, as well as a much more optimized transaction management for the user."))}f.isMDXComponent=!0},1540:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Cow_Ring_trade-10f977f95613df731308918ea3de0d9e.png"}}]);