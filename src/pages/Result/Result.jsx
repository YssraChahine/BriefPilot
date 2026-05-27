import { Link, useLocation } from "react-router-dom";
import { Button } from "../../components/Button/Button";

export function Result() {
  const location = useLocation();
  const state = location.state;

  if (!state?.category || !state?.answers) {
    return (
      <>
        <h1>Kein Entwurf vorhanden</h1>
        <p>Bitte erstelle zuerst ein Schreiben.</p>
        <Button as={Link} to="/kategorien">
          Schreiben erstellen
        </Button>
      </>
    );
  }

  const { category, answers } = state;

  return (
    <>
      <p>{category.label}</p>
      <h1>Dein Entwurf wird vorbereitet</h1>
      <p>
        Die Antworten wurden erfolgreich übergeben. In der nächsten Phase bauen
        wir daraus automatisch ein fertiges Schreiben.
      </p>

      <pre>
        {JSON.stringify(
          {
            category: category.id,
            answers,
          },
          null,
          2,
        )}
      </pre>

      <Button as={Link} to={`/erstellen/${category.id}`} variant="secondary">
        Zurück zum Formular
      </Button>
    </>
  );
}
