import styled from "styled-components";

import DirectoryItem from "../category-item/directory-item.component";

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
      <DirectoryItem key={id} {...otherProps} />
    ))}
  </CategoryContainer>
);

export default Category;
