import styled from "styled-components";

const colorGray = "gray";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;

  @media screen and (max-width: 800px) {
    width: 300px;
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const Description = styled.span`
  color: ${colorGray};
`;
