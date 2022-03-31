import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
