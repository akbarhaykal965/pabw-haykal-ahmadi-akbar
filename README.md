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
- Memastikan tidak ada data keadaan yang dibaca atau disimpan menempel pada DOM/elemen HTML