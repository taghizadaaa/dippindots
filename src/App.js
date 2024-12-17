import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Location from "./pages/Location";
import Shop from "./pages/Shop";
import Account from "./pages/Account";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword"
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import ShopProducts from "./Components/ShopProducts"
import EditCart from "./pages/EditCart";
import CardInfo from "./pages/CardInfo"

const App = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [location.pathname])

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/location" element={<Location />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ShopProducts />} />
        <Route path="/edit" element={<EditCart />} />
        <Route path="/info" element={<CardInfo />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;

