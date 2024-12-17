import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/Images/logo-dippin-dots-official.png';
import iceLeft from '../assets/Images/ice-cap-left.svg';
import iceRight from '../assets/Images/ice-cap-right.svg';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);


  const handleLogOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/account');
  };

  const handleAccountClick = () => {
    if (!isLoggedIn) {
      navigate('/account');
    }
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeCart = () => setIsCartOpen(false);


  const handleViewEditCart = () => {
    closeCart();
    navigate('/edit');
  };

  return (
    <header>
      <div className="top">
        <div className="account" style={{ position: 'relative' }}
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}>
          {isLoggedIn ? (
            <div className="accountWrapper">
              <div className="blueLink accountHover" onClick={handleAccountClick}>
                <FaRegUserCircle /> ACCOUNT

                {isDropdownVisible && (
                  <div className="accountDropdown">
                    <ul>
                      <li>
                        <Link to="/edit" className='passBlue'>Orders</Link>
                      </li>
                      <li>
                        <button onClick={handleLogOut} className='passBlue'>Log Out</button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link className="blueLink" to="/account">
              <FaRegUserCircle /> ACCOUNT
            </Link>
          )}
        </div>

        <div className="cart">
          <Link className="blueLink" onClick={toggleCart}>
            <FaShoppingCart /> CART
          </Link>
        </div>

        {isCartOpen && (
          <>
            <div className="modalBackground" onClick={closeCart}></div>
            <div className="cartDrop">
              <h5>Your cart contains item</h5>
              <div className="content">
                <div className="checkout">
                  <h5 className="subtotal">
                    Order subtotal <strong>Price</strong>
                  </h5>
                  <div className="buttons">
                    <button onClick={handleViewEditCart}>
                      <Link to="/edit" className="blue">
                        View / Edit Cart
                      </Link>
                    </button>
                  </div>
                </div>
                <hr />
                <ul className="products">
                  <li>
                    <Link>
                      <img src={logo} alt="Product" />
                    </Link>
                    <div className="cnt">
                      <h3>Banana Split Ice Cream</h3>
                      <p>Count x Price</p>
                      <div className="options">
                        <p>Size: Bulk Bag</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="ice">
        <div className="left">
          <img src={iceLeft} alt="Ice" />
        </div>
        <div className="right">
          <img src={iceRight} alt="Ice" />
        </div>
      </div>

      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <ul>
            <li><Link className="whiteLink" to="/shop">SHOP</Link></li>
            <li><Link className="whiteLink" to="/flavors">FLAVORS</Link></li>
            <li><Link className="whiteLink" to="/location">LOCATIONS</Link></li>
            <li><Link className="whiteLink" to="/recipes">RECIPES</Link></li>
            <li><Link className="whiteLink" to="/events">EVENTS</Link></li>
            <li><Link className="whiteLink" to="/sell">SELL</Link></li>
            <li><Link className="whiteLink" to="/email-club">DOT CRAZY! EMAIL CLUB</Link></li>
          </ul>
          <div className="contact">
            <Link className="contactLink" to="/contact">CONTACT US</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
