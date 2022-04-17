import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "components/button";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px auto;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  height: 20px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
`;

const NotFound = () => {
  const navigate = useNavigate();

  const goToHomepageHandler = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <Title>404</Title>
      <SubTitle>Not Found</SubTitle>
      <Button type="button" onClick={goToHomepageHandler}>
        Go To Homepage
      </Button>
    </NotFoundContainer>
  );
};

export default NotFound;
