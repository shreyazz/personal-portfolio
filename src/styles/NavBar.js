import styled from "styled-components";

export const Nav = styled.nav`
  height: 10vh;
  width: 100%;
  padding: 2.25rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => (theme === "dark" ? "#1E1E1E" : "#E8E8E8")};
  overflow: hidden;
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

  .toggler {
    position: relative;
    padding: 1rem;
    height: 33px;
    border-radius: 1rem;
    width: 80px;
    background: ${({ theme }) => (theme === "dark" ? "#222222" : "#E8E8E8")};
    box-shadow: ${({ theme }) =>
      theme === "light"
        ? `-5px -6px 4px rgba(255, 255, 255, 0.25),
      5px 5px 4px rgba(63, 63, 63, 0.19),
      inset 9px 7px 4px rgba(63, 63, 63, 0.19),
      inset -5px -4px 9px 11px rgba(255, 255, 255, 0.35)`
        : `-2px -2px 4px #131313, 3px 3px 4px #181818,
    inset 9px 7px 4px rgba(40, 40, 40, 0.774),
    inset -5px -4px 9px 11px rgba(24, 24, 24, 0.492)`};
    transition: all 0.2s ease-in;
  }

  .toggle-ball {
    cursor: pointer;
    position: absolute;
    top: 50%;
    height: 26px;
    width: 26px;
    left: 0.35rem;
    border-radius: 50%;
    transform: translateY(-50%);
    background: #5d55fa;
    box-shadow: -3px -2px 4px rgba(72, 72, 72, 0.22),
      3px 3px 4px rgba(35, 35, 35, 0.13);
    transition: all 0.3s ease-in-out;
  }

  .goRight {
    left: 2.95rem;
    transition: all 0.3s ease-in-out;
  }

  @media only screen and (max-width: 85em) {
    padding: 1rem;
    height: auto;
    flex-direction: column;
    gap: 1rem;
  }

  @media only screen and (max-width: 30em) {
    padding: 1rem 1.5rem;
    flex-direction: row;
    align-items: center;
    .left-nav a {
      font-size: 25px;
    }

    .toggler {
      display: none;
    }

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
      .toggler {
        display: inline-block;
      }
    }

    .open-menu {
      background: ${({ theme }) => (theme === "dark" ? "#302f2f" : "#d1d1d1")};
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

    .toggler {
      position: relative;
      padding: 1rem;
      height: 33px;
      border-radius: 1rem;
      width: 80px;
      background: ${({ theme }) => (theme === "dark" ? "#302f2f" : "#d1d1d1")};
      box-shadow: ${({ theme }) =>
        theme === "light"
          ? `-5px -6px 4px rgba(255, 255, 255, 0.25),
      5px 5px 4px rgba(63, 63, 63, 0.19),
      inset 9px 7px 4px rgba(63, 63, 63, 0.19),
      inset -5px -4px 9px 11px rgba(255, 255, 255, 0.15)`
          : `-2px -2px 4px #131313, 3px 3px 4px #181818,
    inset 9px 7px 4px rgba(40, 40, 40, 0.274),
    inset -5px -4px 9px 11px rgba(24, 24, 24, 0.192)`};
      transition: all 0.2s ease-in;
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

export const MobileNav = styled.div`
  height: 10vh;
  width: 10vh;
  position: absolute;
  background-color: red;
  z-index: -1;
  /* right: 0; */
`;
