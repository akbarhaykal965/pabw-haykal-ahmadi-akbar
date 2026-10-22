<script setup>
import { ref, onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { muatProyek } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const tema = ref('mode-terang')

function gantiTema(mode) {
  tema.value = mode
  document.body.className = mode
}

onMounted(async () => {
  pulihkan(muat())
  try {
    const data = await muatProyek()
    isiProyek(data)
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
    console.error(galat)
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div :class="tema">
    <KepalaProfil :profil="profil" @ubah-tema="gantiTema" />

    <main class="content">
      <DaftarProyek>
        <template #filter>
          <TombolFilter />
        </template>
      </DaftarProyek>

      <section id="daftar-tempat">
        <h2>Daftar Tempat Nongkrong</h2>
        <p>Berikut beberapa rekomendasi tempat nongkrong yang nyaman untuk belajar, santai, dan bermain dengan teman.</p>
        <div class="grid">
          <article class="kartu">
            <h3>Anak Panah</h3>
            <p><strong>Lokasi:</strong> Semarang</p>
            <p><strong>Kisaran Harga:</strong> Rp20.000 - Rp50.000</p>
            <p><strong>Rating:</strong> 4,5/5</p>
          </article>
          <article class="kartu">
            <h3>Bento</h3>
            <p><strong>Lokasi:</strong> Yogyakarta</p>
            <p><strong>Kisaran Harga:</strong> Rp20.000 - Rp50.000</p>
            <p><strong>Rating:</strong> 4/5</p>
          </article>
          <article class="kartu">
            <h3>Cold N Brew</h3>
            <p><strong>Lokasi:</strong> Yogyakarta</p>
            <p><strong>Kisaran Harga:</strong> Rp25.000 - Rp50.000</p>
            <p><strong>Rating:</strong> 5/5</p>
          </article>
          <article class="kartu">
            <h3>C28</h3>
            <p><strong>Lokasi:</strong> Yogyakarta</p>
            <p><strong>Kisaran Harga:</strong> Rp20.000 - Rp50.000</p>
            <p><strong>Rating:</strong> 3/5</p>
          </article>
          <article class="kartu">
            <h3>Kota Lama</h3>
            <p><strong>Lokasi:</strong> Banjarmasin</p>
            <p><strong>Kisaran Harga:</strong> Rp20.000 - Rp50.000</p>
            <p><strong>Rating:</strong> 4/5</p>
          </article>
        </div>
      </section>

      <section id="tips-memilih">
        <h2>Tips Memilih Tempat Nongkrong</h2>
        <p>Pilih tempat nongkrong sesuai kebutuhan dan aktivitas yang ingin dilakukan.</p>
        <ul>
          <li>Pilih lokasi yang mudah dijangkau.</li>
          <li>Perhatikan kisaran harga makanan dan minuman.</li>
          <li>Pilih tempat yang nyaman untuk belajar atau bersantai.</li>
          <li>Perhatikan fasilitas seperti Wi-Fi dan tempat duduk.</li>
        </ul>
      </section>

      <FormKontak />
    </main>

    <footer>
      <p>Haykal Ahmadi Akbar · 25523161 · 2026</p>
    </footer>
  </div>
</template>