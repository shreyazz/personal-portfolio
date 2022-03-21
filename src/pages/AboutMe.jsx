import React from "react";
import { AboutWrapper } from "../styles/AboutMeElements";
import Button from "../components/Button";
import project from "../assets/projects.svg";
import eye from "../assets/eye.svg";
import MePhoto from "../assets/me.png";
import Twitter from "../assets/twitter.svg";
import DevTo from "../assets/devto.svg";
import DevToDark from "../assets/devtoDark.svg";
import Linkedin from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
import GitHubDark from "../assets/githubDark.svg";
const AboutMe = ({ theme }) => {
  const socialIcons = [
    { image: Twitter, href: "https://twitter.com/PahuneShreyas" },
    { image: Linkedin, href: "https://www.linkedin.com/in/shreyas-pahune/" },
    {
      image: theme === "dark" ? GitHub : GitHubDark,
      href: "https://github.com/shreyazz",
    },
    {
      image: theme === "dark" ? DevTo : DevToDark,
      href: "https://dev.to/shreyazz",
    },
  ];
  return (
    <>
      <AboutWrapper theme={theme}>
        <div className="left-about">
          <img src={MePhoto} alt="" className="me-photo" />
          <h2 className="name">Shreyas Pahune</h2>
          <div className="small-intro">
            A full stack web developer who likes to turn ideas into code and
            solve real world problems.
          </div>
          <div className="socials">
            {socialIcons.map((image, index) => (
              <a
                href={image.href}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="social-a"
              >
                {" "}
                <img
                  key={index}
                  src={image.image}
                  alt={image.image}
                  className="social-icons"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="right-about">
          <div className="desc">
            <p>
              Hey 👋🏻, I am <span className="blue"> SHREYAS </span>, a passionate
              full-stack developer who likes to turn ideas into code and build
              fun stuff !
            </p>
            <p>
              Developed a passion for coding since high-school, I started my
              journey with C++ and today after more than 5 years, I am a MERN
              Stack Developer with the same passion and dedication to solve
              problems and to code.
            </p>
            <p>
              I like to network with people and increase my experience. I
              believe that experiences are gathered when one steps out of their
              comfort zones otherwise, it's just a single year of experience
              done multiple times.
            </p>
          </div>
          <div className="btn-group">
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
        </div>
      </AboutWrapper>
    </>
  );
};

export default AboutMe;
