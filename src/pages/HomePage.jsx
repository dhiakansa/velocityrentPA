const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <div className="container text-white text-center">
            <h1 className="mb-4">
              Selamat Datang di <span className="highlight-brand">VelocityRent</span>
            </h1>
            <p className="mb-4">
              Kami menyediakan layanan rental mobil terbaik untuk kebutuhan pribadi, bisnis, maupun liburan Anda.<br />
              Temukan beragam pilihan mobil berkualitas tinggi, harga terjangkau, dan pelayanan profesional.
            </p>
            <a href="/service" className="hero-button">Lihat Layanan</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="highlight">
        <div className="container">
          <h2>Kenapa Memilih VelocityRent?</h2>
          <ul>
            <li>✔️ Armada lengkap dan terawat</li>
            <li>✔️ Layanan customer service 24 jam</li>
            <li>✔️ Harga kompetitif dan transparan</li>
            <li>✔️ Driver profesional & berpengalaman</li>
            <li>✔️ Pemesanan mudah secara online maupun offline</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h5>Hubungi Kami</h5>
        <p>Email: info@velocityrent.com</p>
        <p>Telepon: 0812-3456-7890</p>
        <p>Alamat: Jl. Merdeka No. 123, Pekalongan</p>
        <p>&copy; 2025 VelocityRent. All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;
