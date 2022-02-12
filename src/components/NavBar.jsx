import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../styles/NavBar";

const NavBar = ({ theme }) => {
  return (
    <>
      <Nav theme={"dark"}>
        <div className="left-nav">
          <Link to={"/"}>Shreyas</Link>
        </div>
        <div className="right-nav">
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/about-me"}>About Me</Link>
          <Link to={"/contact-me"}>Contact Me</Link>
        </div>
      </Nav>
    </>
  );
};

export default NavBar;
