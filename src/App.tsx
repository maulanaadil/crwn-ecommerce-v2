import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { checkUserSession } from "@Store/user/user.action";
import { selectCurrentUser } from "@Store/user/user.selector";

import Navigation from "@Components/navigation";
import Home from "@Pages/home-page";
import AuthenticationPage from "@Pages/authentication-page";
import Shop from "@Pages/shop-page";
import Checkout from "@Pages/checkout-page";
import NotFound from "@Pages/404-page";

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
