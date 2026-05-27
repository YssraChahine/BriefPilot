import { Link, useLocation } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { generateLetter } from "../../utils/generateLetter";
import {
  PageGrid,
  ResultArea,
  SidePanel,
  Eyebrow,
  Title,
  Description,
  LetterCard,
  LetterHeader,
  SubjectLabel,
  SubjectTitle,
  LetterBody,
  LetterParagraph,
  Actions,
  InfoCard,
  InfoTitle,
  InfoText,
  MetaList,
  MetaItem,
  EmptyState,
} from "./Result.styles";

export function Result() {
  const location = useLocation();
  const state = location.state;

  if (!state?.category || !state?.answers) {
    return (
      <EmptyState>
        <h1>Kein Entwurf vorhanden</h1>
        <p>Bitte erstelle zuerst ein Schreiben.</p>
        <Button as={Link} to="/kategorien">
          Schreiben erstellen
        </Button>
      </EmptyState>
    );
  }

  const { category, answers } = state;

  const letter = generateLetter({
    categoryId: category.id,
    answers,
  });

  const paragraphs = letter.body.split("\n\n");

  return (
    <PageGrid>
      <ResultArea>
        <Eyebrow>{category.label}</Eyebrow>
        <Title>Dein erster Entwurf ist fertig.</Title>
        <Description>
          Du kannst den Text jetzt prüfen, anpassen und anschließend kopieren.
          In der nächsten Phase bauen wir dafür noch eine direkte
          Kopieren-Funktion.
        </Description>

        <LetterCard>
          <LetterHeader>
            <SubjectLabel>Betreff</SubjectLabel>
            <SubjectTitle>{letter.subject}</SubjectTitle>
          </LetterHeader>

          <LetterBody>
            {paragraphs.map((paragraph) => (
              <LetterParagraph key={paragraph}>{paragraph}</LetterParagraph>
            ))}
          </LetterBody>
        </LetterCard>

        <Actions>
          <Button
            as={Link}
            to={`/erstellen/${category.id}`}
            variant="secondary"
          >
            Antworten bearbeiten
          </Button>
          <Button as={Link} to="/kategorien" variant="secondary">
            Neues Schreiben
          </Button>
        </Actions>
      </ResultArea>

      <SidePanel>
        <InfoCard>
          <InfoTitle>Entwurfsdetails</InfoTitle>
          <InfoText>
            Dieser Text wurde lokal aus deinen Antworten erzeugt. Später kann
            hier eine echte KI-Generierung angeschlossen werden.
          </InfoText>

          <MetaList>
            <MetaItem>
              <span>Kategorie</span>
              <strong>{category.label}</strong>
            </MetaItem>
            <MetaItem>
              <span>Ton</span>
              <strong>{answers.tone}</strong>
            </MetaItem>
            <MetaItem>
              <span>Status</span>
              <strong>Entwurf</strong>
            </MetaItem>
          </MetaList>
        </InfoCard>
      </SidePanel>
    </PageGrid>
  );
}
