import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styled from "styled-components";

import Button from "components/button";

const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  button {
    float: right;
    margin-top: 40px;
  }
`;

const Title = styled.h2``;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <Title>Credit Card Payment: </Title>
        <CardElement />
        <Button type="submit">Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
