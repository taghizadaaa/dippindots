import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Location from "./pages/Location";
import Shop from "./pages/Shop";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/location" element={<Location />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;

