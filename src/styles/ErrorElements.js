import styled from "styled-components";

export const ErrorPageWrapper = styled.div`
  height: 90vh;
  width: 100%;
  background: ${({ theme }) => (theme === "dark" ? "#222222" : "#F0F0F0")};
  flex-direction: column;
  padding: 0 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    margin-block: 2rem;
    color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E5E5E5")};
  }

  a {
    margin-block-start: 2rem;
    padding: 20px;
    background: ${({ theme }) => (theme === "light" ? "#222222" : "#F0F0F0")};
    border-radius: 0.45rem;
    text-decoration: none;
    color: ${({ theme }) => (theme === "dark" ? "#1E1E1E" : "#E5E5E5")};
  }

  img {
    position: absolute;
    bottom: -6.5rem;
    left: -5.5rem;
    height: 35vh;
    animation: rotate 15s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 85em) {
    padding: 0 0.5rem;
    h1 {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 30em) {
    padding: 0 0.5rem;
    justify-content: center;
    h1 {
      font-size: 25px;
    }
    img {
      height: 20%;
      left: -80px;
    }
  }
`;
