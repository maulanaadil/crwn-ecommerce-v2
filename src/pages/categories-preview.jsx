import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getCategoriesAndDocuments } from "../utils/firebase.utils";

import { setCategoriesMap } from "../store/categories/categories-action";
import { selectCategoriesMap } from "../store/categories/categories.selector";

import CategoryPreview from "../components/category-preview/category-preview.component";

const CategoriesPreviewContainer = styled.div`
  padding: 0 80px;
`;

const CategoriesPreview = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

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
