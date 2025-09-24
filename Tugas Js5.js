// ===== Tugas Pertemuan 5 =====
// Manajemen Produk dengan JS (Node.js)

// Data awal produk
let produkList = [
  { id: 1, nama: "Laptop", harga: 7500000 },
  { id: 2, nama: "Mouse", harga: 150000 },
  { id: 3, nama: "Keyboard", harga: 350000 },
  { id: 4, nama: "Monitor", harga: 2000000 },
  { id: 5, nama: "Headset", harga: 500000 }
];

let nextId = 6;

// Fungsi tampilkan produk (pakai rest + destructuring)
function tampilkanProduk(...list) {
  console.log("\n=== Daftar Produk ===");
  list.forEach(({ id, nama, harga }) => {
    console.log(`${id}. ${nama} - Rp ${harga.toLocaleString()}`);
  });
}

// Fungsi tambah produk (pakai spread)
function tambahProduk(nama, harga) {
  const produkBaru = { id: nextId++, nama, harga };
  produkList = [...produkList, produkBaru];
  console.log(`\nProduk "${nama}" berhasil ditambahkan!`);
}

// Fungsi hapus produk
function hapusProduk(id) {
  produkList = produkList.filter(p => p.id !== id);
  console.log(`\nProduk dengan ID ${id} berhasil dihapus!`);
}

// ========== Simulasi Input (Event Listener di Node) ==========
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log(`
=== Menu Manajemen Produk ===
1. Lihat semua produk
2. Tambah produk
3. Hapus produk
4. Keluar
  `);

  rl.question("Pilih menu (1-4): ", (pilih) => {
    switch (pilih) {
      case "1":
        tampilkanProduk(...produkList);
        return menu();
      case "2":
        rl.question("Masukkan nama produk: ", (nama) => {
          rl.question("Masukkan harga produk: ", (harga) => {
            tambahProduk(nama, parseInt(harga));
            return menu();
          });
        });
        break;
      case "3":
        rl.question("Masukkan ID produk yang mau dihapus: ", (id) => {
          hapusProduk(parseInt(id));
          return menu();
        });
        break;
      case "4":
        console.log("Terima kasih sudah menggunakan sistem ini!");
        rl.close();
        break;
      default:
        console.log("Pilihan tidak valid!");
        return menu();
    }
  });
}

// Jalankan aplikasi
menu();
