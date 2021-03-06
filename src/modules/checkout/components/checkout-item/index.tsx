import { FC, memo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "@Store/cart/cart-selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "@Store/cart/cart-action";

import {
  CheckoutItemContainer,
  Arrow,
  ImageContainer,
  Image,
  QuantityContainer,
  TextName,
  TextQuantity,
  TextPrice,
  RemoveButton,
} from "./styles";
import { CheckoutItemProps } from "./types";

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl, quantity } = cartItem;

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  const increaseItemHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));

  const decreaseItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const checkingQuantity = (quantity: number) => {
    if (quantity === 1) {
      return <Arrow style={{ color: "gray" }}>&#10094;</Arrow>;
    } else {
      return <Arrow onClick={decreaseItemHandler}>&#10094;</Arrow>;
    }
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} />
      </ImageContainer>
      <TextName>{name}</TextName>
      <QuantityContainer>
        {checkingQuantity(quantity)}
        <TextQuantity>{quantity}</TextQuantity>
        <Arrow onClick={increaseItemHandler}>&#10095;</Arrow>
      </QuantityContainer>
      <TextPrice>${price}</TextPrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
