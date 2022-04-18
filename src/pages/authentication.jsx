import React from "react";
import styled from "styled-components";

import { SignIn, SignUpForm } from "components/form";
import { PageTransition } from "animation";

const AuthenticationContainer = styled.div`
  width: 850px;
  display: flex;
  gap: 100px;
  justify-content: space-between;
  margin: 30px auto;
`;

const Authentication = () => (
  <PageTransition>
    <AuthenticationContainer>
      <SignIn />
      <SignUpForm />
    </AuthenticationContainer>
  </PageTransition>
);

export default Authentication;
