import React, { useState } from 'react';
import { Link } from 'react-router';
import logo from "../assets/Images/logo-dippin-dots-official.png";
import iceLeft from "../assets/Images/ice-cap-left.svg";
import iceRight from "../assets/Images/ice-cap-right.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  // State to track cart dropdown visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toggle cart dropdown visibility
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Close cart dropdown
  const closeCart = () => setIsCartOpen(false);

  return (
    <header>
      {/* Modal Background */}
      {isCartOpen && <div className="modalBackground" onClick={closeCart}></div>}
      
      <div className="top">
        {/* Account Link */}
        <div className="account">
          <Link className='blueLink' to="/account">
            <FaRegUserCircle /> ACCOUNT
          </Link>
        </div>
        
        {/* Cart Link */}
        <div className="cart">
          <Link className='blueLink' onClick={toggleCart}>
            <FaShoppingCart /> CART
          </Link>
        </div>
        
        {/* Cart Dropdown */}
        {isCartOpen && (
          <div className="cartDrop">
            <h5>Your cart contains item</h5>
            <div className="content">
              <div className="checkout">
                <h5 className="subtotal">
                  Order subtotal <strong>Price</strong>
                </h5>
                <div className="buttons">
                  <button>
                    <Link to="/cart" className='classBlue'>
                      View / Edit Cart
                    </Link>
                  </button>
                </div>
              </div>
              <hr />
              <ul className="products">
                <li>
                  <Link>
                    <img src={logo} alt="" />
                  </Link>
                  <div className="cnt">
                    <h3>Banana Split Ice Cream</h3>
                    <p>Count vur Price</p>
                    <div className="options">
                      <p>Size: Bulk Bag</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Ice Decorations */}
      <div className="ice">
        <div className="left">
          <img src={iceLeft} alt="ice" />
        </div>
        <div className="right">
          <img src={iceRight} alt="ice" />
        </div>
      </div>

      {/* Navigation */}
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
          <ul>
            <li><Link className='whiteLink' to="/shop">SHOP</Link></li>
            <li><Link className='whiteLink'>FLAVORS</Link></li>
            <li><Link className='whiteLink' to="/location">LOCATIONS</Link></li>
            <li><Link className='whiteLink'>RECIPES</Link></li>
            <li><Link className='whiteLink' to="/events">EVENTS</Link></li>
            <li><Link className='whiteLink'>SELL</Link></li>
            <li><Link className='whiteLink'>DOT CRAZY! EMAIL CLUB</Link></li>
          </ul>
          <div className="contact">
            <Link className='contactLink' to="/contact">CONTACT US</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
