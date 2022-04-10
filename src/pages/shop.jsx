import React, { useContext } from "react";
import styled from "styled-components";

import { CategoriesContext } from "../context/categories.context";

import CategoryPreview from "../components/category-preview/category-preview.component";

const ShopContainer = styled.div`
  padding: 0 80px;
`;

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <ShopContainer>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} product={products} />;
      })}
    </ShopContainer>
  );
};

export default Shop;
