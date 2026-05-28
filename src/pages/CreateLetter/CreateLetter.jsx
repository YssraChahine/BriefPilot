import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../../components/Button/Button";
import { FormField } from "../../components/FormField/FormField";
import { categories } from "../../data/categories";
import {
  formQuestions,
  inputLanguageOptions,
  outputLanguageOptions,
  toneOptions,
} from "../../data/formQuestions";
import {
  clearSavedForm,
  loadSavedForm,
  saveForm,
} from "../../utils/formStorage";
import {
  PageGrid,
  FormArea,
  SidePanel,
  BackLink,
  Eyebrow,
  Title,
  Description,
  Form,
  FieldGroup,
  Actions,
  ProgressCard,
  ProgressTitle,
  ProgressText,
  CategoryBadge,
  Checklist,
  ChecklistItem,
  ErrorBox,
  ProgressTrack,
  ProgressFill,
  SaveNotice,
  SecondaryActions,
  ResetButton,
} from "./CreateLetter.styles";

const initialTone = "sachlich";
const initialInputLanguage = "de";
const initialOutputLanguage = "de";

export function CreateLetter() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = categories.find((item) => item.id === categoryId);

  const questions = useMemo(() => {
    return formQuestions[categoryId] || [];
  }, [categoryId]);

  const initialValues = useMemo(() => {
    return questions.reduce(
      (values, question) => ({
        ...values,
        [question.id]: "",
      }),
      {
        tone: initialTone,
        inputLanguage: initialInputLanguage,
        outputLanguage: initialOutputLanguage,
      },
    );
  }, [questions]);

  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [hasLoadedSavedData, setHasLoadedSavedData] = useState(false);
  const [hasUserChangedForm, setHasUserChangedForm] = useState(false);

  useEffect(() => {
    const savedValues = loadSavedForm(categoryId);

    if (savedValues) {
      setFormValues({
        ...initialValues,
        ...savedValues,
      });
      setHasLoadedSavedData(true);
      return;
    }

    setFormValues(initialValues);
    setHasLoadedSavedData(false);
  }, [categoryId, initialValues]);

  useEffect(() => {
    if (!category || !hasUserChangedForm) {
      return;
    }

    saveForm(categoryId, formValues);
  }, [category, categoryId, formValues, hasUserChangedForm]);

  if (!category) {
    return (
      <ErrorBox>
        <h1>Kategorie nicht gefunden</h1>
        <p>Bitte wähle eine gültige Kategorie aus.</p>
        <Button as={Link} to="/kategorien">
          Zur Kategorie-Auswahl
        </Button>
      </ErrorBox>
    );
  }

  function handleChange(fieldId, value) {
    setHasUserChangedForm(true);

    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldId]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [fieldId]: "",
    }));
  }

  function validateForm() {
    const nextErrors = {};

    questions.forEach((question) => {
      if (question.required && !formValues[question.id]?.trim()) {
        nextErrors[question.id] = "Bitte fülle dieses Feld aus.";
      }
    });

    if (!formValues.inputLanguage) {
      nextErrors.inputLanguage = "Bitte wähle eine Eingabesprache aus.";
    }

    if (!formValues.outputLanguage) {
      nextErrors.outputLanguage = "Bitte wähle eine Ausgabesprache aus.";
    }

    if (!formValues.tone) {
      nextErrors.tone = "Bitte wähle einen Ton aus.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    saveForm(categoryId, formValues);

    navigate("/ergebnis", {
      state: {
        category,
        answers: formValues,
      },
    });
  }

  function handleResetForm() {
    const shouldReset = window.confirm(
      "Möchtest du wirklich alle Eingaben für diese Kategorie löschen?",
    );

    if (!shouldReset) {
      return;
    }

    clearSavedForm(categoryId);
    setFormValues(initialValues);
    setErrors({});
    setHasLoadedSavedData(false);
    setHasUserChangedForm(false);
  }

  const requiredQuestions = questions.filter((question) => question.required);

  const answeredRequiredQuestions = requiredQuestions.filter((question) =>
    formValues[question.id]?.trim(),
  ).length;

  const progress =
    requiredQuestions.length > 0
      ? Math.round((answeredRequiredQuestions / requiredQuestions.length) * 100)
      : 0;

  return (
    <PageGrid>
      <FormArea>
        <BackLink to="/kategorien">← Andere Kategorie wählen</BackLink>

        <Eyebrow>{category.label}</Eyebrow>
        <Title>{category.title}</Title>
        <Description>{category.description}</Description>

        {hasLoadedSavedData && (
          <SaveNotice>
            Gespeicherter Entwurf geladen. Du kannst direkt weitermachen oder
            das Formular zurücksetzen.
          </SaveNotice>
        )}

        <Form onSubmit={handleSubmit}>
          <FieldGroup>
            <FormField
              id="inputLanguage"
              label="In welcher Sprache möchtest du deine Situation beschreiben?"
              hint="Du kannst deine Angaben auf Deutsch oder Englisch schreiben. Der fertige Brief wird auf Deutsch erstellt."
              type="select"
              value={formValues.inputLanguage}
              onChange={(event) =>
                handleChange("inputLanguage", event.target.value)
              }
              options={inputLanguageOptions}
              required
              error={errors.inputLanguage}
            />

            <FormField
              id="outputLanguage"
              label="In welcher Sprache soll der Brief erstellt werden?"
              hint="BriefPilot erstellt den fertigen Entwurf aktuell auf Deutsch."
              type="select"
              value={formValues.outputLanguage}
              onChange={(event) =>
                handleChange("outputLanguage", event.target.value)
              }
              options={outputLanguageOptions}
              required
              error={errors.outputLanguage}
            />

            {questions.map((question) => (
              <FormField
                key={question.id}
                id={question.id}
                label={question.label}
                hint={question.hint}
                type={question.type}
                value={formValues[question.id] || ""}
                onChange={(event) =>
                  handleChange(question.id, event.target.value)
                }
                placeholder={question.placeholder}
                required={question.required}
                error={errors[question.id]}
              />
            ))}

            <FormField
              id="tone"
              label="Welcher Ton soll verwendet werden?"
              hint="Du kannst später immer noch selbst nachschärfen."
              type="select"
              value={formValues.tone}
              onChange={(event) => handleChange("tone", event.target.value)}
              options={toneOptions}
              required
              error={errors.tone}
            />
          </FieldGroup>

          <Actions>
            <Button type="submit" size="large">
              Entwurf erstellen
            </Button>
            <Button as={Link} to="/kategorien" variant="secondary" size="large">
              Abbrechen
            </Button>
          </Actions>

          <SecondaryActions>
            <ResetButton type="button" onClick={handleResetForm}>
              Formular zurücksetzen
            </ResetButton>
          </SecondaryActions>
        </Form>
      </FormArea>

      <SidePanel>
        <ProgressCard>
          <CategoryBadge>
            {category.icon} {category.label}
          </CategoryBadge>

          <ProgressTitle>
            Dein Entwurf entsteht aus deinen Antworten.
          </ProgressTitle>

          <ProgressText>
            Pflichtfelder ausgefüllt: {answeredRequiredQuestions} von{" "}
            {requiredQuestions.length}
          </ProgressText>

          <ProgressTrack aria-label={`Fortschritt ${progress} Prozent`}>
            <ProgressFill $progress={progress} />
          </ProgressTrack>

          <Checklist>
            <ChecklistItem>
              Angaben auf Deutsch oder Englisch möglich
            </ChecklistItem>
            <ChecklistItem>Deutscher Briefentwurf als Ergebnis</ChecklistItem>
            <ChecklistItem>Automatische Speicherung im Browser</ChecklistItem>
            <ChecklistItem>Konkretes Ziel des Schreibens</ChecklistItem>
            <ChecklistItem>Passender Ton für die Situation</ChecklistItem>
          </Checklist>
        </ProgressCard>
      </SidePanel>
    </PageGrid>
  );
}
