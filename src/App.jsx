import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import LandingPage from "./pages/LandingPage";
import BlogPageWrapper from "./pages/Blogs";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

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
        <Route path="/about-me" element={<AboutMe theme={theme} />} />
        <Route path="/blogs" element={<BlogPageWrapper theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="/contact-me" element={<ContactMe theme={theme} />} />
        <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
      </Routes>
    </>
  );
};

export default App;
