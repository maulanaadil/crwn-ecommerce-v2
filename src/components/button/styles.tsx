import styled from "styled-components";

import { SpinnerContainer } from "@Components/spinner/styles";

const primaryColorBlue = "#4285f4";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-family: "Inter";
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border: none;
  font-weight: 400;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: ${primaryColorBlue};
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: ${primaryColorBlue};
    border: 1px solid ${primaryColorBlue};
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: black;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
