import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { selectCategoriesMap } from "../store/categories/categories.selector";

import ProductCard from "../components/product-card/product-card.component";

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

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
