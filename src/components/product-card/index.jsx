import styled from "styled-components";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { addItemToCart } from "store/cart/cart-action";
import { selectCartItems } from "store/cart/cart-selector";

import Button from "components/button";
import { BUTTON_TYPE_CLASSES } from "components/button/type";

const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

const ProductCardContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    ${ProductImage} {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const ProductCardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const ProductName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const ProductPrice = styled.span`
  width: 10%;
`;

const ProductCard = ({ product, ...otherProps }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { id, name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer {...otherProps}>
      <ProductImage src={imageUrl} alt={`img-${name}-${id}`} />
      <ProductCardFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
      </ProductCardFooter>
      <Button
        type="button"
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
  }),
};

export default ProductCard;
