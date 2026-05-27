import styled from "styled-components";

export const AppShell = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(
      circle at top left,
      rgba(37, 99, 235, 0.12),
      transparent 32rem
    ),
    radial-gradient(
      circle at top right,
      rgba(14, 165, 233, 0.1),
      transparent 28rem
    ),
    ${({ theme }) => theme.colors.background};
`;

export const Main = styled.main`
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: 2rem ${({ theme }) => theme.spacing.page} 4rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 1.25rem;
  }
`;
