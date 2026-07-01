import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Product from "./pages/product";
import About from "./pages/about";
import Order from "./pages/order";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-sand-100 text-sand-900 selection:bg-leaf-800 selection:text-white">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
