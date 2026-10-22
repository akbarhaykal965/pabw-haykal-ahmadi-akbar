<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div id="filter">
    <button
      type="button"
      data-kategori="semua"
      :class="{ aktif: state.kategoriAktif === 'semua' }"
      @click="pilihKategori('semua')"
    >
      Semua
    </button>
    <button
      type="button"
      data-kategori="web"
      :class="{ aktif: state.kategoriAktif === 'web' }"
      @click="pilihKategori('web')"
    >
      Web
    </button>
    <button
      type="button"
      data-kategori="data"
      :class="{ aktif: state.kategoriAktif === 'data' }"
      @click="pilihKategori('data')"
    >
      Data
    </button>
    <button type="button" id="atur-ulang" @click="aturUlang">
      Atur ulang
    </button>
  </div>
</template>