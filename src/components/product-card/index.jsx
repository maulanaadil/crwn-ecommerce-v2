import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "store/cart/cart-action";
import { selectCartItems } from "store/cart/cart-selector";

import {
  ProductCardContainer,
  ProductImage,
  ProductCardFooter,
  ProductName,
  ProductPrice,
} from "./styles";
import Button from "components/button";
import { BUTTON_TYPE_CLASSES } from "components/button/type";

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
      <ProductButton
        type="button"
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}>
        Add to cart
      </ProductButton>
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
