import { muatProyek } from "./api.js";
import { isiProyek } from "./state.js";
import { pasangPendengar } from "./events.js";

const pesanMuat = document.querySelector("#muat");
const daftar = document.querySelector("#daftar");

async function mulai() {
    // Pasang semua interaksi event
    pasangPendengar();

    if (pesanMuat) pesanMuat.hidden = false;

    try {
        const data = await muatProyek();
        // Mengisi data ke state; fungsi ini otomatis memanggil render(state)
        isiProyek(data);
    } catch (error) {
        console.error("Gagal memuat data:", error);
        if (daftar) daftar.textContent = "Data gagal dimuat. Periksa koneksi, lalu muat ulang.";
    } finally {
        if (pesanMuat) pesanMuat.hidden = true;
    }
}

mulai();