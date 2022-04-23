import { useDispatch, useSelector } from "react-redux";

import { selectIsCartOpen, selectCartCount } from "store/cart/cart-selector";
import { setIsCartOpen } from "store/cart/cart-action";

import { CartIconContainer, Icon, ItemCount } from "./styles";

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
