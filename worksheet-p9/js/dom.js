import { profil, daftarProyek } from "./app.js";

// Memastikan data berhasil diimpor
console.log("dom.js berhasil dijalankan");
console.log("Profil:", profil);
console.log("Daftar proyek:", daftarProyek);

// Mengambil elemen HTML
const daftar = document.querySelector("#daftar");
const tombolFilter = document.querySelectorAll("#filter button");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

// Fungsi untuk menandai tombol yang sedang aktif
function tandaiTombolAktif(tombolAktif) {
    tombolFilter.forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

// Fungsi untuk menampilkan proyek
function render(data) {
    // 1. Kosongkan wadah terlebih dahulu
    daftar.textContent = "";

    // 2. Periksa apakah data kosong
    if (data.length === 0) {
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;

    // 3. Tampilkan proyek
    data.forEach((proyek) => {
        const item = document.createElement("li");
        item.textContent = `${proyek.judul} (${proyek.tahun})`;
        daftar.append(item);
    });
}

// Event delegation: satu listener pada induk #filter
barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol || !barisFilter.contains(tombol)) return;

    const kategori = tombol.dataset.kategori;

    // Menandai tombol aktif
    tandaiTombolAktif(tombol);

    // Memilih proyek sesuai kategori
    const proyekTerpilih = daftarProyek.filter((proyek) => {
        return kategori === "semua" || proyek.kategori === kategori;
    });

    render(proyekTerpilih);
});

// Menampilkan seluruh proyek saat halaman dibuka
render(daftarProyek);

// Validasi form rekomendasi
const formRekomendasi = document.querySelector("#form-rekomendasi");
const tombolKirim = formRekomendasi.querySelector('button[type="submit"]');
const kolomWajib = [
    document.querySelector("#nama-tempat"),
    document.querySelector("#lokasi"),
    document.querySelector("#kategori"),
    document.querySelector("#rating")
];

const pesanRating = document.querySelector("#galat-rating");

function periksaForm() {
    let sah = true;
    let kolomPertamaError = null;

    kolomWajib.forEach((kolom) => {
        const nilai = kolom.value.trim();
        let valid = nilai !== "";

        if (kolom.id === "rating" && valid) {
            const rating = Number(nilai);
            valid = rating >= 1 && rating <= 5;
        }

        kolom.setAttribute("aria-invalid", String(!valid));

        if (!valid) {
            sah = false;
            if (!kolomPertamaError) kolomPertamaError = kolom;
        }
    });

    pesanRating.hidden = (
        document.querySelector("#rating").value.trim() !== "" &&
        document.querySelector("#rating").validity.valid
    );

    tombolKirim.disabled = !sah;
    return { sah, kolomPertamaError };
}

// Periksa saat pengguna mengetik atau memilih
kolomWajib.forEach((kolom) => {
    kolom.addEventListener("input", periksaForm);
    kolom.addEventListener("change", periksaForm);
});

// Cegah halaman dimuat ulang ketika form dikirim
formRekomendasi.addEventListener("submit", (event) => {
    event.preventDefault();

    const hasil = periksaForm();

    if (!hasil.sah) {
        hasil.kolomPertamaError.focus();
        return;
    }

    alert("Form valid! Rekomendasi siap diproses.");
});

periksaForm();