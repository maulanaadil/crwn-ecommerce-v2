import styled from "styled-components";

import Category from "../components/category/category.component";

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const Home = () => {
  return (
    <CategoriesContainer>
      <Category />
    </CategoriesContainer>
  );
};

export default Home;
