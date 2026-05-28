import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import { categories } from "../../data/categories";
import {
  PageHeader,
  Eyebrow,
  Title,
  Description,
  CategoriesGrid,
  InfoBox,
  InfoTitle,
  InfoText,
} from "./Categories.styles";

export function Categories() {
  return (
    <>
      <PageHeader>
        <Eyebrow>Schreiben erstellen</Eyebrow>
        <Title>Wähle aus, wobei BriefPilot dir helfen soll.</Title>
        <Description>
          Starte mit der passenden Kategorie. Danach führt dich BriefPilot mit
          gezielten Fragen zu einem ersten professionellen Entwurf.
        </Description>
      </PageHeader>

      <CategoriesGrid>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </CategoriesGrid>

      <InfoBox>
        <InfoTitle>Hinweis</InfoTitle>
        <InfoText>
          BriefPilot hilft dir beim Formulieren und Strukturieren deiner
          Schreiben. Du kannst deine Angaben auf Deutsch oder Englisch machen;
          der fertige Entwurf ist auf deutsche Schreiben ausgerichtet. Die App
          ersetzt keine anwaltliche Beratung und prüft keine rechtlichen
          Ansprüche verbindlich.
        </InfoText>
      </InfoBox>
    </>
  );
}
