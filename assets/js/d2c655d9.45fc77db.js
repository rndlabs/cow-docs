"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[2918],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=l(o),u=n,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||s;return o?r.createElement(f,i(i({ref:t},h),{},{components:o})):r.createElement(f,i({ref:t},h))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<s;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6980:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const s={},i="Solvers Competition",a={unversionedId:"off-chain-services/solvers/solvers-competition",id:"off-chain-services/solvers/solvers-competition",title:"Solvers Competition",description:'As stated in the "Road to decentralisation" section, there are different phases in which the solver\'s competition will open up to new users. To recap, the methods for a user to become a solver differ depending on which phase the protocol is at:',source:"@site/docs/4_off-chain-services/solvers/3_solvers-competition.md",sourceDirName:"4_off-chain-services/solvers",slug:"/off-chain-services/solvers/solvers-competition",permalink:"/cow-docs/docs/off-chain-services/solvers/solvers-competition",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4_off-chain-services/solvers/3_solvers-competition.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Solver Landscape",permalink:"/cow-docs/docs/off-chain-services/solvers/type-of-solvers"},next:{title:"In-depth: Solver specification",permalink:"/cow-docs/docs/category/in-depth-solver-specification"}},c={},l=[],h={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"solvers-competition"},"Solvers Competition"),(0,n.kt)("p",null,'As stated in the "Road to decentralisation" section, there are different phases in which the solver\'s competition will open up to new users. To recap, the methods for a user to become a solver differ depending on which phase the protocol is at:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Phase 1:")," having a trust relationship with the Gnosis Team will allow for collaboration to spark, and for them to manually include your solver in the authenticated solvers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Phase 2:")," the protocol is more mature, and the GnosisDAO is the entity in charge of authenticating solvers according to the votes of the proposal, and the bond they have placed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Phase 3:")," the protocol will aim to make the orderbook decentralised in a P2P client network where everyone can validate the orders registered in a trustless manner.")),(0,n.kt)("p",null,"Once the solver has been authenticated and included in the Allowlist smart contract, it will be able to submit batch settlement solutions and obtain rewards according to their performance."),(0,n.kt)("p",null,'At the moment, the rust backend queries and ranks solutions of the different solvers based on formally and well-defined criterion, which can be roughly described as "the solution that provides the most utility to the orders". The solver with the best solution, according to this criterion, that has passed a transaction simulation of the batch settlement solution is then chosen for settlement submission. If the submission is successful, the solver batch gets executed on-chain; in such a case, all the ',(0,n.kt)("a",{parentName:"p",href:"../../overview/definitions"},"protocol fees")," from that batch go to the solver for covering its execution costs, as well as the rewards for being the winning solver. In the event that the submission fails, the driver runs again and re-fetches liquidity to start a new solution-finding process."),(0,n.kt)("p",null,"For a solver to become part of the solvers' competitions, besides having to go through the authentication requirements, it also needs to prepare certain technical aspects. In order for the backend to integrate a new solver, this one should provide an endpoint to return a valid settlement transaction (cf. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gnosis/gp-v2-contracts/blob/main/src/contracts/GPv2Settlement.sol#L121"},"smart contracts"),"). After that, the new solver is allowed to fetch orders using the ",(0,n.kt)("a",{parentName:"p",href:"https://protocol-mainnet.dev.gnosisdev.com/api/#/default/get_api_v1_solvable_orders"},"solvable orders")," endpoint. Various inputs are needed, but most important is the on-chain liquidity that the baseline solver can handle, which could also be passed into the HTTP request (cf. http","_","solver.rs). In the future, the backend will provide an endpoint to push solutions in specific time intervals."),(0,n.kt)("p",null,"More information on full decentralisation of the solver architecture can be found ",(0,n.kt)("a",{parentName:"p",href:"../../overview/road-to-decentralisation"},"here"),"."))}d.isMDXComponent=!0}}]);