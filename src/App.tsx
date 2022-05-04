import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { checkUserSession } from "@Store/user/user.action";
import { selectCurrentUser } from "@Store/user/user.selector";

import Navigation from "@Components/navigation";
import Home from "@Pages/homepage";
import AuthenticationPage from "@Pages/authenticationpage";
import Shop from "@Pages/shoppage";
import Checkout from "@Pages/checkoutpage";
import NotFound from "@Pages/404page";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="auth"
          element={currentUser ? <Navigate to="/" /> : <AuthenticationPage />}
        />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
