"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[7005],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(r),u=n,m=s["".concat(d,".").concat(u)]||s[u]||f[u]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[s]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={},i="Create the order metadata file",c={unversionedId:"front-end/creating-app-ids/create-the-order-meta-data-file/introduction",id:"front-end/creating-app-ids/create-the-order-meta-data-file/introduction",title:"Create the order metadata file",description:"There's a tool part of CoW Protocol Explorer to assist in the process of defining a custom metadata file. It's available at https://explorer.cow.fi/appdata. There you will be able to interactively build the file, upload it to IPFS and decode existing appData hashes.",source:"@site/docs/2_front-end/creating-app-ids/create-the-order-meta-data-file/1_introduction.md",sourceDirName:"2_front-end/creating-app-ids/create-the-order-meta-data-file",slug:"/front-end/creating-app-ids/create-the-order-meta-data-file/introduction",permalink:"/cow-docs/docs/front-end/creating-app-ids/create-the-order-meta-data-file/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2_front-end/creating-app-ids/create-the-order-meta-data-file/1_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating the order metadata file",permalink:"/cow-docs/docs/category/creating-the-order-metadata-file"},next:{title:"Metadata",permalink:"/cow-docs/docs/front-end/creating-app-ids/create-the-order-meta-data-file/metadata"}},d={},l=[],p={toc:l},s="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-the-order-metadata-file"},"Create the order metadata file"),(0,n.kt)("p",null,"There's a tool part of CoW Protocol Explorer to assist in the process of defining a custom metadata file. It's available at ",(0,n.kt)("a",{parentName:"p",href:"https://explorer.cow.fi/appdata"},"https://explorer.cow.fi/appdata"),". There you will be able to interactively build the file, upload it to IPFS and decode existing appData hashes."),(0,n.kt)("p",null,"Alternatively, you can also produce the file manually. Create a text file document with the following content, where: version, appCode, metadata is mandatory environment and referrer are optional"),(0,n.kt)("p",null,"For more details on the file format, go to the spec."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "version": "0.4.0",\n  "appCode": "YouAppCode",\n  "environment": "production",\n  "metadata": {\n    "referrer": {\n      "version": "0.1.0",\n      "referrer": "0x0000000000000000000000000000000000000000"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);