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
`;
