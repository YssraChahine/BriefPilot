import { Link, useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { categories } from "../../data/categories";

export function CreateLetter() {
  const { categoryId } = useParams();

  const category = categories.find((item) => item.id === categoryId);

  if (!category) {
    return (
      <>
        <h1>Kategorie nicht gefunden</h1>
        <p>Bitte wähle eine gültige Kategorie aus.</p>
        <Button as={Link} to="/kategorien">
          Zur Kategorie-Auswahl
        </Button>
      </>
    );
  }

  return (
    <>
      <p>{category.label}</p>
      <h1>{category.title}</h1>
      <p>{category.description}</p>
      <Button as={Link} to="/kategorien" variant="secondary">
        Andere Kategorie wählen
      </Button>
    </>
  );
}
