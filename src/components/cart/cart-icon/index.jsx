import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { selectIsCartOpen, selectCartCount } from "store/cart/cart-selector";
import { setIsCartOpen } from "store/cart/cart-action";

import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";

const CartIconContainer = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Icon = styled(ShoppingIcon)`
  width: 28px;
  height: 28px;
`;

const ItemCount = styled.span`
  position: absolute;
  bottom: 12px;
  font-size: 12px;
  font-weight: normal;
`;

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toogleIsOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toogleIsOpen}>
      <Icon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
