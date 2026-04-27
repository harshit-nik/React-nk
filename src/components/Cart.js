import { useContext } from "react";
import { CartContext } from "./utils/CartContext";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="cart">
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>
                {item.name} - ₹{item.price} × {item.quantity}
              </p>

              <div>
                <button onClick={() => decreaseQuantity(item.id)}>➖</button>

                <span style={{ margin: "0 10px" }}>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>➕</button>
              </div>

              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;