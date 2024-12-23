import React from 'react'
import ShopProducts from '../Components/ShopProducts'

const Shop = () => {
  return (
    <section className="shopProducts">
      <div className="container">
        <div className="items">
          <div className="top">
            <div className="item">
              <h1>Our Products</h1>
              <p>The original and unbeatable flash-frozen ice cream sensation. Your taste adventure awaits!</p>
            </div>
          </div>
          <div className="products">
            <div className="filter">
              <form>
                <label>Filter by:</label>
                <select name="type" id="type">
                  <option value="" disabled selected>Product Type</option>
                  <option value="cream">
                    Ice Cream
                  </option>
                  <option value="ice">
                    Ice
                  </option>
                  <option value="yogurt">
                    Frozen Yogurt
                  </option>
                </select>
                <select name="type" id="type">
                  <option value="" disabled selected>Size</option>
                  <option value="bulk">
                    Bulk Bag
                  </option>
                  <option value="single">
                    Single Serving
                  </option>
                </select>
                <label>Sort by:</label>
                <select name="sort" id="sort">
                  <option value="a-z">A to Z</option>
                  <option value="z-a">Z to A</option>
                </select>
              </form>
            </div>
            <div className="cardBox">
              <ShopProducts />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
