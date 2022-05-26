import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { checkUserSession, setAppStart } from "@Store/user/user.action";
import { selectCurrentUser, selectIsLoading } from "@Store/user/user.selector";

import Navigation from "@Components/navigation";
import Overlay from "@Modules/overlay";

import HomePage from "@Pages/home-page";
import AuthenticationPage from "@Pages/authentication-page";
import Shop from "@Pages/shop-page";
import CheckoutPage from "@Pages/checkout-page";
import NotFound from "@Pages/404-page";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isAppStart = useSelector(selectIsLoading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAppStart());
    }, 3000);

    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      {isAppStart ? (
        <Overlay />
      ) : (
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="auth"
              element={
                currentUser ? <Navigate to="/" /> : <AuthenticationPage />
              }
            />
            <Route path="shop/*" element={<Shop />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
