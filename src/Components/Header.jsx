import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle, FaShoppingCart, FaBars } from 'react-icons/fa';
import logo from '../assets/Images/logo-dippin-dots-official.png';
import iceLeft from '../assets/Images/ice-cap-left.svg';
import iceRight from '../assets/Images/ice-cap-right.svg';

const Header = ({ cart, clearCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    clearCart();
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

  const uniqueCartItems = cart.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  );

  const toggleBurgerMenu = () => {
    setIsBurgerMenuActive(!isBurgerMenuActive);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuActive(false);
  };

  return (
    <header>
      <div className="top">
        <div className="burgerMenu">
          <button onClick={toggleBurgerMenu}><FaBars /></button>
          <div className={`leftDiv ${isBurgerMenuActive ? 'active' : ''}`}>
            <ul>
              <li>
                <Link className="whiteLink" to="/shop" onClick={closeBurgerMenu}>
                  SHOP
                </Link>
              </li>
              <li>
                <Link className="whiteLink" to="/shop" onClick={closeBurgerMenu}>
                  FLAVORS
                </Link>
              </li>
              <li>
                <Link className="whiteLink" to="/location" onClick={closeBurgerMenu}>
                  LOCATIONS
                </Link>
              </li>
              <li>
                <Link className="whiteLink" to="/shop" onClick={closeBurgerMenu}>
                  RECIPES
                </Link>
              </li>
              <li>
                <Link className="whiteLink" to="/events" onClick={closeBurgerMenu}>
                  EVENTS
                </Link>
              </li>
              <li>
                <Link className="whiteLink" to="/shop" onClick={closeBurgerMenu}>
                  SELL
                </Link>
              </li>
              <li>
                <Link className="whiteLink" to="/shop" onClick={closeBurgerMenu}>
                  DOT CRAZY! EMAIL CLUB
                </Link>
              </li>
            </ul>
            <div className="contact">
              <Link className="contactLink" to="/contact" onClick={closeBurgerMenu}>
                CONTACT US
              </Link>
            </div>
            <div
              className="account"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
              style={{ position: 'relative' }}
            >
              {isLoggedIn ? (
                <div className="accountWrapper">
                  <div className="blueLink accountHover" onClick={handleAccountClick}>
                    <span className='accountLogo'><FaRegUserCircle /></span> ACCOUNT
                    {isDropdownVisible && (
                      <div className="accountDropdown">
                        <ul>
                          <li>
                            <Link to="/edit" className="passBlue">
                              Orders
                            </Link>
                          </li>
                          <li>
                            <button onClick={handleLogOut} className="passBlue">
                              Log Out
                            </button>
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
          </div>
        </div>
        <div
          className="account"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
          style={{ position: 'relative' }}
        >
          {isLoggedIn ? (
            <div className="accountWrapper">
              <div className="blueLink accountHover" onClick={handleAccountClick}>
                <FaRegUserCircle /> ACCOUNT
                {isDropdownVisible && (
                  <div className="accountDropdown">
                    <ul>
                      <li>
                        <Link to="/edit" className="passBlue">
                          Orders
                        </Link>
                      </li>
                      <li>
                        <button onClick={handleLogOut} className="passBlue">
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link className="blueLink" to="/account">
              <span className='accountLogo'><FaRegUserCircle /></span> ACCOUNT
            </Link>
          )}
        </div>
        <div className="cart">
          <button className="button" onClick={toggleCart}>
            <span className='cartLogo'><FaShoppingCart /></span> CART
            {uniqueCartItems.length > 0 && (
              <span className="quantityBadge">{uniqueCartItems.length}</span>
            )}
          </button>
        </div>

        {isCartOpen && (
          <>
            <div className="modalBackground" onClick={closeCart}></div>
            <div className="cartDrop">
              <h5>Your cart contains {uniqueCartItems.length} item(s)</h5>
              <div className="content">
                <div className="checkout">
                  <h5 className="subtotal">
                    Order subtotal:{" "}
                    <strong>
                      $
                      {uniqueCartItems
                        .reduce((acc, product) => acc + (parseFloat(product.price) || 0) * product.quantity, 0)
                        .toFixed(2)}
                    </strong>
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
                  {uniqueCartItems.map((product, index) => (
                    <li key={index}>
                      <img
                        src={`http://localhost:8080/${product.productImage}`}
                        alt={product.name}
                      />
                      <div className="cnt">
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Size: {product.size || "Bulk Bag"}</p>
                      </div>
                    </li>
                  ))}
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
            <li>
              <Link className="whiteLink" to="/shop">
                SHOP
              </Link>
            </li>
            <li>
              <Link className="whiteLink" to="/shop" >
                FLAVORS
              </Link>
            </li>
            <li>
              <Link className="whiteLink" to="/location">
                LOCATIONS
              </Link>
            </li>
            <li>
              <Link className="whiteLink" to="/shop">
                RECIPES
              </Link>
            </li>
            <li>
              <Link className="whiteLink" to="/events">
                EVENTS
              </Link>
            </li>
            <li>
              <Link className="whiteLink" to="/shop">
                SELL
              </Link>
            </li>
            <li>
              <Link className="whiteLink" to="/shop">
                DOT CRAZY! EMAIL CLUB
              </Link>
            </li>
          </ul>
          <div className="contact">
            <Link className="contactLink" to="/contact">
              CONTACT US
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
