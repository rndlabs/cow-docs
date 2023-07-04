"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[5968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),h=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=h(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=h(r),d=i,m=l["".concat(c,".").concat(d)]||l[d]||u[d]||n;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var h=2;h<n;h++)a[h]=r[h];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var o=r(7462),i=(r(7294),r(3905));const n={},a="Price Estimation",s={unversionedId:"off-chain-services/api/price-estimation",id:"off-chain-services/api/price-estimation",title:"Price Estimation",description:'As stated in other sections, CoW Protocol works with signed messages instead of executing transactions on the go. This means, that on the UI, the user sees a price quote that is based on an estimation of what prices will that particular order be settled with. One particular feature of CoW Protocol is that within the price estimation, it shows "the minimum amount to be received" which is a price quote that can\'t be violated, meaning that the protocol will either give you that price or the order will expire and be cancelled without any cost. Although, if through CoWs, the protocol can offer you a better quote than the minimum received, it will execute your order with a surplus. In other words, price estimation is a lower bound on the proceeds a user can get for their trade. While we are working on it, at the moment slippage is not yet included in the price estimate.',source:"@site/docs/4_off-chain-services/api/3_price-estimation.md",sourceDirName:"4_off-chain-services/api",slug:"/off-chain-services/api/price-estimation",permalink:"/cow-docs/docs/off-chain-services/api/price-estimation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4_off-chain-services/api/3_price-estimation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fee Mechanism",permalink:"/cow-docs/docs/off-chain-services/api/fee-mechanism"},next:{title:"Solvers",permalink:"/cow-docs/docs/category/solvers"}},c={},h=[],p={toc:h},l="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"price-estimation"},"Price Estimation"),(0,i.kt)("p",null,'As stated in other sections, CoW Protocol works with signed messages instead of executing transactions on the go. This means, that on the UI, the user sees a price quote that is based on an estimation of what prices will that particular order be settled with. One particular feature of CoW Protocol is that within the price estimation, it shows "the minimum amount to be received" which is a price quote that can\'t be violated, meaning that the protocol will either give you that price or the order will expire and be cancelled without any cost. Although, if through CoWs, the protocol can offer you a better quote than the minimum received, it will execute your order with a surplus. In other words, price estimation is a lower bound on the proceeds a user can get for their trade. While we are working on it, at the moment slippage is not yet included in the price estimate.'),(0,i.kt)("p",null,"In order for the front end to show the users the expected prices, the backend has implemented different routes for price estimation. This can be done through the ",(0,i.kt)("a",{parentName:"p",href:"https://api.cow.fi/docs/#default/get_api_v1_feeAndQuote_sell"},"/api/v1/feeAndQuote/sell "),"/ ",(0,i.kt)("a",{parentName:"p",href:"https://api.cow.fi/docs/#default/get_api_v1_feeAndQuote_buy"},"/api/v1/feeAndQuote/buy")," endpoints or ",(0,i.kt)("a",{parentName:"p",href:"https://api.cow.fi/docs/#/default/get_api_v1_markets__baseToken___quoteToken___kind___amount_"},"/api/v1/markets endpoint"),"."),(0,i.kt)("p",null,"These prices are calculated based on liquidity sources that have native support (Uniswapv2, Sushiswap, and hopefully soon Balancer and Uniswapv3) from the baseline solver. However, when finding the actual batch settlement, there are also smarter solvers like the MIP solver and other aggregators like 1Inch and Paraswap that are working on finding the best price settlement. This means that the settled price might be better than the estimated price."),(0,i.kt)("p",null,"As we add native support for more liquidity sources, improve the baseline solver, and start using other solvers for price estimation, such as the MIP solver, the protocol estimates should highly improve over time. Like the baseline solver, it uses a set of base tokens that are considered as intermediate hops between tokens to reach the buy token from the sell token. It takes gas cost into account so that for small orders fewer hops are preferred while for large orders more hops might be considered if they improve the price enough. The price estimation code is in shared/src/price","_","estimate.rs."))}u.isMDXComponent=!0}}]);