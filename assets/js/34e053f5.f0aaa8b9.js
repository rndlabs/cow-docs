"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[9801],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=s,u=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(u,r(r({ref:t},m),{},{components:a})):n.createElement(u,r({ref:t},m))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7880:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const i={},r="Output: Batch auction solutions",o={unversionedId:"off-chain-services/in-depth-solver-specification/output-batch-auction-solutions",id:"off-chain-services/in-depth-solver-specification/output-batch-auction-solutions",title:"Output: Batch auction solutions",description:'For the purposes of this page, any instance of the word "fee" shall be taken to mean "protocol fee" per the definitions.',source:"@site/docs/4_off-chain-services/in-depth-solver-specification/6_output-batch-auction-solutions.md",sourceDirName:"4_off-chain-services/in-depth-solver-specification",slug:"/off-chain-services/in-depth-solver-specification/output-batch-auction-solutions",permalink:"/cow-docs/docs/off-chain-services/in-depth-solver-specification/output-batch-auction-solutions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4_off-chain-services/in-depth-solver-specification/6_output-batch-auction-solutions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Input: Batch auction instances",permalink:"/cow-docs/docs/off-chain-services/in-depth-solver-specification/input-batch-auction-instances"},next:{title:"Getting notified about the ranking",permalink:"/cow-docs/docs/off-chain-services/in-depth-solver-specification/getting-notified-about-the-ranking"}},l={},p=[{value:"How a valid empty solution looks like",id:"how-a-valid-empty-solution-looks-like",level:4},{value:"Executed orders",id:"executed-orders",level:2},{value:"Foreign Liquidity orders",id:"foreign-liquidity-orders",level:2},{value:"Executed AMMs",id:"executed-amms",level:2},{value:"<strong>Using internal buffers</strong>",id:"using-internal-buffers",level:3},{value:"Prices of the traded tokens",id:"prices-of-the-traded-tokens",level:2},{value:"Approvals",id:"approvals",level:2},{value:"Interaction Data",id:"interaction-data",level:2},{value:"Score",id:"score",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"output-batch-auction-solutions"},"Output: Batch auction solutions"),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},'For the purposes of this page, any instance of the word "fee" shall be taken to mean "protocol fee" per the ',(0,s.kt)("a",{parentName:"p",href:"../../overview/definitions"},"definitions"),".")),(0,s.kt)("p",null,"The output is also formatted in JSON. We start with an example of how the simplest possible (i.e., empty) response looks like, and then describe the fields it contains."),(0,s.kt)("h4",{id:"how-a-valid-empty-solution-looks-like"},"How a valid empty solution looks like"),(0,s.kt)("p",null,"Here, we give an example of the simplest possible valid output, which corresponds to the empty solution, in order to showcase the required fields.\\"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "orders": {},\n  "foreign_liquidity_orders": [],\n  "amms": {},\n  "prices": {},\n  "approvals": [],\n  "interaction_data": [],\n  "score": "0"\n}\n')),(0,s.kt)("h2",{id:"executed-orders"},"Executed orders"),(0,s.kt)("p",null,'The "orders" key contains all orders that were selected for execution, and it is a required field. It maps to a dictionary, mapping each order id to a copy of the corresponding order input data, but containing two additional keys that specify the executed buy and sell amount. An example entry is given below.'),(0,s.kt)("p",null,'{% code overflow="wrap" %}'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"3": {\n    "allow_partial_fill": false,\n    "buy_amount": "88967366419390071936",\n    "buy_token": "0xba100000625a3754423978a60c9317c58a424e3d",\n    "exec_buy_amount": "88967366419390071936",\n    "exec_sell_amount": "2129248125",\n    "exec_fee_amount": null,\n    "is_liquidity_order": true,\n    "is_sell_order": false,\n    "sell_amount": "2129248126",\n    "sell_token": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"\n}\n')),(0,s.kt)("p",null,"{% endcode %}"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note for partially-fillable orders.")," In the case of a partially-fillable order, solvers are also required to report a fee. This is due to the fact that the fraction of the order that will be executed is decided by the solver, so having a predetermined fee assigned to the order is not reasonable. For this reason, the ",(0,s.kt)("inlineCode",{parentName:"p"},"exec_fee_amount")," entry cannot be null in the case of a partially fillable order, and instead it should be a stringified integer, describing the fee amount, always denominated in the sell token."),(0,s.kt)("h2",{id:"foreign-liquidity-orders"},"Foreign Liquidity orders"),(0,s.kt)("p",null,"In order to allow solvers to build solutions that use additional liquidity orders, besides the ones contained in the input JSON, there is a ",(0,s.kt)("inlineCode",{parentName:"p"},"foreign_liquidity_orders"),' key that maps to a list of "orders", where each entry describes the liquidity order as well as the executed buy and sell amounts. This is a required field. An example entry is given below.'),(0,s.kt)("p",null,'{% code overflow="wrap" %}'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"foreign_liquidity_orders": [\n    {\n        "order": {\n            "from": "0x4242424242424242424242424242424242424242",\n            "sellToken": "0x0101010101010101010101010101010101010101",\n            "buyToken": "0x0202020202020202020202020202020202020202",\n            "sellAmount": "101",\n            "buyAmount": "102",\n            "validTo": 3,\n            "appData": "0x0303030303030303030303030303030303030303030303030303030303030303",\n            "feeAmount": "13",\n            "kind": "sell",\n            "partiallyFillable": true,\n            "signingScheme": "eip1271",\n            "signature": "0x01020304"\n        },\n        "exec_sell_amount": "50",\n        "exec_buy_amount": "51"\n    }\n]\n')),(0,s.kt)("p",null,"{% endcode %}"),(0,s.kt)("p",null,"We now clarify the meaning of some of the entries above:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"appData"'),": this is a free 32-byte slot that does not, in any way, affect on-chain settlement. This might be utilised in the future to allow for additional functionality."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"signingScheme"')," and ",(0,s.kt)("inlineCode",{parentName:"li"},'"signature"'),": These two entries contain the relevant information for signing orders; the scheme used and the signature itself. Some more information about signing orders can be found ",(0,s.kt)("a",{parentName:"li",href:"https://docs.cow.fi/tutorials/how-to-submit-orders-via-the-api/4.-signing-the-order"},"here"),".")),(0,s.kt)("p",null,"As a final comment, and similar to the liquidity orders provided by the Driver, foreign liquidity orders are always matched at limit price and do not contribute surplus to the objective function. Moreover, a solution containing only (foreign) liquidity orders is not considered valid."),(0,s.kt)("h2",{id:"executed-amms"},"Executed AMMs"),(0,s.kt)("p",null,'The "amms" key maps to a dictionary containing all the AMMs that were used in the solution, their order of execution, as well as the traded amounts, and it is a required field. More specifically, all the information from the input is copied to the output entry, and there is an additional ',(0,s.kt)("inlineCode",{parentName:"p"},"execution")," key that maps to a list of AMM ",(0,s.kt)("em",{parentName:"p"},"executions")," (note that an AMM involving 4 or more tokens may be executed more than once). Each AMM execution has the following parameters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"buy_token"'),": the token id of the token that the AMM is buying (receiving)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"exec_buy_amount"'),": a stringified integer with the amount that the AMM buys."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"sell_token"'),": the token id of the token that the AMM is selling (sending)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"exec_sell_amount"'),": a stringified integer with the amount that the AMM sells."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"exec_plan"'),": this entry helps to specify the order in which the different AMM interactions are to be executed. It consists of two entries (which can be thought of as coordinates), ",(0,s.kt)("inlineCode",{parentName:"li"},'"position"')," and ",(0,s.kt)("inlineCode",{parentName:"li"},'"sequence"'),", that are non-negative integers, and a third boolean entry labeled ",(0,s.kt)("inlineCode",{parentName:"li"},'"internal"'),"; the ",(0,s.kt)("inlineCode",{parentName:"li"},"internal")," flag is discussed in the section below. The reason that two entries/coordinates are used is to more precisely describe potential dependencies among AMM orders. In particular, two AMM orders that have a different ",(0,s.kt)("inlineCode",{parentName:"li"},"sequence")," entry are independent and their relative order of execution does not matter. However, for all AMM orders with the same ",(0,s.kt)("inlineCode",{parentName:"li"},"sequence")," entry, the order specified by the ",(0,s.kt)("inlineCode",{parentName:"li"},"position")," entry must be respected, i.e., all such orders must be executed sequentially, in increasing order of the ",(0,s.kt)("inlineCode",{parentName:"li"},"position")," entry.")),(0,s.kt)("p",null,"An example of a Constant Product AMM execution entry is given below."),(0,s.kt)("p",null,'{% code overflow="wrap" %}'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"7": {\n    "cost": {\n        "amount": "11700636799687864",\n        "token": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"\n    },\n    "execution": [\n        {\n            "buy_token": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n            "exec_buy_amount": "535272056568359078",\n            "exec_plan": {\n                "position": 0,\n                "sequence": 0,\n                "internal": false\n            },\n            "exec_sell_amount": "28000000000000001461",\n            "sell_token": "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab"\n        }\n    ],\n    "fee": "0.003000",\n    "kind": "ConstantProduct",\n    "mandatory": false,\n    "reserves": {\n        "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab": "2.296178e+23",\n        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "4.375869e+21"\n    }\n}\n')),(0,s.kt)("p",null,"{% endcode %}"),(0,s.kt)("h3",{id:"using-internal-buffers"},(0,s.kt)("strong",{parentName:"h3"},"Using internal buffers")),(0,s.kt)("p",null,'We now discuss some additional functionality that solvers are allowed to use. Since the settlement contract holds balances of multiple tokens, solvers are in certain cases allowed to "internalise" an AMM interaction, in order to save on gas. More precisely, if there is an AMM interaction that buys token A and sells token B, a solver can decide to internalise the interaction if and only if the following two conditions are satisfied:'),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Token A is a safe token, i.e., the corresponding ",(0,s.kt)("inlineCode",{parentName:"li"},"accepted_for_internalization")," flag is set to ",(0,s.kt)("inlineCode",{parentName:"li"},"true"),". This means that the protocol is happy to store this token in the settlement contract."),(0,s.kt)("li",{parentName:"ol"},"There is enough balance of sell token B, i.e., at least as much amount as the sell amount of the AMM interaction. This is revealed by the ",(0,s.kt)("inlineCode",{parentName:"li"},"internal_buffer")," entry in the token description.")),(0,s.kt)("p",null,"If both conditions are satisfied, a solver can set the ",(0,s.kt)("inlineCode",{parentName:"p"},"internal")," flag to ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," in order to internalise the interaction:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"internal": true\n')),(0,s.kt)("p",null,"In such a case, the driver will remove the interaction, and so the solution will end up using less gas, get better ranking, and also be risk-free (at least the part involving the internalised AMM interaction). We stress that the ",(0,s.kt)("inlineCode",{parentName:"p"},"exec_plan")," coordinates must always be provided, even if the interaction will end up being internalised."),(0,s.kt)("h2",{id:"prices-of-the-traded-tokens"},"Prices of the traded tokens"),(0,s.kt)("p",null,'The "prices" key is a dictionary mapping each token id to its computed price in terms of the reference token, and it is a required field. Each price is an unsigned integer, and for scaling purposes, the numeraire is usually set to have a large enough value; usually, WETH is selected as the numeraire, which has 18 decimals, and so the price of 1 wei is set to 10\xb9\u2078. We clarify here that this is arbitrary, and is just selected for convenience. We also stress that a solution need only contain prices for the tokens appearing in the executed user orders, and that solvers are free to choose the unit of measure they will use.'),(0,s.kt)("p",null,"An example containing the computed prices of ",(0,s.kt)("a",{parentName:"p",href:"https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"},"USDC"),", ",(0,s.kt)("a",{parentName:"p",href:"https://etherscan.io/token/0xba100000625a3754423978a60c9317c58a424e3d"},"BAL")," and ",(0,s.kt)("a",{parentName:"p",href:"https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"},"WETH"),", where WETH is defined as the reference token, is given below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"prices": {\n    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "219193245742363509576247472",\n    "0xba100000625a3754423978a60c9317c58a424e3d": "5245932598960804", \n    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "1000000000000000000"\n}\n')),(0,s.kt)("p",null,"The above entries should be interpreted as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"1 wei (3rd entry) has a price of 1000000000000000000 = 10\xb9\u2078."),(0,s.kt)("li",{parentName:"ul"},"The lowest denomination of USDC (1st entry), i.e., 1 / 10\u2076 of USDC, has a price of 219193245742363509576247472 relative to the price of 10\xb9\u2078 that wei has. This translates to 1 USDC having a price of ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mn",{parentName:"mrow"},"219193245742363509576247472"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"6"))),(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"18")),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"18")))),(0,s.kt)("mo",{parentName:"mrow"},"\u2248"),(0,s.kt)("mn",{parentName:"mrow"},"0.000219193")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{219193245742363509576247472 \\cdot 10^6}{10^{18} \\cdot 10^{18}} \\approx 0.000219193")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.3629em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.0179em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7463em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.786em",marginRight:"0.0714em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"18"))))))))),(0,s.kt)("span",{parentName:"span",className:"mbin mtight"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7463em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.786em",marginRight:"0.0714em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"18")))))))))))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"219193245742363509576247472"),(0,s.kt)("span",{parentName:"span",className:"mbin mtight"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8913em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.931em",marginRight:"0.0714em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"6")))))))))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2248"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0.000219193")))))," WETH."),(0,s.kt)("li",{parentName:"ul"},"The lowest denomination of BAL (2nd entry) is 1 / 10\xb9\u2078 , and it has a price of 5245932598960804 relative to the price of 10\xb9\u2078 that wei has. This translates to 1 BAL having a price of ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mn",{parentName:"mrow"},"5245932598960804"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"18"))),(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"18")),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"18")))),(0,s.kt)("mo",{parentName:"mrow"},"\u2248"),(0,s.kt)("mn",{parentName:"mrow"},"0.005245933")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{5245932598960804 \\cdot 10^{18}}{10^{18} \\cdot 10^{18}} \\approx 0.005245933")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.3629em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.0179em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7463em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.786em",marginRight:"0.0714em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"18"))))))))),(0,s.kt)("span",{parentName:"span",className:"mbin mtight"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7463em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.786em",marginRight:"0.0714em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"18")))))))))))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"5245932598960804"),(0,s.kt)("span",{parentName:"span",className:"mbin mtight"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8913em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.931em",marginRight:"0.0714em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"18"))))))))))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2248"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0.005245933")))))," WETH.")),(0,s.kt)("h2",{id:"approvals"},"Approvals"),(0,s.kt)("p",null,'In order to allow solvers to propose solutions that interact with contracts/pools that are not provided by the Driver, there are 2 additional sections in the solution file. The first is the "approvals" key and the second is the "interaction',"_",'data" key (covered below). We clarify that both are required fields.'),(0,s.kt)("p",null,'The "approvals" key is a list where each entry consists of the following:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"spender"'),": the address of the target contract that we authorise to trade some token on the settlement contract's behalf."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"token"'),": the address of the token that we authorise."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"amount"'),": a stringified integer that corresponds to the (minimum) amount we authorise the target contract to use. ",(0,s.kt)("strong",{parentName:"li"},"We stress here")," that currently the behaviour is the following. If there is already sufficiently large (i.e., larger than the ",(0,s.kt)("inlineCode",{parentName:"li"},'"amount"')," entry) allowance set by a previous settlement, then the approval is ignored altogether. On the other hand, if the current allowance is lower than ",(0,s.kt)("inlineCode",{parentName:"li"},'"amount"'),", then the driver will set a maximum value for the approval (much larger than the actual ",(0,s.kt)("inlineCode",{parentName:"li"},'"amount"')," specified by the entry); this allows for future gas savings.\\\n\\\nIn case full control over approvals is required, a solver can skip this field and instead use a custom ",(0,s.kt)("a",{parentName:"li",href:"#interaction-data"},"interaction")," to set an exact approval.")),(0,s.kt)("p",null,"An example is given below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"approvals": [\n    {\n        "token": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",\n        "spender": "0xe592427a0aece92de3edee1f18e0157c05861564",\n        "amount": "3811321194"\n    }\n]\n')),(0,s.kt)("h2",{id:"interaction-data"},"Interaction Data"),(0,s.kt)("p",null,'In order to allow for more interactions (e.g., interacting with AMMs that are not provided by the Driver), the "interaction',"_",'data" key (which is a required field) maps to a list of encoded interactions, each consisting of the following:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"target"')," : the address of contract that the solution interacts with (required field)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"value"'),': a number corresponding to the ETH amount that the sender sends to the recipient; every ethereum transaction has such an entry, and thus, this is (almost always) set to zero "0x0" (required field).'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"call_data"'),": the encoded interaction data is given here as a string. (required field)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"inputs"'),": a list of the tokens and amounts sent to the target contract (required field)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"outputs"'),": a list of the tokens and amounts that are expected to be sent back to the settlement contract (required field)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"exec_plan"'),': this entry is identical to the corresponding entry in the AMMs section, specifying the order in which the interactions must be executed, and is an optional field. We note that the "internal" flag can still be used here.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"cost"'),': this entry is optional and can be used to describe the (estimated) cost of the interaction. This allows for solvers to express information regarding cost, and is mostly aimed to be used in cases where a solver is used as a price estimator as well. It consists of two keys, the "token" key that expresses the token in which the cost is express, and the "amount" key, which is the value describing the cost, in string format.')),(0,s.kt)("p",null,"An example is given below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"interaction_data": [\n    {\n        "target": "0xdef1c0ded9bec7f1a1670819833240f027b25eff",\n        "value": "0x0",\n        "call_data": "0x..."\n        "inputs": [\n            {\n                "amount": "9907695503532850274304",\n                "token": "0x853d955acef822db058eb8505911ed77f175b99e"\n            }\n        ],\n        "outputs": [\n            {\n                "amount": "6188703276265770703",\n                "token": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"\n            }\n        ],\n        "exec_plan": {\n            "sequence": 0,\n            "position": 1\n        },\n        "cost": {\n            "amount": "1000000000000000",\n            "token": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"\n        }\n    }\n]\n')),(0,s.kt)("h2",{id:"score"},"Score"),(0,s.kt)("p",null,'The score is the "bid" a solver makes for the batch, as it will get ranked according to it. The protocol picks the solution with the highest score, given that it is strictly positive. More details about the meaning of the score can be found ',(0,s.kt)("a",{parentName:"p",href:"solver-auction-and-rewards"},"here"),"."),(0,s.kt)("p",null,"We clarify here that the score is a stringified integer, that is denominated in wei."))}d.isMDXComponent=!0}}]);