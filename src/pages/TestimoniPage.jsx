import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const TestimoniPage = () => {
  return (
    <>
      <Navbar />

      <main className="container my-5">
        <h1 className="mb-4">Testimoni Pelanggan</h1>
        <p className="mb-4">
          Berikut adalah beberapa testimoni dari pelanggan kami yang telah merasakan layanan rental mobil dari VelocityRent.
          Kami selalu berusaha memberikan pelayanan terbaik untuk setiap perjalanan Anda.
        </p>

        <div className="testimonial-card d-flex gap-3 align-items-start">
          <img src="bright.jpg" alt="User 1" className="testimonial-img" />
          <div>
            <p className="fst-italic">"Saya sangat puas dengan layanan VelocityRent. Mobilnya bersih dan nyaman, sopirnya ramah dan profesional. Pasti akan pakai lagi!"</p>
            <p className="testimonial-name">- Bright</p>
            <div className="text-warning">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>
          </div>
        </div>

        <div className="testimonial-card d-flex gap-3 align-items-start">
          <img src="https://th.bing.com/th/id/OIP.m4_idBwKsMJtPjiJW5dCvAAAAA?w=300&h=300&rs=1&pid=ImgDetMain" alt="User 2" className="testimonial-img" />
          <div>
            <p className="fst-italic">"Layanan antar jemput bandara sangat membantu saya, tepat waktu dan nyaman. VelocityRent luar biasa!"</p>
            <p className="testimonial-name">- Bernard Ensen</p>
            <div className="text-warning">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>

        <div className="testimonial-card d-flex gap-3 align-items-start">
          <img src="aurell.jpg" alt="User 3" className="testimonial-img" />
          <div>
            <p className="fst-italic">"Saya menggunakan jasa sewa mobil jangka panjang untuk perusahaan. Mobil selalu dalam kondisi baik, sopirnya profesional. Terima kasih VelocityRent!"</p>
            <p className="testimonial-name">- Aurel Carpenters</p>
            <div className="text-warning">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TestimoniPage;
