import React, { useEffect } from "react";
import { LanidingPageWrapper } from "../styles/LandingPage";
import leftImageDark from "../assets/left-image-polygon-dark.svg";
import leftImageLight from "../assets/left-image-polygon.svg";
import star from "../assets/star-light.svg";
import project from "../assets/projects.svg";
import eye from "../assets/eye.svg";
import Button from "../components/Button";
import sqr from "../assets/sqr.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = ({ theme }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <LanidingPageWrapper theme={theme}>
        <img src={sqr} alt="" className="right-img" />

        {theme === "dark" ? (
          <img src={leftImageDark} alt="" className="left-img" />
        ) : (
          <img src={leftImageLight} alt="" className="left-img" />
        )}

        <div className="hero" data-aos="zoom-in-up">
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
              whereTo={"projects"}
            />
            <Button
              img={eye}
              text={"VIEW RESUME"}
              LinkOrButton="a"
              href="https://docs.google.com/document/d/1bLfDCsIx1UftuL2LunQwCtIr6qQEnqXvmXl9BcmXCpU"
            />
          </div>
        </div>
      </LanidingPageWrapper>
    </>
  );
};

export default LandingPage;
