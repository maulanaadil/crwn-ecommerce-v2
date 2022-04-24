import { AnimatePresence } from "framer-motion";

import category from "@Assets/data/category";

import { CategoryItem } from "@Components/category";
import { CategoryContainer } from "./styles";

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
