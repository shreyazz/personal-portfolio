import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const [theme, setTheme] = useState("dark");
  function getTheme(themeMode) {
    setTheme(themeMode);
  }
  return (
    <>
      <NavBar theme={theme} getThemeFunc={getTheme} />
      <Routes>
        <Route path="/" index element={<LandingPage theme={theme} />} />
        <Route path="/about-me" index element={<AboutMe theme={theme} />} />
        <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
      </Routes>
    </>
  );
};

export default App;
