import styled from "styled-components";

export const BlogPageWrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 2.25rem 0rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  background: ${({ theme }) => (theme === "dark" ? "#222222" : "#F0F0F0")};

  @media only screen and (max-width: 30em) {
    padding: 1.25rem 0.55rem;
  }

  .loading {
    background: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E5E5E5")};
    .blinker {
      background: ${({ theme }) => (theme === "dark" ? "#1E1E1E" : "#E5E5E5")};
    }
  }
`;

export const BlogCardWrapper = styled.div`
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
  transition: all 0.2s ease-in-out;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  border-radius: 0.55rem;
  width: 25rem;
  background: ${({ theme }) => (theme === "dark" ? "#1E1E1E" : "#E5E5E5")};
  box-shadow: ${({ theme }) =>
    theme === "dark"
      ? `box-shadow: -20px -20px 4px rgba(62, 62, 62, 0.7), 5px 5px 4px rgba(29, 29, 29, 0.75)`
      : `box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.17), 5px 5px 4px rgba(72, 72, 72, 0.1)`};
  img {
    height: 150px;
    width: 100%;
    border-radius: 0.25rem;
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

  .tags {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  @media only screen and (max-width: 30em) {
    font-size: 12px;
  }

  span {
    margin-block: 1rem;
    padding: 0.45rem;
    background-color: #b8b5f1ea;
    border-radius: 0.25rem;
    font-size: 14px;
    margin-block-end: 0.2rem;
  }
`;
