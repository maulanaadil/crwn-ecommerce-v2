import { getRedirectResult } from "firebase/auth";
import { useState, useEffect } from "react";
import styled from "styled-components";

import FormInput from "../form-input/form-input.component";

import {
  auth,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import Button from "../button/button.component";

const colorGray = "gray";

const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Description = styled.span`
  color: ${colorGray};
`;

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      await createUserDocumentFromAuth(response.user);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Account not found!");
          break;
        case "auth/wrong-password":
          alert("Invalid password!");
          break;
        default:
          console.error(error.message);
      }
    }
  };

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <Description>Sign in with your email and password</Description>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            name: "email",
            onChange: handleChange,
            value: email,
            required: true,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            name: "password",
            onChange: handleChange,
            value: password,
            required: true,
          }}
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" isGoogleSign onClick={signInWithGoogleRedirect}>
            With Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
