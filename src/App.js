import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import Home from "./pages/homepage";
import Authentication from "./pages/authentication";
import Shop from "./pages/shop";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="auth" element={<Authentication />} />
        <Route exact path="shop" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default App;
