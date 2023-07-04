"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[6997],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=r.createContext({}),i=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=i(a),m=o,h=l["".concat(d,".").concat(m)]||l[m]||u[m]||n;return a?r.createElement(h,p(p({ref:t},s),{},{components:a})):r.createElement(h,p({ref:t},s))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,p=new Array(n);p[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[l]="string"==typeof e?e:o,p[1]=c;for(var i=2;i<n;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var r=a(7462),o=(a(7294),a(3905));const n={},p="Get the AppData Hex",c={unversionedId:"cow-sdk/order-meta-data-appdata/get-the-appdata-hex",id:"cow-sdk/order-meta-data-appdata/get-the-appdata-hex",title:"Get the AppData Hex",description:"The AppData hex points to an IPFS document with the metadata attached to the order.",source:"@site/docs/6_cow-sdk/order-meta-data-appdata/3_get-the-appdata-hex.md",sourceDirName:"6_cow-sdk/order-meta-data-appdata",slug:"/cow-sdk/order-meta-data-appdata/get-the-appdata-hex",permalink:"/cow-docs/docs/cow-sdk/order-meta-data-appdata/get-the-appdata-hex",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/6_cow-sdk/order-meta-data-appdata/3_get-the-appdata-hex.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a metadata document",permalink:"/cow-docs/docs/cow-sdk/order-meta-data-appdata/create-a-meta-data-document"},next:{title:"Download a document given the AppData",permalink:"/cow-docs/docs/cow-sdk/order-meta-data-appdata/download-a-document-given-the-appdata"}},d={},i=[],s={toc:i},l="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(l,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-the-appdata-hex"},"Get the AppData Hex"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AppData")," hex points to an IPFS document with the metadata attached to the order."),(0,o.kt)("p",null,"You can calculate the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppData")," Hex, and its corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"cidV0")," using the SDK:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { MetadataApi } from '@cowprotocol/app-data'\n\nexport const metadataApi = new MetadataApi()\n\nconst { appDataHash, cidv0 } = await metadataApi.calculateAppDataHash(appDataDoc)\n")),(0,o.kt)("p",null,"Note how this operation is deterministic, so given the same document, it will always generate the same hash. Also, this operation is done locally, so it's not uploading anything to IPFS, its just calculating what will be the hash that maps to the provided document."),(0,o.kt)("p",null,"This method can be used to calculate the actual hash before uploading the document to IPFS. This way, when you post an new order, you don't need to wait until the uploading to IPFS is completed."))}u.isMDXComponent=!0}}]);