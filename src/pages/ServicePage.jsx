import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ServicePage = () => {
  return (
    <>
      <Navbar />

      <main className="container my-5">
        <h1 className="mb-4">Layanan Kami</h1>
        <p className="mb-4">
          VelocityRent hadir untuk memenuhi setiap kebutuhan transportasi Anda. Mulai dari rental harian hingga layanan wisata, semua tersedia dalam satu tempat.
        </p>

        <div className="service-section">
          <h2><i className="bi bi-calendar2-check service-icon"></i>Rental Mobil Harian</h2>
          <p>Kebebasan berkendara setiap hari dengan armada lengkap dan harga terjangkau.</p>
        </div>

        <div className="service-section">
          <h2><i className="bi bi-person-badge service-icon"></i>Sewa Mobil dengan Sopir</h2>
          <p>Duduk santai dan biarkan sopir profesional kami mengantar Anda dengan nyaman dan aman.</p>
        </div>

        <div className="service-section">
          <h2><i className="bi bi-clock-history service-icon"></i>Sewa Mobil Jangka Panjang</h2>
          <p>Layanan fleksibel untuk bisnis atau pribadi yang membutuhkan kendaraan dalam jangka waktu lama.</p>
        </div>

        <div className="service-section">
          <h2><i className="bi bi-airplane-engines service-icon"></i>Antar Jemput Bandara</h2>
          <p>Hemat waktu dan tenaga dengan layanan antar jemput yang tepat waktu dan nyaman.</p>
        </div>

        <div className="service-section">
          <h2><i className="bi bi-geo-alt service-icon"></i>Layanan Wisata</h2>
          <p>Eksplorasi destinasi wisata tanpa ribet bersama sopir yang paham rute dan lokasi terbaik.</p>
        </div>

        <div className="mt-5">
          <h2 className="mb-3">Pertanyaan Umum</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                  Apakah saya bisa menyewa mobil tanpa sopir?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Ya, Anda bisa menyewa mobil lepas kunci dengan syarat dokumen yang lengkap dan sesuai ketentuan.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                  Bagaimana jika mobil mogok di perjalanan?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Tim kami siap memberikan bantuan 24 jam dan mengganti kendaraan jika diperlukan.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                  Bisakah saya menyewa untuk ke luar kota?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Bisa, kami melayani rental luar kota baik harian maupun jangka panjang sesuai kesepakatan.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ServicePage;
