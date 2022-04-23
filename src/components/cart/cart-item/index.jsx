import PropTypes from "prop-types";

import {
  CartItemContainer,
  ImageItem,
  ItemDetailContainer,
  Name,
  Price,
} from "./styles";

const CartItem = ({ cartItem }) => {
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
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
};

export default CartItem;
