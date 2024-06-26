<template>
  <div id="app" ref="document">
    <div class="row mt-4">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="row">
          <div class="col-6">
            <router-link to="/admin-event" class="btn btn-danger mb-5"
              >Kembali</router-link
            >
          </div>
          <div class="col-6">
            <button @click="exportToPDF" class="btn btn-success float-end">
              Export to PDF
            </button>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
    <div id="element-to-convert">
      <div class="row">
        <h1 class="text-center mb-5 text-black">
          Federasi Panjat Tebing Indonesia
        </h1>
      </div>
      <div class="report-container">
        <!-- Tabel Event -->
        <div class="report-table">
          <h2>Event</h2>
          <table>
            <thead>
              <tr>
                <th>Nama Event</th>
                <th>Tanggal Event</th>
                <th>Deskripsi Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ event.nama_event }}</td>
                <td>{{ event.tanggal_event }}</td>
                <td>{{ event.deskripsi_event }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Tabel Sponsor -->
        <div class="report-table">
          <h2>Sponsor</h2>
          <table>
            <thead>
              <tr>
                <th>Nama Sponsor</th>
                <th>Dana Sponsor</th>
                <th>Deskripsi Sponsor</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="sponsor in sponsors" :key="sponsor.id">
                <td>{{ sponsor.pemberi_sponsor }}</td>
                <td>{{ sponsor.dana_sponsor }}</td>
                <td>{{ sponsor.deskripsi_sponsor }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Tabel Pengeluaran -->
        <div class="report-table">
          <h2>Pengeluaran</h2>
          <table>
            <thead>
              <tr>
                <th>Keperluan Pengeluaran</th>
                <th>Jumlah Pengeluaran</th>
                <th>Deskripsi Pengeluaran</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pengeluaran in pengeluarans" :key="pengeluaran.id">
                <td>{{ pengeluaran.keperluan_pengeluaran }}</td>
                <td>{{ pengeluaran.jumlah_pengeluaran }}</td>
                <td>{{ pengeluaran.deskripsi_pengeluaran }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Tabel Hutang -->
        <div class="report-table">
          <h2>Hutang</h2>
          <table>
            <thead>
              <tr>
                <th>Keperluan Hutang</th>
                <th>Jumlah Hutang</th>
                <th>Deskripsi Hutang</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="hutang in hutangs" :key="hutang.id">
                <td>{{ hutang.keperluan_hutang }}</td>
                <td>{{ hutang.jumlah_hutang }}</td>
                <td>{{ hutang.deskripsi_hutang }}</td>
                <td>
                        <i
                          v-if="hutang.status == '0'"
                          class="bi bi-hourglass-split fs-5 text-danger"
                        ></i>
                        <i
                          v-if="hutang.status == '1'"
                          class="bi bi-check-circle-fill fs-5 text-success"
                        ></i>
                      </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Tabel Piutang -->
        <div class="report-table">
          <h2>Piutang</h2>
          <table>
            <thead>
              <tr>
                <th>Pihak Peminjam</th>
                <th>Jumlah Pinjaman</th>
                <th>Deskripsi Pinjaman</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="piutang in piutangs" :key="piutang.id">
                <td>{{ piutang.pihak_peminjam }}</td>
                <td>{{ piutang.jumlah_pinjaman }}</td>
                <td>{{ piutang.deskripsi_pinjaman }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import html2pdf from "html2pdf.js";

export default {
  props: ["eventId"],
  data() {
    return {
      event: {},
      sponsors: [],
      pengeluarans: [],
      hutangs: [],
      piutangs: [],
      pdfFile: null,
    };
  },
  mounted() {
    const body = document.querySelector("body");
    body.style.backgroundColor = "white";
  },
  methods: {
    exportToPDF() {
      const elementToConvert = document.getElementById("element-to-convert");
      html2pdf()
        .from(elementToConvert)
        .output("blob")
        .then((data) => {
          this.pdfFile = new Blob([data], { type: "application/pdf" });

          this.downloadPDF();
        })
        .catch((error) => {
          console.error("Error converting to PDF:", error);
        });
    },
    downloadPDF() {
      if (this.pdfFile) {
        const url = URL.createObjectURL(this.pdfFile);
        const link = document.createElement("a");
        link.href = url;
        link.download = `report_event.pdf`;
        link.click();
      }
    },
    fetchEventReport() {
      axios
        .get(
          `https://backend.keuanganfpti.com/api/report-event/${this.eventId}`
        )
        .then((response) => {
          this.event = response.data.event;
          this.sponsors = response.data.sponsors;
          this.pengeluarans = response.data.pengeluarans;
          this.hutangs = response.data.hutangs;
          this.piutangs = response.data.piutangs;
        })
        .catch((error) => {
          console.error("Error fetching event report:", error);
        });
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
        this.fetchEventReport();
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

<style scoped>
.report-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.report-table {
  flex: 1 1 30%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.report-table table {
  width: 100%;
  border-collapse: collapse;
}

.report-table table th,
.report-table table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.report-table table th {
  background-color: #f2f2f2;
}
</style>
