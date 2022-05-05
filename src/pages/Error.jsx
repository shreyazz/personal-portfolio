import React from "react";
import { Link } from "react-router-dom";
import { ErrorPageWrapper } from "../styles/ErrorElements";
const Error = ({ theme }) => {
  const randomAsciiFace = [
    "(~˘▾˘)~",
    "༼ つ ◕_◕ ༽つ",
    "(｡◕‿◕｡)",
    "(▰˘◡˘▰)",
    "｡^‿^｡",
    "(=^ ◡ ^=)",
  ];

  const giveMeAsciiFace = () => {
    let randomFace =
      randomAsciiFace[Math.floor(Math.random() * randomAsciiFace.length)];
    return randomFace.toString();
  };
  return (
    <ErrorPageWrapper theme={theme}>
      <h1>{giveMeAsciiFace()}</h1>
      <h1>I think you must be lost...</h1>
      <Link to="/"> Let me take you home </Link>
    </ErrorPageWrapper>
  );
};

export default Error;
