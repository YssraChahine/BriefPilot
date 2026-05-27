import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(248, 250, 252, 0.78);
`;

export const FooterInner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: 2rem ${({ theme }) => theme.spacing.page};
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const FooterBrand = styled.p`
  margin: 0 0 0.35rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 900;
  letter-spacing: -0.04em;
`;

export const FooterText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.92rem;
  line-height: 1.6;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.92rem;
  font-weight: 800;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
