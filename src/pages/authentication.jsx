import React from "react";
import styled from "styled-components";

import SignIn from "../components/sign-in/sign-in.component";
import SignUpForm from "../components/sign-up-form/sign-up-form.component";

const AuthenticationContainer = styled.div`
  width: 850px;
  display: flex;
  gap: 100px;
  justify-content: space-between;
  margin: 30px auto;
`;

const Authentication = () => (
  <AuthenticationContainer>
    <SignIn />
    <SignUpForm />
  </AuthenticationContainer>
);

export default Authentication;
