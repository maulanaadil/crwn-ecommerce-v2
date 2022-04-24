import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "@Store/categories/categories.selector";

import Spinner from "@Components/spinner";
import ProductCard from "@Components/product-card";
import { PageTransition } from "@Animation";

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  padding: 0 80px;
`;

const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  padding: 0 80px;
  text-align: center;
`;

const Category = () => {
  const { category } = useParams(selectCategoriesMap);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <PageTransition>
        <Title>{category.toUpperCase()}</Title>
        {isLoading ? (
          <Spinner />
        ) : (
          <CategoryContainer>
            {products &&
              products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ delay: 0.2 * index }}
                />
              ))}
          </CategoryContainer>
        )}
      </PageTransition>
    </>
  );
};

export default Category;
