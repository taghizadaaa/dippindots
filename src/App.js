import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Location from "./pages/Location";
import Shop from "./pages/Shop";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import ShopProducts from "./Components/ShopProducts";
import EditCart from "./pages/EditCart";
import CardInfo from "./pages/CardInfo";

const App = () => {
  const location = useLocation();
  const [cart, setCart] = useState([]); // Shared cart state

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }]; // Add with initial quantity
    });
  };

  // Function to update the quantity of a product in the cart
  const updateCartItem = (id, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increment"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]); // Set the cart to an empty array
  };

  return (
    <React.Fragment>
      <Header cart={cart} clearCart={clearCart} /> {/* Pass clearCart to Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/location" element={<Location />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/contact"
          element={<Contact addToCart={addToCart} cart={cart} />}
        />
        <Route path="/products" element={<ShopProducts />} />
        <Route
          path="/edit"
          element={
            <EditCart
              cart={cart}
              updateCartItem={updateCartItem}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/info/:id"
          element={
            <CardInfo cart={cart} addToCart={addToCart} updateCartItem={updateCartItem} />
          }
        />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
