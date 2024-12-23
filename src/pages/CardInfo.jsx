import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CardInfo = ({ addToCart, cart = [], updateCartItem }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // Local state for quantity control

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(response.data);

        // Check if the product is already in the cart and set the quantity accordingly
        const cartItem = cart.find((item) => item.id === id);
        if (cartItem) {
          setQuantity(cartItem.quantity); // Set the quantity from the cart
        }
      } catch (err) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, cart]);

  const handleAddToCart = () => {
    if (!product) return;

    const isProductInCart = cart.some((cartItem) => cartItem.id === product.id);

    if (isProductInCart) {
      updateCartItem(product.id, "increment"); // Increment quantity if the product is already in the cart
    } else {
      addToCart({ ...product, quantity }); // Add product with the current quantity
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
    updateCartItem(product.id, "increment");
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
    updateCartItem(product.id, "decrement");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="cardInfo">
      <div className="container">
        <div className="items">
          <div className="productImg">
            <img src={`http://localhost:8080/${product.productImage}`} alt={product.name} />
          </div>
          <div className="productInfo">
            <div className="item">
              <h1>{product.name}</h1>
              <p className="text">{product.details}</p>
              <p className="price">
                ${product.price} <span>/ Bulk Bag</span>
              </p>
              <p className="size">
                Size: <span>Required</span>
              </p>
              <div className="cardButton">
                <button>BULK BAG</button>
                <button>SINGLE-SERVING</button>
              </div>
              <span className="qnty">Quantity:</span>
              <div className="quantityControl">
                <button onClick={decrementQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity} className="reverse">
                  +
                </button>
              </div>
              <div className="buttons">
                <button onClick={handleAddToCart} className="button">
                  ADD TO CART
                </button>
                <div className="border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardInfo;
