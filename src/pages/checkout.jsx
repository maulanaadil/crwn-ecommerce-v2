import { useContext } from "react";

import { CartContext } from "../context/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
  return (
    <div>
      <h1>Checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(cartItem)}>&#x3c;</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>&#x3e;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
