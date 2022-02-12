import styled from "styled-components";

export const LanidingPageWrapper = styled.div`
  height: 90vh;
  width: 100%;
  padding: 2.25rem 6rem;
  background: ${({ theme }) => (theme === "dark" ? "#222222" : "#F0F0F0")};
  color: ${({ theme }) => (theme === "light" ? "#1E1E1E" : "#E8E8E8")};
`;
