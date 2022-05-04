import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "@Store/cart/cart-selector";

import { CartItem } from "@Components/cart";
import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessage,
  ButtonCheckout,
} from "./styles";

const CartDropdown = ({ ...otherProps }) => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer {...otherProps}>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>No Items</EmptyMessage>
        )}
      </CartItemsContainer>
      <ButtonCheckout onClick={goToCheckoutHandler}>Checkout</ButtonCheckout>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
