import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import styled from "styled-components";

import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 70px;
  right: 90px;
  z-index: 5;
`;

// eslint-disable-next-line no-unused-vars
const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonCheckout = styled(Button)`
  margin-top: auto;
`;

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItemsContainer>
      <ButtonCheckout type="">Checkout</ButtonCheckout>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
