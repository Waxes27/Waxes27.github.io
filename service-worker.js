if(!self.define){let e,i={};const s=(s,o)=>(s=new URL(s+".js",o).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(o,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const u=e=>s(e,n),c={module:{uri:n},exports:r,require:u};i[n]=Promise.all(o.map((e=>c[e]||u(e)))).then((e=>(t(...e),r)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/waxes27.github.io/css/app.0e0f4858.css",revision:null},{url:"/waxes27.github.io/index.html",revision:"7811b427a224efdf89b243f2ef3db7ab"},{url:"/waxes27.github.io/js/app.9fc7295c.js",revision:null},{url:"/waxes27.github.io/js/chunk-vendors.ff48ecfe.js",revision:null},{url:"/waxes27.github.io/manifest.json",revision:"4b14c64efaf846819b9a229b4193c8b7"},{url:"/waxes27.github.io/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
