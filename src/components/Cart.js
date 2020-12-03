import React from "react";
import Fade from "react-reveal/Fade";

function Cart({ cartItems, removeFromCart }) {
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is Empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} items in your cart
        </div>
      )}
      <div className="cart">
        <Fade left cascade>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-title">{item.title}</div>
                <span>
                  €{item.price}x{item.count}
                </span>
                <button
                  onClick={() => {
                    removeFromCart(item);
                  }}
                  className="cart-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </Fade>
      </div>
      {cartItems.length !== 0 && (
        <div className="cart">
          <div className="total">
            <div>
              Total: € {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
            </div>
            <button className="button primary">Proceed </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
