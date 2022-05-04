import { FC } from "react";

import { CategoryPreviewContainer, Title, Preview } from "./styles";
import { CategoryPreviewProps } from "./types";

import ProductCard from "@Components/product-card";

const CategoryPreview: FC<CategoryPreviewProps> = ({
  title,
  product,
  ...otherProps
}) => {
  return (
    <CategoryPreviewContainer {...otherProps}>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {product
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
