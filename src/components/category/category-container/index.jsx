import { AnimatePresence } from "framer-motion";

import category from "assets/data/category";

import { CategoryItem } from "components/category";
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
