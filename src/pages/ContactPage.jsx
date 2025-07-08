import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <section className="contact-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold animate__animated animate__fadeInDown">Contact Us</h2>
            <p className="text-muted animate__animated animate__fadeIn">Silakan hubungi kami untuk pertanyaan atau bantuan.</p>
          </div>
          <div className="row">
            <div className="col-md-6 animate__animated animate__fadeInLeft">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nama</label>
                  <input type="text" className="form-control" id="name" placeholder="Nama Anda" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Email Anda" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Pesan</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Tulis pesan Anda di sini..."></textarea>
                </div>
                <button type="submit" className="btn btn-custom">Kirim Pesan</button>
              </form>
            </div>

            <div className="col-md-6 animate__animated animate__fadeInRight">
              <h5 className="mb-3">Informasi Kontak</h5>
              <p><i className="bi bi-geo-alt-fill me-2"></i> Jl. Raya No. 123, Pekalongan, Indonesia</p>
              <p><i className="bi bi-telephone-fill me-2"></i> +62 21 1234 5678</p>
              <p><i className="bi bi-envelope-fill me-2"></i> info@velocityrent.com</p>
              <div className="mt-4">
                <iframe 
                  src="https://maps.google.com/maps?q=Pekalongan%2C%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
