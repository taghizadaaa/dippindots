import React from 'react'
import { Link } from 'react-router'
import salam from "../assets/Images/cookies-for-santa.webp"

const ShopProducts = () => {


    return (
        <div className="card">
            <div className="items">
                <div className="cardImg">
                    <img src={salam} alt="img" />
                </div>
                <p>dsafafa</p>
                <div className="buttons">
                    <button
                        className="button"
                    >
                        <Link className='white'>WIEW FLAVOR</Link>
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default ShopProducts
