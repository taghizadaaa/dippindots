import React from 'react'
import { Link } from 'react-router';
import iceLeft from "../assets/Images/ice-cap-left.svg";
import iceRight from "../assets/Images/ice-cap-right.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                <span>
                  Get Dippin' Dots
                </span>
                <li><Link className='grey' to="/shop">Products</Link></li>
                <li ><Link className='grey' to="/location">Locations</Link></li>
                <li>Return Policy</li>
                <li>Dot Crazy! Email Club</li>
                <li><Link className='grey' to="/edit">Your Online Order</Link></li>
                <li>Online Ordering Policy</li>
              </ul>
              <ul>
                <span>
                  Business Opportunities
                </span>
                <li>U.S. Franchising</li>
                <li>Food Services</li>
                <li>Dippin' Dots Distribution</li>
                <li>International</li>
                <li>Fundraising & Catering</li>
                <li><Link className='grey' to="/contact">Contact Us</Link></li>
              </ul>
              <ul>
                <span>
                  About Dippin' Dots
                </span>
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
                <span>
                  Our Brands
                </span>
                <li>Doc Popcorn</li>
              </ul>
            </div>
            <div className="links">
              <div className="items">
                <p>Follow us on social!</p>
                <div className="socials">
                  <span><Link className='white'><FaFacebookF /></Link></span>
                  <span><Link className='white'><FaInstagram /></Link></span>
                  <span><Link className='white'><FaTwitter /></Link></span>
                  <span><Link className='white'><FaTiktok /></Link></span>
                  <span><Link className='white'><FaYoutube /></Link></span>
                  <span><Link className='white'><FaPinterest /></Link></span>
                  <span><Link className='white'><FaLinkedin /></Link></span>
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
              <form>
                <input type="email" placeholder='Enter your email address' />
                <div className="buttons">
                  <button
                    className="button"
                  >
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
  )
}

export default Footer
