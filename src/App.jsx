import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { checkUserSession } from "@Store/user/user.action";
import { selectCurrentUser } from "@Store/user/user.selector";

import Navigation from "@Components/navigation";
import Home from "@Pages/homepage";
import Authentication from "@Pages/authentication";
import Shop from "@Pages/shop";
import Checkout from "@Pages/checkout";
import NotFound from "@Pages/404";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="auth"
          element={currentUser ? <Navigate to="/" /> : <Authentication />}
        />
        <Route exact path="shop/*" element={<Shop />} />
        <Route exact path="checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
