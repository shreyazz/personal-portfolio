import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <NavBar theme={theme} />
      <Routes>
        <Route path="/" index element={<LandingPage theme={theme} />} />
        <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
      </Routes>
      <div className="toggler">
        <div className="toggleLight" onClick={() => setTheme("light")}>
          Light
        </div>
        <div className="toggleDark" onClick={() => setTheme("dark")}>
          Dark
        </div>
      </div>
    </>
  );
};

export default App;
