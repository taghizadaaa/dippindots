import React from "react";

const EditCart = ({ cart, updateCartItem, removeFromCart }) => {
  const uniqueCartItems = cart.filter((value, index, self) =>
    index === self.findIndex((t) => t.id === value.id)
  );

  const total = uniqueCartItems.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * item.quantity,
    0
  );

  return (
    <section className="editCart">
      <div className="container">
        <div className="items">
          <div className="yourCart">
            <h1>Your Cart</h1>
            {uniqueCartItems.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th className="middle">Price</th>
                    <th className="middle">Qty</th>
                    <th className="end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {uniqueCartItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td className="middle">
                        ${Number(item.price || 0).toFixed(2)}/each
                      </td>
                      <td className="middle quantityButton">
                        <div className="quantityControl">
                          <button onClick={() => updateCartItem(item.id, "decrement")}>
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => updateCartItem(item.id, "increment")}
                            className="reverse"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="remove end">
                        ${((Number(item.price) || 0) * item.quantity).toFixed(2)}
                        <button
                          className="cartRemove"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          {uniqueCartItems.length > 0 && (
            <div className="total">
              <h2>Total: ${total.toFixed(2)}</h2>
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
