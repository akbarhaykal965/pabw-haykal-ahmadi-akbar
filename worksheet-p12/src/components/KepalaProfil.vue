<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['ubah-tema'])
</script>

<template>
  <header>
    <div class="pilihan-tema">
      <button type="button" id="tema-terang" @click="emit('ubah-tema', 'mode-terang')">☀️ Terang</button>
      <button type="button" id="tema-gelap" @click="emit('ubah-tema', 'mode-gelap')">🌙 Gelap</button>
    </div>

    <figure>
      <img
        src="/Kopi.jpg"
        alt="Logo kopi untuk halaman rekomendasi tempat nongkrong"
        width="300"
        height="300"
        loading="lazy"
      >
    </figure>

    <div class="header-baris">
      <h1>Rekomendasi Tempat Nongkrong</h1>
      <p v-if="props.profil && props.profil.nama">{{ props.profil.nama }} — {{ props.profil.peran }}</p>

      <nav class="navbar" aria-label="Navigasi utama">
        <ul>
          <li><a href="#daftar-tempat">Daftar Tempat</a></li>
          <li><a href="#tips-memilih">Tips Memilih</a></li>
          <li><a href="#tambah-rekomendasi">Tambah Rekomendasi</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>