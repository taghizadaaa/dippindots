import React from 'react'
import { Link } from 'react-router'
import logo from "../assets/Images/logo-dippin-dots-official.png"
import iceLeft from "../assets/Images/ice-cap-left.svg";
import iceRight from "../assets/Images/ice-cap-right.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <header>
      <div className="top">
        <div className="account">
          <Link className='blueLink' to="/account"><FaRegUserCircle /> ACCOUNT</Link>
        </div>
        <div className="cart">
        <Link className='blueLink'><FaShoppingCart /> CART</Link>
        </div>
      </div>
      <div className="ice">
          <div className="left">
            <img src={iceLeft} alt="ice" />
          </div>
          <div className="right">
          <img src={iceRight} alt="ice" />
          </div>
        </div>
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
          <div className="contact"><Link className='contactLink' to="/contact">CONTACT US</Link></div>
        </nav>
      </div>
    </header>
  )
}

export default Header
