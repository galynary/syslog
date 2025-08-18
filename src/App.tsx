import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
//import About from "./pages/About";

export const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
