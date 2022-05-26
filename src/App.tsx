import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { checkUserSession, setAppStart } from "@Store/user/user.action";
import { selectCurrentUser, selectIsLoading } from "@Store/user/user.selector";

import Navigation from "@Components/navigation";
import Overlay from "@Modules/overlay";
import Spinner from "@Components/spinner";

const HomePage = lazy(() => import("@Pages/home-page"));
const AuthenticationPage = lazy(() => import("@Pages/authentication-page"));
const Shop = lazy(() => import("@Pages/shop-page"));
const CheckoutPage = lazy(() => import("@Pages/checkout-page"));
const NotFoundPage = lazy(() => import("@Pages/404-page"));

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
    <Suspense fallback={<Spinner />}>
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      )}
    </Suspense>
  );
};

export default App;
