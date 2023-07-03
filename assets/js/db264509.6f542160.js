"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,f=u["".concat(i,".").concat(h)]||u[h]||d[h]||a;return r?o.createElement(f,l(l({ref:t},p),{},{components:r})):o.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={},l="How to test a solver locally",s={unversionedId:"tutorials/how-to-test-a-solver-locally",id:"tutorials/how-to-test-a-solver-locally",title:"How to test a solver locally",description:"In this short tutorial, we describe the steps needed in order to set up the Driver locally and allow a custom Solver to interact with it.",source:"@site/docs/5_tutorials/5_how-to-test-a-solver-locally.md",sourceDirName:"5_tutorials",slug:"/tutorials/how-to-test-a-solver-locally",permalink:"/cow-docs/docs/tutorials/how-to-test-a-solver-locally",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5_tutorials/5_how-to-test-a-solver-locally.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conclusion",permalink:"/cow-docs/docs/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/conclusion"},next:{title:"Solver Workshop",permalink:"/cow-docs/docs/tutorials/solver-workshop"}},i={},c=[{value:"Installing Rust",id:"installing-rust",level:3},{value:"Driver setup",id:"driver-setup",level:3},{value:"Solver deployment",id:"solver-deployment",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-test-a-solver-locally"},"How to test a solver locally"),(0,n.kt)("p",null,"In this short tutorial, we describe the steps needed in order to set up the ",(0,n.kt)("em",{parentName:"p"},"Driver")," locally and allow a custom ",(0,n.kt)("em",{parentName:"p"},"Solver")," to interact with it."),(0,n.kt)("h3",{id:"installing-rust"},"Installing Rust"),(0,n.kt)("p",null,"The first step is to install Rust by using the Rustup tool. We strongly encourage the reader to follow the steps described here:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"https://www.rust-lang.org/learn/get-started")),(0,n.kt)("p",null,"Once we are done with the installation, we turn to the Driver setup."),(0,n.kt)("h3",{id:"driver-setup"},"Driver setup"),(0,n.kt)("p",null,"Reading the state of the blockchain requires issuing RPC calls to an Ethereum node. The simplest way to do so is by using a third party service like ",(0,n.kt)("a",{parentName:"p",href:"https://infura.io/"},"Infura"),' to get access to an Ethereum node; thus, in this tutorial we use Infura. After registering for a free Infura account, Infura offers "endpoints" for the Mainnet and different testnets. We will refer to those as node-urls. Since the CoW Protocol only runs on Mainnet, Rinkeby and GnosisChain, we need to select one of those.'),(0,n.kt)("p",null,"In order to start the Driver, we can execute the following command in a terminal:\\\n\\\n",(0,n.kt)("inlineCode",{parentName:"p"},"cargo run -p solver -- --orderbook-url")," ",(0,n.kt)("a",{parentName:"p",href:"https://api.cow.fi/mainnet"},(0,n.kt)("inlineCode",{parentName:"a"},"https://api.cow.fi/mainnet")),"`",(0,n.kt)("inlineCode",{parentName:"p"},"\\\n"),'--node-url "',(0,n.kt)("a",{parentName:"p",href:"https://mainnet.infura.io/v3/"},"https://mainnet.infura.io/v3/"),'<INFURA_KEY>"',(0,n.kt)("inlineCode",{parentName:"p"},"\\\n"),'--cow-dex-ag-solver-url "',(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000%22%60%5C"},'http://127.0.0.1:8000"`\\'),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"--solver-account 0xa6DDBD0dE6B310819b49f680F65871beE85f517e"),"\\\n",(0,n.kt)("inlineCode",{parentName:"p"},"--solvers CowDexAg"),"\\\n",(0,n.kt)("inlineCode",{parentName:"p"},"--transaction-strategy DryRun")),(0,n.kt)("p",null,"where the ",(0,n.kt)("inlineCode",{parentName:"p"},"INFURA_KEY")," entry should be replaced with the key associated with our Infura account."),(0,n.kt)("p",null,"We clarify that the ",(0,n.kt)("inlineCode",{parentName:"p"},"cow-dex-ag-solver-url")," is just a placeholder flag that indicates where the http solver (i.e., a custom solver) receives requests (which, in our case, will be a localhost server whose IP address is the standard 127.0.0.1), and the ",(0,n.kt)("inlineCode",{parentName:"p"},"CowDexAg")," is just a dummy name for the solver we will use. These should not be edited!"),(0,n.kt)("h3",{id:"solver-deployment"},"Solver deployment"),(0,n.kt)("p",null,"Once the Driver is running, we can now locally deploy our solver server so that it can receive the instances from the Driver, solve them, and then report back the solution to the Driver. The solver receives the instance in JSON format (as described ",(0,n.kt)("a",{parentName:"p",href:"/cow-docs/docs/off-chain-services/in-depth-solver-specification/README"},"here"),") via an HTTP Get request, solves the instance and then, via an HTTP POST request, sends the solution (again in JSON format) to the Driver."),(0,n.kt)("p",null,"An example of a publicly available solver, namely the Dex Cow Solver, can be found here:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/gnosis/cow-dex-solver"},"https://github.com/gnosis/cow-dex-solver")),(0,n.kt)("p",null,"You can follow the simple instructions of the Dex Cow Solver to locally deploy that particular solver."),(0,n.kt)("p",null,"For potential questions/issues regarding the testing of solvers, we also encourage everyone to contact our team in the CoW Swap Discord: ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/invite/cowprotocol"},"https://discord.com/invite/cowprotocol"),"\\\n\\"))}d.isMDXComponent=!0}}]);