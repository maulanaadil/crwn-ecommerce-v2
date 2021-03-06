import { FormEvent, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { StripeCardElement } from "@stripe/stripe-js";

import { selectCurrentUser } from "@Store/user/user.selector";
import { selectCartTotal, selectCartItems } from "@Store/cart/cart-selector";
import { setClearItemFromCartAfterPayment } from "@Store/cart/cart-action";

import Button from "@Components/button";

import {
  PaymentFormContainer,
  FormContainer,
  Title,
  PaymentButton,
} from "./styles";
import { BUTTON_TYPE_CLASSES } from "@Components/button/types";

const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const cartItems = useSelector(selectCartItems);
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const setRemoveCheckoutItem = () => {
    dispatch(setClearItemFromCartAfterPayment(cartItems));
  };

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payments-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        console.error(res.status);
      }
    });

    const clientSecret = response.paymentIntent.client_secret;

    const cardDetail = elements.getElement(CardElement);

    if (!ifValidCardElement(cardDetail)) return;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetail,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
        setRemoveCheckoutItem();
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <Title>Credit Card Payment: </Title>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          type="submit">
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
