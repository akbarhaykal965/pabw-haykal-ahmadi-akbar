# PABW — Haykal Ahmadi Akbar — 25523161

Repositori ini berisi pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web (PABW), dengan satu folder untuk setiap pertemuan.

## Pertemuan 3 — Halaman Profil Saya

**Topik:** Rekomendasi tempat nongkrong.

- **Judul halaman:** Rekomendasi Tempat Nongkrong
- **Deskripsi:** Tempat nongkrong yang nyaman untuk belajar, santai, dan bermain dengan teman.
- **Tautan navigasi:** Daftar Tempat, Tips Memilih, Tambah Rekomendasi.
- **Bagian utama:** Daftar tempat nongkrong dan formulir tambah rekomendasi.
- **Kolom tabel:** Nama tempat, Lokasi, Kisaran harga, Rating.
- **Kolom formulir:** Nama tempat, Lokasi, Rating.
- **Gambar:** `TempatNongkrong.webp`

### Catatan Penggunaan AI — Pertemuan 3

**Bagian yang dibantu AI:**
- Membantu menyusun struktur HTML dan memberikan contoh kode.
- Membantu menjelaskan konsep JavaScript modern, seperti `const`, `let`, template literal, object, array, `map`, `filter`, dan `find`.
- Memberikan contoh penggunaan fungsi dan array methods pada `app.js`.

**Bagian yang saya kerjakan sendiri:**
- Memilih topik rekomendasi tempat nongkrong.
- Menentukan isi data profil dan daftar proyek.
- Menyesuaikan isi halaman dengan rencana saya.
- Menulis dan menyesuaikan kode `app.js` dengan halaman saya.
- Menjalankan dan memeriksa hasil halaman di browser.
- Membaca hasil Console dan memperbaiki kesalahan kode.
- Menguji breakpoint menggunakan DevTools.

## Pertemuan 9 — DOM, Event, dan Interaktivitas

**Topik:** Menampilkan daftar proyek secara dinamis dan membuat halaman lebih interaktif menggunakan JavaScript DOM dan event.

Materi dan fitur yang dikerjakan:

- Memilih elemen DOM menggunakan `querySelector()` dan `querySelectorAll()`.
- Membuat elemen HTML menggunakan `document.createElement()`, mengisi teks dengan `textContent`, dan menambahkan elemen menggunakan `append()`.
- Mengosongkan daftar sebelum menampilkan data kembali menggunakan `textContent = ""`.
- Menampilkan daftar proyek berdasarkan kategori menggunakan `filter()`.
- Menerapkan event delegation menggunakan `addEventListener()`, `event.target`, dan `closest()`.
- Menampilkan pesan ketika tidak ada proyek yang sesuai dengan kategori.
- Melakukan validasi formulir menggunakan `preventDefault()`, `trim()`, `aria-invalid`, dan pengaturan tombol kirim.
- Menguji halaman menggunakan browser DevTools, Console, dan Event Listeners.
- Menyiapkan tangkapan layar sebagai bukti pengujian.

### Catatan Penggunaan AI — Pertemuan 9

**Bagian yang dibantu AI:**
- Membantu menjelaskan konsep DOM, event delegation, dan validasi formulir.
- Memberikan contoh kode JavaScript untuk menampilkan dan memfilter daftar proyek.
- Membantu memeriksa serta memperbaiki kesalahan kode berdasarkan hasil pengujian.

**Bagian yang saya kerjakan sendiri:**
- Menyesuaikan kode dengan struktur HTML proyek saya.
- Menjalankan halaman menggunakan Live Server.
- Menguji tombol filter kategori Semua, Web, dan Data.
- Memeriksa elemen DOM dan event listener melalui DevTools.
- Menguji pesan daftar kosong dan validasi formulir.
- Menyiapkan tangkapan layar hasil pengujian.

## Pertemuan 10 — JSON, Fetch API, dan Penanganan Galat

**Topik:** Mengambil data proyek dari berkas JSON, menampilkan data secara dinamis, dan menangani berbagai keadaan pemuatan data.

Materi dan fitur yang dikerjakan:

- Memisahkan data proyek ke dalam berkas `data/proyek.json`.
- Mengambil data menggunakan `fetch()` melalui fungsi asinkron `muatProyek()` pada `js/api.js`.
- Menggunakan `await` untuk menunggu hasil pengambilan data.
- Memeriksa status respons menggunakan `respons.ok` sebelum membaca data JSON.
- Mengubah respons menjadi data JavaScript menggunakan `respons.json()`.
- Memisahkan tanggung jawab berkas: `api.js` mengambil data, `dom.js` menangani tampilan dan interaksi, sedangkan `app.js` menyimpan data profil dan proyek awal.
- Menampilkan daftar proyek berdasarkan data yang berhasil dimuat.
- Menangani keadaan data kosong menggunakan pesan yang sesuai.
- Menangani kegagalan pemuatan data menggunakan `try/catch`.
- Memvalidasi formulir rekomendasi dan memeriksa kembali validasi ketika formulir direset.
- Menguji pengambilan data melalui browser DevTools, Console, dan Network.

### Catatan Penggunaan AI — Pertemuan 10

**Bagian yang dibantu AI:**
- Membantu menjelaskan konsep JSON, Fetch API, `async/await`, dan penanganan galat.
- Membantu memeriksa pemisahan tanggung jawab antara `api.js`, `dom.js`, dan `app.js`.
- Membantu memeriksa kode validasi formulir dan penanganan keadaan data kosong.
- Memberikan panduan pengujian melalui DevTools dan GitHub Raw.

**Bagian yang saya kerjakan sendiri:**
- Menyesuaikan kode dengan struktur proyek P10.
- Menyiapkan dan mengunggah berkas `proyek.json` ke GitHub.
- Mengganti alamat data pada `api.js` dengan URL GitHub Raw.
- Menjalankan halaman menggunakan Live Server.
- Memeriksa permintaan `proyek.json` melalui Network dan memperoleh status `200`.
- Memeriksa tampilan daftar proyek pada halaman.
- Menyesuaikan kode dan mencatat hasil pengujian.

## Pertemuan 11 — Arsitektur Modular, State Terpusat, dan Penyimpanan Lokal

**Topik:** Memecah arsitektur kode ke dalam ES Modules, mengelola keadaan (*state*) terpusat (*Single Source of Truth*), menyimpan preferensi ke `localStorage`, dan menangani data simpanan yang rusak secara tahan banting.

Materi dan fitur yang dikerjakan:

- Memisahkan kode menjadi 5 modul ES mandiri: `data.js`, `state.js`, `dom.js`, `events.js`, dan `app.js` (dengan tetap memanfaatkan `api.js` dari P10)[cite: 1].
- Menerapkan jalur impor modular peramban yang diawali `./` dan berakhiran `.js`[cite: 1].
- Menjadikan objek `state` sebagai sumber kebenaran tunggal (*Single Source of Truth*) dan menerapkan prinsip `Tampilan = f(State)`[cite: 1].
- Memastikan tidak ada data keadaan yang dibaca atau disimpan menempel pada DOM/elemen HTML.
- Menyimpan kategori aktif dan daftar favorit ke `localStorage` secara otomatis setiap kali status berubah.
- Membaca simpanan saat inisialisasi aplikasi menggunakan mekanisme `try/catch` agar aplikasi tidak rusak bila data penyimpanan tidak valid atau rusak.
- Menambahkan fungsionalitas atur ulang untuk mengembalikan filter ke keadaan awal.

### Catatan Penggunaan AI — Pertemuan 11

**Bagian yang dibantu AI:**
- Membantu menyusun arsitektur pemisahan berkas modular ES Modules.
- Memberikan panduan pembuatan fungsi render terpusat murni berbasis state.
- Menjelaskan implementasi penyimpanan `localStorage` yang aman dari data rusak (*fallback handler*).

**Bagian yang saya kerjakan sendiri:**
- Memecah skrip menjadi berkas-berkas modular mandiri.
- Mengatur fungsi `render(state)` dan menghubungkan pendengar event.
- Menguji fungsionalitas tombol filter dan favorit pada browser.
- Menguji skenario kerusakan `localStorage` melalui Console.
- Memeriksa konsistensi tampilan tema terang dan gelap.

## Pertemuan 12 — Migrasi ke Vue.js 3 dan Vite

**Topik:** Memigrasikan arsitektur JavaScript modular dan manipulasi DOM manual ke Single Page Application (SPA) berbasis komponen menggunakan Vue.js 3 dan build tool Vite[cite: 14].

Materi dan fitur yang dikerjakan:

- Menginisialisasi proyek modern menggunakan Vite dengan templat resmi Vue (`npm create vite@latest . -- --template vue`)[cite: 14].
- Memecah antarmuka menjadi empat Single File Component (SFC) mandiri pada folder `src/components/`: `KepalaProfil.vue`, `TombolFilter.vue`, `DaftarProyek.vue`, dan `FormKontak.vue`[cite: 3].
- Menerapkan pengiriman data dari induk ke anak melalui *props* pada `KepalaProfil.vue` dengan prinsip aliran data satu arah (*one-way data flow*)[cite: 3, 14].
- Mengonversi `src/state.js` menggunakan objek `reactive` dari Vue tanpa logika manipulasi DOM manual[cite: 3].
- Menghubungkan pemuatan data asinkron via `muatProyek()` dari GitHub Raw menggunakan siklus hidup `onMounted` di `App.vue`[cite: 3].
- Memanfaatkan `watch` dengan opsi `{ deep: true }` untuk menyimpan perubahan status kategori dan penanda favorit ke `localStorage` secara otomatis[cite: 3].
- Memperbaiki logika fungsi `aturUlang()` agar mengembalikan kategori ke `semua` sekaligus mengosongkan status bintang favorit.
- Mengompilasi proyek untuk produksi menggunakan `npm run build` dan memverifikasi hasil bundel folder `dist/` menggunakan `npx vite preview`[cite: 13, 14].
- Memastikan direktori `node_modules/` dan `dist/` diabaikan oleh Git melalui `.gitignore`[cite: 1, 14].

### Catatan Penggunaan AI — Pertemuan 12

**Bagian yang dibantu AI:**
- Membantu pemecahan arsitektur komponen SFC dan konfigurasi templat Vue.
- Membantu menelusuri dan mendiagnosis pesan galat pada Console DevTools (kesalahan impor berkas, *case sensitivity*, dan sisa pemanggilan render lama).
- Memberikan panduan penggunaan fungsi reaktivitas Vue (`reactive`, `onMounted`, `watch`).
- Membantu menyusun jawaban pertanyaan evaluasi lembar kerja.

**Bagian yang saya kerjakan sendiri:**
- Menjalankan instalasi dan inisialisasi lingkungan kerja Vite di terminal.
- Membuat dan menyusun keempat berkas Single File Component di dalam `src/components/`[cite: 3].
- Memperbaiki saltik nama berkas komponen (`FromKontak.vue` menjadi `FormKontak.vue`).
- Mengganti isi berkas `src/state.js` dan menyelaraskan fungsi impor pada `src/App.vue`.
- Menguji interaktivitas filter, penanda bintang favorit, dan tombol atur ulang di peramban.
- Melakukan verifikasi build produksi melalui `vite preview` dan memeriksa tab Network DevTools[cite: 13].
- Menjalankan commit dan push riwayat pekerjaan ke repositori GitHub.