import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import { CategoryItem } from "components/category";

import category from "assets/data/category";

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const Category = () => (
  <CategoryContainer>
    <AnimatePresence>
      {category.map(({ id, ...otherProps }) => (
        <CategoryItem key={id} {...otherProps} />
      ))}
    </AnimatePresence>
  </CategoryContainer>
);

export default Category;
