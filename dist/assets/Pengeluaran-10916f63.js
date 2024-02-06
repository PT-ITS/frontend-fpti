import{r as k,b as r,f as i,g as e,i as b,n as S,l as v,c as w,G as D,K as U,j as d,v as p,L as P,F as m,H as f,J as B,I as u}from"./index-3985fc61.js";import{S as C,N as A,F as j}from"./Footer-f4d60248.js";import{P as y,D as V}from"./TimeVote-f1f5dff7.js";import{a as h}from"./_commonjsHelpers-34c3cec1.js";import{S as E}from"./sweetalert2.all-777e80f8.js";const T={id:"wrapper"},I={id:"content-wrapper",class:"d-flex flex-column"},F={id:"content"},N={class:"container-fluid mt-4"},R=e("h1",{class:"h3 mb-0 text-gray-800 text-center mb-5"}," Data Pengeluaran ",-1),q={class:"row"},z=e("div",{class:"col-1"},null,-1),K={class:"col-10"},L=B('<div class="row mb-3"><div class="col-6"><button class="btn btn-warning me-2" data-toggle="modal" data-target="#addPengeluaran"><i class="bi bi-plus-circle-fill"></i> Buat Pengeluaran </button></div><div class="col-6"></div></div>',1),J={class:"table-responsive"},M={key:0,class:"text-center"},O=e("thead",null,[e("tr",null,[e("th",{scope:"col",style:{width:"50px"}},"No"),e("th",{scope:"col"},"Aksi"),e("th",{scope:"col"},"Kebutuhan"),e("th",{scope:"col"},"Jumlah Pengeluaranr"),e("th",{scope:"col"},"Deskripsi Pengeluaran")])],-1),H={class:"row"},G={class:"col-6"},W=["onClick"],x=e("i",{class:"bi bi-pencil-square"},null,-1),Q=[x],X={class:"col-6"},Y=["onClick"],Z=e("i",{class:"bi bi-trash3"},null,-1),ee=[Z],ae=e("div",{class:"col-1"},null,-1),te={class:"modal fade",id:"addPengeluaran",tabindex:"-1",role:"dialog","aria-labelledby":"addPengeluaranLabel","aria-hidden":"true"},ne={class:"modal-dialog",role:"document"},se={class:"modal-content"},le=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addPengeluaranLabel"}," Buat Event Baru "),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),oe={class:"modal-body"},re={class:"mb-3"},ie=e("label",{for:"ketua",class:"form-label"},"Kebutuhan",-1),de={class:"mb-3"},ue=e("label",{for:"ketua",class:"form-label"},"Jumlah Pengeluaran",-1),pe={class:"mb-3"},ce=e("label",{for:"mission",class:"form-label"},"Events",-1),he=e("option",{value:"",disabled:"",selected:""},"Pilih Event",-1),ge=["value"],me={class:"mb-3"},_e=e("label",{for:"keterangan",class:"form-label"},"Deskripsi",-1),be={class:"modal-footer"},fe=e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),ke={class:"modal fade",id:"editPengeluaran",tabindex:"-1",role:"dialog","aria-labelledby":"editPengeluaranLabel","aria-hidden":"true"},ve={class:"modal-dialog",role:"document"},Pe={class:"modal-content"},ye=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"editPengeluaranLabel"},"Edit Pengeluaran"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),Se={class:"modal-body"},we={class:"mb-3"},De=e("label",{for:"ketua",class:"form-label"},"Kebutuhan",-1),Ue={class:"mb-3"},Be=e("label",{for:"ketua",class:"form-label"},"Jumlah Pengeluaran",-1),Ce={class:"mb-3"},Ae=e("label",{for:"mission",class:"form-label"},"Events",-1),je=e("option",{value:"",disabled:"",selected:""},"Pilih Event",-1),Ve=["value"],$e={class:"mb-3"},Ee=e("label",{for:"keterangan",class:"form-label"},"Deskripsi",-1),Te={class:"modal-footer"},Ie=e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1);y.use(V);const Fe={data(){return{pengeluarans:[],events:[],formPengeluaran:{keperluan_pengeluaran:"",jumlah_pengeluaran:"",deskripsi_pengeluaran:""},formUpdatePengeluaran:{keperluan_pengeluaran:"",jumlah_pengeluaran:"",deskripsi_pengeluaran:"",id_pengeluaran:""},ready:!1,selectedEvent:"",user_id:""}},methods:{setDataUpdate(t,s,o,c){this.formUpdatePengeluaran.keperluan_pengeluaran=t,this.formUpdatePengeluaran.jumlah_pengeluaran=s,this.formUpdatePengeluaran.deskripsi_pengeluaran=o,this.formUpdatePengeluaran.id_pengeluaran=c},createPengeluaran(){this.ready=!1;const t=new FormData;t.append("keperluan_pengeluaran",this.formPengeluaran.keperluan_pengeluaran),t.append("jumlah_pengeluaran",this.formPengeluaran.jumlah_pengeluaran),t.append("deskripsi_pengeluaran",this.formPengeluaran.deskripsi_pengeluaran),t.append("id_event",this.selectedEvent),h.post("https://backend.keuanganfpti.com/api/create-pengeluaran",t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(s=>{console.log(s.data),this.formPengeluaran={pemberi_sponsor:"",dana_sponsor:"",deskripsi_sponsor:"",selectedEvent:""},this.showAlert("Request Success","Sponsor berhasil buat","success"),this.fetchDataSponsor()}).catch(s=>{this.showAlert("Request Failed","Sponsor gagal buat","error"),console.error(s),this.ready=!0})},updatePengeluaran(){this.ready=!1;const t=new FormData;t.append("keperluan_pengeluaran",this.formUpdatePengeluaran.keperluan_pengeluaran),t.append("jumlah_pengeluaran",this.formUpdatePengeluaran.jumlah_pengeluaran),t.append("deskripsi_pengeluaran",this.formUpdatePengeluaran.deskripsi_pengeluaran),t.append("id_event",this.selectedEvent),h.post(`https://backend.keuanganfpti.com/api/update-pengeluaran/${this.formUpdatePengeluaran.id_pengeluaran}`,t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(s=>{console.log(s.data),this.showAlert("Request Success","Sponsor berhasil diupdate","success"),this.fetchDataSponsor()}).catch(s=>{this.showAlert("Request Failed","Sponsor gagal diupdate","error"),console.error(s),this.ready=!0})},deletePengeluaran(t){this.ready=!1,h.delete(`https://backend.keuanganfpti.com/api/delete-pengeluaran/${t}`,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(s=>{console.log(s.data),this.showAlert("Request Success","Sponsor berhasil dihapus","success"),this.fetchDataSponsor()}).catch(s=>{this.showAlert("Request Failed","Sponsor gagal dihapus","error"),console.error(s),this.ready=!0})},async fetchDataSponsor(){try{const t=await h.get("https://backend.keuanganfpti.com/api/list-pengeluaran",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.pengeluarans=t.data.data,this.ready=!0}catch(t){this.ready=!0,console.error(t)}},async fetchDataActiveEvent(){try{const t=await h.get("https://backend.keuanganfpti.com/api/event-active",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.events=t.data.data}catch(t){console.error(t)}},showAlert(t,s,o){this.$swal({title:t,text:s,icon:o}).then(()=>{$("#addPengeluaran").modal("hide"),$("#editPengeluaran").modal("hide")})},konfirmasi(t,s){E.fire({title:"Konfirmasi Penghapusan",text:`Apakah Anda yakin ingin menghapus pengeluaran ${s}?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#061387",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(o=>{o.isConfirmed&&this.deletePengeluaran(t)})}},computed:{formatCurrency:function(){return function(t){return t?new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t):"Rp 0,00"}}},created(){const t=sessionStorage.getItem("token");if(t)try{const[s,o]=t.split("."),c=JSON.parse(atob(s)),n=atob(o),l=JSON.parse(atob(t.split(".")[1])),a=l.exp,g=new Date(a*1e3);console.log("Waktu Kedaluwarsa (UTC):",g.toUTCString()),new Date>g?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman");const _=l.level;this.user_id=l.id,console.log("ini idddd:",this.user_id),_!=="1"?this.$router.push("/unauthorized"):(!c||!n)&&this.$router.push("/"),this.fetchDataSponsor(),this.fetchDataActiveEvent()}catch(s){console.error("Error decoding token:",s),this.$router.push("/")}else this.$router.push("/")}},Le=Object.assign(Fe,{__name:"Pengeluaran",setup(t){const s=k(!1),o=k(""),c=()=>{s.value=!s.value,o.value=s.value?"toggle-sidebar":""};return(n,l)=>(r(),i(m,null,[e("div",T,[b(C,{class:S(o.value)},null,8,["class"]),e("div",I,[e("div",F,[b(A,{onToggleSidebar:c}),e("div",N,[R,e("div",q,[z,e("div",K,[L,e("div",J,[n.ready?v("",!0):(r(),i("p",M,"Loading...")),n.ready?(r(),w(U(y),{key:1,class:"display table table-striped"},{default:D(()=>[O,e("tbody",null,[(r(!0),i(m,null,f(n.pengeluarans,(a,g)=>(r(),i("tr",{key:a.id},[e("td",null,u(g+1),1),e("td",null,[e("div",H,[e("div",G,[e("button",{type:"button",class:"btn btn-warning","data-toggle":"modal","data-target":"#editPengeluaran",onClick:_=>n.setDataUpdate(a.keperluan_pengeluaran,a.jumlah_pengeluaran,a.deskripsi_pengeluaran,a.id)},Q,8,W)]),e("div",X,[e("button",{onClick:_=>n.konfirmasi(a.id,a.keperluan_pengeluaran),class:"btn btn-danger customDetail"},ee,8,Y)])])]),e("td",null,u(a.keperluan_pengeluaran),1),e("td",null,u(a.jumlah_pengeluaran),1),e("td",null,u(a.deskripsi_pengeluaran),1)]))),128))])]),_:1})):v("",!0)])]),ae])])]),b(j)])]),e("div",te,[e("div",ne,[e("div",se,[le,e("div",oe,[e("form",null,[e("div",re,[ie,d(e("input",{type:"text",class:"form-control",id:"mapel",placeholder:"masukkan kebutuhan","onUpdate:modelValue":l[0]||(l[0]=a=>n.formPengeluaran.keperluan_pengeluaran=a)},null,512),[[p,n.formPengeluaran.keperluan_pengeluaran]])]),e("div",de,[ue,d(e("input",{type:"text",class:"form-control",id:"mapel",placeholder:"masukkan jumlah pengeluaran","onUpdate:modelValue":l[1]||(l[1]=a=>n.formPengeluaran.jumlah_pengeluaran=a)},null,512),[[p,n.formPengeluaran.jumlah_pengeluaran]])]),e("div",pe,[ce,d(e("select",{class:"form-select","onUpdate:modelValue":l[2]||(l[2]=a=>n.selectedEvent=a)},[he,(r(!0),i(m,null,f(n.events,a=>(r(),i("option",{key:a.id,value:a.id},u(a.nama_event)+" - "+u(a.tanggal_event),9,ge))),128))],512),[[P,n.selectedEvent]])]),e("div",me,[_e,d(e("textarea",{class:"form-control",id:"keterangan",placeholder:"Masukkan deskripsi","onUpdate:modelValue":l[3]||(l[3]=a=>n.formPengeluaran.deskripsi_pengeluaran=a)},null,512),[[p,n.formPengeluaran.deskripsi_pengeluaran]])])])]),e("div",be,[fe,e("button",{type:"button",class:"btn blueButton",onClick:l[4]||(l[4]=(...a)=>n.createPengeluaran&&n.createPengeluaran(...a))}," Simpan ")])])])]),e("div",ke,[e("div",ve,[e("div",Pe,[ye,e("div",Se,[e("form",null,[e("div",we,[De,d(e("input",{type:"text",class:"form-control",id:"mapel",placeholder:"masukkan kebutuhan","onUpdate:modelValue":l[5]||(l[5]=a=>n.formUpdatePengeluaran.keperluan_pengeluaran=a)},null,512),[[p,n.formUpdatePengeluaran.keperluan_pengeluaran]])]),e("div",Ue,[Be,d(e("input",{type:"text",class:"form-control",id:"mapel",placeholder:"masukkan jumlah pengeluaran","onUpdate:modelValue":l[6]||(l[6]=a=>n.formUpdatePengeluaran.jumlah_pengeluaran=a)},null,512),[[p,n.formUpdatePengeluaran.jumlah_pengeluaran]])]),e("div",Ce,[Ae,d(e("select",{class:"form-select","onUpdate:modelValue":l[7]||(l[7]=a=>n.selectedEvent=a)},[je,(r(!0),i(m,null,f(n.events,a=>(r(),i("option",{key:a.id,value:a.id},u(a.nama_event)+" - "+u(a.tanggal_event),9,Ve))),128))],512),[[P,n.selectedEvent]])]),e("div",$e,[Ee,d(e("textarea",{class:"form-control",id:"keterangan",placeholder:"Masukkan deskripsi","onUpdate:modelValue":l[8]||(l[8]=a=>n.formUpdatePengeluaran.deskripsi_pengeluaran=a)},null,512),[[p,n.formUpdatePengeluaran.deskripsi_pengeluaran]])])])]),e("div",Te,[Ie,e("button",{type:"button",class:"btn blueButton",onClick:l[9]||(l[9]=(...a)=>n.updatePengeluaran&&n.updatePengeluaran(...a))}," Simpan ")])])])])],64))}});export{Le as default};
