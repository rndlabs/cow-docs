"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[5860],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,m=u["".concat(i,".").concat(h)]||u[h]||p[h]||a;return r?o.createElement(m,c(c({ref:t},d),{},{components:r})):o.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={},c="Order Creation",s={unversionedId:"smart-contracts/eth-flow-contract/order-creation",id:"smart-contracts/eth-flow-contract/order-creation",title:"Order Creation",description:"The user calls a function on the eth-flow contract to create an order:",source:"@site/docs/3_smart-contracts/eth-flow-contract/6_order-creation.md",sourceDirName:"3_smart-contracts/eth-flow-contract",slug:"/smart-contracts/eth-flow-contract/order-creation",permalink:"/cow-docs/docs/smart-contracts/eth-flow-contract/order-creation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3_smart-contracts/eth-flow-contract/6_order-creation.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Orders in Storage",permalink:"/cow-docs/docs/smart-contracts/eth-flow-contract/orders-in-storage"},next:{title:"Order Execution",permalink:"/cow-docs/docs/smart-contracts/eth-flow-contract/order-execution"}},i={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"order-creation"},"Order Creation"),(0,n.kt)("p",null,"The user calls a function on the eth-flow contract to create an order:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"function createOrder(EthFlowOrder.Data order) payable\n")),(0,n.kt)("p",null,"The parameters of the order creation struct can be seen ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cowprotocol/ethflowcontract/blob/v1.0.0/src/libraries/EthFlowOrder.sol#L19-L45"},"in the source code")," (together with their description) and are:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"IERC20 buyToken\naddress receiver\nuint256 sellAmount\nuint256 buyAmount\nbytes32 appData\nuint256 feeAmount\nuint32 validTo\nbool partiallyFillable\nint64 quoteId\n")),(0,n.kt)("p",null,"All parameters have the same role as their namesake in the CoW Swap order struct with the exception of ",(0,n.kt)("inlineCode",{parentName:"p"},"quoteId"),". The latter parameter is the quote id obtained when requesting a quote for this trade from the CoW Swap API."),(0,n.kt)("p",null,"As of now, eth-flow orders are not matched by the CoW Swap infrastructure unless the quote id refers to a valid and fresh quote in the API."),(0,n.kt)("p",null,"Some checks are performed on order creation. Failing any of these checks means that the transaction reverts."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The amount of ETH sent along with the transaction must be exactly what is needed to cover the sell amount plus the fees."),(0,n.kt)("li",{parentName:"ol"},"The order must be valid at the time the transaction is mined.")),(0,n.kt)("p",null,"The order parameters are used to compute the order digest according to the ",(0,n.kt)("a",{parentName:"p",href:"/cow-docs/docs/smart-contracts/eth-flow-contract/user-and-eth-flow-contract-orders"},"order mapping"),". As mentioned before, the call reverts if an order with the same digest already exists or is invalidated; otherwise a new order is added to storage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"user order digest -> validTo || msg.sender\n")))}p.isMDXComponent=!0}}]);