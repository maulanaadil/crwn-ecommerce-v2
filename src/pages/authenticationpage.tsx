import Authentication from "@Modules/authentication";
import { PageTransition } from "@Animation";

const AuthenticationPage = () => (
  <PageTransition>
    <Authentication />
  </PageTransition>
);

export default AuthenticationPage;
