import { NavLink } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  Navigation,
  StyledNavLink,
} from "./Header.styles";

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo to="/">BriefPilot</Logo>
        <Navigation aria-label="Hauptnavigation">
          <StyledNavLink to="/">Start</StyledNavLink>
          <StyledNavLink to="/kategorien">Erstellen</StyledNavLink>
          <StyledNavLink to="/ueber-briefpilot">Über</StyledNavLink>
        </Navigation>
      </HeaderInner>
    </HeaderWrapper>
  );
}
