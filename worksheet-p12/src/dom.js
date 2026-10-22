import { saring } from './data.js';

const daftar = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");

// C.3: Membuat satu kartu proyek lengkap dengan tombol favorit
export function buatKartu(proyek, favorit = []) {
    const item = document.createElement("li");
    item.className = "kartu";
    item.textContent = `${proyek.judul} (${proyek.tahun}) `;

    const tombol = document.createElement("button");
    tombol.className = "favorit";
    tombol.dataset.id = proyek.id;
    tombol.textContent = favorit.includes(proyek.id) ? "★" : "☆";

    item.append(tombol);
    return item;
}

// C.2 & C.4: Menampilkan daftar proyek berdasarkan state
export function render(state) {
    // 1. Kosongkan wadah
    daftar.textContent = "";

    // Saring data dari state
    const tampil = saring(state.daftarProyek, state.kategoriAktif);

    // 2. Periksa keadaan kosong
    if (tampil.length === 0) {
        pesanKosong.hidden = false;
        tandaiTombolAktif(state.kategoriAktif);
        return;
    }

    pesanKosong.hidden = true;

    // 3. Isi ulang dari state
    tampil.forEach((proyek) => {
        daftar.append(buatKartu(proyek, state.favorit));
    });

    // Perbarui penanda tombol aktif sesuai state
    tandaiTombolAktif(state.kategoriAktif);
}

// Menandai tombol filter yang sedang aktif
export function tandaiTombolAktif(kategoriAktif) {
    const tombolFilter = document.querySelectorAll("#filter button");

    tombolFilter.forEach((tombol) => {
        tombol.classList.toggle(
            "aktif",
            tombol.dataset.kategori === kategoriAktif
        );
    });
}