import { AnimatePresence } from "framer-motion";
import { CategoryItem } from "@Components/category";

import { CategoryContainer } from "./styles";

import category from "@Assets/data/category";

const CategoryHomeContainer = () => {
  return (
    <CategoryContainer>
      <AnimatePresence>
        {category.map(({ id, ...otherProps }) => (
          <CategoryItem key={id} {...otherProps} />
        ))}
      </AnimatePresence>
    </CategoryContainer>
  );
};

export default CategoryHomeContainer;
