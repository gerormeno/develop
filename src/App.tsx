import Footer from "./layouts/Footer";
import Catalog from "./pages/catalog";
import CartTab from "./layouts/CartTab";
import ProductDetail from "./pages/productDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./pages/checkout";
import Home from "./pages/home/index";
import TopNav from "./layouts/TopNav";
import AboutUs from "./pages/aboutUs";
import AdminPanel from "./pages/adminPanel";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/pageNotFound/NotFound";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-left" theme="dark" />
      <TopNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Catalog />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact/*" element={<Contact />} />
          <Route path="admin" element={<AdminPanel />} />
        </Routes>
      </main>
      <Footer />
      <CartTab />
    </BrowserRouter>
  );
}

export default App;
