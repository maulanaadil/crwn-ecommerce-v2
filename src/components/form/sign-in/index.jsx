import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { googleSignInStart, emailSignInStart } from "store/user/user.action";

import { FormInput } from "components/form";
import Button from "components/button";
import { BUTTON_TYPE_CLASSES } from "components/button/type";

const colorGray = "gray";

const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
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
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

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
      dispatch(emailSignInStart(email, password));
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
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}>
            With Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
