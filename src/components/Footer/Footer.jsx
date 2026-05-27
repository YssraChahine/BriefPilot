import { Link } from "react-router-dom";
import {
  FooterWrapper,
  FooterInner,
  FooterBrand,
  FooterText,
  FooterNav,
  FooterLink,
} from "./Footer.styles";

export function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <div>
          <FooterBrand>BriefPilot</FooterBrand>
          <FooterText>
            Ein Portfolio-Projekt für strukturierte Alltagsschreiben.
          </FooterText>
        </div>

        <FooterNav aria-label="Footer Navigation">
          <FooterLink as={Link} to="/">
            Start
          </FooterLink>
          <FooterLink as={Link} to="/kategorien">
            Erstellen
          </FooterLink>
          <FooterLink as={Link} to="/ueber-briefpilot">
            Über
          </FooterLink>
        </FooterNav>
      </FooterInner>
    </FooterWrapper>
  );
}
