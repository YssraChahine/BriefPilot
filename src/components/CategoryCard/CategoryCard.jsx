import { Link } from "react-router-dom";
import {
  Card,
  CardTop,
  Icon,
  Label,
  Title,
  Description,
  ExampleList,
  ExampleItem,
  CardFooter,
  ToneHint,
  Arrow,
} from "./CategoryCard.styles";

export function CategoryCard({ category }) {
  return (
    <Card to={`/erstellen/${category.id}`} as={Link}>
      <CardTop>
        <Icon aria-hidden="true">{category.icon}</Icon>
        <Label>{category.label}</Label>
      </CardTop>

      <Title>{category.title}</Title>
      <Description>{category.description}</Description>

      <ExampleList aria-label={`Beispiele für ${category.label}`}>
        {category.examples.map((example) => (
          <ExampleItem key={example}>{example}</ExampleItem>
        ))}
      </ExampleList>

      <CardFooter>
        <ToneHint>{category.toneHint}</ToneHint>
        <Arrow aria-hidden="true">→</Arrow>
      </CardFooter>
    </Card>
  );
}
