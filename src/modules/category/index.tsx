import { useState, useEffect, FC } from "react";
import { useSelector } from "react-redux";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "@Store/categories/categories.selector";

import { CategoryRouteParams } from "./types";
import { CategoryItem } from "@Store/categories/categories.types";
import { CategoryContainer, Title } from "./styles";

import Spinner from "@Components/spinner";
import ProductCard from "@Components/product-card";

const Category: FC<CategoryRouteParams> = ({ category }) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product: CategoryItem, index: number) => (
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
    </>
  );
};

export default Category;
