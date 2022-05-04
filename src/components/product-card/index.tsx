import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "@Store/cart/cart-action";
import { selectCartItems } from "@Store/cart/cart-selector";

import {
  ProductCardContainer,
  ProductImage,
  ProductCardFooter,
  ProductName,
  ProductPrice,
} from "./styles";
import Button from "@Components/button";
import { BUTTON_TYPE_CLASSES } from "@Components/button/types";
import { ProductCardProps } from "./types";

const ProductCard: FC<ProductCardProps> = ({ product, ...otherProps }) => {
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

export default ProductCard;
