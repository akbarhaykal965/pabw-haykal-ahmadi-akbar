const ALAMAT = "data/proyek.json";

export async function muatProyek() {
    const respons = await fetch(ALAMAT);

    console.log("status", respons.status, "ok", respons.ok);

    if (!respons.ok) {
        throw new Error("Status " + respons.status);
    }

    return respons.json();
}