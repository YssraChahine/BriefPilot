import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { PageHeader } from "../../components/Page/Page";
import {
  HeroActions,
  PreviewCard,
  PreviewLabel,
  PreviewText,
} from "./Home.styles";

export function Home() {
  return (
    <>
      <PageHeader
        eyebrow="BriefPilot"
        title="Schreiben, die ernst genommen werden."
        description="Erstelle professionelle Beschwerden, Widersprüche und wichtige Alltagsschreiben Schritt für Schritt, klar, sachlich und direkt nutzbar."
      >
        <HeroActions>
          <Button as={Link} to="/kategorien" size="large">
            Schreiben erstellen
          </Button>
          <Button
            as={Link}
            to="/ueber-briefpilot"
            variant="secondary"
            size="large"
          >
            Mehr erfahren
          </Button>
        </HeroActions>
      </PageHeader>

      <PreviewCard>
        <PreviewLabel>Vorschau</PreviewLabel>
        <PreviewText>
          Sehr geehrte Damen und Herren,
          <br />
          hiermit möchte ich den folgenden Sachverhalt sachlich schildern und um
          Prüfung bitten...
        </PreviewText>
      </PreviewCard>
    </>
  );
}
