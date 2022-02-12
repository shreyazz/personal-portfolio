import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
      </Routes>
    </>
  );
};

export default App;
