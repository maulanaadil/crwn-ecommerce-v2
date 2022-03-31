import styled from "styled-components";

import CategoryItem from "../category-item/category-item.component";

import category from "../../assets/data/category";

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const Category = () => (
  <CategoryContainer>
    {category.map(({ id, ...otherProps }) => (
      <CategoryItem key={id} {...otherProps} />
    ))}
  </CategoryContainer>
);

export default Category;
