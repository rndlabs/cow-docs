"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[7378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},o="Signature Schemes",s={unversionedId:"smart-contracts/settlement-contract/signature-schemes",id:"smart-contracts/settlement-contract/signature-schemes",title:"Signature Schemes",description:"CoW Protocol handles user orders that are provided off-chain. To verify that an order was approved by a user, the smart contract requires the user to provide a valid signature for that order.",source:"@site/docs/3_smart-contracts/settlement-contract/2_signature-schemes.md",sourceDirName:"3_smart-contracts/settlement-contract",slug:"/smart-contracts/settlement-contract/signature-schemes",permalink:"/cow-docs/docs/smart-contracts/settlement-contract/signature-schemes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3_smart-contracts/settlement-contract/2_signature-schemes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Settlement Contract",permalink:"/cow-docs/docs/smart-contracts/settlement-contract/README"},next:{title:"Vault Relayer",permalink:"/cow-docs/docs/category/vault-relayer"}},l={},p=[],d={toc:p},c="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"signature-schemes"},"Signature Schemes"),(0,a.kt)("p",null,"CoW Protocol handles user orders that are provided off-chain. To verify that an order was approved by a user, the smart contract requires the user to provide a valid signature for that order."),(0,a.kt)("p",null,"The protocol supports four different signing methods:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. EOA signatures with the ","[","eth","_","sign rpc call]")," (",(0,a.kt)("a",{parentName:"p",href:"https://eth.wiki/json-rpc/API#eth_sign"},"https://eth.wiki/json-rpc/API#eth","_","sign"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. EOA signatures with ","[","EIP-712 typed data]")," (",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"https://eips.ethereum.org/EIPS/eip-712"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. Smart-contract ","[","EIP-1271 signatures]")," (",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1271"},"https://eips.ethereum.org/EIPS/eip-1271"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. Pre-signing the order with an onchain transaction from the owner of the order.")),(0,a.kt)("p",null,"Except for pre-authorization, all signing schemes involve signing an ",(0,a.kt)("em",{parentName:"p"},"order digest")," that is based on the message structure of EIP-712."),(0,a.kt)("p",null,"The next section describes how to build the order digest, while the following sections describe each of the four signing schemes in detail."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"The domain separator"))),(0,a.kt)("p",null,"The domain separator is a byte string that uniquely represents a single deployment of the GPv2 contracts in a particular chain."),(0,a.kt)("p",null,"The domain separator is different in each of the chains where GPv2 is supported. This is done to make signatures for one network (e.g., Rinkeby) invalid in different networks (e.g., mainnet), so as to avoid network replay attacks. The same is the case for different deployments of the settlement contract in the same chain."),(0,a.kt)("p",null,"The domain separator is defined as prescribed by the ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator"},"EIP-712 standard")," with the following parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n\n  name: "Gnosis Protocol",\n\n  version: "v2",\n\n  chainId: /* chain ID for the current network: 1 for mainnet, 4 for Rinkeby, 100 for xDai */,\n\n  verifyingContract: /* address of the settlement contract */\n\n}\n')),(0,a.kt)("p",null,"The actual domain separator is the result of hashing the previous struct with ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712#definition-of-hashstruct"},"EIP-712's ",(0,a.kt)("inlineCode",{parentName:"a"},"hashStruct")),"."),(0,a.kt)("p",null,"You can retrieve the domain separator from the contract by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"domainSeparator()")," readonly function."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Computing the order digest"))),(0,a.kt)("p",null,"Signatures built with the ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_sign"),", EIP-712, and EIP-1271 schemes are created based on an order digest."),(0,a.kt)("p",null,"The order digest is a sequence of 32 bytes that uniquely describes the parameters of an order."),(0,a.kt)("p",null,"It is generated by encoding all information on the user order into a single struct and hashing the result as it is described in the ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712#specification"},"EIP-712 standard"),"."),(0,a.kt)("p",null,"It can be explicitly computed as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'orderDigest = keccak256("\\x19\\x01" \u2016 domainSeparator \u2016 hashStruct(orderStruct))\n')),(0,a.kt)("p",null,"The components are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keccak256"),", the standard unpadded Ethereum hashing function"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"\\x19\\x01"'),", two bytes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u2016"),", the byte-concatenation function"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domainSeparator"),", the domain separator"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hashStruct"),", the ",(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-712#definition-of-hashstruct"},"identically named function in the EIP-712 standard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"orderStruct"),", the order struct")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"hashOrder")," function exported by the Node package ",(0,a.kt)("inlineCode",{parentName:"p"},"@gnosis.pm/gp-v2-contracts")," can be used to compute the order digest without deriving each of the building blocks."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"eth","_","sign signatures"))),(0,a.kt)("p",null,"This signature type is the most commonly supported signing mechanism for EOAs."),(0,a.kt)("p",null,"The signature of an order is computed as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"signature = ethSign(orderDigest)\n")),(0,a.kt)("p",null,"The components are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ethSign"),", using the user's private key to ECDSA-sign a message prefixed with ",(0,a.kt)("inlineCode",{parentName:"li"},'"\\x19Ethereum signed message:\\n"')," and its length"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"orderDigest"),", the order digest")),(0,a.kt)("p",null,"Most Ethereum libraries support ",(0,a.kt)("inlineCode",{parentName:"p"},"ethSign")," signatures (",(0,a.kt)("a",{parentName:"p",href:"https://web3py.readthedocs.io/en/stable/web3.eth.html?highlight=sign#web3.eth.Eth.sign"},"web3"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/signer/#Signer-signMessage"},"ethers.io"),")."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"EIP-712 signatures"))),(0,a.kt)("p",null,"This signing method, also known as typed structured data signing, is the recommended signing method for EOAs, since the user will be able to see the full order data that is being signed in most wallet implementations (notably Metamask ",(0,a.kt)("inlineCode",{parentName:"p"},"signTypedData_v4")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"signTypedData_v3")," are compatible)."),(0,a.kt)("p",null,"The signature is computed as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"signature = ecdsaSign(orderDigest)\n")),(0,a.kt)("p",null,"The components are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ecdsaSign"),", using the user's private key to ECDSA-sign the message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"orderDigest"),", the order digest")),(0,a.kt)("p",null,"Many Ethereum libraries have some degree of support for sign typed data without building the order digest by hand (for example, ",(0,a.kt)("a",{parentName:"p",href:"https://web3py.readthedocs.io/en/stable/web3.eth.html?highlight=sign_typed_data#web3.eth.Eth.sign_typed_data"},"web3"),"  and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/signer/#Signer-signTypedData"},"ethers.io"),")."),(0,a.kt)("p",null,"In any case, you may want to read about the domain separator and the order struct."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"EIP-1271 signatures"))),(0,a.kt)("p",null,"This signing mechanism is the only option that provides offline signatures to orders originating from smart contracts."),(0,a.kt)("p",null,"In order to support smart-contract orders, the trading smart contract must implement the ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1271#specification"},"EIP-1271 interface"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"signature = traderAddress \u2016 eip1271Signature\n")),(0,a.kt)("p",null,"The components are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"traderAddress"),", the address of the smart contract that signs the order"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u2016"),", the byte-concatenation function"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eip1271Signature"),", any bitstring that is a valid signature for the contract for the order")),(0,a.kt)("p",null,"For an order to be accepted, the EIP-1271 signature must be valid for the ",(0,a.kt)("inlineCode",{parentName:"p"},"orderDigest")," message, that is in Solidity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"isValidSignature(orderDigest, eip1271Signature) == MAGICVALUE\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Pre-sign"))),(0,a.kt)("p",null,"This is the only signing method that supports both EOA and smart-contract traders."),(0,a.kt)("p",null,"The signature is simply the 20-bit address of the trader:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"signature = traderAddress\n")),(0,a.kt)("p",null,"In order for a signature to be valid, the user must have pre-approved the order on-chain."),(0,a.kt)("p",null,"To do that, the trader must be the sender of an on-chain call to the settlement-contract function ",(0,a.kt)("inlineCode",{parentName:"p"},"setPreSignature")," on input the order uid of the order that needs to be signed. See here for information on how to compute the order uid."),(0,a.kt)("p",null,"Note that if an order was already filled, then presigning it does ",(0,a.kt)("em",{parentName:"p"},"not")," make it tradable again."))}h.isMDXComponent=!0}}]);