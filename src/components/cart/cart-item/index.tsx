import { FC, memo } from "react";

import { CartItemProps } from "./types";

import {
  CartItemContainer,
  ImageItem,
  ItemDetailContainer,
  Name,
  Price,
} from "./styles";

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <CartItemContainer>
      <ImageItem src={imageUrl} alt={name} />
      <ItemDetailContainer>
        <Name>{name}</Name>
        <Price>
          {quantity} x <span>${price}</span>
        </Price>
      </ItemDetailContainer>
    </CartItemContainer>
  );
});

export default CartItem;
