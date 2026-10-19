import { render } from './dom.js';

// Kunci dan versi penyimpanan (D.1 & E.2)
const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
    daftarProyek: [],
    kategoriAktif: "semua",
    favorit: []
};

// D.1: Menyimpan state ke localStorage sebagai string JSON
export function simpan(state) {
    const isi = {
        versi: VERSI,
        kategoriAktif: state.kategoriAktif,
        favorit: state.favorit
    };
    localStorage.setItem(KUNCI, JSON.stringify(isi));
}

// E.2: Membaca teks, memeriksa versi skema, dan menangani simpanan rusak
export function muat() {
    try {
        const isi = JSON.parse(localStorage.getItem(KUNCI));
        if (isi?.versi !== VERSI) {
            localStorage.removeItem(KUNCI);   // versi berbeda atau format lama: buang
            return null;
        }
        return isi;
    } catch {
        localStorage.removeItem(KUNCI);       // isi rusak/bukan JSON valid: buang
        return null;
    }
}

// D.1: Memulihkan state dari data simpanan
export function pulihkan(isi) {
    if (!isi) return; // kunjungan pertama atau data rusak: pakai nilai bawaan
    if (isi.kategoriAktif) state.kategoriAktif = isi.kategoriAktif;
    if (Array.isArray(isi.favorit)) state.favorit = isi.favorit;
}

// D.1: Menghapus simpanan dan mengembalikan state ke nilai bawaan
export function aturUlang() {
    localStorage.removeItem(KUNCI);
    state.kategoriAktif = "semua";
    state.favorit = [];
    render(state);
}

// Fungsi pengubah: selalu panggil simpan(state) sebelum render(state)
export function isiProyek(daftar) {
    state.daftarProyek = daftar;
    render(state);
}

export function pilihKategori(kategori) {
    state.kategoriAktif = kategori;
    simpan(state);
    render(state);
}

export function tambahFavorit(id) {
    if (state.favorit.includes(id)) {
        state.favorit = state.favorit.filter((favId) => favId !== id);
    } else {
        state.favorit = [...state.favorit, id];
    }
    simpan(state);
    render(state);
}