import styled from "styled-components";

export const AboutWrapper = styled.div`
  height: 90vh;
  width: 100%;
  background: ${({ theme }) => (theme === "dark" ? "#222222" : "#F0F0F0")};

  display: flex;
  padding: 0 6rem;
  align-items: center;
  justify-content: space-between;

  .link-btn {
    color: ${({ theme }) => (theme === "light" ? "#222222" : "#F0F0F0")};
    text-decoration: none;
    margin-right: 3rem;
  }

  .btn-group {
    display: flex;
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
  }

  .left-about {
    align-self: center;
    text-align: center;
    width: 30%;
    .me-photo {
      height: 19rem;
      width: 19rem;
    }

    .name,
    .small-intro {
      margin-block: 1.55rem;
      color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E8E8E8")};
    }

    .socials {
      width: 100%;
      display: flex;
      height: 30px;
      margin-top: 2rem;
      justify-content: space-around;
      /* background: red; */
      cursor: pointer;
    }
  }

  .right-about {
    padding: 0 3.5rem;
    height: 65%;
    align-self: center;
    width: 60%;
    /* background-color: purple; */
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    p {
      font-size: 20px;
      width: 90%;
      margin-block: 1.75rem;
      line-height: 26px;
      color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E8E8E8")};
    }
  }

  .social-icons,
  .social-a {
    transition: all 0.3s ease-in-out;
  }
  .social-icons:hover,
  .social-a:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }

  @media only screen and (max-width: 85em) {
    padding: 1.25rem 4rem;
    height: auto;
    padding: 0.68rem;
    padding-bottom: 8rem;

    flex-direction: column;
    .left-about,
    .right-about {
      width: 100%;
    }

    .left-about {
      margin-block: 2rem;
    }

    .link-btn {
      margin-right: 1rem;
    }
    .right-about {
      padding: 0.15rem;
      text-align: center;

      p {
        font-size: 17px;
        width: 100%;
      }
    }

    .btn-group {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .btn-link {
      padding: 1.2rem 0.5rem;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 30em) {
    height: 100%;
    padding: 0.68rem;

    flex-direction: column;
    .left-about,
    .right-about {
      width: 100%;
    }

    .left-about {
      margin-block: 2rem;
    }

    .link-btn {
      margin-right: 1rem;
    }
    .right-about {
      padding: 0.15rem;
      text-align: center;
      p {
        font-size: 17px;
        width: 100%;
      }
    }

    .btn-group {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-bottom: 2rem;
    }

    .btn-link {
      padding: 1.2rem 0.2rem;
      font-size: 12px;
    }
  }
`;
