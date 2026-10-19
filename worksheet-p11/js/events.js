import { pilihKategori, tambahFavorit, aturUlang } from "./state.js";

export function pasangPendengar() {
    const barisFilter = document.querySelector("#filter");
    const daftar = document.querySelector("#daftar");

    // Pendengar klik di area filter
    if (barisFilter) {
        barisFilter.addEventListener("click", (event) => {
            const tombol = event.target.closest("button");
            if (!tombol || !barisFilter.contains(tombol)) return;

            // Jika yang diklik adalah tombol atur ulang
            if (tombol.id === "atur-ulang") {
                aturUlang();
                return;
            }

            // Jika tombol filter kategori biasa
            pilihKategori(tombol.dataset.kategori);
        });
    }

    // Pendengar klik tombol favorit (delegasi event di wadah #daftar)
    if (daftar) {
        daftar.addEventListener("click", (event) => {
            const tombol = event.target.closest(".favorit");
            if (!tombol) return;

            // Konversi dataset.id ke number jika id berupa angka
            const id = Number(tombol.dataset.id) || tombol.dataset.id;
            tambahFavorit(id);
        });
    }
}