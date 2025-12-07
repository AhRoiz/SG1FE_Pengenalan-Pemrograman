console.log("Program Validasi Klub Malam");

const prompt = require("prompt-sync")();

const umur = Number(prompt("Masukkan umur: "));

if (umur < 21) {
    console.log("Tidak boleh masuk ");
}

console.log("Umur valid. Lanjut ke pengecekan uang...");
