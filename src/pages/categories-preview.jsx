import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "store/categories/categories.selector";

import Spinner from "components/spinner";
import { CategoryPreview } from "components/category";
import { PageTransition } from "animation";

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
        <PageTransition>
          <CategoriesPreviewContainer>
            {Object.keys(categoriesMap).map((title, index) => {
              const products = categoriesMap[title];
              return (
                <CategoryPreview
                  key={title}
                  title={title}
                  product={products}
                  initial={{ y: 300, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: -300, opacity: 0 }}
                  transition={{ delay: 0.2 * index }}
                />
              );
            })}
          </CategoriesPreviewContainer>
        </PageTransition>
      )}
    </>
  );
};

export default CategoriesPreview;
