import styled from "styled-components";

export const ProjectWrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 2.25rem 0rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.75rem;
  
  .loading {
    background: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E5E5E5")};
    /* css loader */
    .blinker {
      background: ${({ theme }) => (theme === "dark" ? "#1E1E1E" : "#E5E5E5")};
    }
  }

  @media only screen and (max-width: 30em) {
    padding: 1.25rem 0.55rem;
  }

  @media screen and (min-width: 1600px) {
    height: 90vh;
    /* padding-bottom: 20rem; */
  }
  background: ${({ theme }) => (theme === "dark" ? "#222222" : "#F0F0F0")};
`;

export const ProjectCardWrapper = styled.div`
 padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  border-radius: 0.55rem;
  width: 25rem;
  position: relative;
  background: ${({ theme }) => (theme === "dark" ? "#1E1E1E" : "#E5E5E5")};
  box-shadow: ${({ theme }) =>
    theme === "dark"
      ? `box-shadow: -20px -20px 4px rgba(62, 62, 62, 0.7), 5px 5px 4px rgba(29, 29, 29, 0.75)`
      : `box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.17), 5px 5px 4px rgba(72, 72, 72, 0.1)`};

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
  transition: all 0.2s ease-in-out;
  

/* common */
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
  background: transparent;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: '';
  background: transparent;

  display: block;
  border: 5px solid #e7c008;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: #e7c008;
  box-shadow: 0 5px 10px rgba(0,10,0,.1);
  color: #000;
 font-size: 10px;
 font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}

/* top right*/
.ribbon-top-right {
  top: -10px;
  right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before {
  top: 0;
  left: 0;
}
.ribbon-top-right::after {
  bottom: 0;
  right: 0;
}
.ribbon-top-right span {
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
}






  img {
    height: 11.25rem;
    width: 100%;
    border-radius: 0.25rem;
    margin-bottom: 0.75rem;
  }

  .links {
    display: flex;
    flex-direction: row;
    width: 60%;
    justify-content: space-between;
  }

 
  a {
    width: 90px;
    background: ${({ theme }) => (theme === "dark" ? "#131313be" : "#dadada")};
    border-radius: 0.25rem;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 0.32rem;
    padding: 0.2rem;
    p {
      /* color: red; */
      font-size: 13px;
      color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E8E8E8")};
    }
  }

  h1 {
    font-size: 18px;
    margin-block: 0.55rem;
  }

  p {
    font-size: 15px;
  }

  h1,
  p {
    margin-block: 0.55rem;

    color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E8E8E8")};
  }
`;
