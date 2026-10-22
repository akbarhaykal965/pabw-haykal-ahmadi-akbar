<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'

const proyekTampil = computed(() => {
  if (!state.kategoriAktif || state.kategoriAktif === 'semua') {
    return state.daftarProyek
  }
  return state.daftarProyek.filter((item) => item.kategori === state.kategoriAktif)
})
</script>

<template>
  <section id="proyek-saya">
    <h2>Proyek Saya</h2>

    <slot name="filter"></slot>

    <p v-if="state.memuat" id="muat">Memuat data...</p>
    <p v-else-if="state.galat" class="pesan-galat">{{ state.galat }}</p>
    <p v-else-if="proyekTampil.length === 0" id="pesan-kosong">
      Tidak ada proyek pada kategori itu.
    </p>

    <ul v-else id="daftar">
      <li v-for="proyek in proyekTampil" :key="proyek.id" class="kartu">
        <p class="judul-kartu">{{ proyek.judul }} ({{ proyek.tahun }})</p>
        <button
          type="button"
          class="tombol-favorit"
          @click="tambahFavorit(proyek.id)"
        >
          {{ state.favorit.includes(proyek.id) ? '★' : '☆' }}
        </button>
      </li>
    </ul>
  </section>
</template>