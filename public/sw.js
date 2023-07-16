if(!self.define){let e,t={};const r=(r,s)=>(r=new URL(r+".js",s).href,t[r]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=t,document.head.appendChild(e)}else e=r,importScripts(r),t()})).then((()=>{let e=t[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(t[n])return;let o={};const c=e=>r(e,n),f={module:{uri:n},exports:o,require:c};t[n]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(i(...e),o)))}}define(["./workbox-8afdfc13"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
//

self.addEventListener('fetch', function (event) {
    console.log("sikerim amina koyim")
    return null
})
