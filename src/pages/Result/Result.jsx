import { Link, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
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
  SubjectInput,
  LetterBody,
  LetterTextarea,
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
  EditNotice,
  SmallActionButton,
  LanguageModeNotice,
} from "./Result.styles";

export function Result() {
  const location = useLocation();
  const state = location.state;
  const [copyStatus, setCopyStatus] = useState("");

  const generatedLetter = useMemo(() => {
    if (!state?.category || !state?.answers) {
      return null;
    }

    return generateLetter({
      categoryId: state.category.id,
      answers: state.answers,
    });
  }, [state]);

  const [editableSubject, setEditableSubject] = useState(
    generatedLetter?.subject || "",
  );
  const [editableBody, setEditableBody] = useState(generatedLetter?.body || "");

  if (!state?.category || !state?.answers || !generatedLetter) {
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

  const fullLetterText = `Betreff: ${editableSubject}\n\n${editableBody}`;

  const hasEditedLetter =
    editableSubject !== generatedLetter.subject ||
    editableBody !== generatedLetter.body;

  async function handleCopyFullLetter() {
    const copied = await copyToClipboard(fullLetterText);

    setCopyStatus(
      copied
        ? "Der vollständige Brief wurde kopiert."
        : "Kopieren ist fehlgeschlagen. Bitte markiere den Text manuell.",
    );
  }

  async function handleCopySubject() {
    const copied = await copyToClipboard(editableSubject);

    setCopyStatus(
      copied
        ? "Der Betreff wurde kopiert."
        : "Kopieren ist fehlgeschlagen. Bitte markiere den Betreff manuell.",
    );
  }

  function handleDownloadTextFile() {
    const filename = `${createSafeFilename(editableSubject)}.txt`;

    downloadTextFile({
      filename,
      content: fullLetterText,
    });

    setCopyStatus("Der Entwurf wurde als Textdatei heruntergeladen.");
  }

  function handleResetToOriginal() {
    setEditableSubject(generatedLetter.subject);
    setEditableBody(generatedLetter.body);
    setCopyStatus("Der ursprüngliche Entwurf wurde wiederhergestellt.");
  }

  return (
    <PageGrid>
      <ResultArea>
        <Eyebrow>{category.label}</Eyebrow>
        <Title>Dein Entwurf ist bereit.</Title>
        <Description>
          Du kannst Betreff und Text direkt bearbeiten. Kopieren und Download
          verwenden immer deine aktuelle Version.
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

        {hasEditedLetter && (
          <EditNotice>
            Du hast den Entwurf bearbeitet. Deine aktuelle Version wird beim
            Kopieren und Speichern verwendet.
          </EditNotice>
        )}

        {generatedLetter.meta?.requiresTranslation && (
          <LanguageModeNotice>
            Du hast Englisch als Eingabesprache gewählt. Der Produktflow ist
            dafür vorbereitet, daraus einen deutschen Brief zu erstellen. Die
            echte automatische Übersetzung wird in der nächsten KI-Generator-
            Phase angeschlossen.
          </LanguageModeNotice>
        )}

        <LetterCard>
          <LetterHeader>
            <SubjectLabel htmlFor="editable-subject">Betreff</SubjectLabel>
            <SubjectInput
              id="editable-subject"
              value={editableSubject}
              onChange={(event) => setEditableSubject(event.target.value)}
            />
          </LetterHeader>

          <LetterBody>
            <LetterTextarea
              aria-label="Brieftext bearbeiten"
              value={editableBody}
              onChange={(event) => setEditableBody(event.target.value)}
            />
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

          {hasEditedLetter && (
            <SmallActionButton type="button" onClick={handleResetToOriginal}>
              Original wiederherstellen
            </SmallActionButton>
          )}
        </Actions>
      </ResultArea>

      <SidePanel>
        <InfoCard>
          <InfoTitle>Entwurfsdetails</InfoTitle>
          <InfoText>
            Dieser Text wurde aus deinen Antworten erzeugt und kann vor dem
            Absenden frei angepasst werden.
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
              <span>Eingabe</span>
              <strong>
                {generatedLetter.meta?.inputLanguageLabel || "Deutsch"}
              </strong>
            </MetaItem>
            <MetaItem>
              <span>Ausgabe</span>
              <strong>
                {generatedLetter.meta?.outputLanguageLabel || "Deutsch"}
              </strong>
            </MetaItem>
            <MetaItem>
              <span>Modus</span>
              <strong>
                {generatedLetter.meta?.generationMode === "local-template"
                  ? "Lokal"
                  : "KI"}
              </strong>
            </MetaItem>
            <MetaItem>
              <span>Status</span>
              <strong>{hasEditedLetter ? "Bearbeitet" : "Entwurf"}</strong>
            </MetaItem>
          </MetaList>
        </InfoCard>

        <Notice>
          <NoticeTitle>Wichtig</NoticeTitle>
          <NoticeText>
            Prüfe Namen, Daten, Beträge, Fristen und rechtlich wichtige Angaben
            immer selbst, bevor du das Schreiben verschickst.
          </NoticeText>
        </Notice>
      </SidePanel>
    </PageGrid>
  );
}
