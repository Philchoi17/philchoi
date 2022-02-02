var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function a(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let o,r;function c(t,e){return o||(o=document.createElement("a")),o.href=e,t===o.href}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function p(){return g(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t){r=t}const A=[],$=[],b=[],I=[],T=Promise.resolve();let D=!1;function S(t){b.push(t)}const L=new Set;let _=0;function R(){const t=r;do{for(;_<A.length;){const t=A[_];_++,v(t),C(t.$$)}for(v(null),A.length=0,_=0;$.length;)$.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];L.has(e)||(L.add(e),e())}b.length=0}while(A.length);for(;I.length;)I.pop()();D=!1,L.clear(),v(t)}function C(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const N=new Set;function x(t,e){t&&t.i&&(N.delete(t),t.i(e))}function O(t,e,n,s){if(t&&t.o){if(N.has(t))return;N.add(t),undefined.c.push((()=>{N.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function w(t){t&&t.c()}function y(t,n,l,o){const{fragment:r,on_mount:c,on_destroy:i,after_update:u}=t.$$;r&&r.m(n,l),o||S((()=>{const n=c.map(e).filter(a);i?i.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(S)}function k(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(A.push(t),D||(D=!0,T.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,a,l,o,c,i,u,d=[-1]){const m=r;v(e);const g=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(m?m.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:a.target||m.$$.root};u&&u(g.root);let p=!1;if(g.ctx=l?l(e,a.props||{},((t,n,...s)=>{const a=s.length?s[0]:n;return g.ctx&&c(g.ctx[t],g.ctx[t]=a)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](a),p&&M(e,t)),n})):[],g.update(),p=!0,s(g.before_update),g.fragment=!!o&&o(g.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);g.fragment&&g.fragment.l(t),t.forEach(f)}else g.fragment&&g.fragment.c();a.intro&&x(e.$$.fragment),y(e,a.target,a.anchor,a.customElement),R()}v(m)}class B{$destroy(){k(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(t,e,n){const s=t.slice();return s[2]=e[n],s}function H(t){let e,n,s,a,l,o=t[2].label+"";return{c(){e=m("li"),n=m("a"),s=g(o),l=p(),h(n,"class","nav-link light-color svelte-z4knur"),h(n,"href",a=t[2].url),h(e,"class","nav-item svelte-z4knur")},m(t,a){u(t,e,a),i(e,n),i(n,s),i(e,l)},p(t,e){1&e&&o!==(o=t[2].label+"")&&E(s,o),1&e&&a!==(a=t[2].url)&&h(n,"href",a)},d(t){t&&f(e)}}}function G(e){let n,s,a,l,o,r,c,v,A,$=e[0],b=[];for(let t=0;t<$.length;t+=1)b[t]=H(U(e,$,t));return{c(){n=m("section"),s=m("nav"),a=m("a"),l=g(e[1]),o=p(),r=m("button"),r.innerHTML='<span class="navbar-toggler-icon"></span>',c=p(),v=m("div"),A=m("ul");for(let t=0;t<b.length;t+=1)b[t].c();h(a,"class","navbar-brand company_brand"),h(a,"href","/"),h(r,"class","navbar-toggler"),h(r,"type","button"),h(r,"data-toggle","collapse"),h(r,"data-target","#navbarNav"),h(r,"aria-controls","navbarNav"),h(r,"aria-expanded","false"),h(r,"aria-label","Toggle navigation"),h(A,"class","navbar-nav ml-auto svelte-z4knur"),h(v,"class","collapse navbar-collapse"),h(v,"id","navbarNav"),h(s,"class","navbar main-bgcolor navbar-expand-md navbar-dark svelte-z4knur"),h(n,"id","nav-bar"),h(n,"class","svelte-z4knur")},m(t,e){u(t,n,e),i(n,s),i(s,a),i(a,l),i(s,o),i(s,r),i(s,c),i(s,v),i(v,A);for(let t=0;t<b.length;t+=1)b[t].m(A,null)},p(t,[e]){if(2&e&&E(l,t[1]),1&e){let n;for($=t[0],n=0;n<$.length;n+=1){const s=U(t,$,n);b[n]?b[n].p(s,e):(b[n]=H(s),b[n].c(),b[n].m(A,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=$.length}},i:t,o:t,d(t){t&&f(n),d(b,t)}}}function q(t,e,n){let{navlists:s=[]}=e,{header:a}=e;return t.$$set=t=>{"navlists"in t&&n(0,s=t.navlists),"header"in t&&n(1,a=t.header)},[s,a]}class V extends B{constructor(t){super(),P(this,t,q,G,l,{navlists:0,header:1})}}function W(e){let n,s,a,l,o,r,d,E,v,A,$,b,I,T,D,S,L;return{c(){n=m("section"),s=m("div"),a=m("div"),l=m("div"),o=m("h1"),o.textContent=`${e[0]}`,r=p(),d=m("p"),d.textContent=`${e[1]}`,E=p(),v=m("a"),A=m("i"),$=p(),b=g(e[3]),I=p(),T=m("div"),T.innerHTML='<img src="images/home.png" alt="" class="img-fluid"/>',D=p(),S=m("img"),h(o,"class","svelte-1op4mlb"),h(A,"class","far fa-play-circle fa-2x watch-btn svelte-1op4mlb"),h(v,"href",e[2]),h(v,"target","_blank"),h(v,"class","light-color svelte-1op4mlb"),h(l,"class","col-md-6"),h(T,"class","col-md-6"),h(a,"class","row"),h(s,"class","container"),c(S.src,L="images/wave1.png")||h(S,"src","images/wave1.png"),h(S,"alt",""),h(S,"class","wave-img svelte-1op4mlb"),h(n,"class","main-bgcolor light-color svelte-1op4mlb"),h(n,"id","banner")},m(t,e){u(t,n,e),i(n,s),i(s,a),i(a,l),i(l,o),i(l,r),i(l,d),i(l,E),i(l,v),i(v,A),i(v,$),i(v,b),i(a,I),i(a,T),i(n,D),i(n,S)},p:t,i:t,o:t,d(t){t&&f(n)}}}function j(t,e,n){let{bannerData:s={}}=e;const{HEADING:a,DECRIPTION:l,TUTORIAL_URL:o,WATCH_TUTORIAL:r}=s;return t.$$set=t=>{"bannerData"in t&&n(4,s=t.bannerData)},[a,l,o,r,s]}class z extends B{constructor(t){super(),P(this,t,j,W,l,{bannerData:4})}}function F(t,e,n){const s=t.slice();return s[4]=e[n],s}function J(e){let n,s,a,l,o,r,d,E,v,A,$,b=e[4].LABEL+"",I=e[4].DESCRIPTION+"";return{c(){n=m("div"),s=m("img"),o=p(),r=m("h4"),d=g(b),E=p(),v=m("p"),A=g(I),$=p(),c(s.src,a=e[4].URL)||h(s,"src",a),h(s,"alt",l=e[4].LABEL),h(s,"class","service-img svelte-lks6f3"),h(r,"class","svelte-lks6f3"),h(n,"class","col-md-4 service svelte-lks6f3")},m(t,e){u(t,n,e),i(n,s),i(n,o),i(n,r),i(r,d),i(n,E),i(n,v),i(v,A),i(n,$)},p:t,d(t){t&&f(n)}}}function Y(e){let n,s,a,l,o,r,c,g=e[2],E=[];for(let t=0;t<g.length;t+=1)E[t]=J(F(e,g,t));return{c(){n=m("section"),s=m("div"),a=m("h2"),a.textContent=`${e[0]}`,l=p(),o=m("div");for(let t=0;t<E.length;t+=1)E[t].c();r=p(),c=m("buttom"),c.textContent=`${e[1]}`,h(a,"class","title svelte-lks6f3"),h(o,"class","row section-body"),h(c,"class","btn btn-primary round-border main-bgcolor svelte-lks6f3"),h(s,"class","container text-center"),h(n,"id","services"),h(n,"class","section svelte-lks6f3")},m(t,e){u(t,n,e),i(n,s),i(s,a),i(s,l),i(s,o);for(let t=0;t<E.length;t+=1)E[t].m(o,null);i(s,r),i(s,c)},p(t,[e]){if(4&e){let n;for(g=t[2],n=0;n<g.length;n+=1){const s=F(t,g,n);E[n]?E[n].p(s,e):(E[n]=J(s),E[n].c(),E[n].m(o,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=g.length}},i:t,o:t,d(t){t&&f(n),d(E,t)}}}function K(t,e,n){let{serviceData:s={}}=e;const{HEADING:a,ALL_SERVICES:l,SERVICE_LIST:o}=s;return t.$$set=t=>{"serviceData"in t&&n(3,s=t.serviceData)},[a,l,o,s]}class Q extends B{constructor(t){super(),P(this,t,K,Y,l,{serviceData:3})}}function X(t,e,n){const s=t.slice();return s[5]=e[n],s}function Z(e){let n,s,a=e[5]+"";return{c(){n=m("li"),s=g(a),h(n,"class","svelte-lcl9qq")},m(t,e){u(t,n,e),i(n,s)},p:t,d(t){t&&f(n)}}}function tt(e){let n,s,a,l,o,r,g,E,v,A,$,b,I,T=e[3],D=[];for(let t=0;t<T.length;t+=1)D[t]=Z(X(e,T,t));return{c(){n=m("section"),s=m("div"),a=m("h2"),a.textContent=`${e[0]}`,l=p(),o=m("div"),r=m("div"),g=m("h3"),g.textContent=`${e[1]}`,E=p(),v=m("ul");for(let t=0;t<D.length;t+=1)D[t].c();A=p(),$=m("div"),b=m("img"),h(a,"class","title text-center"),h(g,"class","about-title svelte-lcl9qq"),h(v,"class","svelte-lcl9qq"),h(r,"class","col-md-6"),c(b.src,I=e[2])||h(b,"src",I),h(b,"alt",""),h(b,"class","img-fluid"),h($,"class","col-md-6"),h(o,"class","row section-body"),h(s,"class","container"),h(n,"id","about-us"),h(n,"class","section grey-bgcolor svelte-lcl9qq")},m(t,e){u(t,n,e),i(n,s),i(s,a),i(s,l),i(s,o),i(o,r),i(r,g),i(r,E),i(r,v);for(let t=0;t<D.length;t+=1)D[t].m(v,null);i(o,A),i(o,$),i($,b)},p(t,[e]){if(8&e){let n;for(T=t[3],n=0;n<T.length;n+=1){const s=X(t,T,n);D[n]?D[n].p(s,e):(D[n]=Z(s),D[n].c(),D[n].m(v,null))}for(;n<D.length;n+=1)D[n].d(1);D.length=T.length}},i:t,o:t,d(t){t&&f(n),d(D,t)}}}function et(t,e,n){let{aboutData:s={}}=e;const{HEADING:a,TITLE:l,IMAGE_URL:o,WHY_CHOOSE_US_LIST:r}=s;return t.$$set=t=>{"aboutData"in t&&n(4,s=t.aboutData)},[a,l,o,r,s]}class nt extends B{constructor(t){super(),P(this,t,et,tt,l,{aboutData:4})}}function st(t,e,n){const s=t.slice();return s[3]=e[n],s}function at(e){let n,s,a,l,o,r,d,E,v,A,$,b,I,T,D,S=e[3].DESCRIPTION+"",L=e[3].NAME+"",_=e[3].DESIGNATION+"";return{c(){n=m("div"),s=m("p"),a=g(S),l=p(),o=m("img"),d=p(),E=m("p"),v=m("b"),A=g(L),$=p(),b=m("br"),I=p(),T=g(_),D=p(),c(o.src,r=e[3].IMAGE_URL)||h(o,"src",r),h(o,"alt",""),h(o,"class","svelte-1xpi47k"),h(E,"class","user-details svelte-1xpi47k"),h(n,"class","col-md-5 testimonial svelte-1xpi47k")},m(t,e){u(t,n,e),i(n,s),i(s,a),i(n,l),i(n,o),i(n,d),i(n,E),i(E,v),i(v,A),i(E,$),i(E,b),i(E,I),i(E,T),i(n,D)},p:t,d(t){t&&f(n)}}}function lt(e){let n,s,a,l,o,r=e[1],c=[];for(let t=0;t<r.length;t+=1)c[t]=at(st(e,r,t));return{c(){n=m("section"),s=m("div"),a=m("h2"),a.textContent=`${e[0]}`,l=p(),o=m("div");for(let t=0;t<c.length;t+=1)c[t].c();h(a,"class","title text-center"),h(o,"class","row offset-1 section-body"),h(s,"class","container"),h(n,"id","testimonials"),h(n,"class","section")},m(t,e){u(t,n,e),i(n,s),i(s,a),i(s,l),i(s,o);for(let t=0;t<c.length;t+=1)c[t].m(o,null)},p(t,[e]){if(2&e){let n;for(r=t[1],n=0;n<r.length;n+=1){const s=st(t,r,n);c[n]?c[n].p(s,e):(c[n]=at(s),c[n].c(),c[n].m(o,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=r.length}},i:t,o:t,d(t){t&&f(n),d(c,t)}}}function ot(t,e,n){let{testimonialData:s={}}=e;const{HEADING:a,TESTIMONIAL_LIST:l}=s;return t.$$set=t=>{"testimonialData"in t&&n(2,s=t.testimonialData)},[a,l,s]}class rt extends B{constructor(t){super(),P(this,t,ot,lt,l,{testimonialData:2})}}function ct(t,e,n){const s=t.slice();return s[3]=e[n],s}function it(e){let n,s,a,l,o;return{c(){n=m("a"),s=m("img"),o=p(),c(s.src,a=e[3])||h(s,"src",a),h(s,"alt",l="Social media "+e[3]),h(s,"class","svelte-tq0cc6"),h(n,"href","https://www.linkedin.com/in/phillip-choi-aba95a141"),h(n,"target","_blank"),h(n,"class","svelte-tq0cc6")},m(t,e){u(t,n,e),i(n,s),i(n,o)},p:t,d(t){t&&f(n)}}}function ut(e){let n,s,a,l,o,r=e[0],c=[];for(let t=0;t<r.length;t+=1)c[t]=it(ct(e,r,t));return{c(){n=m("section"),s=m("div"),a=m("h2"),a.textContent=`${e[1]}`,l=p(),o=m("div");for(let t=0;t<c.length;t+=1)c[t].c();h(a,"class","title text-center"),h(o,"class","social-icons section-body svelte-tq0cc6"),h(s,"class","container text-center"),h(n,"id","social-media"),h(n,"class","section grey-bgcolor")},m(t,e){u(t,n,e),i(n,s),i(s,a),i(s,l),i(s,o);for(let t=0;t<c.length;t+=1)c[t].m(o,null)},p(t,[e]){if(1&e){let n;for(r=t[0],n=0;n<r.length;n+=1){const s=ct(t,r,n);c[n]?c[n].p(s,e):(c[n]=it(s),c[n].c(),c[n].m(o,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=r.length}},i:t,o:t,d(t){t&&f(n),d(c,t)}}}function ft(t,e,n){let{socialData:s={}}=e;const{IMAGES_LIST:a,HEADING:l}=s;return t.$$set=t=>{"socialData"in t&&n(2,s=t.socialData)},[a,l,s]}class dt extends B{constructor(t){super(),P(this,t,ft,ut,l,{socialData:2})}}function mt(e){let n,s,a,l,o,r,d,v,A,$,b,I,T,D,S,L,_,R,C,N,x,O,w,y,k,M,P,B,U,H,G,q,V,W,j,z;return{c(){n=m("section"),s=m("img"),l=p(),o=m("div"),r=m("div"),d=m("div"),v=m("div"),A=g(e[0]),$=p(),b=m("p"),b.textContent=`${e[1]}`,I=p(),T=m("div"),D=m("p"),D.textContent=`${e[4]}`,S=p(),L=m("p"),_=m("i"),R=p(),C=g(e[5]),N=p(),x=m("p"),O=m("i"),w=p(),y=g(e[6]),k=p(),M=m("p"),P=m("i"),B=p(),U=g(e[7]),H=p(),G=m("div"),q=m("p"),q.textContent=`${e[2]}`,V=p(),W=m("input"),j=p(),z=m("button"),z.textContent=`${e[3]}`,c(s.src,a="images/wave2.png")||h(s,"src","images/wave2.png"),h(s,"alt",""),h(s,"class","wave-img svelte-9trpfq"),h(v,"class","company_brand"),h(d,"class","col-md-4 footer-box"),h(D,"class","footer-title svelte-9trpfq"),h(_,"class","fas fa-map-marker-alt"),h(O,"class","fas fa-phone"),h(P,"class","fas fa-envelope"),h(T,"class","col-md-4 footer-box"),h(q,"class","footer-title svelte-9trpfq"),h(W,"type","email"),h(W,"class","form-control round-border svelte-9trpfq"),h(W,"placeholder","Your Email"),h(z,"type","button"),h(z,"class","btn btn-outline-light round-border svelte-9trpfq"),h(G,"class","col-md-4 footer-box svelte-9trpfq"),h(r,"class","row section-body"),h(o,"class","container"),h(n,"class","main-bgcolor light-color"),h(n,"id","footer")},m(t,e){u(t,n,e),i(n,s),i(n,l),i(n,o),i(o,r),i(r,d),i(d,v),i(v,A),i(d,$),i(d,b),i(r,I),i(r,T),i(T,D),i(T,S),i(T,L),i(L,_),i(L,R),i(L,C),i(T,N),i(T,x),i(x,O),i(x,w),i(x,y),i(T,k),i(T,M),i(M,P),i(M,B),i(M,U),i(r,H),i(r,G),i(G,q),i(G,V),i(G,W),i(G,j),i(G,z)},p(t,[e]){1&e&&E(A,t[0])},i:t,o:t,d(t){t&&f(n)}}}function gt(t,e,n){let{footerData:s={}}=e,{header:a=""}=e;const{DESCRIPTION:l,CONTACT_DETAILS:o,SUBSCRIBE_NEWSLETTER:r,SUBSCRIBE:c}=s,{HEADING:i,ADDRESS:u,MOBILE:f,EMAIL:d}=o;return t.$$set=t=>{"footerData"in t&&n(8,s=t.footerData),"header"in t&&n(0,a=t.header)},[a,l,r,c,i,u,f,d,s]}class pt extends B{constructor(t){super(),P(this,t,gt,mt,l,{footerData:8,header:0})}}const ht={HEADER:"Phil",NAVBAR_DATA:[{id:1,url:"/",label:"Home"},{id:2,url:"#services",label:"Services"},{id:3,url:"#about-us",label:"About us"},{id:4,url:"#testimonials",label:"Testimonials"},{id:5,url:"#footer",label:"Contacts"}],BANNER_DATA:{HEADING:"Phil Choi",DECRIPTION:"I am a full stack developer with a passion for building web applications.",TUTORIAL_URL:"https://www.linkedin.com/in/phillip-choi-aba95a141",WATCH_TUTORIAL:"Click here"},SERVICE_DATA:{HEADING:"SERVICES",ALL_SERVICES:"PROGRAMMER | DEVELOPER | CODER",SERVICE_LIST:[{LABEL:"MOBILE APP DEVELOPMENT",DESCRIPTION:"CROSS PLATFORM REACT-NATIVE AND FLUTTER",URL:"images/service3.png"},{LABEL:"WEB APP DEVELOPMENT",DESCRIPTION:"REACT JS, VUE JS, and SVELTE",URL:"images/service2.png"},{LABEL:"SERVER-SIDE DEVELOPMENT",DESCRIPTION:"Python and Node.js",URL:"images/service1.png"}]},ABOUT_DATA:{HEADING:"ABOUT",TITLE:"Software Developer",IMAGE_URL:"images/network.png",WHY_CHOOSE_US_LIST:["Cross-platform development","Flexible and scalable","Highly skilled","Experienced","Creative","Passionate"]},TESTIMONIAL_DATA:{HEADING:"What clients say?",TESTIMONIAL_LIST:[{DESCRIPTION:"lorem ipsum",IMAGE_URL:"images/user1.jpg",NAME:"Julia hawkins",DESIGNATION:"Co-founder at ABC"},{DESCRIPTION:"lorem ipsum",IMAGE_URL:"images/user2.jpg",NAME:"John Smith",DESIGNATION:"Co-founder at xyz"}]},SOCIAL_DATA:{HEADING:"Find us on social media",IMAGES_LIST:["images/facebook-icon.png","images/instagram-icon.png","images/whatsapp-icon.png","images/twitter-icon.png","images/linkedin-icon.png","images/snapchat-icon.png"]},FOOTER_DATA:{DESCRIPTION:"Lorem ipsum",CONTACT_DETAILS:{HEADING:"Contact me",ADDRESS:"Seoul",MOBILE:"+82-10-3392-5605",EMAIL:"Philchoi@icloud.com"},SUBSCRIBE_NEWSLETTER:"Subscribe newsletter",SUBSCRIBE:"Subscribe"}};function Et(e){let n,s,a,l,o,r,c,i,d,m,g,h,E,v;return n=new V({props:{navlists:ht.NAVBAR_DATA,header:ht.HEADER}}),a=new z({props:{bannerData:ht.BANNER_DATA}}),o=new Q({props:{serviceData:ht.SERVICE_DATA}}),c=new nt({props:{aboutData:ht.ABOUT_DATA}}),d=new rt({props:{testimonialData:ht.TESTIMONIAL_DATA}}),g=new dt({props:{socialData:ht.SOCIAL_DATA}}),E=new pt({props:{footerData:ht.FOOTER_DATA,header:ht.HEADER}}),{c(){w(n.$$.fragment),s=p(),w(a.$$.fragment),l=p(),w(o.$$.fragment),r=p(),w(c.$$.fragment),i=p(),w(d.$$.fragment),m=p(),w(g.$$.fragment),h=p(),w(E.$$.fragment)},m(t,e){y(n,t,e),u(t,s,e),y(a,t,e),u(t,l,e),y(o,t,e),u(t,r,e),y(c,t,e),u(t,i,e),y(d,t,e),u(t,m,e),y(g,t,e),u(t,h,e),y(E,t,e),v=!0},p:t,i(t){v||(x(n.$$.fragment,t),x(a.$$.fragment,t),x(o.$$.fragment,t),x(c.$$.fragment,t),x(d.$$.fragment,t),x(g.$$.fragment,t),x(E.$$.fragment,t),v=!0)},o(t){O(n.$$.fragment,t),O(a.$$.fragment,t),O(o.$$.fragment,t),O(c.$$.fragment,t),O(d.$$.fragment,t),O(g.$$.fragment,t),O(E.$$.fragment,t),v=!1},d(t){k(n,t),t&&f(s),k(a,t),t&&f(l),k(o,t),t&&f(r),k(c,t),t&&f(i),k(d,t),t&&f(m),k(g,t),t&&f(h),k(E,t)}}}return new class extends B{constructor(t){super(),P(this,t,null,Et,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
