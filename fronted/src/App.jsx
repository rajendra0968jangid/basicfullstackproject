import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Components/Product";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
