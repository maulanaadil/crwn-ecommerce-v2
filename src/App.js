import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navigation from "./components/navigation/navigation.component";
import Home from "./pages/homepage";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
