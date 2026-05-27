import {
  PageHeaderWrapper,
  Eyebrow,
  PageTitle,
  PageDescription,
  Section,
  Card,
} from "./Page.styles";

export function PageHeader({ eyebrow, title, description, children }) {
  return (
    <PageHeaderWrapper>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <PageTitle>{title}</PageTitle>
      {description && <PageDescription>{description}</PageDescription>}
      {children}
    </PageHeaderWrapper>
  );
}

export function PageSection({ children }) {
  return <Section>{children}</Section>;
}

export function PageCard({ children }) {
  return <Card>{children}</Card>;
}
