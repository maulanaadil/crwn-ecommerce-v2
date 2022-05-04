import { useSelector } from "react-redux";

import { selectCategoriesMap } from "@Store/categories/categories.selector";

import { CategoryPreview } from "./components";
import { CategoriesPreviewContainer } from "./styles";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
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
  );
};

export default CategoriesPreview;
