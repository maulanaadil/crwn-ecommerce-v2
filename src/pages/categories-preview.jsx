import React, { useContext } from "react";
import styled from "styled-components";

import { CategoriesContext } from "../context/categories.context";

import CategoryPreview from "../components/category-preview/category-preview.component";

const CategoriesPreviewContainer = styled.div`
  padding: 0 80px;
`;

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <CategoriesPreviewContainer>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} product={products} />;
      })}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
