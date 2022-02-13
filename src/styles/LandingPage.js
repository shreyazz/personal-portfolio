import styled from "styled-components";

export const LanidingPageWrapper = styled.div`
  height: 90vh;
  width: 100%;
  padding: 2.25rem 6rem;
  background: ${({ theme }) => (theme === "dark" ? "#222222" : "#F0F0F0")};
  color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E8E8E8")};
  overflow: hidden;
  position: relative;

  .left-img {
    position: absolute;
    bottom: -6.5rem;
    left: -5.5rem;
    height: 35vh;
    animation: rotate 42s linear infinite;
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
  }

  @media only screen and (max-width: 30em) {
    padding: 0.55rem 2rem;
  }
`;
