import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FleetPage = () => {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="text-center mb-4">Armada Kami</h1>
        <p className="text-center mb-5">
          Di VelocityRent, kami menyediakan berbagai jenis mobil untuk memenuhi
          kebutuhan perjalanan Anda. Semua kendaraan kami terawat dengan baik dan
          dilengkapi dengan fasilitas yang nyaman serta aman.
        </p>

        <div className="row g-4">
          {[
            {
              name: "Toyota Avanza",
              img: "avanza.png",
              specs: ["Mesin: 1.3L", "Kapastitas: 7 Penumpang", "Transmisi: Manual/Automatic", "Fasilitas: AC, Audio, USB"],
              price: "Rp 350.000/hari"
            },
            {
              name: "Honda BRV",
              img: "brv.png",
              specs: ["Mesin: 1.5L", "Kapastitas: 7 Penumpang", "Transmisi: Manual/Automatic", "Fasilitas: AC, Audio, USB, Bluetooth"],
              price: "Rp 450.000/hari"
            },
            {
              name: "Daihatsu Xenia",
              img: "xenia.png",
              specs: ["Mesin: 1.3L", "Kapastitas: 7 Penumpang", "Transmisi: Manual/Automatic", "Fasilitas: AC, Audio, USB"],
              price: "Rp 300.000/hari"
            },
            {
              name: "Honda Mobilio",
              img: "mobilio.png",
              specs: ["Mesin: 1.5L", "Kapastitas: 7 Penumpang", "Transmisi: Manual/Automatic", "Fasilitas: AC, Audio, USB, Bluetooth"],
              price: "Rp 400.000/hari"
            }
          ].map((car, index) => (
            <div className="col-md-6" key={index}>
              <div className="card fleet-card">
                <img src={car.img} className="fleet-img card-img-top" alt={car.name} />
                <div className="card-body">
                  <h5 className="card-title">{car.name}</h5>
                  <p><strong>Spesifikasi:</strong></p>
                  <ul>
                    {car.specs.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p><strong>Harga Sewa:</strong> {car.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default FleetPage;
