import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectCategoriesMap } from "../store/categories/categories.selector";

import CategoryPreview from "../components/category-preview/category-preview.component";

const CategoriesPreviewContainer = styled.div`
  padding: 0 80px;
`;

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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
