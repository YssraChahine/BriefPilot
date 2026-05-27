import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import { Button } from "../../components/Button/Button";
import { generateLetter } from "../../utils/generateLetter";
import {
  copyToClipboard,
  createSafeFilename,
  downloadTextFile,
} from "../../utils/fileActions";
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
  ActionGroup,
  Notice,
  NoticeTitle,
  NoticeText,
  InfoCard,
  InfoTitle,
  InfoText,
  MetaList,
  MetaItem,
  EmptyState,
  CopyStatus,
} from "./Result.styles";

export function Result() {
  const location = useLocation();
  const state = location.state;
  const [copyStatus, setCopyStatus] = useState("");

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
  const fullLetterText = `Betreff: ${letter.subject}\n\n${letter.body}`;

  async function handleCopyFullLetter() {
    const copied = await copyToClipboard(fullLetterText);

    setCopyStatus(
      copied
        ? "Der vollständige Brief wurde kopiert."
        : "Kopieren ist fehlgeschlagen. Bitte markiere den Text manuell.",
    );
  }

  async function handleCopySubject() {
    const copied = await copyToClipboard(letter.subject);

    setCopyStatus(
      copied
        ? "Der Betreff wurde kopiert."
        : "Kopieren ist fehlgeschlagen. Bitte markiere den Betreff manuell.",
    );
  }

  function handleDownloadTextFile() {
    const filename = `${createSafeFilename(letter.subject)}.txt`;

    downloadTextFile({
      filename,
      content: fullLetterText,
    });

    setCopyStatus("Der Entwurf wurde als Textdatei heruntergeladen.");
  }

  return (
    <PageGrid>
      <ResultArea>
        <Eyebrow>{category.label}</Eyebrow>
        <Title>Dein erster Entwurf ist fertig.</Title>
        <Description>
          Prüfe den Text, passe persönliche Details an und nutze ihn dann für
          deine Nachricht, E-Mail oder deinen Brief.
        </Description>

        <ActionGroup aria-label="Aktionen für den Entwurf">
          <Button onClick={handleCopyFullLetter} size="medium">
            Brief kopieren
          </Button>
          <Button onClick={handleCopySubject} variant="secondary" size="medium">
            Betreff kopieren
          </Button>
          <Button
            onClick={handleDownloadTextFile}
            variant="secondary"
            size="medium"
          >
            Als TXT speichern
          </Button>
        </ActionGroup>

        {copyStatus && <CopyStatus role="status">{copyStatus}</CopyStatus>}

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
            Dieser Text wurde aus deinen Antworten erzeugt und sollte vor dem
            Absenden immer kurz geprüft werden.
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

        <Notice>
          <NoticeTitle>Wichtig</NoticeTitle>
          <NoticeText>
            BriefPilot hilft beim Formulieren. Prüfe Namen, Daten, Beträge,
            Fristen und rechtlich wichtige Angaben immer selbst, bevor du das
            Schreiben verschickst.
          </NoticeText>
        </Notice>
      </SidePanel>
    </PageGrid>
  );
}
