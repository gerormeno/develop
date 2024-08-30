import { AuthProvider } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth"; 
import { auth } from "./firebase-config";
import Footer from "./layouts/Footer";
import Catalog from "./pages/catalog";
import CartTab from "./layouts/CartTab";
import ProductDetail from "./pages/productDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./pages/checkout";
import Home from "./pages/home/index";
import AboutUs from "./pages/aboutUs";
import AdminPanel from "./pages/adminPanel";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/pageNotFound/NotFound";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/contact";
import { ProtectedRoute } from "./security/protectedRoute";
import Login from "./pages/login";
import Navbar from "./layouts/Navbar";

function App() {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        return;
      }
      setUser(null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer position="bottom-left" theme="dark" />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={ <ProtectedRoute user={user}> <AdminPanel /> </ProtectedRoute> } />
            <Route path="products" element={<Catalog />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact/*" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CartTab />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
