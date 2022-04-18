import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { checkUserSession } from "store/user/user.action";
import { selectCurrentUser } from "store/user/user.selector";

import Navigation from "./components/navigation";
import Home from "./pages/homepage";
import Authentication from "./pages/authentication";
import Shop from "./pages/shop";
import Checkout from "./pages/checkout";
import NotFound from "./pages/404";

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
