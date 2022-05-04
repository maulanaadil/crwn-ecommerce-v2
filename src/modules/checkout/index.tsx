import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "@Store/cart/cart-selector";

import CheckoutItem from "@Components/checkout-item";
import { PaymentForm } from "./components";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalWrapper,
  Total,
  TextWarning,
} from "./styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalWrapper>
        <Total>Total: ${cartTotal}</Total>
      </TotalWrapper>
      <TextWarning>
        *Please us the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 05/22 - CVV: 123
      </TextWarning>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
