import React, { useState } from 'react';
import Img from "../assets/Images/happy-holidays-hpc.webp";
import { Link } from 'react-router';

const CardInfo = () => {
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState('');



    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleSelect = (type) => {
        setSelected(type);
    };

    return (
        <section className="cardInfo">
            <div className="container">
                <div className="items">
                    <div className="productImg">
                        <img src={Img} alt="Product Img" />
                    </div>
                    <div className="productInfo">
                        <div className="item">
                            <h1>product name</h1>
                            <p className='text'>Ok, so we're a little bananas.  Maybe it's the Vanilla, Chocolate, Strawberry and Banana blend in our Banana Split Ice Cream.  Or maybe it's our colorful personality.</p>
                            <p className='price'>$product price <span>/ Bulk Bag</span></p>
                            <p className='size'>Size: <span>Required</span></p>
                            <div className="cardButton">
                                <button
                                    className={selected === 'bulk' ? 'selected' : ''}
                                    onClick={() => handleSelect('bulk')}
                                >
                                    BULK BAG
                                </button>
                                <button
                                    className={selected === 'single' ? 'selected' : ''}
                                    onClick={() => handleSelect('single')}
                                >
                                    SINGLE-SERVING
                                </button>
                            </div>
                            <span className='qnty'>
                                Quantity:
                            </span>
                            <div className="quantityControl">
                                <button onClick={decrement}>-</button>
                                <span>{quantity}</span>
                                <button onClick={increment} className='reverse'>+</button>
                            </div>
                            <div className="buttons">
                                <button type="submit" className="button">
                                    <Link className='white' to="/edit">ADD TO CART</Link>
                                    
                                </button>
                                <span className="border"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardInfo;
