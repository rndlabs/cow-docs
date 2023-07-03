"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[9103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),w=r,f=u["".concat(l,".").concat(w)]||u[w]||d[w]||a;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=w;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}w.displayName="MDXCreateElement"},9510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},s="CoW Swap",i={unversionedId:"front-end/cowswap",id:"front-end/cowswap",title:"CoW Swap",description:"CoW Swap is the first trading interface built on top of CoW Protocol. It allows you to buy and sell tokens using gas-less orders that are settled p2p.",source:"@site/docs/2_front-end/3_cowswap.md",sourceDirName:"2_front-end",slug:"/front-end/cowswap",permalink:"/cow-docs/docs/front-end/cowswap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2_front-end/3_cowswap.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CoW Explorer",permalink:"/cow-docs/docs/front-end/cow-explorer"},next:{title:"Creating App Ids",permalink:"/cow-docs/docs/category/creating-app-ids"}},l={},c=[{value:"Differences between CoW Swap &amp; UniSwap",id:"differences-between-cow-swap--uniswap",level:4},{value:"Providing liquidity",id:"providing-liquidity",level:4},{value:"Cancelling orders",id:"cancelling-orders",level:4},{value:"Supported wallets",id:"supported-wallets",level:4},{value:"Interactions encountered when using CoW Swap",id:"interactions-encountered-when-using-cow-swap",level:4},{value:"FAQ",id:"faq",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cow-swap"},"CoW Swap"),(0,r.kt)("p",null,"CoW Swap is the first trading interface built on top of CoW Protocol. It allows you to buy and sell tokens using gas-less orders that are settled p2p."),(0,r.kt)("h4",{id:"differences-between-cow-swap--uniswap"},"Differences between CoW Swap & UniSwap"),(0,r.kt)("p",null,"CoW Swap's interface may look very familiar to the average DeFi user, as it's based on the Open Source code used for building the Uniswap front end. Although it looks similar, there are huge differences between the two products, which are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uniswap uses only Uniswap pools; CoW Swap can settle orders on Uniswap, Sushiswap, 1inch, Paraswap and more to come (Matcha, Balancer...) giving users the best price"),(0,r.kt)("li",{parentName:"ul"},"CoW Swap enables users to trade directly with other users without going through any pools when there is Coincidence of Wants (CoWs), removing the need to pay Liquidity Provider fees."),(0,r.kt)("li",{parentName:"ul"},"Orders on CoW Swap are signed messages and therefore gasless, costing nothing to submit. In case of price movements against your order, in the worst case, the order will expire and you won't spend gas on failed transactions, while on Uniswap you would still spend it.")),(0,r.kt)("h4",{id:"providing-liquidity"},"Providing liquidity"),(0,r.kt)("p",null,"CoW Swap does not have liquidity providers. Instead, it connects to all on-chain liquidity that is provided across different protocols. Since orders only incur a cost if traded, active market makers can observe the order book and place counter orders (creating a CoW) to prevent settling trades via external liquidity."),(0,r.kt)("h4",{id:"cancelling-orders"},"Cancelling orders"),(0,r.kt)("p",null,"CoW Swap allows you to cancel your orders without any cost. As a user, you simply sign the order cancellation - similar to how the order placement was done - and if the solution has not been mined yet, the order will not be executed, and therefore cancelled."),(0,r.kt)("h4",{id:"supported-wallets"},"Supported wallets"),(0,r.kt)("p",null,"CoW Swap uses offline signatures to offer gasless orders, aka signed orders. The currently supported wallets by CoW Swap can be grouped in the following way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EOA wallets:")," Most of the most popular EOA wallets are supported. Metamask or any injected wallet (Mobile Wallet app browser) as well as wallets through WalletConnect.\\\nIf you have a wallet that's not working, let us know."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Smart Contract wallets"),": Currently, Smart Contract (SC) wallets such as Gnosis Safe, Argent or Pillar are not supported because it would require signing an on-chain transaction to place the order, making it no longer gasless. We are working to make this a possibility and support will be added soon.\\")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Nevertheless, even if your wallet is not a SC wallet, it might be unsupported in some cases. Not all wallets implement the necessary signing methods from the EIP-712 standard. If that is the case for you, reach out to your wallet developers and ask for it.\n")),(0,r.kt)("h4",{id:"interactions-encountered-when-using-cow-swap"},"Interactions encountered when using CoW Swap"),(0,r.kt)("p",null,"CoW Swap has different types of interactions that a user is capable of executing. These interactions can be separated into internal & external operations. The following table clarifies the reasons for each interaction"),(0,r.kt)("p",null,"Internal CoW Swap Operations"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/RJ6EW2gCoHLbzkNraqAn_ctFAH88DPeyJPe6MUeOxpKsBgh_kJlKDpfgtpQVROBff1Bqb9OBSSIsOBCs34rBeEAc6XcaX6O3SeNNoluWY6o20nzchUgKBpK6p8OlHex2uLS2ZXPS",alt:null})),(0,r.kt)("h4",{id:"faq"},"FAQ"),(0,r.kt)("p",null,"Want to know more about CoW Swap and how it works. Head over to its ",(0,r.kt)("a",{parentName:"p",href:"https://cowswap.exchange/#/faq"},"FAQ section"),"."))}d.isMDXComponent=!0}}]);