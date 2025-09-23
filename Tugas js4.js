// Class dasar Kendaraan
class Kendaraan {
  constructor(merk, tahun) {
    this.merk = merk;
    this.tahun = tahun;
  }

  deskripsi() {
    return `${this.merk} (Tahun ${this.tahun})`;
  }
}

// Class turunan Mobil
class Mobil extends Kendaraan {
  constructor(merk, tahun, cc) {
    super(merk, tahun);
    this.cc = cc;
  }

  deskripsi() {
    return `Mobil: ${this.merk} - ${this.cc}cc (Tahun ${this.tahun})`;
  }
}

// Class turunan Motor
class Motor extends Kendaraan {
  constructor(merk, tahun, cc) {
    super(merk, tahun);
    this.cc = cc;
  }

  deskripsi() {
    return `Motor: ${this.merk} - ${this.cc}cc (Tahun ${this.tahun})`;
  }
}

// Data Mobil tersedia
const daftarMobil = [
  new Mobil("Toyota Avanza", 2022, 1500),
  new Mobil("Honda Civic", 2021, 1800),
  new Mobil("Mitsubishi Pajero", 2020, 2500),
];

// Data Motor tersedia
const daftarMotor = [
  new Motor("Honda Beat", 2022, 110),
  new Motor("Yamaha NMAX", 2021, 155),
  new Motor("Kawasaki Ninja", 2020, 250),
];

// Tampilkan daftar mobil
console.log("=== Daftar Mobil yang Tersedia ===");
daftarMobil.forEach((mobil, index) => {
  console.log(`${index + 1}. ${mobil.deskripsi()}`);
});

// Tampilkan daftar motor
console.log("\n=== Daftar Motor yang Tersedia ===");
daftarMotor.forEach((motor, index) => {
  console.log(`${index + 1}. ${motor.deskripsi()}`);
});

// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  infoPelanggan() {
    return `Nama: ${this.nama}, Telepon: ${this.nomorTelepon}, Kendaraan: ${this.kendaraanDisewa.deskripsi()}`;
  }
}

// Daftar pelanggan
let pelangganList = [];

// Fungsi untuk mencatat transaksi penyewaan
function sewaKendaraan(nama, nomorTelepon, kendaraan) {
  const pelanggan = new Pelanggan(nama, nomorTelepon, kendaraan);
  pelangganList.push(pelanggan);
}

// Transaksi sewa 
const mobilDisewa = daftarMobil[0]; 
const motorDisewa = daftarMotor[0]; 

sewaKendaraan("Budi", "08123456789", mobilDisewa);
sewaKendaraan("Siti", "08987654321", motorDisewa);

// Menampilkan daftar pelanggan
console.log("\n=== Daftar Pelanggan yang Menyewa Kendaraan ===");
pelangganList.forEach((p, index) => {
  console.log(`${index + 1}. ${p.infoPelanggan()}`);
});
