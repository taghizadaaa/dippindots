import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import iceLeft from "../assets/Images/ice-cap-left.svg";
import iceRight from "../assets/Images/ice-cap-right.svg";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaPinterest, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  
  const currentYear = new Date().getFullYear();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    
    console.log('Email subscribed:', email);

   
    setEmail(''); 
    navigate('/'); 
  };

  return (
    <footer>
      <div className="ice">
        <div className="left">
          <img src={iceLeft} alt="ice" />
        </div>
        <div className="right">
          <img src={iceRight} alt="ice" />
        </div>
      </div>
      <div className="footerItems">
        <div className="footerInfo">
          <div className="container">
            <div className="top">
              <ul>
                <span>Get Dippin' Dots</span>
                <li><Link className='grey' to="/shop">Products</Link></li>
                <li><Link className='grey' to="/location">Locations</Link></li>
                <li><Link className='grey' to="/shop">Return Policy</Link></li>
                <li><Link className='grey' to="/shop">Dot Crazy! Email Club</Link></li>
                <li><Link className='grey' to="/edit">Your Online Order</Link></li>
                <li><Link className='grey' to="/shop">Online Ordering Policy</Link></li>
              </ul>
              <ul>
                <span>Business Opportunities</span>
                <li>U.S. Franchising</li>
                <li>Food Services</li>
                <li>Dippin' Dots Distribution</li>
                <li>International</li>
                <li>Fundraising & Catering</li>
                <li><Link className='grey' to="/contact">Contact Us</Link></li>
              </ul>
              <ul>
                <span>About Dippin' Dots</span>
                <li>Company Overview</li>
                <li>History & Timeline</li>
                <li>Affiliations</li>
                <li>FAQ</li>
                <li>Employment</li>
                <li>Media Kit</li>
                <li>Quality & Social Responsibility</li>
                <li>Accessibility</li>
              </ul>
              <ul>
                <span>Our Brands</span>
                <li>Doc Popcorn</li>
              </ul>
            </div>
            <div className="links">
              <div className="items">
                <p>Follow us on social!</p>
                <div className="socials">
                  <span><Link className='white' to="https://www.facebook.com" target='blank'><FaFacebookF /></Link></span>
                  <span><Link className='white' to="https://www.instagram.com/" target='blank'><FaInstagram /></Link></span>
                  <span><Link className='white' to="https://x.com/" target='blank'><FaTwitter /></Link></span>
                  <span><Link className='white' to="https://www.tiktok.com/foryou?lang=en" target='blank'><FaTiktok /></Link></span>
                  <span><Link className='white' to="https://www.youtube.com/" target='blank'><FaYoutube /></Link></span>
                  <span><Link className='white' to="https://www.pinterest.com/" target='blank'><FaPinterest /></Link></span>
                  <span><Link className='white' to="https://az.linkedin.com/" target='blank'><FaLinkedin /></Link></span>
                </div>
              </div>
              <div className="copyright">
                © Copyright {currentYear}, Dippin’ Dots LLC. Use of this site constitutes acceptance of our <Link className='footerLink'>Terms of Use</Link> and <Link className='footerLink'>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="email">
          <div className="container">
            <div className="items">
              <h1>Dot Crazy! Email Club</h1>
              <p>Want to be up to date with our products, recipes, promos, and more? Sign up today!</p>
              <form onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address"
                  required
                />
                {error && <p className="error">{error}</p>}
                <div className="buttons">
                  <button className="button" type="submit">
                    SUBSCRIBE NOW
                  </button>
                  <span className="border"></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
