import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import { signUpStart } from "@Store/user/user.action";

import { SignUpContainer, Title, Description } from "./styles";
import { FormInput } from "@Components/form";
import Button from "@Components/button";

import { defaultFormFields } from "./utils";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const setResetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS)
        alert("Failed, Email already in use");
      else if ((error as AuthError).code === AuthErrorCodes.WEAK_PASSWORD)
        alert("Password should be at least 6 characters");
      else console.error(error);
    }
  };

  return (
    <SignUpContainer>
      <Title>Don&rsquo;t have an account? </Title>
      <Description>Sign up with your email and password</Description>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
