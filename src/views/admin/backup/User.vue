<script setup>
import Sidebar from "../../components/admin/Sidebar.vue";
import TimeVote from "../../components/admin/TimeVote.vue";
import Navbar from "../../components/general/Navbar.vue";
import Footer from "../../components/general/Footer.vue";
import { ref } from "vue";

const sidebarToggled = ref(false);
const sidebarClass = ref("");

const toggleSidebar = () => {
  sidebarToggled.value = !sidebarToggled.value;
  sidebarClass.value = sidebarToggled.value ? "toggle-sidebar" : "";
};
</script>
<template>
  <div id="wrapper">
    <Sidebar :class="sidebarClass" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Begin Page Content -->
        <div class="container-fluid mt-4">
          <h1 class="h3 mb-0 text-gray-800 text-center mb-5">List User</h1>
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row mb-3">
                <div class="col-6">
                  <button
                    class="btn btn-warning me-2"
                    data-toggle="modal"
                    data-target="#addUser"
                  >
                    <i class="bi bi-plus-circle-fill"></i> User
                  </button>
                </div>
                <div class="col-6"></div>
              </div>
              <div class="table-responsive">
                <p class="text-center" v-if="!ready">Loading...</p>
                <DataTable class="display table table-striped" v-if="ready">
                  <thead>
                    <tr>
                      <th scope="col" style="width: 50px">No</th>
                      <th scope="col">Aksi</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in users" :key="item.id">
                      <td>{{ index + 1 }}</td>
                      <td>
                        <div class="row">
                          <div class="col-6">
                            <button
                              type="button"
                              class="btn btn-warning"
                              data-toggle="modal"
                              data-target="#editTransaksi"
                              @click="
                                setDataUpdate(
                                  item.pemberi_hutang,
                                  item.jumlah_hutang,
                                  item.tanggal_hutang,
                                  item.catatan,
                                  item.tgl_jatuh_tempo,
                                  item.id
                                )
                              "
                            >
                              <i class="bi bi-pencil-square"></i>
                            </button>
                          </div>
                          <div class="col-6">
                            <button
                              @click="
                                konfirmasiDelete(item.id, item.pemberi_hutang)
                              "
                              class="btn btn-danger customDetail"
                            >
                              <i class="bi bi-trash3"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>{{ item.name }}</td>
                      <td>{{item.email}}</td>
                      <td>
                        {{ item.level == '0' ? 'User' : 'Admin' }}
                        </td>
                      <td>
                        <i
                          v-if="item.status == '0'"
                          class="bi bi-hourglass-split fs-5 text-danger"
                        ></i>
                        <i
                          v-if="item.status == '1'"
                          class="bi bi-check-circle-fill fs-5 text-success"
                        ></i>
                      </td>
                    </tr>
                  </tbody>
                </DataTable>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <Footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>

  <!-- modal tambah transaksi -->
  <div
    class="modal fade"
    id="addUser"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addUserLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addUserLabel">Tambah User</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <strong>Under Construction</strong>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Batal
          </button>
          <button type="button" class="btn blueButton" @click="createHutang">
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- end modal tambah transaksi -->

  <!-- modal edit transaksi -->
  <div
    class="modal fade"
    id="editTransaksi"
    tabindex="-1"
    role="dialog"
    aria-labelledby="editTransaksiLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editTransaksiLabel">Edit User</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <strong>Under Construction</strong>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Batal
          </button>
          <button type="button" class="btn blueButton" @click="updateHutang">
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- end modal edit kelas -->
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";

DataTable.use(DataTablesCore);

export default {
  data() {
    return {
      users: [],
      formUser: {
        pemberi_hutang: "",
        jumlah_hutang: "",
        tanggal_hutang: "",
        tgl_jatuh_tempo:"",
        catatan: "",
      },
      formUpdateUser: {
        pemberi_hutang: "",
        jumlah_hutang: "",
        tanggal_hutang: "",
        tgl_jatuh_tempo: "",
        catatan: "",
      },
      ready: false,
      transaksi_id: "",
      selectedPenerima: "",
      user_id:"",
      hutang_id:""
    };
  },
  methods: {
    setDataUpdate(piutang, jumlah, tgl, catatan, tgl_jatuh_tempo, id) {
      this.formUpdateUser.pemberi_hutang = piutang;
      this.formUpdateUser.jumlah_hutang = jumlah;
      this.formUpdateUser.tanggal_hutang = tgl;
      this.formUpdateUser.tgl_jatuh_tempo = tgl_jatuh_tempo;
      this.formUpdateUser.catatan = catatan;
      this.hutang_id = id;
    },
    createHutang() {
      this.ready = false;
      const formData = new FormData();
      formData.append("pemberi_hutang", this.formUser.pemberi_hutang);
      formData.append("jumlah_hutang", this.formUser.jumlah_hutang);
      formData.append("tanggal_hutang", this.formUser.tanggal_hutang);
      formData.append("tgl_jatuh_tempo", this.formUser.tgl_jatuh_tempo);
      formData.append("catatan", this.formUser.catatan);
      formData.append("id_user", this.user_id);

      axios
        .post("https://backend.keuanganfpti.com/api/create-hutangpiutang", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response.data);
          this.formUser = {
            jumlah_transaksi: "",
            deskripsi: "",
            tgl_transaksi: "",
            selectedPenerima: "",
          };
          this.showAlert("Request Success", "Hutang berhasil buat", "success");
          this.fetchDataHutang();
        })
        .catch((error) => {
          this.showAlert("Request Failed", "Hutang gagal buat", "error");
          console.error(error);
          this.ready = true;
        });
    },

    updateHutang() {
      this.ready = false;
      const formData = new FormData();
      formData.append("pemberi_hutang", this.formUpdateUser.pemberi_hutang);
      formData.append("jumlah_hutang", this.formUpdateUser.jumlah_hutang);
      formData.append("tanggal_hutang", this.formUpdateUser.tanggal_hutang);
      formData.append("tgl_jatuh_tempo", this.formUpdateUser.tgl_jatuh_tempo);
      formData.append("catatan", this.formUpdateUser.catatan);
      formData.append("id_user", this.user_id);

      axios
        .post(`https://backend.keuanganfpti.com/api/update-hutangpiutang/${this.hutang_id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response.data);
          this.formUser = {
            nama_mapel: "",
          };
          this.showAlert(
            "Request Success",
            "Hutang berhasil diupdate",
            "success"
          );
          this.fetchDataHutang();
        })
        .catch((error) => {
          this.showAlert("Request Failed", "Hutang gagal diupdate", "error");
          console.error(error);
          this.ready = true;
        });
    },

    deleteHutang(id) {
      this.ready = false;

      axios
        .delete(`https://backend.keuanganfpti.com/api/delete-hutangpiutang/${id}`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response.data);
          this.showAlert(
            "Request Success",
            "Hutang berhasil dihapus",
            "success"
          );
          this.fetchDataHutang();
        })
        .catch((error) => {
          this.showAlert("Request Failed", "Hutang gagal dihapus", "error");
          console.error(error);
          this.ready = true;
        });
    },

    async fetchDataHutang() {
      try {
        const response = await axios.get(
          `https://backend.keuanganfpti.com/api/list-penerima`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.users = response.data.data;
        this.ready = true;
      } catch (error) {
        console.error(error);
      }
    },

    async bayarHutang(id) {
      try {
        const response = await axios.post(
          `https://backend.keuanganfpti.com/api/bayar-hutangpiutang/${id}`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.showAlert(
          "Request Success",
          "Hutang berhasil dibayarkan",
          "success"
        );
        this.ready = true;
      } catch (error) {
        console.error(error);
        this.showAlert(
          "Request Failed",
          "Gagal membayar hutang, pastikan saldo anda cukup",
          "error"
        );
      }
    },

    showAlert(title, text, icon) {
      this.$swal({
        title: title,
        text: text,
        icon: icon,
      }).then(() => {
        $("#addUser").modal("hide");
        $("#editTransaksi").modal("hide");
      });
    },

    konfirmasiBayar(id, piutang) {
      Swal.fire({
        title: `Apakah Anda yakin ingin membayar Hutang ke ${piutang}?`,
        text: "Pastikan saldo anda cukup.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#fac800",
        cancelButtonColor: "#d33",
        confirmButtonText: "Bayar",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          this.bayarHutang(id);
        }
      });
    },
    konfirmasiDelete(id, nama_pemberi) {
      Swal.fire({
        title: `Apakah Anda yakin ingin menghapus hutang dari ${nama_pemberi}?`,
        text: "Anda akan keluar dari akun ini.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#061387",
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteHutang(id);
        }
      });
    },

  },
  computed: {
    // Metode komputasi untuk mengonversi jumlah menjadi format mata uang Rupiah
    formatCurrency: function () {
      return function (value) {
        if (!value) return "Rp 0,00";

        // Mengonversi nilai ke dalam format Rupiah
        let formattedValue = new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(value);

        return formattedValue;
      };
    },
  },
  created() {
    const token = sessionStorage.getItem("token"); // Ambil token dari local storage

    if (token) {
      try {
        const [headerBase64, signatureBase64] = token.split(".");
        const header = JSON.parse(atob(headerBase64));
        const signature = atob(signatureBase64);

        const tokenPayload = JSON.parse(atob(token.split(".")[1])); // Mendekode bagian payload dari token JWT
        const expTimestamp = tokenPayload.exp;

        const expDate = new Date(expTimestamp * 1000); // Konversi Unix Timestamp ke JavaScript Date

        console.log("Waktu Kedaluwarsa (UTC):", expDate.toUTCString()); // Tampilkan waktu kedaluwarsa dalam format UTC

        if (new Date() > expDate) {
          console.log("Keluar");
          sessionStorage.removeItem("token");
          this.$router.push("/");
        } else {
          console.log("Aman");
        }
        const level = tokenPayload.level; // Ambil level pengguna dari payload
        this.user_id = tokenPayload.id;
        console.log("ini idddd:", this.user_id);
        if (level !== "1") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
        }
        // success
        this.fetchDataHutang();
        // akhir
      } catch (error) {
        console.error("Error decoding token:", error);
        this.$router.push("/"); // Tindakan jika terjadi kesalahan dekode
      }
    } else {
      this.$router.push("/"); // Tindakan jika token tidak ada (pengguna belum terautentikasi)
    }
  },
};
</script>


<style>
#content-wrapper {
  min-height: 780px !important;
}
</style>
