import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  width: 850px;
  display: flex;
  gap: 100px;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    width: auto;
    gap: 80px;
    flex-direction: column;
    justify-content: center;
  }
`;
