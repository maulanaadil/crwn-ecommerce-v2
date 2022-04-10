import styled from "styled-components";
import PropTypes from "prop-types";

import ProductCard from "../product-card/product-card.component";

const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

const CategoryPreview = ({ title, product }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title>{title.toUpperCase()}</Title>
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
