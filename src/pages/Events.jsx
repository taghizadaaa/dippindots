import React from 'react'
import imgEvents from "../assets/Images/events/fe-community-events-sub-alt-1-.jpg"
import imgCatering from "../assets/Images/events/fe-food-truck-sub-alt.jpg"
import imgFestivals from "../assets/Images/events/sp-fundraising.jpg"
import imgTrucks from "../assets/Images/events/fe-food-truck.jpg"
import imgPrivate from "../assets/Images/events/private-20event-202.jpg"
import imgSchool from "../assets/Images/events/fe-schools.jpg"
import imgSport from "../assets/Images/events/fe-sports.jpg"

const cardsData = [
  { id: 1, title: "Community Events", img: imgEvents },
  { id: 2, title: "Corporate Catering", img: imgFestivals },
  { id: 3, title: "Fairs & Festival", img: imgCatering},
  { id: 4, title: "Food Trucks", img: imgTrucks},
  { id: 5, title: "Private Events", img: imgPrivate},
  { id: 6, title: "Schools", img: imgSchool},
  { id: 7, title: "Sporting Events", img: imgSport},

];

const Events = () => {
  return (
    <section className="events">
      <div className="container">
        <div className="items">
          <div className="top">
            <h1>Get Dippin' Dots for your Events!</h1>
            <p>We'll bring the fun to your next event, fair, or festival! From weddings to birthday parties and so much more, Dippin' Dots can make your next gathering an unforgettable one!</p>
          </div>
          <div className="cards">
            {cardsData.map(card => (
              <div key={card.id} className="card">
                <div className="img">
                  <img src={card.img} alt="img" className='hoverImg' />
                  <span className='imgBorder'></span>
                </div>
                <h2>{card.title}</h2>
                <div className="buttons">
                  <button
                    className="button"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
