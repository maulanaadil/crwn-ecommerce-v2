import { useContext } from "react";
import styled from "styled-components";

import { ProductsContext } from "../context/product.context";

import ProductCard from "../components/product-card/product-card.component";

const ShopContainer = styled.div`
  padding: 0 80px;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`;

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <ShopContainer>
      <h1>Shop Page</h1>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </ShopContainer>
  );
};

export default Shop;
