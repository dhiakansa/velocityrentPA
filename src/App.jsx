import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FleetPage from "./pages/FleetPage";
import OrderPage from "./pages/OrderPage";
import ServicePage from "./pages/ServicePage";
import TestimoniPage from "./pages/TestimoniPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/testimoni" element={<TestimoniPage />} />
      </Routes>
    </Router>
  );
};

export default App;
