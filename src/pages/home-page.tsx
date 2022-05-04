import Home from "@Modules/home";
import { PageTransition } from "@Animation";

const HomePage = () => {
  return (
    <PageTransition>
      <Home />
    </PageTransition>
  );
};

export default HomePage;
