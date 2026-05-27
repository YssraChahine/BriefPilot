import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(248, 250, 252, 0.86);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderInner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: 1rem ${({ theme }) => theme.spacing.page};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled(Link)`
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.text};
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0.55rem 0.8rem;
  border-radius: ${({ theme }) => theme.radius.full};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 600;
  font-size: 0.95rem;
  transition: 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
  &.active {
    color: ${({ theme }) => theme.colors.primaryDark};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.85rem;
    padding: 0.45rem 0.6rem;
  }
`;
