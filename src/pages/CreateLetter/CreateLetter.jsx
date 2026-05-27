import { Link, useNavigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { Button } from "../../components/Button/Button";
import { FormField } from "../../components/FormField/FormField";
import { categories } from "../../data/categories";
import { formQuestions, toneOptions } from "../../data/formQuestions";
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
} from "./CreateLetter.styles";

const initialTone = "sachlich";

export function CreateLetter() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = categories.find((item) => item.id === categoryId);
  const questions = formQuestions[categoryId] || [];

  const initialValues = useMemo(() => {
    return questions.reduce(
      (values, question) => ({
        ...values,
        [question.id]: "",
      }),
      { tone: initialTone },
    );
  }, [questions]);

  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

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

    navigate("/ergebnis", {
      state: {
        category,
        answers: formValues,
      },
    });
  }

  const answeredRequiredQuestions = questions.filter(
    (question) => question.required && formValues[question.id]?.trim(),
  ).length;

  const requiredQuestions = questions.filter(
    (question) => question.required,
  ).length;

  return (
    <PageGrid>
      <FormArea>
        <BackLink to="/kategorien">← Andere Kategorie wählen</BackLink>

        <Eyebrow>{category.label}</Eyebrow>
        <Title>{category.title}</Title>
        <Description>{category.description}</Description>

        <Form onSubmit={handleSubmit}>
          <FieldGroup>
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
            {requiredQuestions}
          </ProgressText>

          <Checklist>
            <ChecklistItem>Klare Beschreibung des Sachverhalts</ChecklistItem>
            <ChecklistItem>Konkretes Ziel des Schreibens</ChecklistItem>
            <ChecklistItem>Passender Ton für die Situation</ChecklistItem>
          </Checklist>
        </ProgressCard>
      </SidePanel>
    </PageGrid>
  );
}
