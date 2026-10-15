
import { profil } from "./app.js";
import { muatProyek } from "./api.js";

// Memastikan data berhasil diimpor
console.log("dom.js berhasil dijalankan");
console.log("Profil:", profil);

// Mengambil elemen HTML
const daftar = document.querySelector("#daftar");
const tombolFilter = document.querySelectorAll("#filter button");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat = document.querySelector("#muat");
const barisFilter = document.querySelector("#filter");

// Data proyek yang berhasil dimuat
let daftarProyek = [];

// Menandai tombol filter yang sedang aktif
function tandaiTombolAktif(tombolAktif) {
    tombolFilter.forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

// Menampilkan daftar proyek
function render(data) {
    daftar.textContent = "";

    if (data.length === 0) {
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;

    data.forEach((proyek) => {
        const item = document.createElement("li");
        item.className = "kartu";
        item.textContent = `${proyek.judul} (${proyek.tahun})`;
        daftar.append(item);
    });
}

// Event delegation untuk tombol filter
barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol || !barisFilter.contains(tombol)) {
        return;
    }

    const kategori = tombol.dataset.kategori;

    tandaiTombolAktif(tombol);

    const proyekTerpilih = daftarProyek.filter((proyek) => {
        return kategori === "semua" || proyek.kategori === kategori;
    });

    render(proyekTerpilih);
});

// Memuat proyek dari file JSON
async function mulai() {
    pesanMuat.hidden = false;
    pesanKosong.hidden = true;
    daftar.textContent = "";

    try {
        daftarProyek = await muatProyek();

        console.log("Daftar proyek berhasil dimuat:", daftarProyek);
        render(daftarProyek);
    } catch (error) {
        console.error("Gagal memuat proyek:", error);
        daftar.textContent = "Gagal memuat data proyek.";
        pesanKosong.hidden = true;
    } finally {
        pesanMuat.hidden = true;
    }
}

mulai();

// Validasi form rekomendasi
const formRekomendasi = document.querySelector("#form-rekomendasi");
const tombolKirim = formRekomendasi.querySelector('button[type="submit"]');

const kolomWajib = [
    document.querySelector("#nama-tempat"),
    document.querySelector("#lokasi"),
    document.querySelector("#kategori"),
    document.querySelector("#rating")
];

const kolomRating = document.querySelector("#rating");
const pesanRating = document.querySelector("#galat-rating");

// Memeriksa kelengkapan dan validitas form
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

            if (!kolomPertamaError) {
                kolomPertamaError = kolom;
            }
        }
    });

    const nilaiRating = kolomRating.value.trim();
    const ratingValid =
        nilaiRating !== "" &&
        Number(nilaiRating) >= 1 &&
        Number(nilaiRating) <= 5;

    pesanRating.hidden = ratingValid;

    tombolKirim.disabled = !sah;

    return { sah, kolomPertamaError };
}

// Memeriksa form ketika pengguna mengetik atau memilih
kolomWajib.forEach((kolom) => {
    kolom.addEventListener("input", periksaForm);
    kolom.addEventListener("change", periksaForm);
});

// Mencegah halaman dimuat ulang saat form dikirim
formRekomendasi.addEventListener("submit", (event) => {
    event.preventDefault();

    const hasil = periksaForm();

    if (!hasil.sah) {
        hasil.kolomPertamaError.focus();
        return;
    }

    alert("Form valid! Rekomendasi siap diproses.");
});

// Memeriksa kembali validasi setelah tombol Reset diklik
formRekomendasi.addEventListener("reset", () => {
    setTimeout(periksaForm, 0);
});

// Memeriksa kondisi form saat halaman pertama kali dibuka
periksaForm();
