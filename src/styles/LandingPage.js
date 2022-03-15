import styled from "styled-components";

export const LanidingPageWrapper = styled.div`
  height: 90vh;
  width: 100%;
  padding: 2.25rem 6rem;
  background: ${({ theme }) => (theme === "dark" ? "#222222" : "#F0F0F0")};
  color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E8E8E8")};
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .right-img {
    position: absolute;
    right: -6rem;
    top: 5rem;
    transition: all 0.3s ease-in;
  }

  .right-img:hover {
    transform: scale(1.2);
    transition: all 0.45s ease-in;
  }
  .hero {
    color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E8E8E8")};
    font-size: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5rem;
    h1 {
      position: relative;
    }
    p {
      margin-block: 2rem;
      text-align: center;
      width: 60%;
    }
  }

  .blue {
    color: #5d55fa;
    font-weight: 700;
    width: 100px;
  }

  .left-img {
    position: absolute;
    bottom: -6.5rem;
    left: -5.5rem;
    height: 35vh;
    animation: rotate 32s linear infinite;
  }

  .star,
  .star-1 {
    position: relative;
    height: 15px;
    width: 15px;
    animation: blink 2s infinite;
  }
  .star {
    bottom: 1.75rem;
    right: 13rem;
  }
  .star-1 {
    top: 10px;
    left: -30px;
    border-radius: 50%;
  }

  .link-btn {
    color: ${({ theme }) => (theme === "light" ? "#222222" : "#F0F0F0")};
    text-decoration: none;
  }

  .btn-group {
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center;
  }

  .btn-link {
    padding: 1rem;
    border-radius: 0.25rem;
    background: ${({ theme }) => (theme === "dark" ? "#1E1E1E" : "#E5E5E5")};
    box-shadow: ${({ theme }) =>
      theme === "dark"
        ? `box-shadow: -20px -20px 4px rgba(62, 62, 62, 0.7), 5px 5px 4px rgba(29, 29, 29, 0.75)`
        : `box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.17), 5px 5px 4px rgba(72, 72, 72, 0.1)`};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17.5px;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
  }

  .btn-link:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
    box-shadow: 3px 3px 10px rgba(82, 82, 82, 0.256);
  }

  .btn-link a {
    text-decoration: none;
  }

  .btn-image {
    height: 18px;
    width: 18px;
    margin-right: 0.5rem;
    /* background: blue; */
  }

  @keyframes blink {
    50% {
      opacity: 0.35;
      transform: scale(0.75);
    }
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
    padding: 1.25rem 4rem;
    .btn-group {
      width: 70%;
    }
  }

  @media only screen and (max-width: 30em) {
    height: 91vh;
    padding: 0.68rem;
    .hero {
      text-align: center;
      width: 100%;
      margin: 0 auto 9rem auto;

      h1 {
        font-size: 26px;
        margin-left: 0.5rem;
      }
      p {
        width: 100%;
        font-size: 18px;
      }
    }
    .right-img {
      height: 10vh;
      right: -20px;
      top: 2.5rem;
      display: none;
    }

    .btn-group {
      width: 100%;
    }

    .btn-link {
      padding: 1.2rem 0.5rem;
      font-size: 15px;
    }
  }
`;
