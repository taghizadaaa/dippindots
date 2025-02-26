import React, { useState, useEffect } from 'react';
import ShopProducts from '../Components/ShopProducts';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('a-z');
  const [typeFilter, setTypeFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [error, setError] = useState(null);
  

   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();

  }, []);

  const filteredProducts = products.filter(product => {
    return (
      (typeFilter === '' || product.type === typeFilter) &&
      (sizeFilter === '' || product.size === sizeFilter)
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'a-z') return a.name.localeCompare(b.name);
    if (sortOption === 'z-a') return b.name.localeCompare(a.name);
    return 0;
  });

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleTypeChange = (e) => {
    setTypeFilter(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSizeFilter(e.target.value);
  };

  return (
    <section className="shopProducts">
      <div className="container">
        <div className="items">
          <div className="top">
            <div className="item">
              <h1>Our Products</h1>
              <p>
                The original and unbeatable flash-frozen ice cream sensation. Your taste adventure awaits!
              </p>
            </div>
          </div>
          <div className="products">
            <div className="filter">
              <form>
                <label>Filter by:</label>
                <select name="type" id="type" onChange={handleTypeChange}>
                  <option value="">Product Type</option>
                  <option value="cream">Ice Cream</option>
                  <option value="ice">Ice</option>
                  <option value="yogurt">Frozen Yogurt</option>
                </select>
                <select name="size" id="size" onChange={handleSizeChange}>
                  <option value="">Size</option>
                  <option value="bulk">Bulk Bag</option>
                  <option value="single">Single Serving</option>
                </select>
                <label>Sort by:</label>
                <select name="sort" id="sort" onChange={handleSortChange}>
                  <option value="a-z">A to Z</option>
                  <option value="z-a">Z to A</option>
                </select>
              </form>
            </div>
            <div className="cardBox">
              {error ? (
                <p>Error: {error}</p>
              ) : (
                <ShopProducts products={sortedProducts} />
              )}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Shop;
