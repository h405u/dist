import{d as p,z as m,o as c,b as f,e as r,f as v,h as _,c as g,k as h,q as $,s as k,B as l}from"../modules/vue-IZsJrVaC.js";import{u,f as x}from"./context-BfhVuPLK.js";import"../index-MV-ep_6k.js";import"../modules/shiki-DGbCveM2.js";function i(e){return e.startsWith("/")?"/slides/24-10-22-metaprogram/"+e.slice(1):e}function y(e,s=!1){const o=e&&["#","rgb","hsl"].some(n=>e.indexOf(n)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?s?`linear-gradient(#0005, #0008), url(${i(e)})`:`url("${i(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const b={class:"my-auto w-full"},C=p({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const s=e,o=m(()=>y(s.background,!0));return(t,n)=>(c(),f("div",{class:"slidev-layout cover text-center",style:_(o.value)},[r("div",b,[v(t.$slots,"default")])],4))}}),q={__name:"slides.md__slidev_1",setup(e){const{$slidev:s,$nav:o,$clicksContext:t,$clicks:n,$page:S,$renderContext:B,$frontmatter:d}=u();return t.setup(),(P,a)=>(c(),g(C,$(k(l(x)(l(d),0))),{default:h(()=>a[0]||(a[0]=[r("h1",null,"Symbolic metaprogram search improves learning effciency and explains rule learning in humans",-1),r("p",null,"Corresponding Author: Joshua S. Rule",-1),r("p",null,"Presented by: Hao Su",-1)])),_:1},16))}};export{q as default};