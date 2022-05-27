import styled from "styled-components";

const colorGray = "gray";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 300px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 800px) {
    button {
      padding: 0 15px;
    }
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const Description = styled.span`
  color: ${colorGray};
`;
