import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="text-center mb-4">Tentang VelocityRent</h1>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center about-photo">
            <img src="bbb.jpg" alt="Tim VelocityRent" className="img-fluid" />
            <p className="caption">Tim profesional kami yang berdedikasi untuk pelayanan terbaik</p>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-md-10">
            <p>
              <strong>VelocityRent</strong> adalah perusahaan rental mobil terpercaya yang telah
              beroperasi sejak tahun 2010. Dengan pengalaman lebih dari satu dekade,
              kami selalu berkomitmen memberikan layanan transportasi terbaik kepada
              pelanggan di seluruh Indonesia.
            </p>
            <p>
              Kami menyediakan armada kendaraan dari berbagai merek ternama, termasuk
              Toyota, Honda, Daihatsu, dan lainnya. Kami percaya bahwa kenyamanan dan
              keamanan adalah prioritas utama dalam setiap perjalanan.
            </p>
            <p>
              Dengan staf yang profesional, sistem pemesanan yang mudah, serta
              dukungan pelanggan yang responsif, kami terus berinovasi untuk
              menghadirkan pengalaman rental mobil yang menyenangkan dan bebas stres.
              Baik Anda membutuhkan kendaraan untuk perjalanan bisnis, liburan, atau
              keperluan keluarga, VelocityRent siap menjadi solusi transportasi Anda.
            </p>
            <p>
              <strong>Visi kami</strong> adalah menjadi penyedia layanan rental mobil terbaik dan
              terbesar di Indonesia, dengan menjunjung tinggi kepuasan pelanggan,
              kualitas layanan, serta integritas.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
