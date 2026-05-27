import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  LogoMark,
  LogoText,
  Navigation,
  StyledNavLink,
  HeaderActions,
} from "./Header.styles";

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo to="/" aria-label="BriefPilot Startseite">
          <LogoMark>BP</LogoMark>
          <LogoText>BriefPilot</LogoText>
        </Logo>

        <Navigation aria-label="Hauptnavigation">
          <StyledNavLink to="/">Start</StyledNavLink>
          <StyledNavLink to="/kategorien">Erstellen</StyledNavLink>
          <StyledNavLink to="/ueber-briefpilot">Über</StyledNavLink>
        </Navigation>

        <HeaderActions>
          <Button as={Link} to="/kategorien" variant="primary" size="small">
            Schreiben starten
          </Button>
        </HeaderActions>
      </HeaderInner>
    </HeaderWrapper>
  );
}
