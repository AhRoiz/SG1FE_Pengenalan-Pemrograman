const prompt = require("prompt-sync")();

console.log("Validasi Masuk Klub");

const umur = Number(prompt("Masukkan umur: "));
//umur logic
if (umur < 21) {
    console.log("Tidak boleh masuk");
}

//uang logic
const uang = Number(prompt("Masukkan jumlah uang (dalam rupiah): "));

if (uang < 500000) {
    console.log("Tidak boleh masuk (uang tidak cukup)");
}

console.log("Anda boleh masuk!");
