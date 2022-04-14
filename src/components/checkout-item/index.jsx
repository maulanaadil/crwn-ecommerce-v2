import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "store/cart/cart-selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "store/cart/cart-action";

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: `item ${props.name}`,
}))`
  width: 100%;
  height: 100%;
`;

const textStyle = css`
  width: 23%;
`;

const TextName = styled.span`
  ${textStyle}
`;

const QuantityContainer = styled.span`
  ${textStyle}
  display: flex;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const TextQuantity = styled.span`
  margin: 0 10px;
`;

const TextPrice = styled.span`
  ${textStyle}
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl, quantity } = cartItem;

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  const increaseItemHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));

  const decreaseItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const checkingQuantity = (quantity) => {
    if (quantity === 1) {
      return (
        <Arrow style={{ color: "gray" }} onClick={decreaseItemHandler}>
          &#10094;
        </Arrow>
      );
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
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
};

export default CheckoutItem;
