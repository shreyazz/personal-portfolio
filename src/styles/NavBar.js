import styled from "styled-components";

export const Nav = styled.nav`
  height: 10vh;
  width: 100%;
  padding: 2.25rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => (theme === "dark" ? "#1E1E1E" : "#E8E8E8")};

  .left-nav a {
    color: #5d55fa;
    font-size: 30px;
    font-weight: 600;
    text-decoration: none;
  }

  .right-nav a {
    margin-inline-start: 5rem;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.15rem;
    color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E8E8E8")};
    position: relative;
  }

  .right-nav a:after {
    content: "";
    position: absolute;
    width: 0;
    background: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E8E8E8")};
    height: 2px;
    border-radius: 20px;
    left: 0;
    bottom: -4px;
    transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .right-nav a:hover:after {
    width: 100%;
    transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .mobile-menu {
    display: none;
  }

  .close-ham-menu,
  .open-ham-menu,
  .hamburger-menu {
    display: none;
  }

  @media only screen and (max-width: 85em) {
    padding: 3rem 1rem;
    height: auto;
    flex-direction: column;
    gap: 3rem;
  }

  @media only screen and (max-width: 30em) {
    padding: 1rem 1.5rem;
    height: auto;
    flex-direction: row;
    align-items: center;
    .right-nav {
      display: none;
    }

    .mobile-menu {
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      top: -125rem;
      background: ${({ theme }) => (theme === "dark" ? "#302f2f" : "#d1d1d1")};
      height: 40vh;
      width: 40vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 1.25rem;
      z-index: 4;
      border-radius: 1rem;
      transition: all 7.7s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .open-menu {
      transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
      top: 8rem;
    }

    .mobile-menu a {
      text-decoration: none;
      font-weight: 500;
      font-size: 1.15rem;
      color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E8E8E8")};
      position: relative;
    }

    .mobile-menu a:after {
      content: "";
      position: absolute;
      width: 0;
      background: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E8E8E8")};
      height: 2px;
      border-radius: 20px;
      left: 0;
      bottom: -4px;
      transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .mobile-menu a:hover:after {
      width: 100%;
      transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .hamburger-menu {
      background: transparent;
      height: 5vh;
      width: 5vh;
      z-index: 5;
      display: inline-block;
    }

    .open-ham-menu {
      display: flex;
      justify-content: space-evenly;
      align-items: start;
      flex-direction: column;

      .line-1 {
        transition: all 0.3s ease-in;
        border-radius: 30px;
        height: 10%;
        width: 90%;
        background: ${({ theme }) =>
          theme === "light" ? "#1E1E1E" : "#E8E8E8"};
      }
      .line-2 {
        height: 10%;
        transition: all 0.4s ease-in;
        border-radius: 30px;

        width: 60%;
        background: ${({ theme }) =>
          theme === "light" ? "#1E1E1E" : "#E8E8E8"};
      }
      .line-3 {
        height: 10%;
        transition: all 0.3s ease-in;
        border-radius: 30px;

        width: 90%;
        background: ${({ theme }) =>
          theme === "light" ? "#1E1E1E" : "#E8E8E8"};
      }
    }
    .close-ham-menu {
      display: flex;
      justify-content: space-evenly;
      align-items: start;
      flex-direction: column;

      .line-1 {
        height: 10%;
        border-radius: 30px;

        transform: rotate(50deg);
        transition: all 0.3s ease-in;

        width: 90%;
        background: ${({ theme }) =>
          theme === "light" ? "#1E1E1E" : "#E8E8E8"};
      }
      .line-2 {
        border-radius: 30px;

        height: 10%;
        transition: all 0.9s ease-in;

        transform: translateX(100rem);
        width: 60%;
        background: ${({ theme }) =>
          theme === "light" ? "#1E1E1E" : "#E8E8E8"};
      }
      .line-3 {
        border-radius: 30px;

        height: 10%;
        transform: rotate(50deg);
        transition: all 0.3s ease-in;
        width: 90%;
        background: ${({ theme }) =>
          theme === "light" ? "#1E1E1E" : "#E8E8E8"};
      }
    }
  }
`;
