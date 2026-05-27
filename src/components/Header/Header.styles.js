import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(248, 250, 252, 0.82);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderInner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: 0.9rem ${({ theme }) => theme.spacing.page};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.25rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr auto;
  }
`;

export const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  width: fit-content;
`;

export const LogoMark = styled.span`
  width: 2.35rem;
  height: 2.35rem;
  display: grid;
  place-items: center;
  border-radius: 0.85rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.25);
`;

export const LogoText = styled.span`
  font-weight: 900;
  font-size: 1.18rem;
  letter-spacing: -0.055em;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 420px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 255, 255, 0.7);
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0.55rem 0.85rem;
  border-radius: ${({ theme }) => theme.radius.full};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 700;
  font-size: 0.92rem;
  transition:
    color 0.2s ease,
    background 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
  &.active {
    color: ${({ theme }) => theme.colors.primaryDark};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const HeaderActions = styled.div`
  justify-self: end;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    a {
      min-height: 2.2rem;
      padding: 0.5rem 0.75rem;
      font-size: 0.82rem;
    }
  }
  @media (max-width: 380px) {
    display: none;
  }
`;
