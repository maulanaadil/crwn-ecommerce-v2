import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { checkUserSession } from "store/user/user.action";

import Navigation from "./components/navigation";
import Home from "./pages/homepage";
import Authentication from "./pages/authentication";
import Shop from "./pages/shop";
import Checkout from "./pages/checkout";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="auth" element={<Authentication />} />
        <Route exact path="shop/*" element={<Shop />} />
        <Route exact path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
