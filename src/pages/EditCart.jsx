import React, { useState } from 'react';

const EditCart = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 10, quantity: 1 },
        { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    ]);

    const increment = (id) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
    };

    const decrement = (id) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };

    const removeProduct = (id) => {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== id)
        );
    };

    const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

    return (
        <section className="editCart">
            <div className="container">
                <div className="items">
                    <div className="yourCart">
                        <h1>Your Cart</h1>
                        {products.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th className='middle'>Price</th>
                                        <th className='middle'>Qty</th>
                                        <th className='end'>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.name}</td>
                                            <td className='middle'>${product.price.toFixed(2)}/each</td>
                                            <td className='middle quantityButton'>
                                                <div className="quantityControl">
                                                    <button onClick={() => decrement(product.id)}>-</button>
                                                    <span>{product.quantity}</span>
                                                    <button onClick={() => increment(product.id)} className='reverse'>+</button>
                                                </div>
                                            </td>
                                            <td className='remove end'>
                                                ${(product.price * product.quantity).toFixed(2)}
                                                <button className='cartRemove' onClick={() => removeProduct(product.id)}>Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </div>
                    {products.length > 0 && (
                        <div className="total">
                            <h2>Total:  ${total.toFixed(2)}</h2>
                            <div className="buttons">
                                <button type="submit" className="button">
                                    PROCEED TO CHECKOUT
                                </button>
                                <span className="border"></span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EditCart;
