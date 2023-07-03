"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[4451],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),h=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=h(o),p=n,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||a;return o?r.createElement(m,i(i({ref:t},l),{},{components:o})):r.createElement(m,i({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var h=2;h<a;h++)i[h]=o[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2991:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var r=o(7462),n=(o(7294),o(3905));const a={},i="Batch Auctions",c={unversionedId:"overview/batch-auctions",id:"overview/batch-auctions",title:"Batch Auctions",description:'On CoW Protocol, orders are placed off-chain and are not immediately executed, but rather collected and aggregated to be settled in batches. CoW Protocol replaces a central operator by an open solvers competition for order matching, with the term solver referring to anyone who submits an order settlement solution for a batch. As soon as a batch is "closed for orders" meaning that it does not consider any new orders, these solvers can compete to provide optimized solutions matching the orders in this closed batch.',source:"@site/docs/1_overview/2_batch-auctions.md",sourceDirName:"1_overview",slug:"/overview/batch-auctions",permalink:"/cow-docs/docs/overview/batch-auctions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1_overview/2_batch-auctions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/cow-docs/docs/overview/introduction"},next:{title:"Coincidence of Wants",permalink:"/cow-docs/docs/overview/coincidence-of-wants"}},s={},h=[],l={toc:h},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"batch-auctions"},"Batch Auctions"),(0,n.kt)("p",null,'On CoW Protocol, orders are placed off-chain and are not immediately executed, but rather collected and aggregated to be settled in batches. CoW Protocol replaces a central operator by an open solvers competition for order matching, with the term solver referring to anyone who submits an order settlement solution for a batch. As soon as a batch is "closed for orders" meaning that it does not consider any new orders, these solvers can compete to provide optimized solutions matching the orders in this closed batch.'),(0,n.kt)("p",null,"But, why use batch auctions as a price-finding mechanism for a DEX?"),(0,n.kt)("p",null,"The two main reasons behind our development of batch auctions into a trading mechanism are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Give the DeFi space in Ethereum a chance to establish the same price of any token pair in the same block."),(0,n.kt)("li",{parentName:"ol"},"Improve the DEX trading price offering by combining new economic mechanisms together such as Uniform Clearing Prices and Coincidence of Wants.")),(0,n.kt)("p",null,"Even though Ethereum transactions are executed atomically all at the same time within the same block, because of the AMMs design, trading the same tokens on the same block will not get the different, but identical trades, the same price. This is because the design of Constant Function Market Makers (CFMM) does not allow for trading to occur simultaneously in a block. In order for CFMM to work, it needs to process transactions in sequential order, so that the pool can know what is the ratio of tokens in it, and execute the trades with prices accordingly to it. Even though the block will have multiple trades of the same token pairs, each trade will obtain a different price depending on the order in which they trade against the pool. Because of this, the ordering of transactions becomes highly important, and as a consequence, we have seen the rise of MEV (Miner Extractable Value) where the miners freely decide in what order the trades arrive at the pool. Therefore favoring some trades in comparison to others, and ignoring the truthful order of arrival. Batch Auctions allow the trades within a batch to have the same uniform clearing price and therefore there's no point in miners reordering the trades. With CoW Protocol leveraging Batch Auctions, traders in Ethereum can now get the same price for the same token pairs they trade at the exact same block."),(0,n.kt)("p",null,"Besides being able to establish a uniform clearing price across the trades that happen within a batch, CoW Protocol Batch Auction price finding mechanism is also designed to offer a better price that no other CFMM can offer. Liquidity fragmentation is a big problem within the DeFi space that forces users to be constantly checking what pools can give the best prices for their trades. Batch Auctions are one way to solve the liquidity fragmentation problem as they allow CoW Protocol to offer the traders the chance to be part of a CoW (Coincidence of Wants) to share the liquidity amongst their orders, and in the event that with those orders they still not have enough liquidity, then pair the excess trades with the on-chain liquidity that can give them the best price. Essentially, the idea behind Batch Auctions and CoWs is to turn the protocol into a gigantic barter economy, where users can either trade directly against each other or go to specialized markets to execute what they couldn't barter in a peer to peer fashion."),(0,n.kt)("p",null,"But the best thing is that batch auctions allow the protocol the ability to combine off-chain interactions (COWs) with on-chain interactions, all in the same transaction."),(0,n.kt)("p",null,"![](/img/Batch Auction ","_"," COW.png)"),(0,n.kt)("p",null,"The amount of batches the protocol executes depends on the trading frequency users choose. The shorter the expiry date of an order, the more batch auctions the protocol will conduct in order to be able to settle the orders, while if the expiry date is long enough, the amount of batch auctions can be reduced as the protocol is able to fit more trades in a single batch."))}u.isMDXComponent=!0}}]);