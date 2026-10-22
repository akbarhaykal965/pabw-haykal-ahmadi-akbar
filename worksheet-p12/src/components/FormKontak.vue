<script setup>
import { ref } from 'vue'

const namaTempat = ref('')
const lokasi = ref('')
const kategori = ref('')
const suasana = ref('')
const rating = ref('')
const deskripsi = ref('')
const tanggal = ref('')

function kirimRekomendasi() {
  alert(`Rekomendasi tempat "${namaTempat.value}" berhasil dikirim!`)
}
</script>

<template>
  <section id="tambah-rekomendasi">
    <h2>Tambah Rekomendasi</h2>
    <p>Bagikan tempat nongkrong favorit kamu dengan mengisi form rekomendasi.</p>

    <form id="form-rekomendasi" class="form-kolom" @submit.prevent="kirimRekomendasi">
      <p class="pesan-galat" hidden>Periksa kembali data yang wajib diisi.</p>

      <p>
        <label for="nama-tempat">Nama Tempat:</label><br>
        <input type="text" id="nama-tempat" v-model="namaTempat" placeholder="Contoh: Anak Panah" required>
      </p>

      <p>
        <label for="lokasi">Lokasi:</label><br>
        <input type="text" id="lokasi" v-model="lokasi" placeholder="Contoh: Yogyakarta" required>
      </p>

      <p>
        <label for="kategori">Kategori:</label><br>
        <select id="kategori" v-model="kategori" required>
          <option value="">-- Pilih kategori --</option>
          <option value="cafe">Cafe</option>
          <option value="restoran">Restoran</option>
          <option value="ruang-belajar">Ruang Belajar</option>
          <option value="tempat-santai">Tempat Santai</option>
        </select>
      </p>

      <p>
        <label for="suasana">Suasana:</label><br>
        <select id="suasana" v-model="suasana">
          <option value="">-- Pilih suasana --</option>
          <option value="tenang">Tenang</option>
          <option value="nyaman">Nyaman</option>
          <option value="ramai">Ramai</option>
          <option value="santai">Santai</option>
        </select>
      </p>

      <p>
        <label for="rating">Rating:</label><br>
        <input type="number" id="rating" v-model="rating" min="1" max="5" step="0.1" placeholder="Contoh: 4.5" required>
      </p>

      <p>
        <label for="deskripsi">Deskripsi:</label><br>
        <textarea id="deskripsi" v-model="deskripsi" rows="5" cols="40" placeholder="Ceritakan tempat nongkrong tersebut..."></textarea>
      </p>

      <p>
        <label for="tanggal">Tanggal Rekomendasi:</label><br>
        <input type="date" id="tanggal" v-model="tanggal">
      </p>

      <p>
        <button type="submit">Kirim Rekomendasi</button>
        <button type="reset">Reset</button>
      </p>
    </form>
  </section>
</template>