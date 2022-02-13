import React from "react";
import { LanidingPageWrapper } from "../styles/LandingPage";
import leftImageDark from "../assets/left-image-polygon-dark.svg";
import leftImageLight from "../assets/left-image-polygon.svg";
const LandingPage = ({ theme }) => {
  return (
    <>
      <LanidingPageWrapper theme={theme}>
        {theme === "dark" ? (
          <img src={leftImageDark} alt="" className="left-img" />
        ) : (
          <img src={leftImageLight} alt="" className="left-img" />
        )}
      </LanidingPageWrapper>
    </>
  );
};

export default LandingPage;
