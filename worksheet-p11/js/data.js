export const profil = {
    nama: "Haykal Ahmadi Akbar",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

// Tambahan C.2: fungsi murni untuk menyaring daftar berdasarkan kategori
export function saring(daftar, kategori) {
    if (!kategori || kategori === "semua") {
        return daftar;
    }
    return daftar.filter((item) => item.kategori === kategori);
}