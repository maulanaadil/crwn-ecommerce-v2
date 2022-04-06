import PropTypes from "prop-types";

import styled from "styled-components";

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
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
