import{r as _,b as r,f as d,g as e,i as g,n as y,l as f,c as v,z as A,A as R,j as w,D,F as p,B as b,y as S,C as l}from"./index-6973fbdc.js";import{S as B}from"./Sidebar-460c4711.js";import"./TimeVote-20dc7c6f.js";import{N as C,F}from"./Footer-efae84de.js";import{a as u,S as T}from"./sweetalert2.all-1e3fb24f.js";import{P as k,D as N}from"./jquery.dataTables-11f5c627.js";const I={id:"wrapper"},L={id:"content-wrapper",class:"d-flex flex-column"},x={id:"content"},z={class:"container-fluid mt-4"},V=e("h1",{class:"h3 mb-0 text-gray-800 text-center mb-5"}," Realisasi Anggaran ",-1),P={class:"row"},U=e("div",{class:"col-1"},null,-1),j={class:"col-10"},q=S('<div class="row mb-3"><div class="col-6"><button class="btn btn-warning me-2" data-toggle="modal" data-target="#addRealisasi"><i class="bi bi-plus-circle-fill"></i> Realisasi Anggaran </button></div><div class="col-6"></div></div>',1),K={class:"table-responsive"},J={key:0,class:"text-center"},O=e("thead",null,[e("tr",null,[e("th",{scope:"col",style:{width:"50px"}},"No"),e("th",{scope:"col"},"Aksi"),e("th",{scope:"col"},"Pemberi Dana"),e("th",{scope:"col"},"Jumlah"),e("th",{scope:"col"},"Tanggal"),e("th",{scope:"col"},"Keterangan")])],-1),E={class:"row"},H={class:"col-6"},M=["href"],W=e("i",{class:"bi bi-eye-fill"},null,-1),G=[W],Q={class:"col-6"},X=["onClick"],Y=e("i",{class:"bi bi-trash3"},null,-1),Z=[Y],ee=e("div",{class:"col-1"},null,-1),ae={class:"modal fade",id:"addRealisasi",tabindex:"-1",role:"dialog","aria-labelledby":"addRealisasiLabel","aria-hidden":"true"},se={class:"modal-dialog",role:"document"},te={class:"modal-content"},ie=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addRealisasiLabel"},"Form Pemasukan"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),oe={class:"modal-body"},ne={class:"mb-3"},le=e("label",{for:"ketua",class:"form-label"},"File Laporan",-1),re={class:"mb-3"},de=e("label",{for:"ketua",class:"form-label"},"Anggaran",-1),ce=e("option",{value:"",disabled:"",selected:""},"Pilih Anggaran",-1),ue=["value"],he={class:"modal-footer"},ge=e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1);k.use(N);const pe={data(){return{realisasiAnggaran:[],anggarans:[],formRealisasi:{file_pdf:null,id_pemasukan:""},ready:!1,user_id:"",selectedAnggaran:""}},methods:{createRealisasi(){this.ready=!1;const a=new FormData;a.append("file_pdf",this.formRealisasi.file_pdf),a.append("id_pemasukan",this.selectedAnggaran),u.post("https://backend.keuanganfpti.com/api/create-realisasi-anggaran",a,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(t=>{console.log(t.data),this.formRealisasi={file_pdf:"",id_pemasukan:""},this.showAlert("Request Success","Laporan realisasi berhasil buat","success"),this.fetchDataRealisasiAnggaran()}).catch(t=>{this.showAlert("Request Failed","Laporan realisasi gagal buat","error"),console.error(t),this.ready=!0})},deleteRealisasi(a){this.ready=!1,u.delete(`https://backend.keuanganfpti.com/api/delete-realisasi-anggaran/${a}`,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then(t=>{console.log(t.data),this.showAlert("Request Success","Laporan realisasi berhasil dihapus","success"),this.fetchDataRealisasiAnggaran()}).catch(t=>{this.showAlert("Request Failed","Laporan realisasi gagal dihapus","error"),console.error(t),this.ready=!0})},async fetchDataRealisasiAnggaran(){try{const a=await u.get("https://backend.keuanganfpti.com/api/realisasi-anggaran",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.realisasiAnggaran=a.data.data,this.ready=!0}catch(a){this.ready=!0,console.error(a)}},async fetchDataAnggaran(){try{const a=await u.get(`https://backend.keuanganfpti.com/api/my-anggaran/${this.user_id}`,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.anggarans=a.data.data,this.ready=!0}catch(a){this.ready=!0,console.error(a)}},showAlert(a,t,n){this.$swal({title:a,text:t,icon:n}).then(()=>{$("#addRealisasi").modal("hide"),$("#editRealisasi").modal("hide")})},konfirmasiDelete(a,t){T.fire({title:"Konfirmasi Penghapusan",text:`Apakah Anda yakin ingin menghapus realisasi dana dari ${t}?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#061387",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(n=>{n.isConfirmed&&this.deleteRealisasi(a)})},handleFileUpload(a){this.formRealisasi.file_pdf=a.target.files[0]}},computed:{formatCurrency:function(){return function(a){return a?new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(a):"Rp 0,00"}}},created(){const a=sessionStorage.getItem("token");if(a)try{const[t,n]=a.split("."),h=JSON.parse(atob(t)),i=atob(n),o=JSON.parse(atob(a.split(".")[1])),s=o.exp,c=new Date(s*1e3);console.log("Waktu Kedaluwarsa (UTC):",c.toUTCString()),new Date>c?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman");const m=o.level;this.user_id=o.id,console.log("ini idddd:",this.user_id),m!=="1"?this.$router.push("/unauthorized"):(!h||!i)&&this.$router.push("/"),this.fetchDataRealisasiAnggaran(),this.fetchDataAnggaran()}catch(t){console.error("Error decoding token:",t),this.$router.push("/")}else this.$router.push("/")}},ve=Object.assign(pe,{__name:"RealisasiAnggaran",setup(a){const t=_(!1),n=_(""),h=()=>{t.value=!t.value,n.value=t.value?"toggle-sidebar":""};return(i,o)=>(r(),d(p,null,[e("div",I,[g(B,{class:y(n.value)},null,8,["class"]),e("div",L,[e("div",x,[g(C,{onToggleSidebar:h}),e("div",z,[V,e("div",P,[U,e("div",j,[q,e("div",K,[i.ready?f("",!0):(r(),d("p",J,"Loading...")),i.ready?(r(),v(R(k),{key:1,class:"display table table-striped"},{default:A(()=>[O,e("tbody",null,[(r(!0),d(p,null,b(i.realisasiAnggaran,(s,c)=>(r(),d("tr",{key:s.id},[e("td",null,l(c+1),1),e("td",null,[e("div",E,[e("div",H,[e("a",{href:"https://backend.keuanganfpti.com/storage/realisasi_anggaran/"+s.file_pdf,target:"_blank",class:"btn btn-warning"},G,8,M)]),e("div",Q,[e("button",{onClick:m=>i.konfirmasiDelete(s.id,s.pengirim_name),class:"btn btn-danger customDetail"},Z,8,X)])])]),e("td",null,l(s.pengirim_name),1),e("td",null,l(s.jumlah_transaksi),1),e("td",null,l(s.tgl_transaksi),1),e("td",null,l(s.deskripsi),1)]))),128))])]),_:1})):f("",!0)])]),ee])])]),g(F)])]),e("div",ae,[e("div",se,[e("div",te,[ie,e("div",oe,[e("form",null,[e("div",ne,[le,e("input",{type:"file",class:"form-control",id:"mapel",onChange:o[0]||(o[0]=(...s)=>i.handleFileUpload&&i.handleFileUpload(...s))},null,32)]),e("div",re,[de,w(e("select",{class:"form-select","onUpdate:modelValue":o[1]||(o[1]=s=>i.selectedAnggaran=s)},[ce,(r(!0),d(p,null,b(i.anggarans,s=>(r(),d("option",{key:s.id,value:s.id},l(s.pengirim_name)+" - "+l(s.jumlah_transaksi)+" - "+l(s.deskripsi),9,ue))),128))],512),[[D,i.selectedAnggaran]])])])]),e("div",he,[ge,e("button",{type:"button",class:"btn blueButton",onClick:o[2]||(o[2]=(...s)=>i.createRealisasi&&i.createRealisasi(...s))}," Simpan ")])])])])],64))}});export{ve as default};