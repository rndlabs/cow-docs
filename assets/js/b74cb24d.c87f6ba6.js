"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[5868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(y,c(c({ref:t},u),{},{components:r})):a.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const o={},c="Vault relayer",s={unversionedId:"smart-contracts/vault-relayer/introduction",id:"smart-contracts/vault-relayer/introduction",title:"Vault relayer",description:"The Vault relayer contract is an important component used to protect user funds from malicious solvers. As previously mentioned, the settlement contract allows using arbitrary on-chain liquidity through interactions (such as performing a swap on Balancer V2, or performing a Paraswap trade). If Vault and ERC20 allowances were made directly to a settlement contract, a malicious solver could drain user funds through the interaction mechanism. However, since these allowances are made to the Vault relayer contract and interactions to the contract are strictly forbidden, malicious solvers have no direct access to user funds. The settlement contract uses the vault relayer to withdraw user tokens only as part of the trade, which contains strong guarantees that the user's signed order parameters are respected.",source:"@site/docs/3_smart-contracts/vault-relayer/1_introduction.md",sourceDirName:"3_smart-contracts/vault-relayer",slug:"/smart-contracts/vault-relayer/introduction",permalink:"/cow-docs/docs/smart-contracts/vault-relayer/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3_smart-contracts/vault-relayer/1_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vault Relayer",permalink:"/cow-docs/docs/category/vault-relayer"},next:{title:"Balancer External Balances",permalink:"/cow-docs/docs/smart-contracts/vault-relayer/balancer-external-balances"}},l={},i=[],u={toc:i},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vault-relayer"},"Vault relayer"),(0,n.kt)("p",null,"The Vault relayer contract is an important component used to protect user funds from malicious solvers. As previously mentioned, the settlement contract allows using arbitrary on-chain liquidity through interactions (such as performing a swap on Balancer V2, or performing a Paraswap trade). If Vault and ERC20 allowances were made directly to a settlement contract, a malicious solver could drain user funds through the interaction mechanism. However, since these allowances are made to the Vault relayer contract and interactions to the contract are strictly forbidden, malicious solvers have no direct access to user funds. The settlement contract uses the vault relayer to withdraw user tokens only as part of the trade, which contains strong guarantees that the user's signed order parameters are respected."),(0,n.kt)("p",null,"The Vault relayer has access to user balancers through 3 mechanisms:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Balancer External Balances"),(0,n.kt)("li",{parentName:"ol"},"Balancer Internal Balances"),(0,n.kt)("li",{parentName:"ol"},"Fallback ERC20 Allowances")),(0,n.kt)("p",null,"Let's explore each way more deeply"))}p.isMDXComponent=!0}}]);