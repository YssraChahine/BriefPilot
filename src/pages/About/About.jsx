import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import {
  PageHeader,
  Eyebrow,
  Title,
  Description,
  ContentGrid,
  TextCard,
  CardTitle,
  CardText,
  FeatureList,
  FeatureItem,
  HighlightBox,
  HighlightTitle,
  HighlightText,
  CtaBox,
  CtaContent,
  CtaTitle,
  CtaText,
} from "./About.styles";

export function About() {
  return (
    <>
      <PageHeader>
        <Eyebrow>Über BriefPilot</Eyebrow>
        <Title>
          Ein Schreibassistent für Situationen, in denen der Ton zählt.
        </Title>
        <Description>
          BriefPilot hilft Menschen dabei, wichtige Schreiben klarer, sachlicher
          und strukturierter zu formulieren — ohne komplizierte Vorlagen oder
          leeres Dokument.
        </Description>
      </PageHeader>

      <ContentGrid>
        <TextCard>
          <CardTitle>Das Problem</CardTitle>
          <CardText>
            Viele Menschen wissen genau, was passiert ist, aber nicht, wie sie
            es professionell formulieren sollen. Besonders bei Beschwerden,
            Widersprüchen, Vermieterthemen oder Bewerbungsnachrichten entsteht
            schnell Unsicherheit.
          </CardText>
        </TextCard>

        <TextCard>
          <CardTitle>Die Lösung</CardTitle>
          <CardText>
            BriefPilot führt Schritt für Schritt durch die wichtigsten Fragen
            und erstellt daraus einen ersten Entwurf. Der Text kann danach
            geprüft, angepasst, kopiert oder gespeichert werden.
          </CardText>
        </TextCard>

        <TextCard>
          <CardTitle>Für wen?</CardTitle>
          <FeatureList>
            <FeatureItem>
              Menschen, die professionelle Schreiben brauchen
            </FeatureItem>
            <FeatureItem>Mieterinnen und Mieter mit Rückfragen</FeatureItem>
            <FeatureItem>Jobsuchende mit wichtigen Nachrichten</FeatureItem>
            <FeatureItem>
              Nutzer, die Beschwerden klar formulieren wollen
            </FeatureItem>
          </FeatureList>
        </TextCard>

        <HighlightBox>
          <HighlightTitle>Wichtig zu wissen</HighlightTitle>
          <HighlightText>
            BriefPilot ersetzt keine anwaltliche Beratung. Die App hilft beim
            Strukturieren und Formulieren, prüft aber keine rechtlichen
            Ansprüche verbindlich. Alle Angaben sollten vor dem Absenden
            sorgfältig geprüft werden.
          </HighlightText>
        </HighlightBox>
      </ContentGrid>

      <CtaBox>
        <CtaContent>
          <CtaTitle>Bereit für dein erstes Schreiben?</CtaTitle>
          <CtaText>
            Wähle eine Kategorie und erstelle in wenigen Minuten einen ersten
            professionellen Entwurf.
          </CtaText>
        </CtaContent>

        <Button as={Link} to="/kategorien" size="large">
          Schreiben erstellen
        </Button>
      </CtaBox>
    </>
  );
}
