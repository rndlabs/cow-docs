"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[9670],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),l=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(a),u=n,f=c["".concat(m,".").concat(u)]||c[u]||d[u]||o;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3627:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={},i="4. Checking Limit Order Status",s={unversionedId:"tutorials/submit-limit-orders-via-api/submitting-the-limit-order/checking-limit-order-status",id:"tutorials/submit-limit-orders-via-api/submitting-the-limit-order/checking-limit-order-status",title:"4. Checking Limit Order Status",description:"In order to follow if/when your order has been matched you can either subscribe to \u201cTrade\u201d events by the Settlement Contract:",source:"@site/docs/5_tutorials/submit-limit-orders-via-api/submitting-the-limit-order/4.-checking-limit-order-status.md",sourceDirName:"5_tutorials/submit-limit-orders-via-api/submitting-the-limit-order",slug:"/tutorials/submit-limit-orders-via-api/submitting-the-limit-order/checking-limit-order-status",permalink:"/cow-docs/docs/tutorials/submit-limit-orders-via-api/submitting-the-limit-order/checking-limit-order-status",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5_tutorials/submit-limit-orders-via-api/submitting-the-limit-order/4.-checking-limit-order-status.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3. Placing the Limit Order",permalink:"/cow-docs/docs/tutorials/submit-limit-orders-via-api/submitting-the-limit-order/placing-the-limit-order"},next:{title:"CoW Protocol trades with a Gnosis Safe Wallet",permalink:"/cow-docs/docs/category/cow-protocol-trades-with-a-gnosis-safe-wallet"}},m={},l=[],p={toc:l},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"4-checking-limit-order-status"},"4. Checking Limit Order Status"),(0,n.kt)("p",null,"In order to follow if/when your order has been matched you can either subscribe to \u201cTrade\u201d events by the",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x3328f5f2cEcAF00a2443082B657CedEAf70bfAEf"}," Settlement Contract"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import GPv2SettlementArtefact from "@gnosis.pm/gp-v2-contracts/deployments/mainnet/GPv2Settlement.json";\nimport { Contract, ethers } from "ethers";\nconst uid = <uid to follow>;\nconst TRADE_TIMEOUT_SECONDS = 30*60\nconst settlement = new Contract(\u201c0x9008D19f58AAbD9eD0D60971565AA8510560ab41\u201d, GPv2SettlementArtefact.abi, ethers.provider)\nconst traded = new Promise((resolve: (value: boolean) => void) => {\nethers.provider.on(settlement.filters.Trade(trader), (log) => {\n// Hacky way to verify that the UID is part of the event data\nif (log.data.includes(uid.substring(2))) {\nresolve(true);\n}\n});\n});\nconst timeout = new Promise((resolve: (value: boolean) => void) => {\nsetTimeout(resolve, TRADE_TIMEOUT_SECONDS*1000, false);\n});\nconst hasTraded = await Promise.race([traded, timeout]);\nThis script waits up to 30 minutes to find a trade event before eventually timing out.\nOr you can query our API using the order ID that you generated earlier\nhttps://api.cow.fi/mainnet/api/v1/trades?orderUid=0xc21b7756caf1f6df13e9947767204620371ca791a4b91db8620f04905d25b608e0b3700e0aadcb18ed8d4bff648bc99896a18ad160ef0bca\n[\n{\n"blockNumber": 12826021,\n"logIndex": 31,\n"orderUid": "0xc21b7756caf1f6df13e9947767204620371ca791a4b91db8620f04905d25b608e0b3700e0aadcb18ed8d4bff648bc99896a18ad160ef0bca",\n"buyAmount": "80623566",\n"sellAmount": "100000000000000000000",\n"sellAmountBeforeFees": "89287648398497935360",\n"owner": "0xe0b3700e0aadcb18ed8d4bff648bc99896a18ad1",\n"buyToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",\n"sellToken": "0x1a5f9352af8af974bfc03399e3767df6370d82e4",\n"txHash": "0xbcdd49946b56564b7ba7403ab63a2316ece5c6e12657782ffda620d192e591a0"\n}\n]\n')),(0,n.kt)("p",null,"If your order was partially fillable and traded in multiple chunks you may find one entry per trade.\\"),(0,n.kt)("p",null,"For convenience, you can also check the status of your order using the CoW Protocol API at ",(0,n.kt)("a",{parentName:"p",href:"https://api.cow.fi/$network/api/v1/orders/$orderUid"},"https://api.cow.fi/",(0,n.kt)("span",{parentName:"a",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"w"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"k"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"p"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,n.kt)("mi",{parentName:"mrow"},"v"),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"network/api/v1/orders/")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"tw"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"or"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,n.kt)("span",{parentName:"span",className:"mord"},"/"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord"},"/"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.kt)("span",{parentName:"span",className:"mord"},"1/"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"or"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"ers"),(0,n.kt)("span",{parentName:"span",className:"mord"},"/"))))),"orderUid"),". For example: ",(0,n.kt)("a",{parentName:"p",href:"https://api.cow.fi/mainnet/api/v1/orders/0x1792f3fc1615117bef538ab7e830e4c882f9b51d27aadcc14dd10754bb6b5423baaea72417f4dc3e0f52a1783b0913d0f3516634632b58b1"},"https://api.cow.fi/mainnet/api/v1/orders/0x1792f3fc1615117bef538ab7e830e4c882f9b51d27aadcc14dd10754bb6b5423baaea72417f4dc3e0f52a1783b0913d0f3516634632b58b1"),"\\"),(0,n.kt)("p",null,"This is it. We hope you have been able to follow this tutorial end to end and made a successful trade. If you have any questions or are planning to write some utility software (e.g. signing logic in another language) please reach out to us on",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/cowswap"}," Discord"),", we are always happy to help."),(0,n.kt)("p",null,"Happy Trading!"),(0,n.kt)("p",null,"\\"))}d.isMDXComponent=!0}}]);