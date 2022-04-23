import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { signUpStart } from "store/user/user.action";

import { FormInput } from "components/form";
import Button from "components/button";

const colorGray = "gray";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Description = styled.span`
  color: ${colorGray};
`;

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const setResetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      alert("SignUp successfully");
      setResetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Failed, Email already in use");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters");
      }
    }
  };

  return (
    <SignUpContainer>
      <Title>Don&rsquo;t have an account? </Title>
      <Description>Sign up with your email and password</Description>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            name: "displayName",
            onChange: handleChange,
            value: displayName,
            required: true,
          }}
        />
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

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            name: "confirmPassword",
            onChange: handleChange,
            value: confirmPassword,
            required: true,
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
