import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShopProducts = ({ products: externalProducts }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!externalProducts) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get("http://localhost:8080/api/products");
          setProducts(response.data);
        } catch (err) {
          setError("Failed to fetch products");
        } finally {
          setLoading(false);
        }
      };
      fetchProducts();
    } else {
      setProducts(externalProducts);
      setLoading(false);
    }
  }, [externalProducts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="shop-products">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="items">
              <div className="cardImg">
                <img
                  src={`http://localhost:8080/${product.productImage}`}
                  alt={product.name}
                />
              </div>
              <p>{product.name}</p>
              <div className="buttons">
                <button className="button">
                  <Link className="white" to={`/info/${product.id}`}>
                    VIEW FLAVOR
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopProducts;
