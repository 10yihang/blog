import{a as ae,c as ye,d as xt,e as Tt,f as _t,g as kt,h as Ht,i as St,j as It,k as Re}from"./chunk-YZDRO54S.js";import{a as L,b as O}from"./chunk-HTQO4CWR.js";import{$ as wt,A as j,B as Se,C as p,D as st,E as I,F as ie,G as ne,H as it,I as re,J as Ie,L as Oe,M as nt,N as rt,Q as at,R as ct,S as lt,T as dt,U as mt,V as ut,W as ht,X as ft,Y as pt,Z as gt,_ as vt,a as Je,aa as bt,b as m,ba as yt,ca as Lt,d as W,da as Ct,ea as Et,f as Y,fa as At,g as Ke,l as ee,m as _,n as Qe,o as g,p as He,q as te,r as oe,s as et,t as tt,u as se,v as we,w as ot,x as q,y as k,z as be}from"./chunk-ZNCHXQGV.js";import"./chunk-HXO54ZAQ.js";import{c as h}from"./chunk-HHXQ7A47.js";h();h();h();Qe();var X=(e,t)=>{p.hasClass("on")?(p.removeClass("on"),j.removeClass("close"),t?p.style="":L(p,"slideRightOut")):t?p.style="":L(p,"slideRightIn",()=>{p.addClass("on"),j.addClass("close")})},Ot=()=>{let e=_(p,".inner");p.child(".tab")&&e.removeChild(p.child(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let i=p.child(".panel."+s);if(i.innerHTML.trim().length<1){s==="contents"&&ee(re,"none");return}s==="contents"&&ee(re,"");let r=document.createElement("li"),c=document.createElement("span"),n=document.createTextNode(i.getAttribute("data-title"));c.appendChild(n),r.appendChild(c),r.addClass(s+" item"),o?(i.addClass(o),r.addClass(o)):i.removeClass("active"),r.addEventListener("click",a=>{let d=a.currentTarget;d.hasClass("active")||(p.find(".tab .item").forEach(l=>{l.removeClass("active")}),p.find(".panel").forEach(l=>{l.removeClass("active")}),p.child(".panel."+d.className.replace(" item","")).addClass("active"),d.addClass("active"))}),t.appendChild(r),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),p.child(".panels").style.paddingTop=""):p.child(".panels").style.paddingTop=".625rem"},Rt=()=>{let e=n=>{let a=t[n];if(!a||a.hasClass("current"))return;m.each(".toc .active",l=>{l&&l.removeClass("active current")}),o.forEach(l=>{l&&l.removeClass("active")}),a.addClass("active current"),o[n]&&o[n].addClass("active");let d=a.parentNode;for(;!d.matches(".contents");){if(d.matches("li")){d.addClass("active");let l=m(d.child("a.toc-link").getAttribute("href"));l&&l.addClass("active")}d=d.parentNode}getComputedStyle(p).display!=="none"&&i.hasClass("active")&&O(i,a.offsetTop-i.offsetHeight/4)},t=m.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((n,a)=>{let d=n.child("a.toc-link"),l=m(decodeURI(d.getAttribute("href")));if(!l)return null;let v=l.child("a.anchor"),u=w=>{w.preventDefault();let M=m(decodeURI(w.currentTarget.getAttribute("href")));s=a,O(M,null,()=>{e(a),s=null})};return d.addEventListener("click",u),v&&v.addEventListener("click",w=>{u(w),Tt(g.hostname+"/"+LOCAL.path+w.currentTarget.getAttribute("href"))}),l});let i=p.child(".contents.panel"),r=n=>{let a=0,d=n[a];if(d.boundingClientRect.top>0)return a=o.indexOf(d.target),a===0?0:a-1;for(;a<n.length;a++)if(n[a].boundingClientRect.top<=0)d=n[a];else return o.indexOf(d.target);return o.indexOf(d.target)};(()=>{let n=new IntersectionObserver(a=>{let d=r(a)+(oe<0?1:0);s===null&&e(d)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(a=>{a&&n.observe(a)})})()},Me=()=>{O(0)},Mt=()=>{O(parseInt(String(Y(ot))))},Nt=()=>{O(m("#comments"))},Pt=()=>{m.each(".menu .item:not(.title)",e=>{let t=e.child("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),i=!g.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),r=!t.onclick&&t.hostname===location.hostname&&(s||i);e.toggleClass("active",r),e.parentNode.child(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};h();var A={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),q.setAttribute("style","display:block"),A.lock=!1},hide(e){g.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){A.lock||(g.loader.start&&L(q,0),document.body.addClass("loaded"),A.lock=!0)}};function Ne(){m.each(".overview .menu > .item",t=>{_(k,".menu").appendChild(t.cloneNode(!0))}),q.addEventListener("click",A.vanish),j.addEventListener("click",X),m(".dimmer").addEventListener("click",X),_(Se,".down").addEventListener("click",Mt),_(Se,".up").addEventListener("click",Me),I||Et(W(be,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),bt(I.child(".player")),yt(I.child(".back-to-top")),Lt(I.child(".chat")),Ct(I.child(".contents")),ne.addEventListener("click",Me),it.addEventListener("click",Nt),re.addEventListener("click",X),kt(ie),m("main").addEventListener("click",()=>{ie.player.mini()}),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}h();h();var Bt=()=>{if(!m(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});m.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),m(".index.wrap .item:first-child").addClass("show"),m.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{m(".cards .item.active")&&m(".cards .item.active").removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};h();h();var H=e=>{let t=m(".theme .ic");e==="dark"?(we.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(we.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},Dt=()=>{g.auto_dark.enable&&(new Date().getHours()>=g.auto_dark.start||new Date().getHours()<=g.auto_dark.end?H("dark"):H())},Pe=e=>{we.getAttribute("data-theme")==="dark"&&(e="#222"),m('meta[name="theme-color"]').setAttribute("content",e)},Ut=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?H("dark"):H()});let e=ae.get("theme");e?H(e):g.darkmode&&H("dark")};var Le=()=>{ct(Y(k)),lt(Y(be)),dt(Oe+Y(m("#waves"))),rt!==window.innerWidth&&X(null,1),mt(window.innerHeight),ut(window.innerWidth)},qt=()=>{let e=window.innerHeight,t=Je(),o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>Oe,i=window.scrollY>0;s?Pe("#FFF"):Pe("#222"),k.toggleClass("show",s),I.toggleClass("affix",i),st.toggleClass("affix",i),p.toggleClass("affix",window.scrollY>nt&&document.body.offsetWidth>991),typeof te.y>"u"&&(te.y=window.scrollY),ht(te.y-window.scrollY),oe<0?(k.removeClass("up"),k.toggleClass("down",s)):oe>0&&(k.removeClass("down"),k.toggleClass("up",s)),te.y=window.scrollY;let r=Math.round(Math.min(100*window.scrollY/o,100))+"%";ne.child("span").innerText!==r&&(ne.child("span").innerText=r),(m("#sidebar").hasClass("affix")||m("#sidebar").hasClass("on"))&&Ke(m(".percent"),r)},jt=()=>{let e=m('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",He+g.favicon.hidden),document.title=LOCAL.favicon.hide,g.loader.switch&&A.show(),clearTimeout(tt);break;case"visible":e.setAttribute("href",He+g.favicon.normal),document.title=LOCAL.favicon.show,g.loader.switch&&A.hide(1e3),ft(setTimeout(()=>{document.title=et},2e3));break}},{passive:!0})};h();h();h();h();var zt=typeof window>"u",Be=!zt&&"loading"in HTMLImageElement.prototype,De=!zt&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function Gt(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function $t(e,t){let o,s;return e>=1?(o=t,s=Math.round(t/e)):(o=Math.round(t*e),s=t),{width:o,height:s}}function Ft(e){let t=e.replace(/-/g,"+").replace(/_/g,"/"),o=typeof Buffer<"u"?Buffer.from(t,"base64"):Uint8Array.from(atob(t),s=>s.charCodeAt(0));return new Uint8Array(o)}function Wt(e,t){let o;return function(...s){o&&clearTimeout(o),o=setTimeout(()=>{o=void 0,e(...s)},t)}}function Ce(e,t,o){let s=e*4+1,i=6+t*(5+s),r=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,e>>8,e&255,0,0,t>>8,t&255,8,6,0,0,0,0,0,0,0,i>>>24,i>>16&255,i>>8&255,i&255,73,68,65,84,120,1],c=[0,498536548,997073096,651767980,1994146192,1802195444,1303535960,1342533948,-306674912,-267414716,-690576408,-882789492,-1687895376,-2032938284,-1609899400,-1111625188],n=1,a=0;for(let l=0,v=0,u=s-1;l<t;l++,u+=s-1)for(r.push(l+1<t?0:1,s&255,s>>8,~s&255,s>>8^255,0),a=(a+n)%65521;v<u;v++){let w=o[v]&255;r.push(w),n=(n+w)%65521,a=(a+n)%65521}r.push(a>>8,a&255,n>>8,n&255,0,0,0,0,0,0,0,0,73,69,78,68,174,66,96,130);for(let[l,v]of[[12,29],[37,41+i]]){let u=-1;for(let w=l;w<v;w++)u^=r[w],u=u>>>4^c[u&15],u=u>>>4^c[u&15];u=~u,r[v++]=u>>>24,r[v++]=u>>16&255,r[v++]=u>>8&255,r[v++]=u&255}return`data:image/png;base64,${typeof Buffer<"u"?Buffer.from(new Uint8Array(r)).toString("base64"):btoa(String.fromCharCode(...r))}`}var Ae=32,Xt="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",uo="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~",Ee=(e,t,o)=>{let s=0;for(;t<o;)s*=83,s+=uo.indexOf(e[t++]);return s},Zt=Math.pow,le=Math.PI,ho=le*2,Vt=3294.6,Jt=269.025,fo=e=>e>10.31475?Zt(e/Jt+.052132,2.4):e/Vt,Ue=e=>~~(e>1227e-8?Jt*Zt(e,.416666)-13.025:e*Vt+1),ce=e=>(e<0?-1:1)*e*e,Yt=e=>{for(e+=le/2;e>le;)e-=ho;let t=1.27323954*e-.405284735*ce(e);return .225*(ce(t)-t)+t};function po(e){let t=Ee(e,2,6);return[t>>16,t>>8&255,t&255]}function go(e,t,o,s){let i=Ee(e,0,1),r=i%9+1,c=~~(i/9)+1,n=r*c,a=0,d=0,l=0,v=0,u=0,w=0,M=0,N=0,G=0,E=0,P=0,de=0,me=0,B=0,S=(Ee(e,1,2)+1)/13446*(s|1),x=new Float64Array(n*3),ke=po(e);for(a=0;a<3;a++)x[a]=fo(ke[a]);for(a=1;a<n;a++)B=Ee(e,4+a*2,6+a*2),x[a*3]=ce(~~(B/(19*19))-9)*S,x[a*3+1]=ce(~~(B/19)%19-9)*S,x[a*3+2]=ce(B%19-9)*S;let ue=t*4,D=new Uint8ClampedArray(ue*o);for(v=0;v<o;v++)for(de=le*v/o,l=0;l<t;l++){for(u=0,w=0,M=0,me=le*l/t,d=0;d<c;d++)for(G=Yt(de*d),a=0;a<r;a++)N=Yt(me*a)*G,E=(a+d*r)*3,u+=x[E]*N,w+=x[E+1]*N,M+=x[E+2]*N;P=4*l+v*ue,D[P]=Ue(u),D[P+1]=Ue(w),D[P+2]=Ue(M),D[P+3]=255}return D}function Kt(e,{ratio:t=1,size:o=Ae}={}){let{width:s,height:i}=$t(t,o),r=go(e,s,i);return Ce(s,i,r)}h();function vo(e){let{PI:t,min:o,max:s,cos:i,round:r}=Math,c=e[0]|e[1]<<8|e[2]<<16,n=e[3]|e[4]<<8,a=(c&63)/63,d=(c>>6&63)/31.5-1,l=(c>>12&63)/31.5-1,v=(c>>18&31)/31,u=c>>23,w=(n>>3&63)/63,M=(n>>9&63)/63,N=n>>15,G=s(3,N?u?5:7:n&7),E=s(3,N?n&7:u?5:7),P=u?(e[5]&15)/15:1,de=(e[5]>>4)/15,me=u?6:5,B=0,S=(J,T,K)=>{let $=[];for(let U=0;U<T;U++)for(let F=U?0:1;F*T<J*(T-U);F++)$.push(((e[me+(B>>1)]>>((B++&1)<<2)&15)/7.5-1)*K);return $},x=S(G,E,v),ke=S(3,3,w*1.25),ue=S(3,3,M*1.25),D=u&&S(5,5,de),he=wo(e),fe=r(he>1?32:32*he),pe=r(he>1?32/he:32),V=new Uint8Array(fe*pe*4),ge=[],ve=[];for(let J=0,T=0;J<pe;J++)for(let K=0;K<fe;K++,T+=4){let $=a,U=d,F=l,Ye=P;for(let f=0,y=s(G,u?5:3);f<y;f++)ge[f]=i(t/fe*(K+.5)*f);for(let f=0,y=s(E,u?5:3);f<y;f++)ve[f]=i(t/pe*(J+.5)*f);for(let f=0,y=0;f<E;f++)for(let C=f?0:1,Q=ve[f]*2;C*E<G*(E-f);C++,y++)$+=x[y]*ge[C]*Q;for(let f=0,y=0;f<3;f++)for(let C=f?0:1,Q=ve[f]*2;C<3-f;C++,y++){let Ve=ge[C]*Q;U+=ke[y]*Ve,F+=ue[y]*Ve}if(u)for(let f=0,y=0;f<5;f++)for(let C=f?0:1,Q=ve[f]*2;C<5-f;C++,y++)Ye+=D[y]*ge[C]*Q;let Xe=$-2/3*U,Ze=(3*$-Xe+F)/2,mo=Ze-F;V[T]=s(0,255*o(1,Ze)),V[T+1]=s(0,255*o(1,mo)),V[T+2]=s(0,255*o(1,Xe)),V[T+3]=s(0,255*o(1,Ye))}return{w:fe,h:pe,rgba:V}}function wo(e){let t=e[3],o=e[2]&128,s=e[4]&128,i=s?o?5:7:t&7,r=s?t&7:o?5:7;return i/r}function Qt(e){let{w:t,h:o,rgba:s}=vo(Ft(e));return Ce(t,o,s)}function ze(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=Ae,updateSizesOnResize:i=!1,onImageLoad:r}={}){let c=new Set;for(let n of Gt(e)){let a=je(n,{updateOnResize:i});if(i&&a&&c.add(a),t){let l=eo({image:n,hash:typeof t=="string"?t:void 0,hashType:o,size:s});l&&(n.src=l)}if(!n.dataset.src&&!n.dataset.srcset)continue;if(De||!Be){to(n),$e(n),Ge(n);continue}if(n.src||(n.src=Xt),n.complete&&n.naturalWidth>0){qe(n,r);continue}let d=()=>qe(n,r);n.addEventListener("load",d,{once:!0}),c.add(()=>n.removeEventListener("load",d))}return()=>{for(let n of c)n();c.clear()}}function qe(e,t){let o=new Image,{srcset:s,src:i,sizes:r}=e.dataset;if(r==="auto"){let c=oo(e);c&&(o.sizes=`${c}px`)}else e.sizes&&(o.sizes=e.sizes);s&&(o.srcset=s),i&&(o.src=i),o.addEventListener("load",()=>{to(e),$e(e),Ge(e),t?.(e)})}function eo({image:e,hash:t,hashType:o="blurhash",size:s=Ae,ratio:i}={}){if(!t&&e){let{blurhash:r,thumbhash:c}=e.dataset;t=c||r,o=c?"thumbhash":"blurhash"}if(t)try{if(o==="thumbhash")return Qt(t);if(!i&&e){let r=e.width||e.offsetWidth||s,c=e.height||e.offsetHeight||s;i=r/c}return Kt(t,{ratio:i,size:s})}catch{}}var xe=new WeakMap;function je(e,t){if(e.dataset.sizes!=="auto")return;let o=oo(e);if(o&&(e.sizes=`${o}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(s=>je(s,{skipChildren:!0})),t?.updateOnResize){if(!xe.has(e)){let s=Wt(()=>je(e),500),i=new ResizeObserver(s);xe.set(e,i),i.observe(e)}return()=>{let s=xe.get(e);s&&(s.disconnect(),xe.delete(e))}}}function Ge(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function $e(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function to(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach($e),[...t.querySelectorAll("source[data-src]")].forEach(Ge))}function oo(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var so=()=>{ye(),p.hasClass("on")&&L(p,0,()=>{p.removeClass("on"),j.removeClass("close")});let e=m("#main");e.innerHTML="",e.appendChild(q.lastChild.cloneNode(!0)),O(0)},Fe=e=>{pt(0),gt(window.location.href),Re("katex"),It("copy_tex"),Re("mermaid");let t=new IntersectionObserver(function(o,s){o.forEach(i=>{if(i.isIntersecting){let r=i.target;r.style.backgroundImage=`url("${r.getAttribute("data-background-image")}")`,r.removeAttribute("data-background-image"),s.unobserve(r)}})},{root:null,threshold:.2});if(document.querySelectorAll("[data-background-image]").forEach(o=>{t.observe(o)}),e!==1&&m.each("script[data-pjax]",St),wt(document.title),Le(),Pt(),Ot(),Rt(),LOCAL.ispost){import("./post-MEF6FUC2.js").then(({postBeauty:s})=>{s()});let o=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&(import("./comments-DWCVUBLQ.js").then(({walinePageview:r,walineComment:c})=>{r(),c()}),o.disconnect())})},{root:null,threshold:.2});o.observe(m("#copyright"))}ze(),import("./comments-DWCVUBLQ.js").then(async({walinePageview:o,walineRecentComments:s})=>{await s()}),_t(),ie.player.load(LOCAL.audio||g.audio||{}),A.hide(500),setTimeout(()=>{xt()},500),Bt()};h();function z(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var ao=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function We(e,t,o,s){ao(t,i=>{z(e,r=>{r.addEventListener(i,o,s)})})}function Z(e,t,o={}){ao(t,s=>{let i=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});z(e,r=>{r.dispatchEvent(i)})})}function io(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,i=document.createElement("script");return t.match("document.write")?!1:(i.type="text/javascript",i.id=e.id,o!==""&&(i.src=o,i.async=!1),t!==""&&i.appendChild(document.createTextNode(t)),s.appendChild(i),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(i)&&s.removeChild(i),!0)}function bo(e){e.tagName.toLowerCase()==="script"&&io(e),z(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),io(o))})}function yo(e,t,o,s=document){e.forEach(i=>{z(s.querySelectorAll(i),t,o)})}var Te=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function co(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function Lo(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function no(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function Co({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:i=!0,scrollTo:r=0,scrollRestoration:c=!0,cacheBust:n=!0,timeout:a=0,currentUrlFullReload:d=!1}={}){let l={elements:e,selectors:t,switches:o,switchesOptions:s,history:i,scrollTo:r,scrollRestoration:c,cacheBust:n,timeout:a,currentUrlFullReload:d};return l.switches.head||(l.switches.head=no),l.switches.body||(l.switches.body=no),l}var _e="data-pjax-state";function ro(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=Eo(e,t);if(s){e.setAttribute(_e,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(_e,"reload"),this.reload();return}e.setAttribute(_e,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function Eo(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function Ao(e){e.setAttribute(_e,""),We(e,"click",t=>ro.call(this,e,t)),We(e,"keyup",t=>{let o=t;o.keyCode===13&&ro.call(this,e,o)})}function xo(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){Z(document,"pjax:complete pjax:error",s);return}let i=window.history.state||{};window.history.replaceState({url:i.url||window.location.href,title:i.title||document.title,uid:i.uid||Te(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let r=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let c=document.createElement("a");c.href=r;let n=c.hash;c.href=o,n&&!c.hash&&(c.hash=n,o=c.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(a){return Z(document,"pjax:error",s),console.error("Pjax switch fail: ",a),this.latestChance(o)}}function To(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function _o(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),i=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+i+t+"="+o}function ko(e,t={},o){let s=t.requestOptions||{},i=(s.requestMethod||"GET").toUpperCase(),r=s.requestParams||null,c=null,n=new XMLHttpRequest,a=t.timeout;if(n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?o(n.responseText,n,e,t):n.status!==0&&o(null,n,e,t))},n.onerror=d=>{console.error(d),o(null,n,e,t)},n.ontimeout=()=>{o(null,n,e,t)},r&&r.length){let d=r.map(l=>l.name+"="+l.value).join("&");switch(i){case"GET":e=e.split("?")[0],e+="?"+d;break;case"POST":c=d;break}}return t.cacheBust&&(e=_o(e,"t",Date.now())),n.open(i,e,!0),n.timeout=a,n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("X-PJAX","true"),n.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),n.send(c),n}function Ho(e,t,o,s,i,r){let c=[];o.forEach(n=>{let a=s.querySelectorAll(n),d=i.querySelectorAll(n);if(a.length!==d.length)throw new Error(`DOM doesn't look the same on new loaded page: '${n}' - new ${a.length}, old ${d.length}`);z(a,(l,v)=>{let u=d[v],w=e[n]?e[n].bind(this,u,l,r,t[n]):co.bind(this,u,l,r);c.push(w)},this)},this),this.state.numPendingSwitches=c.length,c.forEach(n=>{n()})}function So(e,t,o){for(let s of t){let i=e.querySelectorAll(s);for(let r=0;r<i.length;r++)if(i[r].contains(o))return!0}return!1}var R=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=Co(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=Te(),this.parseDOM(document),We(window,"popstate",o=>{let s=o;if(s.state){let i={...this.options};i.url=s.state.url,i.title=s.state.title,i.history=!1,i.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?i.backward=!0:i.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,i)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){z(this.getElements(t),To,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return yo.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,i){return Ho.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,i)}latestChance(t){window.location=t}onSwitch(){Z(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){Z(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),i=/<html[^>]+>/gi,r=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,c=t.match(i);if(c&&c.length&&(c=c[0].match(r),c.length&&(c.shift(),c.forEach(n=>{let a=n.trim().split("=");a.length===1?s.documentElement.setAttribute(a[0],"true"):s.documentElement.setAttribute(a[0],a[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&So(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),Z(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(r=>{z(document.querySelectorAll(r),c=>{bo(c)})});let i=this.state;if(!((t=i.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=Te(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=Te(),window.history.pushState({url:i.href,title:i.options.title,uid:this.maxUid,scrollPos:[0,0]},i.options.title,i.href)),this.forEachSelectors(r=>{this.parseDOM(r)},this),Z(document,"pjax:complete pjax:success",i.options),!((o=i.options)===null||o===void 0)&&o.history){let r=document.createElement("a");if(r.href=this.state.href,r.hash){let c=r.hash.slice(1);c=decodeURIComponent(c);let n=0,a=document.getElementById(c)||document.getElementsByName(c)[0];if(a&&a.offsetParent)do n+=a.offsetTop,a=a.offsetParent;while(a);window.scrollTo(0,n)}else i.options.scrollTo!==!1&&(Array.isArray(i.options.scrollTo)?window.scrollTo(i.options.scrollTo[0],i.options.scrollTo[1]):window.scrollTo(0,i.options.scrollTo))}else!((s=i.options)===null||s===void 0)&&s.scrollRestoration&&i.options.scrollPos&&window.scrollTo(i.options.scrollPos[0],i.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};R.prototype.attachLink=Ao;R.prototype.doRequest=ko;R.prototype.handleResponse=xo;R.switches={innerHTML:Lo,outerHTML:co};h();function lo(){function e(){let t,o=_(m(".theme"),".ic"),s=W(se,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),i=()=>{L(s,{delay:2500,opacity:0},()=>{se.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),H("dark"),ae.set("theme","dark"),i()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),H(),ae.set("theme","light"),i()}),L(s,1,()=>{setTimeout(t,210)},()=>{ee(s,"block")})}_(m("#rightNav"),".theme .ic").addEventListener("click",e)}var Io=()=>{lo(),Ne(),vt(new R({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),g.quicklink.ignores=LOCAL.ignores,import("./quicklink-6323ATGM.js").then(({listen:e})=>{e(g.quicklink)}),Dt(),jt(),Ut(),m("li.item.search > i").addEventListener("click",()=>{g.search!==null&&(Ie||At(W(se,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-X3GN36NS.js").then(({algoliaSearch:e})=>{e(at)}),m.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",L(Ie,"shrinkIn",()=>{m(".search-input").focus()})})}))},{once:!0,capture:!0}),import("./index.esm-UQRCBFS2.js").then(e=>{e.default(g.fireworks)}),window.addEventListener("scroll",qt,{passive:!0}),window.addEventListener("resize",Le,{passive:!0}),window.addEventListener("pjax:send",so,{passive:!0}),window.addEventListener("pjax:success",Fe,{passive:!0}),window.addEventListener("beforeunload",()=>{ye()}),Fe(1)};Ht();window.addEventListener("DOMContentLoaded",Io,{passive:!0});console.log("%c Theme.ShokaX v"+g.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
