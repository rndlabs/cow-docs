"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[3473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(r),u=o,f=l["".concat(p,".").concat(u)]||l[u]||h[u]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="Get the digest hash from the CID",s={unversionedId:"front-end/creating-app-ids/get-the-digest-hash-from-the-cid",id:"front-end/creating-app-ids/get-the-digest-hash-from-the-cid",title:"Get the digest hash from the CID",description:"Now that your file has been uploaded to IPFS, there's one last step to get the appData:",source:"@site/docs/2_front-end/creating-app-ids/4_get-the-digest-hash-from-the-cid.md",sourceDirName:"2_front-end/creating-app-ids",slug:"/front-end/creating-app-ids/get-the-digest-hash-from-the-cid",permalink:"/cow-docs/docs/front-end/creating-app-ids/get-the-digest-hash-from-the-cid",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2_front-end/creating-app-ids/4_get-the-digest-hash-from-the-cid.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Upload the file to IPFS",permalink:"/cow-docs/docs/front-end/creating-app-ids/upload-the-file-to-ipfs"},next:{title:"CoW Protocol Custom Linking",permalink:"/cow-docs/docs/front-end/cow-protocol-custom-linking"}},p={},c=[],d={toc:c},l="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-the-digest-hash-from-the-cid"},"Get the digest hash from the CID"),(0,o.kt)("p",null,"Now that your file has been uploaded to IPFS, there's one last step to get the appData:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Head to ",(0,o.kt)("a",{parentName:"li",href:"https://cid.ipfs.io/"},"https://cid.ipfs.io/")),(0,o.kt)("li",{parentName:"ul"},"Enter the CID from the file you uploaded"),(0,o.kt)("li",{parentName:"ul"},'Get the "Digest (Hex)"')),(0,o.kt)("p",null,"![Screenshot of CID inspector, highlighting the Digest (Hex) field]","(/img/Screen Shot 2022-08-24 at 10.29.01.png)"),(0,o.kt)("p",null,"The digest hash is what is used as ",(0,o.kt)("strong",{parentName:"p"},"appData")," and should be included in your orders to track your created ",(0,o.kt)("strong",{parentName:"p"},"appCode"),"."),(0,o.kt)("p",null,"If you are instead using the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.cow.fi/appdata?tab=encode"},"CoW Protocol Explorer's appData tool"),", the appData hash will be displayed in the interface."))}h.isMDXComponent=!0}}]);