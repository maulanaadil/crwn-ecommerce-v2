import styled from "styled-components";

const colorGray = "gray";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const Description = styled.span`
  color: ${colorGray};
`;
