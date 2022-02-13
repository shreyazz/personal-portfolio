import React from "react";
import { LanidingPageWrapper } from "../styles/LandingPage";
import leftImageDark from "../assets/left-image-polygon-dark.svg";
import leftImageLight from "../assets/left-image-polygon.svg";
import star from "../assets/star-light.svg";
import project from "../assets/projects.svg";
import eye from "../assets/eye.svg";
import Button from "../components/Button";
import sqr from "../assets/sqr.svg";
const LandingPage = ({ theme }) => {
  return (
    <>
      <LanidingPageWrapper theme={theme}>
        <img src={sqr} alt="" className="right-img" />

        {theme === "dark" ? (
          <img src={leftImageDark} alt="" className="left-img" />
        ) : (
          <img src={leftImageLight} alt="" className="left-img" />
        )}

        <div className="hero">
          <h1>
            {" "}
            Hey 👋🏻 , I am <span className="blue"> SHREYAS </span>
            <img src={star} alt="" className="star" />
            <img src={star} alt="" className="star-1" />
          </h1>
          <p>
            A full stack web developer who likes to turn ideas into code and
            solve problems that impact people's lives.
          </p>
          <div className="btn-group">
            <Button
              img={project}
              text={"VIEW PROJECTS"}
              LinkOrButton="link"
              whereTo={"project"}
            />
            <Button
              img={eye}
              text={"VIEW RESUME"}
              LinkOrButton="a"
              href="https://www.google.com"
            />
          </div>
        </div>
      </LanidingPageWrapper>
    </>
  );
};

export default LandingPage;
