import{_ as d,e as p,b as c,f as _,g as t,i as n,G as i,n as f,q as v,I as k,x,p as g,m}from"./index-af01313f.js";import{a as w}from"./_commonjsHelpers-34c3cec1.js";import{S as l}from"./sweetalert2.all-777e80f8.js";const $="/img/logo.png";const y={data(){return{sidebarToggled:!1}},methods:{toggleSidebar(){this.sidebarToggled=!this.sidebarToggled}}},T=t("a",{class:"sidebar-brand d-flex align-items-center justify-content-center",href:"#"},[t("div",{class:"sidebar-brand-icon mt-2"},[t("img",{src:$,alt:"logo",width:"100"})])],-1),B=t("div",{class:"sidebar-heading mt-5 text-black"},"Menu",-1),C={class:"nav-item"},S=t("i",{class:"bi bi-speedometer2 text-black"},null,-1),I=t("span",null,"Dashboard",-1),N={class:"nav-item"},j=t("i",{class:"bi bi-cash-coin",style:{"font-size":"16px"}},null,-1),L=t("span",{style:{"font-weight":"bold"}},"Transaksi",-1),A=t("hr",{class:"sidebar-divider"},null,-1),D={class:"nav-item"},F=t("i",{class:"bi bi-journal-album"},null,-1),z=t("span",null,"Jurnal",-1),M={class:"nav-item"},V=t("i",{class:"bi bi-database-fill-check"},null,-1),P=t("span",null,"Buku Besar",-1),q=t("hr",{class:"sidebar-divider d-none d-md-block"},null,-1);function E(e,o,b,h,u,a){const s=p("router-link");return c(),_("ul",{class:f(["navbar-nav bg-light sidebar sidebar-dark accordion",{toggled:u.sidebarToggled}]),id:"accordionSidebar"},[T,B,t("li",C,[n(s,{class:"nav-link text-black",to:"/admin-dashboard","active-class":"font-weight-bold active-link"},{default:i(()=>[S,I]),_:1})]),t("li",N,[n(s,{class:"nav-link text-black",to:"/admin-event","active-class":"font-weight-bold active-link"},{default:i(()=>[j,L]),_:1})]),A,t("li",D,[n(s,{class:"nav-link text-black",to:"/admin-jurnal","active-class":"font-weight-bold text-black active-link"},{default:i(()=>[F,z]),_:1})]),t("li",M,[n(s,{class:"nav-link text-black",to:"/admin-ledger","active-class":"font-weight-bold text-black active-link"},{default:i(()=>[V,P]),_:1})]),q],2)}const _t=d(y,[["render",E]]),G="/assets/bagus-cd4e9fbe.jpg";const J={props:{sidebarToggled:Boolean},data(){return{name:"",gambar:"",user_id:""}},methods:{sidebarToggled(){this.$emit("toggle-sidebar",!this.sidebarToggled)},konfirmasi(){l.fire({title:"Apakah Anda yakin ingin logout?",text:"Anda akan keluar dari akun ini.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Logout",cancelButtonText:"Batal"}).then(e=>{e.isConfirmed&&this.logout()})},logout(){const e=sessionStorage.getItem("token");if(!e){l.fire({title:"Logout gagal",text:"Token tidak ditemukan.",icon:"error",confirmButtonColor:"#d33"});return}w.post("https://backend.keuanganfpti.com/api/auth/logout",null,{headers:{Authorization:"Bearer "+e}}).then(o=>{l.fire({title:"Logout berhasil!",icon:"success",timer:1500,timerProgressBar:!0,showConfirmButton:!1}),sessionStorage.removeItem("token"),this.$router.push("/")}).catch(o=>{console.error(o),l.fire({title:"Logout gagal",text:"Terjadi kesalahan saat melakukan logout.",icon:"error",confirmButtonColor:"#d33"})})}},created(){}},r=e=>(g("data-v-edd55f13"),e=e(),m(),e),H={class:"navbar navbar-expand navbar-light customNav bgCustom topbar mb-4 static-top shadow"},K=r(()=>t("i",{class:"fa fa-bars"},null,-1)),O=[K],Q={class:"navbar-nav ml-auto"},R=r(()=>t("div",{class:"topbar-divider d-none d-sm-block"},null,-1)),U={class:"nav-item dropdown no-arrow"},W={class:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},X={class:"mr-2 d-none d-lg-inline text-white small"},Y=r(()=>t("img",{src:G,alt:" gambarprofile",class:"img-profile rounded-circle"},null,-1)),Z={class:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown"},tt=r(()=>t("i",{class:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"},null,-1));function et(e,o,b,h,u,a){return c(),_("nav",H,[t("form",{class:"form-inline",onSubmit:o[1]||(o[1]=v(()=>{},["prevent"]))},[t("button",{id:"sidebarToggleTop",class:"btn btn-link d-md-none rounded-circle mr-3 text-light",onClick:o[0]||(o[0]=(...s)=>a.sidebarToggled&&a.sidebarToggled(...s))},O)],32),t("ul",Q,[R,t("li",U,[t("a",W,[t("span",X,k(this.name),1),Y]),t("div",Z,[t("a",{class:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal",onClick:o[2]||(o[2]=s=>a.konfirmasi())},[tt,x(" Logout ")])])])])])}const ut=d(J,[["render",et],["__scopeId","data-v-edd55f13"]]);const ot={},st=e=>(g("data-v-020fae98"),e=e(),m(),e),at={class:"sticky-footer bgCustom"},nt=st(()=>t("div",{class:"container my-auto"},[t("div",{class:"copyright text-center my-auto"},[t("strong",null,"Copyright © Federasi Panjat Tembing Indonesia 2024")])],-1)),it=[nt];function lt(e,o){return c(),_("footer",at,it)}const gt=d(ot,[["render",lt],["__scopeId","data-v-020fae98"]]);export{gt as F,ut as N,_t as S};