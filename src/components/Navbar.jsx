import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">VelocityRent</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/service">Service</a></li>
              <li className="nav-item"><a className="nav-link" href="/fleet">Fleet</a></li>
              <li className="nav-item"><a className="nav-link" href="/testimoni">Testimoni</a></li>
              <li className="nav-item"><a className="nav-link" href="/order">How to Order</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact Person</a></li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
