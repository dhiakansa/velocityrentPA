import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const OrderPage = () => {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Cara Memesan Mobil</h1>
          <p className="text-muted">Ikuti langkah mudah berikut untuk menyewa mobil di VelocityRent.</p>
        </div>

        <section>
          <h2>1. Pilih Jenis Mobil</h2>
          <p>Pilih mobil yang sesuai dengan kebutuhan Anda dari halaman <strong>Fleet</strong>.</p>
        </section>

        <section>
          <h2>2. Tentukan Tanggal Sewa</h2>
          <p>Tentukan tanggal mulai dan selesai sewa mobil sesuai jadwal perjalanan Anda.</p>
        </section>

        <section>
          <h2>3. Pilih Layanan Tambahan (Opsional)</h2>
          <p>Anda dapat memilih layanan tambahan seperti sopir, antar jemput bandara, atau paket wisata.</p>
        </section>

        <section>
          <h2>4. Isi Formulir Pemesanan</h2>
          <p>Kunjungi halaman <strong>Contact Us</strong> dan isi data lengkap seperti nama, kontak, dan lokasi pengantaran.</p>
        </section>

        <section>
          <h2>5. Pembayaran</h2>
          <p>Setelah mengisi formulir, Anda akan menerima informasi biaya dan cara pembayaran yang tersedia.</p>
        </section>

        <section>
          <h2>6. Konfirmasi Pemesanan</h2>
          <p>Setelah pembayaran berhasil, kami akan mengirim email atau WhatsApp sebagai bukti pemesanan resmi.</p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OrderPage;
