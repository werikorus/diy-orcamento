import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" exact element={<h1>SORRY, PAGE NOT FOUND!</h1>} />
      </Routes>
    </Router>
  );
}

export default Rotas;