import PropTypes from "prop-types";

import styled from "styled-components";

const CartItemContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  margin-bottom: 15px;
`;

const ImageItem = styled.img`
  width: 30%;
`;

const ItemDetailContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const Name = styled.span`
  font-size: 16px;
`;

const Price = styled.span`
  font-size: 14px;

  span {
    color: green;
  }
`;

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
  cartItem: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
};

export default CartItem;
