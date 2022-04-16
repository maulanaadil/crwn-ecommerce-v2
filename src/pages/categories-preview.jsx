import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "store/categories/categories.selector";

import Spinner from "components/spinner";
import { CategoryPreview } from "components/category";

const CategoriesPreviewContainer = styled.div`
  padding: 0 80px;
`;

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoriesPreviewContainer>
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} product={products} />
            );
          })}
        </CategoriesPreviewContainer>
      )}
    </>
  );
};

export default CategoriesPreview;
