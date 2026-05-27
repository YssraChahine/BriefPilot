import styled from "styled-components";

export const Main = styled.main`
  width: min-content(1120px, 100%);
  margin: 0 auto;
  padding: 2rem ${({ theme }) => theme.spacing.page} 4rem;
`;
