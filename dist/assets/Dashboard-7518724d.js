import{S as je,N as Ee,F as Me}from"./Footer-f4d60248.js";import{d as H,r as c,y as N,z as w,o as Pe,A as Be,B as Le,C as ye,a as ae,D as we,h as x,E as _,F as Ae,_ as Ce,e as ne,b as X,c as Ve,G as oe,i as S,f as ie,H as Re,g as l,I as se,p as Xe,m as ze,n as R,J as He}from"./index-3985fc61.js";import{a as Ue}from"./_commonjsHelpers-34c3cec1.js";import"./sweetalert2.all-777e80f8.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const f={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},xe={itemsToShow:{default:f.itemsToShow,type:Number},itemsToScroll:{default:f.itemsToScroll,type:Number},wrapAround:{default:f.wrapAround,type:Boolean},throttle:{default:f.throttle,type:Number},snapAlign:{default:f.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:f.transition,type:Number},breakpoints:{default:f.breakpoints,type:Object},autoplay:{default:f.autoplay,type:Number},pauseAutoplayOnHover:{default:f.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:f.mouseDrag,type:Boolean},touchDrag:{default:f.touchDrag,type:Boolean},dir:{default:f.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:f.i18n,type:Object},settings:{default(){return{}},type:Object}};function Ye({config:e,slidesCount:a}){const{snapAlign:t,wrapAround:i,itemsToShow:o=1}=e;if(i)return Math.max(a-1,0);let r;switch(t){case"start":r=a-o;break;case"end":r=a-1;break;case"center":case"center-odd":r=a-Math.ceil((o-.5)/2);break;case"center-even":r=a-Math.ceil(o/2);break;default:r=0;break}return Math.max(r,0)}function Fe({config:e,slidesCount:a}){const{wrapAround:t,snapAlign:i,itemsToShow:o=1}=e;let r=0;if(t||o>a)return r;switch(i){case"start":r=0;break;case"end":r=o-1;break;case"center":case"center-odd":r=Math.floor((o-1)/2);break;case"center-even":r=Math.floor((o-2)/2);break;default:r=0;break}return r}function re({val:e,max:a,min:t}){return a<t?e:Math.min(Math.max(e,t),a)}function We({config:e,currentSlide:a,slidesCount:t}){const{snapAlign:i,wrapAround:o,itemsToShow:r=1}=e;let g=a;switch(i){case"center":case"center-odd":g-=(r-1)/2;break;case"center-even":g-=(r-2)/2;break;case"end":g-=r-1;break}return o?g:re({val:g,max:t-r,min:0})}function Te(e){return e?e.reduce((a,t)=>{var i;return t.type===Ae?[...a,...Te(t.children)]:((i=t.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...a,t]:a},[]):[]}function z({val:e,max:a,min:t=0}){return e>a?z({val:e-(a+1),max:a,min:t}):e<t?z({val:e+(a+1),max:a,min:t}):e}function Ge(e,a){let t;return a?function(...i){const o=this;t||(e.apply(o,i),t=!0,setTimeout(()=>t=!1,a))}:e}function Je(e,a){let t;return function(...i){t&&clearTimeout(t),t=setTimeout(()=>{e(...i),t=null},a)}}function De(e="",a={}){return Object.entries(a).reduce((t,[i,o])=>t.replace(`{${i}}`,String(o)),e)}var Ke=H({name:"ARIA",setup(){const e=_("config",N(Object.assign({},f))),a=_("currentSlide",c(0)),t=_("slidesCount",c(0));return()=>x("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},De(e.i18n.itemXofY,{currentSlide:a.value+1,slidesCount:t.value}))}}),qe=H({name:"Carousel",props:xe,setup(e,{slots:a,emit:t,expose:i}){var o;const r=c(null),g=c([]),u=c(0),d=c(0),s=N(Object.assign({},f));let b=Object.assign({},f),k;const m=c((o=e.modelValue)!==null&&o!==void 0?o:0),U=c(0),le=c(0),D=c(0),$=c(0);let I,Y;w("config",s),w("slidesCount",d),w("currentSlide",m),w("maxSlide",D),w("minSlide",$),w("slideWidth",u);function F(){k=Object.assign({},e.breakpoints),b=Object.assign(Object.assign(Object.assign({},b),e),{i18n:Object.assign(Object.assign({},b.i18n),e.i18n),breakpoints:void 0}),ue(b)}function M(){if(!k||!Object.keys(k).length)return;const n=Object.keys(k).map(v=>Number(v)).sort((v,y)=>+y-+v);let h=Object.assign({},b);n.some(v=>{const y=window.matchMedia(`(min-width: ${v}px)`).matches;return y&&(h=Object.assign(Object.assign({},h),k[v])),y}),ue(h)}function ue(n){Object.entries(n).forEach(([h,v])=>s[h]=v)}const ce=Je(()=>{M(),O()},16);function O(){if(!r.value)return;const n=r.value.getBoundingClientRect();u.value=n.width/s.itemsToShow}function W(){d.value<=0||(le.value=Math.ceil((d.value-1)/2),D.value=Ye({config:s,slidesCount:d.value}),$.value=Fe({config:s,slidesCount:d.value}),s.wrapAround||(m.value=re({val:m.value,max:D.value,min:$.value})))}Pe(()=>{Be(()=>O()),setTimeout(()=>O(),1e3),M(),fe(),window.addEventListener("resize",ce,{passive:!0}),t("init")}),Le(()=>{Y&&clearTimeout(Y),I&&clearInterval(I),window.removeEventListener("resize",ce,{passive:!0})});let p=!1;const P={x:0,y:0},B={x:0,y:0},A=N({x:0,y:0}),L=c(!1),G=c(!1),Ne=()=>{L.value=!0},$e=()=>{L.value=!1};function de(n){["INPUT","TEXTAREA","SELECT"].includes(n.target.tagName)||(p=n.type==="touchstart",p||n.preventDefault(),!(!p&&n.button!==0||C.value)&&(P.x=p?n.touches[0].clientX:n.clientX,P.y=p?n.touches[0].clientY:n.clientY,document.addEventListener(p?"touchmove":"mousemove",ve,!0),document.addEventListener(p?"touchend":"mouseup",me,!0)))}const ve=Ge(n=>{G.value=!0,B.x=p?n.touches[0].clientX:n.clientX,B.y=p?n.touches[0].clientY:n.clientY;const h=B.x-P.x,v=B.y-P.y;A.y=v,A.x=h},s.throttle);function me(){const n=s.dir==="rtl"?-1:1,h=Math.sign(A.x)*.4,v=Math.round(A.x/u.value+h)*n;if(v&&!p){const y=Q=>{Q.stopPropagation(),window.removeEventListener("click",y,!0)};window.addEventListener("click",y,!0)}T(m.value-v),A.x=0,A.y=0,G.value=!1,document.removeEventListener(p?"touchmove":"mousemove",ve,!0),document.removeEventListener(p?"touchend":"mouseup",me,!0)}function fe(){!s.autoplay||s.autoplay<=0||(I=setInterval(()=>{s.pauseAutoplayOnHover&&L.value||V()},s.autoplay))}function he(){I&&(clearInterval(I),I=null),fe()}const C=c(!1);function T(n){const h=s.wrapAround?n:re({val:n,max:D.value,min:$.value});m.value===h||C.value||(t("slide-start",{slidingToIndex:n,currentSlideIndex:m.value,prevSlideIndex:U.value,slidesCount:d.value}),C.value=!0,U.value=m.value,m.value=h,Y=setTimeout(()=>{if(s.wrapAround){const v=z({val:h,max:D.value,min:0});v!==m.value&&(m.value=v,t("loop",{currentSlideIndex:m.value,slidingToIndex:n}))}t("update:modelValue",m.value),t("slide-end",{currentSlideIndex:m.value,prevSlideIndex:U.value,slidesCount:d.value}),C.value=!1,he()},s.transition))}function V(){T(m.value+s.itemsToScroll)}function J(){T(m.value-s.itemsToScroll)}const ge={slideTo:T,next:V,prev:J};w("nav",ge),w("isSliding",C);const pe=ye(()=>We({config:s,currentSlide:m.value,slidesCount:d.value}));w("slidesToScroll",pe);const Oe=ye(()=>{const n=s.dir==="rtl"?-1:1,h=pe.value*u.value*n;return{transform:`translateX(${A.x-h}px)`,transition:`${C.value?s.transition:0}ms`,margin:s.wrapAround?`0 -${d.value*u.value}px`:"",width:"100%"}});function _e(){F(),M(),W(),O(),he()}Object.keys(xe).forEach(n=>{["modelValue"].includes(n)||ae(()=>e[n],_e)}),ae(()=>e.modelValue,n=>{n!==m.value&&T(Number(n))}),ae(d,W),t("before-init"),F();const be={config:s,slidesCount:d,slideWidth:u,next:V,prev:J,slideTo:T,currentSlide:m,maxSlide:D,minSlide:$,middleSlide:le};i({updateBreakpointsConfigs:M,updateSlidesData:W,updateSlideWidth:O,initDefaultConfigs:F,restartCarousel:_e,slideTo:T,next:V,prev:J,nav:ge,data:be});const K=a.default||a.slides,q=a.addons,Se=N(be);return()=>{const n=Te(K==null?void 0:K(Se)),h=(q==null?void 0:q(Se))||[];n.forEach((Z,ee)=>Z.props.index=ee);let v=n;if(s.wrapAround){const Z=n.map((te,j)=>we(te,{index:-n.length+j,isClone:!0,key:`clone-before-${j}`})),ee=n.map((te,j)=>we(te,{index:n.length+j,isClone:!0,key:`clone-after-${j}`}));v=[...Z,...n,...ee]}g.value=n,d.value=Math.max(n.length,1);const y=x("ol",{class:"carousel__track",style:Oe.value,onMousedownCapture:s.mouseDrag?de:null,onTouchstartPassiveCapture:s.touchDrag?de:null},v),Q=x("div",{class:"carousel__viewport"},y);return x("section",{ref:r,class:{carousel:!0,"is-sliding":C.value,"is-dragging":G.value,"is-hover":L.value,"carousel--rtl":s.dir==="rtl"},dir:s.dir,"aria-label":s.i18n.ariaGallery,tabindex:"0",onMouseenter:Ne,onMouseleave:$e},[Q,h,x(Ke)])}}}),ke;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(ke||(ke={}));const Qe=()=>{const e=_("config",N(Object.assign({},f))),a=_("maxSlide",c(1)),t=_("minSlide",c(1)),i=_("currentSlide",c(1)),o=_("nav",{}),r=u=>z({val:i.value,max:a.value,min:0})===u,g=[];for(let u=t.value;u<a.value+1;u++){const d=x("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(u)},"aria-label":De(e.i18n.ariaNavigateToSlide,{slideNumber:u+1}),onClick:()=>o.slideTo(u)}),s=x("li",{class:"carousel__pagination-item",key:u},d);g.push(s)}return x("ol",{class:"carousel__pagination"},g)};var Ze=H({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:a}){const t=_("config",N(Object.assign({},f))),i=_("currentSlide",c(0)),o=_("slidesToScroll",c(0)),r=_("isSliding",c(!1)),g=()=>e.index===i.value,u=()=>e.index===i.value-1,d=()=>e.index===i.value+1,s=()=>{const b=Math.floor(o.value),k=Math.ceil(o.value+t.itemsToShow-1);return e.index>=b&&e.index<=k};return()=>{var b;return x("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":s(),"carousel__slide--active":g(),"carousel__slide--prev":u(),"carousel__slide--next":d(),"carousel__slide--sliding":r.value},"aria-hidden":!s()},(b=a.default)===null||b===void 0?void 0:b.call(a))}}});const et="/assets/person2-48b9c726.jpg";const tt=H({name:"Autoplay",components:{Carousel:qe,Slide:Ze,Pagination:Qe}}),Ie=e=>(Xe("data-v-bf20e38b"),e=e(),ze(),e),at={class:"row"},nt=Ie(()=>l("div",{class:"col-sm-6"},[l("img",{src:et,height:"100",alt:"gambar"})],-1)),ot={class:"col-sm-6"},st={class:"carousel__item"},rt=Ie(()=>l("div",{class:"carousel__item"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",-1));function it(e,a,t,i,o,r){const g=ne("Slide"),u=ne("Pagination"),d=ne("Carousel",!0);return X(),Ve(d,{autoplay:2e3,"wrap-around":!0},{addons:oe(()=>[S(u)]),default:oe(()=>[(X(),ie(Ae,null,Re(2,s=>S(g,{key:s},{default:oe(()=>[l("div",at,[nt,l("div",ot,[l("div",st,"Berita "+se(s),1),rt])])]),_:2},1024)),64))]),_:1})}const lt=Ce(tt,[["render",it],["__scopeId","data-v-bf20e38b"]]),ut={props:{color:String,header:String,value:String,icon:String}},ct={class:"card-body"},dt={class:"row no-gutters align-items-center"},vt={class:"col mr-2"},mt={class:"h5 mb-0 font-weight-bold text-gray-800"},ft={class:"col-auto"};function ht(e,a,t,i,o,r){return X(),ie("div",{class:R("card border-left-"+t.color+" shadow h-100 py-2")},[l("div",ct,[l("div",dt,[l("div",vt,[l("div",{class:R("text-xs font-weight-bold text-"+t.color+" text-uppercase mb-1")},se(t.header),3),l("div",mt,se(t.value),1)]),l("div",ft,[l("i",{class:R("fas "+t.icon+" fa-2x text-gray-300")},null,2)])])])],2)}const E=Ce(ut,[["render",ht]]);const gt={id:"wrapper"},pt={id:"content-wrapper",class:"d-flex flex-column"},_t={id:"content"},bt={class:"container-fluid mt-4"},St=l("h1",{class:"h3 mb-0 text-gray-800 text-center"},"Dashboard",-1),yt={class:"row mt-3"},wt={class:"col-sm-6"},xt={class:"col-sm-3"},kt={class:"col-sm-3"},At={class:"row mt-4"},Ct={class:"col-xl-3 col-md-6 mb-4"},Tt={class:"col-xl-3 col-md-6 mb-4"},Dt={class:"col-xl-3 col-md-6 mb-4"},It=He('<div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-warning shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-warning text-uppercase mb-1"> Akun </div><div class="h5 mb-0 font-weight-bold text-gray-800"> 4 </div></div><div class="col-auto"><i class="fas fa-solid fa-users fa-2x text-gray-300"></i></div></div></div></div></div>',1),Nt={data(){return{hutangBelumDibayar:0,hutangSudahDibayar:0,saldoSaatIni:0,totalPenerimaan:0,totalPengiriman:0,ready:!1,user_id:""}},methods:{async fetchDataReport(){try{const e=await Ue.get(`https://backend.keuanganfpti.com/api/report-keuangan/${this.user_id}`,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.hutangBelumDibayar=e.data.hutangBelumDibayar,this.hutangSudahDibayar=e.data.hutangSudahDibayar,this.saldoSaatIni=e.data.saldoSaatIni,this.totalPenerimaan=e.data.totalPenerimaan,this.totalPengiriman=e.data.totalPengiriman,this.ready=!0}catch(e){console.error(e)}}},computed:{formatCurrency:function(){return function(e){return e?new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e):"Rp 0,00"}}},created(){const e=sessionStorage.getItem("token");if(e)try{const[a,t]=e.split("."),i=JSON.parse(atob(a)),o=atob(t),r=JSON.parse(atob(e.split(".")[1])),g=r.exp,u=new Date(g*1e3);console.log("Waktu Kedaluwarsa (UTC):",u.toUTCString()),new Date>u?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman");const d=r.level;this.user_id=r.id,console.log("ini idddd:",this.user_id),d!=="1"?this.$router.push("/unauthorized"):(!i||!o)&&this.$router.push("/")}catch(a){console.error("Error decoding token:",a),this.$router.push("/")}else this.$router.push("/")}},Mt=Object.assign(Nt,{__name:"Dashboard",setup(e){const a=c(!1),t=c(""),i=()=>{a.value=!a.value,t.value=a.value?"toggle-sidebar":""};return(o,r)=>(X(),ie("div",gt,[S(je,{class:R(t.value)},null,8,["class"]),l("div",pt,[l("div",_t,[S(Ee,{onToggleSidebar:i}),l("div",bt,[St,l("div",yt,[l("div",wt,[S(lt)]),l("div",xt,[S(E,{color:"success",header:"Pemasukan",value:o.formatCurrency(o.totalPenerimaan),icon:"fa-calendar"},null,8,["value"])]),l("div",kt,[S(E,{color:"danger",header:"Pengeluaran",value:o.formatCurrency(o.totalPengiriman),icon:"fa-calendar"},null,8,["value"])])]),l("div",At,[l("div",Ct,[S(E,{color:"warning",header:"Saldo",value:o.formatCurrency(o.saldoSaatIni),icon:"fa-calendar"},null,8,["value"])]),l("div",Tt,[S(E,{color:"primary",header:"Lunas",value:o.formatCurrency(o.hutangSudahDibayar),icon:"fa-clipboard-list"},null,8,["value"])]),l("div",Dt,[S(E,{color:"info",header:"Hutang",value:o.formatCurrency(o.hutangBelumDibayar),icon:"fa-clipboard-list"},null,8,["value"])]),It])])]),S(Me)])]))}});export{Mt as default};