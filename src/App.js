import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Location from "./pages/Location";
import Shop from "./pages/Shop";
import Account from "./pages/Account";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword"
import Create from "./pages/Create";
import Contact from "./pages/Contact";
import ShopProducts from "./Components/ShopProducts"

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/location" element={<Location />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account/>} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/create" element={<Create />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ShopProducts />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;

