import{v4 as me}from"https://jspm.dev/uuid";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();console.log(me());window.ttt=me();function L(){}function _e(e){return e()}function fe(){return Object.create(null)}function V(e){e.forEach(_e)}function ge(e){return typeof e=="function"}function re(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let X;function ye(e,t){return X||(X=document.createElement("a")),X.href=t,e===X.href}function ve(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function j(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function I(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function R(e){return document.createTextNode(e)}function A(){return R(" ")}function we(){return R("")}function K(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ce(e){return Array.from(e.childNodes)}function he(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Y(e,t,n){e.classList[n?"add":"remove"](t)}let le;function M(e){le=e}const B=[],se=[],H=[],ae=[],ke=Promise.resolve();let Q=!1;function be(){Q||(Q=!0,ke.then(pe))}function Z(e){H.push(e)}const J=new Set;let z=0;function pe(){if(z!==0)return;const e=le;do{try{for(;z<B.length;){const t=B[z];z++,M(t),Oe(t.$$)}}catch(t){throw B.length=0,z=0,t}for(M(null),B.length=0,z=0;se.length;)se.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];J.has(n)||(J.add(n),n())}H.length=0}while(B.length);for(;ae.length;)ae.pop()();Q=!1,J.clear(),M(e)}function Oe(e){if(e.fragment!==null){e.update(),V(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}const G=new Set;let Se;function x(e,t){e&&e.i&&(G.delete(e),e.i(t))}function ce(e,t,n,l){if(e&&e.o){if(G.has(e))return;G.add(e),Se.c.push(()=>{G.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function ue(e){e&&e.c()}function $(e,t,n,l){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),l||Z(()=>{const i=e.$$.on_mount.map(_e).filter(ge);e.$$.on_destroy?e.$$.on_destroy.push(...i):V(i),e.$$.on_mount=[]}),o.forEach(Z)}function ee(e,t){const n=e.$$;n.fragment!==null&&(V(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(B.push(e),be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(e,t,n,l,r,o,i,m=[-1]){const c=le;M(e);const u=e.$$={fragment:null,ctx:[],props:o,update:L,not_equal:r,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:fe(),dirty:m,skip_bound:!1,root:t.target||c.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(e,t.props||{},(s,d,...g)=>{const y=g.length?g[0]:d;return u.ctx&&r(u.ctx[s],u.ctx[s]=y)&&(!u.skip_bound&&u.bound[s]&&u.bound[s](y),_&&Ae(e,s)),d}):[],u.update(),_=!0,V(u.before_update),u.fragment=l?l(u.ctx):!1,t.target){if(t.hydrate){const s=Ce(t.target);u.fragment&&u.fragment.l(s),s.forEach(b)}else u.fragment&&u.fragment.c();t.intro&&x(e.$$.fragment),$(e,t.target,t.anchor,t.customElement),pe()}M(c)}class oe{$destroy(){ee(this,1),this.$destroy=L}$on(t,n){if(!ge(n))return L;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!ve(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Le="/assets/svelte-a39f39b7.svg";function je(e){let t,n,l,r,o,i;return{c(){t=p("div"),n=p("button"),l=R("count is "),r=R(e[0]),f(n,"class","button is-primary"),f(t,"class","place svelte-1dmdllz")},m(m,c){j(m,t,c),h(t,n),h(n,l),h(n,r),o||(i=K(n,"click",e[1]),o=!0)},p(m,[c]){c&1&&he(r,m[0])},i:L,o:L,d(m){m&&b(t),o=!1,i()}}}function Ee(e,t,n){let l=0;return[l,()=>{n(0,l+=1)}]}class ze extends oe{constructor(t){super(),ie(this,t,Ee,je,re,{})}}/*! js-cookie v3.0.1 | MIT */function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)e[l]=n[l]}return e}var Be={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function te(e,t){function n(r,o,i){if(!(typeof document>"u")){i=D({},t,i),typeof i.expires=="number"&&(i.expires=new Date(Date.now()+i.expires*864e5)),i.expires&&(i.expires=i.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var m="";for(var c in i)i[c]&&(m+="; "+c,i[c]!==!0&&(m+="="+i[c].split(";")[0]));return document.cookie=r+"="+e.write(o,r)+m}}function l(r){if(!(typeof document>"u"||arguments.length&&!r)){for(var o=document.cookie?document.cookie.split("; "):[],i={},m=0;m<o.length;m++){var c=o[m].split("="),u=c.slice(1).join("=");try{var _=decodeURIComponent(c[0]);if(i[_]=e.read(u,_),r===_)break}catch{}}return r?i[r]:i}}return Object.create({set:n,get:l,remove:function(r,o){n(r,"",D({},o,{expires:-1}))},withAttributes:function(r){return te(this.converter,D({},this.attributes,r))},withConverter:function(r){return te(D({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var P=te(Be,{path:"/"});const q=parseFloat;function ne(e,t=";"){let n;if(Array.isArray(e))n=e.filter(l=>l);else{n=[];for(const l in e)e[l]&&n.push(`${l}:${e[l]}`)}return n.join(t)}function Ie(e,t,n,l){let r,o;const i="1em";let m,c,u,_="-.125em";const s="visible";return l&&(u="center",o="1.25em"),n&&(r=n),t&&(t=="lg"?(c="1.33333em",m=".75em",_="-.225em"):t=="xs"?c=".75em":t=="sm"?c=".875em":c=t.replace("x","em")),ne([ne({float:r,width:o,height:i,"line-height":m,"font-size":c,"text-align":u,"vertical-align":_,"transform-origin":"center",overflow:s}),e])}function Ne(e,t,n,l,r,o=1,i="",m=""){let c=1,u=1;return r&&(r=="horizontal"?c=-1:r=="vertical"?u=-1:c=u=-1),ne([`translate(${q(t)*o}${i},${q(n)*o}${i})`,`scale(${c*q(e)},${u*q(e)})`,l&&`rotate(${l}${m})`]," ")}function de(e){let t,n,l,r,o,i,m,c;function u(d,g){return typeof d[10][4]=="string"?Te:Ue}let _=u(e),s=_(e);return{c(){t=I("svg"),n=I("g"),l=I("g"),s.c(),f(l,"transform",e[12]),f(n,"transform",r="translate("+e[10][0]/2+" "+e[10][1]/2+")"),f(n,"transform-origin",o=e[10][0]/4+" 0"),f(t,"id",i=e[1]||void 0),f(t,"class",m="svelte-fa "+e[0]+" svelte-1cj2gr0"),f(t,"style",e[11]),f(t,"viewBox",c="0 0 "+e[10][0]+" "+e[10][1]),f(t,"aria-hidden","true"),f(t,"role","img"),f(t,"xmlns","http://www.w3.org/2000/svg"),Y(t,"pulse",e[4]),Y(t,"spin",e[3])},m(d,g){j(d,t,g),h(t,n),h(n,l),s.m(l,null)},p(d,g){_===(_=u(d))&&s?s.p(d,g):(s.d(1),s=_(d),s&&(s.c(),s.m(l,null))),g&4096&&f(l,"transform",d[12]),g&1024&&r!==(r="translate("+d[10][0]/2+" "+d[10][1]/2+")")&&f(n,"transform",r),g&1024&&o!==(o=d[10][0]/4+" 0")&&f(n,"transform-origin",o),g&2&&i!==(i=d[1]||void 0)&&f(t,"id",i),g&1&&m!==(m="svelte-fa "+d[0]+" svelte-1cj2gr0")&&f(t,"class",m),g&2048&&f(t,"style",d[11]),g&1024&&c!==(c="0 0 "+d[10][0]+" "+d[10][1])&&f(t,"viewBox",c),g&17&&Y(t,"pulse",d[4]),g&9&&Y(t,"spin",d[3])},d(d){d&&b(t),s.d()}}}function Ue(e){let t,n,l,r,o,i,m,c,u,_;return{c(){t=I("path"),i=I("path"),f(t,"d",n=e[10][4][0]),f(t,"fill",l=e[6]||e[2]||"currentColor"),f(t,"fill-opacity",r=e[9]!=!1?e[7]:e[8]),f(t,"transform",o="translate("+e[10][0]/-2+" "+e[10][1]/-2+")"),f(i,"d",m=e[10][4][1]),f(i,"fill",c=e[5]||e[2]||"currentColor"),f(i,"fill-opacity",u=e[9]!=!1?e[8]:e[7]),f(i,"transform",_="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")},m(s,d){j(s,t,d),j(s,i,d)},p(s,d){d&1024&&n!==(n=s[10][4][0])&&f(t,"d",n),d&68&&l!==(l=s[6]||s[2]||"currentColor")&&f(t,"fill",l),d&896&&r!==(r=s[9]!=!1?s[7]:s[8])&&f(t,"fill-opacity",r),d&1024&&o!==(o="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&f(t,"transform",o),d&1024&&m!==(m=s[10][4][1])&&f(i,"d",m),d&36&&c!==(c=s[5]||s[2]||"currentColor")&&f(i,"fill",c),d&896&&u!==(u=s[9]!=!1?s[8]:s[7])&&f(i,"fill-opacity",u),d&1024&&_!==(_="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&f(i,"transform",_)},d(s){s&&b(t),s&&b(i)}}}function Te(e){let t,n,l,r;return{c(){t=I("path"),f(t,"d",n=e[10][4]),f(t,"fill",l=e[2]||e[5]||"currentColor"),f(t,"transform",r="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")},m(o,i){j(o,t,i)},p(o,i){i&1024&&n!==(n=o[10][4])&&f(t,"d",n),i&36&&l!==(l=o[2]||o[5]||"currentColor")&&f(t,"fill",l),i&1024&&r!==(r="translate("+o[10][0]/-2+" "+o[10][1]/-2+")")&&f(t,"transform",r)},d(o){o&&b(t)}}}function Fe(e){let t,n=e[10][4]&&de(e);return{c(){n&&n.c(),t=we()},m(l,r){n&&n.m(l,r),j(l,t,r)},p(l,[r]){l[10][4]?n?n.p(l,r):(n=de(l),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:L,o:L,d(l){n&&n.d(l),l&&b(t)}}}function Me(e,t,n){let{class:l=""}=t,{id:r=""}=t,{style:o=""}=t,{icon:i}=t,{size:m=""}=t,{color:c=""}=t,{fw:u=!1}=t,{pull:_=""}=t,{scale:s=1}=t,{translateX:d=0}=t,{translateY:g=0}=t,{rotate:y=""}=t,{flip:v=!1}=t,{spin:N=!1}=t,{pulse:O=!1}=t,{primaryColor:w=""}=t,{secondaryColor:U=""}=t,{primaryOpacity:C=1}=t,{secondaryOpacity:T=.4}=t,{swapOpacity:S=!1}=t,k,E,F;return e.$$set=a=>{"class"in a&&n(0,l=a.class),"id"in a&&n(1,r=a.id),"style"in a&&n(13,o=a.style),"icon"in a&&n(14,i=a.icon),"size"in a&&n(15,m=a.size),"color"in a&&n(2,c=a.color),"fw"in a&&n(16,u=a.fw),"pull"in a&&n(17,_=a.pull),"scale"in a&&n(18,s=a.scale),"translateX"in a&&n(19,d=a.translateX),"translateY"in a&&n(20,g=a.translateY),"rotate"in a&&n(21,y=a.rotate),"flip"in a&&n(22,v=a.flip),"spin"in a&&n(3,N=a.spin),"pulse"in a&&n(4,O=a.pulse),"primaryColor"in a&&n(5,w=a.primaryColor),"secondaryColor"in a&&n(6,U=a.secondaryColor),"primaryOpacity"in a&&n(7,C=a.primaryOpacity),"secondaryOpacity"in a&&n(8,T=a.secondaryOpacity),"swapOpacity"in a&&n(9,S=a.swapOpacity)},e.$$.update=()=>{e.$$.dirty&16384&&n(10,k=i&&i.icon||[0,0,"",[],""]),e.$$.dirty&237568&&n(11,E=Ie(o,m,_,u)),e.$$.dirty&8126464&&n(12,F=Ne(s,d,g,y,v,512))},[l,r,c,N,O,w,U,C,T,S,k,E,F,o,i,m,u,_,s,d,g,y,v]}class Re extends oe{constructor(t){super(),ie(this,t,Me,Fe,re,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var Ve={prefix:"fas",iconName:"circle-arrow-up",icon:[512,512,["arrow-circle-up"],"f0aa","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM385 215c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V177.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 103c9.4-9.4 24.6-9.4 33.9 0L385 215z"]},Xe=Ve;function Ye(e){let t,n,l,r,o,i,m,c,u,_,s,d,g,y,v,N,O,w,U,C,T,S,k,E,F;return v=new Re({props:{icon:Xe,color:"#6565ed",size:"2.5x"}}),w=new ze({}),{c(){t=p("main"),n=p("div"),l=R(e[0]),r=A(),o=p("p"),o.textContent=`${e[1]}`,i=A(),m=p("a"),m.innerHTML='<img src="/vite.svg" class="logo svelte-1jy7ake" alt="Vite Logo"/>',c=p("a"),u=p("img"),s=A(),d=p("h1"),d.textContent="123 Слово ъйюяь! ! ! + Слово 2 ! ! !",g=A(),y=p("div"),ue(v.$$.fragment),N=A(),O=p("div"),ue(w.$$.fragment),U=A(),C=p("p"),C.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite !',T=A(),S=p("p"),S.textContent="Click on the Vite and Svelte logos to learn more",f(m,"href","https://vitejs.dev"),f(m,"target","_blank"),f(m,"rel","noreferrer"),ye(u.src,_=Le)||f(u,"src",_),f(u,"class","logo svelte svelte-1jy7ake"),f(u,"alt","Svelte Logo"),f(c,"href","https://svelte.dev"),f(c,"target","_blank"),f(c,"rel","noreferrer"),f(d,"class","title"),f(y,"class","totop-box"),f(O,"class","card"),f(S,"class","read-the-docs svelte-1jy7ake")},m(a,W){j(a,t,W),h(t,n),h(n,l),h(n,r),h(n,o),h(n,i),h(n,m),h(n,c),h(c,u),h(t,s),h(t,d),h(t,g),h(t,y),$(v,y,null),h(t,N),h(t,O),$(w,O,null),h(t,U),h(t,C),h(t,T),h(t,S),k=!0,E||(F=[K(C,"click",e[2]),K(C,"keypress",De)],E=!0)},p(a,[W]){(!k||W&1)&&he(l,a[0])},i(a){k||(x(v.$$.fragment,a),x(w.$$.fragment,a),k=!0)},o(a){ce(v.$$.fragment,a),ce(w.$$.fragment,a),k=!1},d(a){a&&b(t),ee(v),ee(w),E=!1,V(F)}}}const De=()=>null;function Pe(e,t,n){let l=5;console.log(P.get());let r=P.get("SL_G_WPT_TO");console.log("api ",r),P.set("mycookie",l.toString(),{expires:7,path:""});let o=P.get("mycookie");return console.log("c",o),[l,r,()=>n(0,l+=5)]}class qe extends oe{constructor(t){super(),ie(this,t,Pe,Ye,re,{})}}new qe({target:document.getElementById("app")});