import React from "react";
import { Link } from "react-router-dom";
const Button = ({ img, text, LinkOrButton, href, whereTo }) => {
  return (
    <>
      {LinkOrButton === "link" ? (
        <Link to={`/${whereTo}`} className="link-btn">
          <div className="btn-link">
            <img src={img} alt="" className="btn-image" />
            <>{text}</>
          </div>
        </Link>
      ) : (
        <a href={href} className="link-btn" target="_blank" rel="noreferrer">
          <div className="btn-link">
            <img src={img} alt="" className="btn-image" />
            {text}
          </div>
        </a>
      )}
    </>
  );
};

export default Button;
