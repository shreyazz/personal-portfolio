import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../styles/NavBar";

const NavBar = ({ theme, getThemeFunc }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <Nav theme={theme} showMenu={showMenu}>
        <div className="left-nav">
          <Link to={"/"}>Shreyas</Link>
        </div>
        <div className="right-nav">
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/about-me"}>About Me</Link>
          <Link to={"/contact-me"}>Contact Me</Link>
        </div>

        <div
          className="toggler"
          onClick={() => {
            setIsDark(!isDark);
            isDark ? getThemeFunc("dark") : getThemeFunc("light");
          }}
        >
          <div className={`${isDark ? "goRight" : ""} toggle-ball`}></div>
        </div>
        <div
          className={`${
            showMenu ? "close-ham-menu" : "open-ham-menu"
          } hamburger-menu`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>

        <div className={`${showMenu ? "open-menu" : ""} mobile-menu`}>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/about-me"}>About Me</Link>
          <Link to={"/contact-me"}>Contact Me</Link>
          <div
            className="toggler"
            onClick={() => {
              setIsDark(!isDark);
              isDark ? getThemeFunc("dark") : getThemeFunc("light");
            }}
          >
            <div className={`${isDark ? "goRight" : ""} toggle-ball`}></div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default NavBar;
