"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-from-dom"),o=require("zustand"),n=require("xpath-range");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=a(e),l=a(t);!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===o&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('.comment{margin-bottom:1rem}.floating-toolbar{align-items:center;background:#fff;border-radius:12px;box-shadow:0 54px 55px rgba(0,0,0,.25),0 -12px 30px rgba(0,0,0,.12),0 4px 6px rgba(0,0,0,.12),0 12px 13px rgba(0,0,0,.17),0 -3px 5px rgba(0,0,0,.09);display:flex;overflow:hidden}.floating-toolbar span{color:#000;cursor:pointer;font-size:28px;padding:6px 18px;position:relative;transition:all .2s ease-in-out}.floating-toolbar span:hover{background:#f2f2f2;color:#0b0b78}.floating-toolbar-close{align-items:center;background:#fff;border-radius:100%;color:#0b0b78;cursor:pointer;display:flex;height:30px;justify-content:center;position:absolute;right:-15px;top:-15px;transition:all .2s ease;width:30px}.floating-toolbar-close:hover{scale:1.1}.modal-container-reed{align-items:center;backdrop-filter:blur(4px);background:rgba(0,0,0,.5);display:flex;height:100vh;justify-content:center;position:fixed;top:0;width:100vw;z-index:100}.modal-content-reed{aspect-ratio:1;background:hsla(0,0%,76%,.8);border-radius:20px;box-shadow:.9px 0 0 .2px hsla(0,3%,50%,.8);flex-direction:column;padding:10px;width:40%}.container-reed,.modal-content-reed{align-items:center;display:flex;justify-content:center;margin:auto}.container-reed{flex-wrap:wrap;width:70%}.color-container-reed{align-items:center;display:flex;flex-direction:column;margin:30px}.color-box{background:rgba(0,0,0,.8);border-radius:100%;box-shadow:0 4px 8px rgba(0,0,0,.7);cursor:pointer;height:38px;transition:all .3s ease;width:38px}.color-box:hover{scale:1.2}.color-name{color:#280f60;margin-top:5px}.btn-submit-reed{background:#280f60;border:1px solid #280f60;border-radius:9px;color:#fff;cursor:pointer;font-family:Times New Roman,Times,serif;font-size:22px;margin-bottom:20px;outline:none;padding:14px 36px;transition:all .3s ease}.btn-submit-reed:hover{background:#482696}.modal-content-reed h1{color:#0b0b78}.comment{border:1px dashed gold;border-radius:12px;box-shadow:0 4px 8px rgba(0,0,0,.1);cursor:pointer;margin:0 2px;overflow:hidden;padding:6px 12px 6px 32px;position:relative}.hover-card{background:#000;background:#fff;background:linear-gradient(180deg,#ffe8e8,#fff);border:30px solid trasparent;border-radius:20px;box-shadow:0 4px 8px #ffe8e8;color:#000;font-style:italic;left:50%;max-height:300px;max-width:450px;overflow-y:scroll;padding:15px 20px;position:fixed;top:-300px;transform:translate(-50%,-50%);transition:all 1s ease;transition-delay:.5s;width:100%;z-index:100}.comment:hover>.hover-card{top:30%;transition-delay:0s}.hover-title{border-bottom:.2px solid #0b0b78;color:#0b0b78;display:block;font-weight:900;margin-bottom:16px;text-transform:uppercase;width:100%}.comment:before{color:"#fff";content:"  💬  ";height:100%;left:0;padding:0 6px;position:absolute;width:100%}.text-shadow-reed{font-weight:"bolder";text-shadow:.1px .1px #000}.highlight .bold{font-family:Times New Roman,Times,serif}.bold{font-weight:700;letter-spacing:1}.highlight{border-radius:4px;padding:4px}.notes-input{background-color:hsla(0,0%,100%,.02);border:none;border-radius:12px;color:#000;font-size:18px;height:60%;outline:none;padding:12px;width:90%}.gold{background:gold}.red{background:red;color:#fff}.white{background:#fff;color:#000}.blue{background:blue;color:#fff}.green{background:green;color:#fff}.purple{background:purple;color:#fff}.orange{background:orange}.grey{background:grey}::-moz-selection{background:gold;color:#000}::selection{background:gold;color:#000}@keyframes fadeInDown{to{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{to{opacity:1;transform:translateY(0)}}');const s=o.create((e=>({openComment:!1,toggleCommentModal:()=>e((e=>({openComment:!e.openComment})))}))),c=o.create((e=>({dom:null,setDom:t=>e((e=>({dom:t})))}))),i=o.create((e=>({open:!1,toggleModal:()=>e((e=>({open:!e.open})))}))),d={name:"",value:""},p=o.create((e=>({type:{...d},config:{xPath:"",selectedText:""},changeType:({name:t,value:o})=>e((e=>({type:{...e.type,name:t,value:o}}))),changeConfig:({xPath:t,selectedText:o})=>e((e=>({config:{...e.config,xPath:t,selectedText:o}})))})));const u=e=>{let t=[];if(e?.props?.children?.length>0&&"string"!=typeof e?.props?.children){const o=e?.props?.children.map((e=>e.type?u(e):e));t=[...o]}const o={...e?.props}||{};o.key=Date.now()+"."+Math.random(1e3);let n=e?.type?.toLowerCase();return r.default.createElement(n,o,t.length>0?t:null)};function m(){const e=c((e=>e.dom)),t=c((e=>e.setDom)),o=p((e=>e.type)),n=p((e=>e.changeType)),a=p((e=>e.config)),r=p((e=>e.changeConfig)),l=i((e=>e.toggleModal));function s(e,t){let n=t;if(t||(n=a.xPath,n.reverse()),e?.props?.children.length){let t=n.pop(),c=(r=t,l=r?.replace(/[^0-9]/g,""),l),i=null;const d=e?.props?.children.filter(((n,r)=>{if(!n?.type&&n?.includes(a.selectedText)){i=r,console.log("yes here it is",n,o);const t=n.split(a.selectedText);console.log(t);let l=[];t.forEach(((e,n)=>{n===t.length-1?l.push(e):(l.push(e),l.push({type:"span",props:{children:"comment"===o.name?[a.selectedText,{type:"section",props:{className:"hover-card",children:[{type:"span",props:{className:"hover-title",children:[a.selectedText]}},o.value]}}]:[a.selectedText],className:`text-shadow-reed ${o.name} ${o.value?o.value:""} `}}))}));let s={type:"span",props:{children:l}},c=e?.props?.children;c[i]=s,Object.assign(e?.props?.children,c)}return t?.startsWith(n.type,[])}));Object.assign(e?.props?.children,[]),s(d[c-1],n)}var r,l;return e}return{addBold:()=>{if("bold"===o.name&&a.selectedText&&a.xPath){let o=s(e,"");const a=Object.create(o);t(a),r({xPath:"",selectedText:""}),n({name:"",value:""})}},addComment:()=>{if("comment"===o.name&&a.selectedText&&a.xPath){let o=s(e,"");const a=Object.create(o);t(a),r({xPath:"",selectedText:""}),n({name:"",value:""})}},addHighlight:()=>{if("highlight"===o.name&&o.value&&a.selectedText&&a.xPath){let o=s(e,"");const a=Object.create(o);t(a),r({xPath:"",selectedText:""}),n({name:"",value:""}),l((e=>!e))}}}}function f(){const[t,o]=e.useState(""),n=p((e=>e.changeType)),a=p((e=>e.type)),l=p((e=>e.changeConfig)),c=s((e=>e.toggleCommentModal)),{addComment:i}=m();e.useEffect((()=>{a.name&&a.value&&(i(),c())}),[a.name,a.value,i,c]);return r.default.createElement("section",{className:"modal-container-reed"},r.default.createElement("div",{className:"modal-content-reed",style:{position:"relative"}},r.default.createElement("span",{onClick:()=>{c(),n({name:"",value:""}),l({xPath:"",selectedText:""})},className:"floating-toolbar-close"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"27px",width:"27px",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor"},r.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))),r.default.createElement("h1",null,"Add Your Notes"),r.default.createElement("textarea",{onChange:e=>{e.preventDefault(),o(e.target.value)},className:"notes-input",placeholder:"Enter your Notes"}),r.default.createElement("button",{onClick:()=>{n({name:"comment",value:t})},className:"btn-submit-reed"},"Add Note")))}const g=["red","gold","white","blue","green","purple","orange","pink"];function h(t){const o=p((e=>e.changeType)),n=p((e=>e.type)),{addHighlight:a}=m(),l=i((e=>e.toggleModal)),s=p((e=>e.changeConfig)),c=t.colors||g;e.useEffect((()=>{n.name&&n.value&&a()}),[n.value,a,n.name]);return r.default.createElement("section",{className:"modal-container-reed"},r.default.createElement("div",{className:"modal-content-reed",style:{position:"relative"}},r.default.createElement("span",{onClick:()=>{l(),o({name:"",value:""}),s({xPath:"",selectedText:""})},className:"floating-toolbar-close"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"27px",width:"27px",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor"},r.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))),r.default.createElement("h1",null,"Pick your color"),r.default.createElement("div",{className:"container-reed"},c.map((e=>r.default.createElement("span",{className:"color-container-reed",key:e},r.default.createElement("div",{className:"color-box",onClick:()=>{o({name:"highlight",value:e})},style:{backgroundColor:`${e}`,scale:n.value===e?"1.3":"1"}}),r.default.createElement("span",{className:"color-name"},e)))))))}function x({x:t,y:o}){const[n,a]=e.useState(!0),l=p((e=>e.changeType)),{addBold:c}=m(),d=i((e=>e.toggleModal)),u=s((e=>e.toggleCommentModal)),f=p((e=>e.type)),g=p((e=>e.config)),h=({name:e,value:t})=>{l({name:e,value:t}),"bold"!==e&&("comment"===e?u():d())};return e.useEffect((()=>{"bold"===f.name&&g.selectedText&&c()}),[f.name,c]),e.useEffect((()=>{a(!0)}),[t]),r.default.createElement(r.default.Fragment,null,n&&g.selectedText&&t?r.default.createElement("section",{style:{left:t-100+"px",top:`${o+10}px`,position:"absolute"}},r.default.createElement("div",{className:"floating-toolbar"},r.default.createElement("span",{onClick:()=>h({name:"bold"})},"B"),r.default.createElement("span",{onClick:()=>h({name:"highlight"})},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",height:"20px",width:"20px"},r.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9"}))),r.default.createElement("span",{onClick:()=>h({name:"comment"})},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",height:"20px",width:"20px"},r.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})))),r.default.createElement("span",{onClick:()=>a(!n),className:"floating-toolbar-close"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"27px",width:"27px",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor"},r.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})))):null)}const b=t=>{const o=i((e=>e.open)),a=s((e=>e.openComment)),d=c((e=>e.setDom)),m=c((e=>e.dom)),g=u(m),{editorRef:b,mousePoint:v}=function(){const[t,o]=e.useState({x:0,y:0}),a=p((e=>e.changeConfig)),r=e.useRef(),l=e.useCallback((e=>{if(!r.current.contains(e.target))return;let t=document.getSelection().toString();if(!t)return;o({x:e.pageX,y:e.pageY});const l=n.fromRange(document.getSelection().getRangeAt(0),r.current).start.split("/").filter((e=>e)),[s,...c]=l;a({xPath:c,selectedText:t})}),[a]);return e.useEffect((()=>(document.addEventListener("mouseup",l),()=>{document.removeEventListener("mouseup",l)})),[l]),{editorRef:r,mousePoint:t}}();return e.useEffect((()=>{if(!m){const e=l.default(t.htmlContent.replace(/\s+/g," "));d({...e})}}),[m,d,t]),r.default.createElement(r.default.Fragment,null,o&&r.default.createElement(h,{colors:t.colors}),a&&r.default.createElement(f,null),m&&r.default.createElement("div",{className:"notes-wrapper",ref:b},g),r.default.createElement(x,{x:v.x,y:v.y}))},v=c;exports.Editor=b,exports.useDomValue=v;
