import styled from "styled-components";

import { Category } from "components/category";
import { PageTransition } from "animation";

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const Home = () => {
  return (
    <PageTransition>
      <CategoriesContainer>
        <Category />
      </CategoriesContainer>
    </PageTransition>
  );
};

export default Home;
