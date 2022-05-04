import { SignInForm, SignUpForm } from "./components";

import { AuthenticationContainer } from "./styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
