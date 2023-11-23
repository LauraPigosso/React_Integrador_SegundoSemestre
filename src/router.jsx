import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/About";

const AppRouter = () => {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<Home/>} />

        <Route path="/sobre-nos" element={<About/>} />
      </Routes>
    </main>
  );
};

export default AppRouter;
