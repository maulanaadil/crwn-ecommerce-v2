import { useNavigate } from "react-router-dom";

import { PageTransition } from "@Animation";
import NoPage from "@Modules/no-page";

const NotFound = () => {
  const navigate = useNavigate();

  const goToHomepageHandler = () => {
    navigate("/");
  };

  return (
    <PageTransition>
      <NoPage
        title="404"
        subtitle="Not Found"
        onClickHandler={goToHomepageHandler}
      />
    </PageTransition>
  );
};

export default NotFound;
