import styled from "styled-components";

export const ContactMePageWrapper = styled.div`
  height: 90vh;
  width: 100%;
  background: ${({ theme }) => (theme === "dark" ? "#222222" : "#F0F0F0")};

  padding: 0 6rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  .left-contact {
    width: 40%;
    height: 40%;
    color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E5E5E5")};

    h1 {
      color: ${({ theme }) => (theme === "light" ? "#222222" : "#F0F0F0")};
      font-size: 38px;
    }

    h2 {
      color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E5E5E5")};
      font-weight: 400;
      font-size: 23px;
      margin-block: 0.75rem;
    }

    .mailContact {
      padding: 1.25rem 1.25rem;
      width: 21rem;
      background: ${({ theme }) => (theme === "dark" ? "#1E1E1e" : "#E5E5E5")};
      border-radius: 0.35rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        height: 30px;
        width: 33px;
      }
    }
  }

  .right-contact {
    width: 42%;
    height: 80%;
    background: ${({ theme }) => (theme === "dark" ? "#1E1E1e" : "#E5E5E5")};
    border-radius: 0.75rem;
    color: ${({ theme }) => (theme === "light" ? "#222222" : "#F0F0F0")};
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 1.25rem;

    div {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 77%;
    }

    input {
      padding: 0.45rem;
      border-radius: 0.25rem;
      border: none;
      outline: none;
    }

    input:focus {
      border: 2px solid #5d55fa;
    }

    textarea {
      padding: 0.45rem;
      border-radius: 0.25rem;

      border: none;
      resize: none;
      outline: none;
    }

    textarea:focus {
      border: 2px solid #5d55fa;
    }

    button {
      color: #f0f0f0;
      margin-top: 1.45rem;
      width: 7.74rem;
      padding: 0.65rem;
      background-color: #5d55fa;
      border: none;
      border-radius: 0.15rem;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease-in-out;
    }

    button:hover {
      transform: scale(1.05);
      transition: all 0.2s ease-in-out;
    }
  }

  @media only screen and (max-width: 85em) {
    padding: 1rem;
    height: 100vh;
    flex-direction: row;
    .left-contact {
      margin-top: 2rem;
      width: 100%;
      height: 20%;
      text-align: center;
      h1 {
        font-size: 25px;
      }
      h2 {
        font-size: 18px;
      }
      .mailContact {
        text-align: left;
        margin: 0 auto;
      }
    }

    .right-contact {
      margin-block: 3rem;
      width: 70%;
      height: 65%;
      div {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 30em) {
    display: flex;
    flex-direction: row-reverse;
    padding: 0.75rem;
    width: 100%;
    height: 135vh;
    justify-content: center;
    align-items: center;
    .left-contact {
      margin-top: 2rem;
      width: 100%;
      height: 20%;
      text-align: center;
      h1 {
        font-size: 25px;
      }
      h2 {
        font-size: 18px;
      }
      .mailContact {
        text-align: left;
        margin: 0 auto;
      }
    }

    .right-contact {
      margin-block: 3rem;
      width: 100%;
      height: 65%;
      div {
        width: 100%;
      }
    }
  }
`;
