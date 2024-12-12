import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import one from "../assets/Images/candy-cane-hpc.webp";
import two from "../assets/Images/cookie-monster-hpc3.webp";
import three from "../assets/Images/happy-holidays-hpc.webp";
import four from "../assets/Images/winter-2019-recipe-hpc.webp";
import five from "../assets/Images/winter.webp";
import infoImg from "../assets/Images/shipping-inclement-weather.webp"
import lctnImg from "../assets/Images/Storefront-graphic.webp"
import leftImgOne from '../assets/Images/dippin-dots-in-cup.webp'
import leftImgTwo from "../assets/Images/nyc-store.webp"
import business from "../assets/Images/business-circle.webp"
import rightImgOne from "../assets/Images/colorful-cups.webp"
import rightImgTwo from "../assets/Images/kiosk.webp"
import dsrtImgLeft from "../assets/Images/cookies-for-santa.webp"
import dsrtImgright from "../assets/Images/hpc.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });

    AOS.refresh();
  }, []);
  return (
    <section className="main">
      <section className="home">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide className='one' >
            <div className="background">
              <img src={one} alt="img" className='slideImg' />
            </div>
            <div className="items" data-aos="fade-up">
              <h1>For Your Holiday Enjoy-mint</h1>
              <p>Candy Cane is a festive mix of red and green peppermint ice creams,  swirled together with cool Vanilla ice cream! </p>
              <button className='button'>LEARN MORE</button>
              <span className='border'></span>
            </div>
          </SwiperSlide>
          <SwiperSlide className='two'>
            <div className="background">
              <img src={two} alt="img" className='slideImg' />
            </div>
            <div className="items">
              <h1>For Your Holiday Enjoy-mint</h1>
              <p>Candy Cane is a festive mix of red and green peppermint ice creams,  swirled together with cool Vanilla ice cream! </p>
              <button className='button'>LEARN MORE</button>
              <span className='border'></span>
            </div>
          </SwiperSlide>
          <SwiperSlide className='three'>
            <div className="background">
              <img src={three} alt="img" className='slideImg' />
            </div>
            <div className="items">
              <h1>For Your Holiday Enjoy-mint</h1>
              <p>Candy Cane is a festive mix of red and green peppermint ice creams,  swirled together with cool Vanilla ice cream! </p>
              <button className='button'>LEARN MORE</button>
              <span className='border'></span>
            </div>
          </SwiperSlide>
          <SwiperSlide className='four'>
            <div className="background">
              <img src={four} alt="img" className='slideImg' />
            </div>
            <div className="items">
              <h1>For Your Holiday Enjoy-mint</h1>
              <p>Candy Cane is a festive mix of red and green peppermint ice creams,  swirled together with cool Vanilla ice cream! </p>
              <button className='button'>LEARN MORE</button>
              <span className='border'></span>
            </div>
          </SwiperSlide>
          <SwiperSlide className='five'>
            <div className="background">
              <img src={five} alt="img" className='slideImg' />
            </div>
            <div className="items">
              <h1>Find a Location Near You!</h1>
              <p>Candy Cane is a festive mix of red and green peppermint ice creams,  swirled together with cool Vanilla ice cream! </p>
              <button className='button'>LEARN MORE</button>
              <span className='border'></span>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className='info'>
        <div className="container">
          <div className="infoItems">
            <div className="img">
              <img src={infoImg} alt="" />
            </div>
            <div className="content">
              <h2>Holiday Shipping Info</h2>
              <p>
                Looking to order Dippin’ Dots this holiday season? </p>
              <p>You have excellent taste! </p>
              <p>

                Of course, we want to ensure your Dippin’ Dots arrive to their destination in the same perfectly delicious condition as when they left our freezer, so for the holiday season,
                all orders will ship             <b>overnight delivery only</b>.</p>

              <p>This time of year, many packages are delayed by carriers due to shipping volumes, bad weather, North Pole customs, etc.
                While a slight delay in deliveries is normally okay, that’s not the case when it comes to ice cream, because...well, it melts. And that’s no fun at all! </p>
              <p>
                Standard shipping options will return in January, after the rush of the holiday season is over.
              </p>
              <div className="buttons">
                <button
                  className="button"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Link className={isHovered ? "classBlue" : "whiteLink"} to="/shop">
                    SHOP NOW
                  </Link>
                </button>
                <span className="border"></span>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="location">
        <div className="container">
          <div className="items">
            <div className="info">
              <div className="item">
                <h1>Find Dippin’ Dots Near You!</h1>
                <p>Did you know there's Dippin’ Dots stores and shopping center locations all across the U.S.? Use our locator to find one near you!</p>
                <div className="buttons">
                  <button
                    className="button"
                  >
                    FIND A LOCATION
                  </button>
                  <span className="border"></span>
                </div>
              </div>
            </div>
            <div className="img">
              <img src={lctnImg} alt="Location" />
            </div>
          </div>
        </div>
      </section>
      <section className="opportunities">
        <div className="container">
          <div className="items">
            <div className="leftCards">
              <img src={leftImgTwo} alt="img" />
              <img src={leftImgOne} alt="img" className='short' />
            </div>
            <div className="middleCards">
              <div className="item">
                <div className="img">
                  <img src={business} alt="img" />
                </div>
                <div className="content">
                  <h1>Business Opportunities</h1>
                  <p>Bring the fun closer to the neighborhood and be part of the amazing Dippin' Dots team.</p>
                  <p>Franchising · Food Service · Distribution · Catering/Fundraising · International</p>
                  <div className="buttons">
                    <button
                      className="button"
                    >
                      OPPORTUNITIES
                    </button>
                    <span className="border"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightCards">
              <img src={rightImgOne} alt="img" />
              <img src={rightImgTwo} alt="img" />
            </div>
          </div>
        </div>
      </section>
      <section className="desserts">
        <div className="container">
          <h1>Dippin' Dots Desserts</h1>
          <div className="items">
            <div className="left">
              <div className="img">
                <img src={dsrtImgLeft} alt="img" className='hoverImg' />
                <span className='imgBorder'></span>
              </div>
              <h2>Cookies for Santa</h2>
              <p>Definitely on nice list this year!</p>
              <div className="buttons">
                <button
                  className="button"
                >
                  SEE RECIPE
                </button>
                <span className="border"></span>
              </div>
            </div>
            <div className="right">
              <div className="img">
                <img src={dsrtImgright} alt="img" className='hoverImg' />
                <span className='imgBorder'></span>
              </div>
              <h2>Snowball Punch</h2>
              <p>There's snow-thing like Snowball Punch!</p>
              <div className="buttons">
                <button
                  className="button"
                >
                  SEE RECIPE
                </button>
                <span className="border"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home
