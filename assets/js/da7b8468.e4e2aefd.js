"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[7486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return r?a.createElement(k,l(l({ref:t},d),{},{components:r})):a.createElement(k,l({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},l="CoW Protocol Custom Linking",i={unversionedId:"front-end/cow-protocol-custom-linking",id:"front-end/cow-protocol-custom-linking",title:"CoW Protocol Custom Linking",description:"Query Parameters",source:"@site/docs/2_front-end/5_cow-protocol-custom-linking.md",sourceDirName:"2_front-end",slug:"/front-end/cow-protocol-custom-linking",permalink:"/cow-docs/docs/front-end/cow-protocol-custom-linking",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2_front-end/5_cow-protocol-custom-linking.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get the digest hash from the CID",permalink:"/cow-docs/docs/front-end/creating-app-ids/get-the-digest-hash-from-the-cid"},next:{title:"Smart Contracts",permalink:"/cow-docs/docs/category/smart-contracts"}},p={},s=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"URL links format",id:"url-links-format",level:3},{value:"Swap",id:"swap",level:4},{value:"Limit orders",id:"limit-orders",level:4},{value:"Parameters",id:"parameters",level:3},{value:"Wrapped native currency",id:"wrapped-native-currency",level:2},{value:"Example Usage",id:"example-usage",level:2}],d={toc:s},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cow-protocol-custom-linking"},"CoW Protocol Custom Linking"),(0,n.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"CoW Protocol")," supports several different interfaces routing orders to it. ",(0,n.kt)("strong",{parentName:"p"},"CoW Swap"),", is the first interface developed on top of CoW Protocol, and the main protocol interface providing the best UI and UX. Here you will find two interfaces for trading: Swap and Limit orders, such front end supports URL query parameters to allow anyone to create a custom link to that particular front end."),(0,n.kt)("p",null,"Even though Swap is the main page of the front end, each page can have its own specific URL parameters that can be set, while global parameters are still used on all pages. Keep in mind that if a parameter is used on an incorrect page, this will have no effect on UI settings. Parameters not set with a URL parameter will be set to standard frontend defaults. Global# Parameter Type Description theme String Sets them to dark or light mode."),(0,n.kt)("p",null,"Since you can use Swap or Limit orders, both of them use the same URL format, with which you can specify all the necessary parameters, such as: network id, assets for trading, recipient address, amount to sell or buy."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"Parameters not set with the URL parameter will be set by default."))),(0,n.kt)("h3",{id:"url-links-format"},"URL links format"),(0,n.kt)("h4",{id:"swap"},"Swap"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://swap.cow.fi/#/networkId/swap/sellCurrencyId/buyCurrencyId?recipient=0x000...000&sellAmount=5000.205&buyAmount=325.65"},"https://swap.cow.fi/#/networkId/swap/sellCurrencyId/buyCurrencyId?recipient=0x000...000&sellAmount=5000.205&buyAmount=325.65")),(0,n.kt)("h4",{id:"limit-orders"},"Limit orders"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://swap.cow.fi/#/networkId/limit-orders/sellCurrencyId/buyCurrencyId?recipient=0x000...000&sellAmount=5000.205&buyAmount=325.65"},"https://swap.cow.fi/#/networkId/limit-orders/sellCurrencyId/buyCurrencyId?recipient=0x000...000&sellAmount=5000.205&buyAmount=325.65")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"All parameters are optional."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://swap.cow.fi"},"https://swap.cow.fi")," - CoW Swap URL"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"networkId")),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1")," - Ethereum Mainnet"),(0,n.kt)("td",{parentName:"tr",align:null},"Each network has a unique identifier, represented as an integer. Currently CoW Swap supports these networks: Ethereum Mainnet (networkId: ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),"), Gnosis chain (networkId: ",(0,n.kt)("inlineCode",{parentName:"td"},"100"),"), G\xf6rli (networkId: ",(0,n.kt)("inlineCode",{parentName:"td"},"5"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"sellCurrencyId")),(0,n.kt)("td",{parentName:"tr",align:null},"Currency address or symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Wrapped native currency symbol for the current network (for Mainnet: ",(0,n.kt)("inlineCode",{parentName:"td"},"WETH"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"Currency to sell. An address or a symbol can be specified. For example: ",(0,n.kt)("inlineCode",{parentName:"td"},"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"WETH"),". Read below to understand what ",(0,n.kt)("inlineCode",{parentName:"td"},"Wrapped native currency")," is.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"buyCurrencyId")),(0,n.kt)("td",{parentName:"tr",align:null},"Currency address or symbol"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Currency to buy. An address or a symbol can be specified. For example: ",(0,n.kt)("inlineCode",{parentName:"td"},"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"WETH"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"recipient")),(0,n.kt)("td",{parentName:"tr",align:null},"Address"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Valid Ethereum account address.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"sellAmount")),(0,n.kt)("td",{parentName:"tr",align:null},"Integer or Float"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Amount of currency to be sold. For example: ",(0,n.kt)("inlineCode",{parentName:"td"},"56000.201"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"buyAmount")),(0,n.kt)("td",{parentName:"tr",align:null},"Integer or Float"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Amount of currency to buy. For example: ",(0,n.kt)("inlineCode",{parentName:"td"},"1208"),". Important: only one of ",(0,n.kt)("inlineCode",{parentName:"td"},"sellAmount")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"buyAmount")," can be set for Swap. If both are set, only ",(0,n.kt)("inlineCode",{parentName:"td"},"sellAmount")," will be used. In case of Limit orders, you can set both values and the price will be calculated automatically.")))),(0,n.kt)("h2",{id:"wrapped-native-currency"},"Wrapped native currency"),(0,n.kt)("p",null,"Each network has a native currency and it's wrapped version. Native currency is needed to pay ",(0,n.kt)("a",{parentName:"p",href:"../overview/definitions"},"transaction fees"),"."),(0,n.kt)("p",null,"Native and wrapped currencies per network:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ethereum Mainnet: ",(0,n.kt)("strong",{parentName:"li"},"WETH")," - wrapped ETH"),(0,n.kt)("li",{parentName:"ul"},"Gnosis chain: ",(0,n.kt)("strong",{parentName:"li"},"WXDAI")," - wrapped XDAI"),(0,n.kt)("li",{parentName:"ul"},"G\xf6rli: ",(0,n.kt)("strong",{parentName:"li"},"WETH")," - wrapped ETH")),(0,n.kt)("h2",{id:"example-usage"},"Example Usage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://swap.cow.fi"},"https://swap.cow.fi")," - CoW Swap main page (Swap is default)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://swap.cow.fi/#/swap"},"https://swap.cow.fi/#/swap")," - Swap page"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://swap.cow.fi/#/limit-orders"},"https://swap.cow.fi/#/limit-orders")," - Limit orders page"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://swap.cow.fi/#/5/swap"},"https://swap.cow.fi/#/5/swap")," - Swap page on G\xf6rli network"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://swap.cow.fi/#/100/limit-orders"},"https://swap.cow.fi/#/100/limit-orders")," - Limit orders page on Gnosis chain network"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://swap.cow.fi/#/1/swap/COW/WETH"},"https://swap.cow.fi/#/1/swap/COW/WETH")," - Swap ",(0,n.kt)("inlineCode",{parentName:"li"},"COW")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"WETH")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://swap.cow.fi/#/100/limit-orders/WXDAI/COW"},"https://swap.cow.fi/#/100/limit-orders/WXDAI/COW")," - Create a limit order to sell ",(0,n.kt)("inlineCode",{parentName:"li"},"WXDAI")," for ",(0,n.kt)("inlineCode",{parentName:"li"},"COW")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://swap.cow.fi/#/1/swap/COW/WETH?sellAmount=100"},"https://swap.cow.fi/#/1/swap/COW/WETH?sellAmount=100")," - Swap ",(0,n.kt)("inlineCode",{parentName:"li"},"100 COW")," for ",(0,n.kt)("inlineCode",{parentName:"li"},"WETH")," (by current market price)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://swap.cow.fi/#/100/limit-orders/WETH/WXDAI?sellAmount=2&buyAmount=6000"},"https://swap.cow.fi/#/100/limit-orders/WETH/WXDAI?sellAmount=2&buyAmount=6000")," - Create a limit order to sell ",(0,n.kt)("inlineCode",{parentName:"li"},"2 WETH")," for ",(0,n.kt)("inlineCode",{parentName:"li"},"6000 WXDAI"))))}c.isMDXComponent=!0}}]);