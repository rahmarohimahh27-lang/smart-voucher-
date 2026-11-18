// ==========================================
// 1. INPUT DATA TRANSAKSI (TANPA FUNCTION)
// ==========================================
const inputNama = prompt("Masukkan Nama Pelanggan:", "  ");
const inputKelas = prompt("Masukkan Kelas Pelanggan:", "");
const nomorUrut = prompt("Masukkan Nomor Urut Transaksi (contoh: 001):", "001");
const inputJenisVoucher = prompt(
    "Pilih Jenis Voucher (1 Jam / 3 Jam / 1 Hari / 7 Hari / 30 Hari):",
    ""
);
const hargaVoucher = Number(prompt("Masukkan Harga Voucher (angka saja, contoh: 10000):", "10000"));
const jumlahVoucher = Number(prompt("Masukkan Jumlah Voucher yang Dibeli:", "3"));
const uangPembayaran = Number(prompt("Masukkan Uang Pembayaran:", "50000"));

// ==========================================
// 2. MANIPULASI & PENGGABUNGAN STRING
// ==========================================
// Membersihkan spasi awal/akhir dan mengubah ke huruf kapital
const namaBersih = inputNama.trim();
const namaKapital = namaBersih.toUpperCase();

// Menghitung jumlah karakter nama setelah spasi dibersihkan
const panjangNama = namaBersih.length;

// Mengubah jenis voucher menjadi huruf kecil
const voucherHurufKecil = inputJenisVoucher.trim().toLowerCase();

// Penggabungan string untuk membuat kode transaksi standar & kode inisial (Misi Level 2)
const kodeTransaksi = "SV-" + nomorUrut.trim();
const inisialNama = namaKapital.slice(0, 2);
const kodeLengkap = kodeTransaksi + "-" + inisialNama + "-" + inputKelas.trim().replace(/\s+/g, "");

// ==========================================
// 3. PERHITUNGAN ARITMATIKA
// ==========================================
const biayaAdmin = 1000;
const subtotal = hargaVoucher * jumlahVoucher;
const diskon = 0.05 * subtotal; // Diskon 5%
const totalPembayaran = subtotal - diskon + biayaAdmin;
const uangKembalian = uangPembayaran - totalPembayaran;

// Misi Tambahan Level 2: Rata-rata seluruh harga daftar produk voucher
const rataRataHargaProduk = (2000 + 5000 + 10000 + 25000 + 75000) / 5;

// ==========================================
// 4. CEK TIPE DATA (typeof)
// ==========================================
const tipeHarga = typeof hargaVoucher;
const tipeJumlah = typeof jumlahVoucher;
const tipeNama = typeof namaKapital;

// ==========================================
// 5. OUTPUT KE CONSOLE (CONSOLE.LOG)
// ==========================================
const laporanConsole = `
=========================================
      LAPORAN TRANSAKSI SMART VOUCHER
=========================================
Kode Transaksi   : ${kodeTransaksi}
Kode Lengkap     : ${kodeLengkap}
Nama Pelanggan   : ${namaKapital} (${panjangNama} karakter)
Kelas            : ${inputKelas.trim()}
Jenis Voucher    : ${voucherHurufKecil}
Harga Satuan     : Rp${hargaVoucher.toLocaleString("id-ID")}
Jumlah Beli      : ${jumlahVoucher}
-----------------------------------------
Subtotal         : Rp${subtotal.toLocaleString("id-ID")}
Diskon (5%)      : Rp${diskon.toLocaleString("id-ID")}
Biaya Admin      : Rp${biayaAdmin.toLocaleString("id-ID")}
Total Pembayaran : Rp${totalPembayaran.toLocaleString("id-ID")}
Uang Pembayaran  : Rp${uangPembayaran.toLocaleString("id-ID")}
Uang Kembalian   : Rp${uangKembalian.toLocaleString("id-ID")}
-----------------------------------------
[Cek Tipe Data]
- hargaVoucher   : ${tipeHarga}
- jumlahVoucher  : ${tipeJumlah}
- namaKapital    : ${tipeNama}
- Rata-rata harga semua produk: Rp${rataRataHargaProduk.toLocaleString("id-ID")}
=========================================
`;

console.log(laporanConsole);

// ==========================================
// 6. OUTPUT KE HALAMAN HTML (DOM)
// ==========================================
document.getElementById("output-struk").innerHTML = `
    <div class="baris"><span>Kode Transaksi</span><strong>${kodeTransaksi}</strong></div>
    <div class="baris"><span>Kode Lengkap (Lvl 2)</span><span>${kodeLengkap}</span></div>
    <div class="baris"><span>Nama Pelanggan</span><strong>${namaKapital}</strong></div>
    <div class="baris"><span>Kelas</span><span>${inputKelas.trim()}</span></div>
    <div class="baris"><span>Jenis Voucher</span><span>${voucherHurufKecil}</span></div>
    <div class="baris"><span>Harga Voucher</span><span>Rp${hargaVoucher.toLocaleString("id-ID")}</span></div>
    <div class="baris"><span>Jumlah</span><span>${jumlahVoucher}</span></div>

    <div class="baris pemisah"><span>Subtotal</span><span>Rp${subtotal.toLocaleString("id-ID")}</span></div>
    <div class="baris"><span>Diskon 5%</span><span>Rp${diskon.toLocaleString("id-ID")}</span></div>
    <div class="baris"><span>Biaya Administrasi</span><span>Rp${biayaAdmin.toLocaleString("id-ID")}</span></div>
    <div class="baris total"><span>Total Pembayaran</span><span>Rp${totalPembayaran.toLocaleString("id-ID")}</span></div>
    <div class="baris"><span>Uang Pembayaran</span><span>Rp${uangPembayaran.toLocaleString("id-ID")}</span></div>
    <div class="baris kembalian"><span>Uang Kembalian</span><span>Rp${uangKembalian.toLocaleString("id-ID")}</span></div>
`;

document.getElementById("output-debug").innerHTML = `
    <p><strong>Jumlah Karakter Nama (setelah trim):</strong> ${panjangNama} karakter</p>
    <p><strong>Tipe Data (typeof):</strong> harga = <code>${tipeHarga}</code>, jumlah = <code>${tipeJumlah}</code>, nama = <code>${tipeNama}</code></p>
    <p><strong>Rata-rata Harga Produk ISP:</strong> Rp${rataRataHargaProduk.toLocaleString("id-ID")}</p>
`;