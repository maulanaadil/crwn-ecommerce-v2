import PropTypes from "prop-types";

import { CategoryPreviewContainer, Title, Preview } from "./styles";
import ProductCard from "@Components/product-card";

const CategoryPreview = ({ title, product, ...otherProps }) => {
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

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  product: PropTypes.array.isRequired,
};

export default CategoryPreview;
