import styled from "styled-components";
import Button from "@Components/button";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  button {
    float: right;
    margin-top: 40px;
  }

  @media screen and (max-width: 800px) {
    min-width: 300px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
