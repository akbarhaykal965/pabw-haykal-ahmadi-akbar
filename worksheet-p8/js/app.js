const profil = {
    nama: "Haykal Ahmadi Akbar",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

const jumlahProyek = 3;

let pilihanAktif = "semua";

console.log(profil);
console.log(jumlahProyek);
console.log(pilihanAktif);

const kalimat = `Nama saya ${profil.nama}, saya seorang ${profil.peran}, dan saya memiliki ${jumlahProyek} proyek.`;

console.log(kalimat);

const alamat = profil.alamat?.kota ?? "Yogyakarta";

console.log(alamat);

function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarProyek = [
    { judul: "Halaman Profil", tahun: 2026, selesai: true },
    { judul: "Katalog Produk", tahun: 2026, selesai: false },
    { judul: "Website Coffee Shop", tahun: 2026, selesai: true },
    { judul: "Aplikasi Kasir", tahun: 2026, selesai: false }
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find(
    (proyek) => proyek.judul === "Katalog Produk"
);
console.log(katalog);

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.table(judulProyek);

const urutProyek = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));

console.table(urutProyek);
console.table(daftarProyek);