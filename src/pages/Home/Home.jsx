import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import {
  Hero,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroHighlight,
  HeroDescription,
  HeroActions,
  HeroStats,
  StatItem,
  StatValue,
  StatLabel,
  HeroVisual,
  LetterPreview,
  LetterPreviewHeader,
  LetterPreviewDots,
  Dot,
  LetterMeta,
  LetterLabel,
  LetterTitle,
  LetterBody,
  LetterLine,
  FloatingCard,
  FloatingCardTitle,
  FloatingCardText,
  Section,
  SectionHeader,
  SectionEyebrow,
  SectionTitle,
  SectionDescription,
  BenefitsGrid,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  BenefitText,
  CategoryPreviewGrid,
  CategoryPreviewCard,
  CategoryTag,
  CategoryTitle,
  CategoryText,
  FinalCta,
  FinalCtaContent,
  FinalCtaTitle,
  FinalCtaText,
} from "./Home.styles";

const benefits = [
  {
    icon: "🌍",
    title: "Englisch rein, deutscher Brief raus",
    text: "Beschreibe dein Anliegen auf Englisch oder Deutsch. BriefPilot ist auf deutsche Schreiben ausgerichtet.",
  },
  {
    icon: "🧠",
    title: "Sachlich und professionell",
    text: "Du bekommst Formulierungen, die ruhig, verständlich und ernsthaft wirken.",
  },
  {
    icon: "⚡",
    title: "Direkt nutzbar",
    text: "Kopieren, anpassen und abschicken. Ohne stundenlanges Grübeln über jedes Wort.",
  },
];

const categoryPreviews = [
  {
    tag: "Beschwerden",
    title: "Wenn etwas schiefgelaufen ist",
    text: "Für Rückerstattung, falsche Lieferung, beschädigte Ware oder schlechten Service.",
    to: "/erstellen/beschwerde",
  },
  {
    tag: "Widersprüche",
    title: "Wenn du reagieren musst",
    text: "Für Bescheide, Forderungen, Mahnungen oder Entscheidungen, die du prüfen lassen willst.",
    to: "/erstellen/widerspruch",
  },
  {
    tag: "Vermieter",
    title: "Wenn es sachlich bleiben soll",
    text: "Für Nebenkosten, Mängel, Rückfragen oder klare Kommunikation rund um die Wohnung.",
    to: "/erstellen/vermieter",
  },
  {
    tag: "Job & Bewerbung",
    title: "Wenn der Ton stimmen muss",
    text: "Für Recruiter-Antworten, Gehaltsvorstellungen, Nachfragen oder professionelle Nachrichten.",
    to: "/erstellen/bewerbung",
  },
];

export function Home() {
  return (
    <>
      <Hero>
        <HeroContent>
          <HeroBadge>Dein Assistent für wichtige Schreiben</HeroBadge>

          <HeroTitle>
            Schreiben, die <HeroHighlight>ernst genommen</HeroHighlight> werden.
          </HeroTitle>

          <HeroDescription>
            BriefPilot hilft dir, Beschwerden, Widersprüche und wichtige
            Alltagsschreiben klar, sachlich und professionell auf Deutsch zu
            formulieren — auch wenn du deine Situation lieber auf Englisch
            beschreibst.
          </HeroDescription>

          <HeroActions>
            <Button as={Link} to="/kategorien" size="large">
              Schreiben erstellen
            </Button>
            <Button
              as={Link}
              to="/ueber-briefpilot"
              variant="secondary"
              size="large"
            >
              So funktioniert es
            </Button>
          </HeroActions>

          <HeroStats aria-label="BriefPilot Vorteile">
            <StatItem>
              <StatValue>4</StatValue>
              <StatLabel>Kategorien</StatLabel>
            </StatItem>

            <StatItem>
              <StatValue>5 Min.</StatValue>
              <StatLabel>bis zum Entwurf</StatLabel>
            </StatItem>

            <StatItem>
              <StatValue>0</StatValue>
              <StatLabel>Juristendeutsch</StatLabel>
            </StatItem>
          </HeroStats>
        </HeroContent>

        <HeroVisual aria-label="Briefvorschau">
          <LetterPreview>
            <LetterPreviewHeader>
              <LetterPreviewDots aria-hidden="true">
                <Dot />
                <Dot />
                <Dot />
              </LetterPreviewDots>
              <LetterMeta>BriefPilot Entwurf</LetterMeta>
            </LetterPreviewHeader>

            <LetterLabel>Beschwerde</LetterLabel>
            <LetterTitle>Rückerstattung wegen falscher Lieferung</LetterTitle>

            <LetterBody>
              <LetterLine $width="88%" />
              <LetterLine $width="94%" />
              <LetterLine $width="72%" />
              <LetterLine $width="84%" />
              <LetterLine $width="58%" />
            </LetterBody>
          </LetterPreview>

          <FloatingCard>
            <FloatingCardTitle>Ton: sachlich & deutlich</FloatingCardTitle>
            <FloatingCardText>
              Klar formuliert, ohne aggressiv zu wirken.
            </FloatingCardText>
          </FloatingCard>
        </HeroVisual>
      </Hero>

      <Section>
        <SectionHeader>
          <SectionEyebrow>Warum BriefPilot?</SectionEyebrow>
          <SectionTitle>
            Weil wichtige Schreiben nicht kompliziert sein müssen.
          </SectionTitle>
          <SectionDescription>
            Viele Menschen wissen genau, was passiert ist — aber nicht, wie sie
            es richtig formulieren sollen. Genau da setzt BriefPilot an.
          </SectionDescription>
        </SectionHeader>

        <BenefitsGrid>
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title}>
              <BenefitIcon>{benefit.icon}</BenefitIcon>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitText>{benefit.text}</BenefitText>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </Section>

      <Section>
        <SectionHeader>
          <SectionEyebrow>Kategorien</SectionEyebrow>
          <SectionTitle>
            Für Situationen, in denen der richtige Ton zählt.
          </SectionTitle>
          <SectionDescription>
            Starte mit einer Kategorie, beantworte ein paar Fragen und erhalte
            einen ersten professionellen Entwurf.
          </SectionDescription>
        </SectionHeader>

        <CategoryPreviewGrid>
          {categoryPreviews.map((category) => (
            <CategoryPreviewCard key={category.tag} as={Link} to={category.to}>
              <CategoryTag>{category.tag}</CategoryTag>
              <CategoryTitle>{category.title}</CategoryTitle>
              <CategoryText>{category.text}</CategoryText>
            </CategoryPreviewCard>
          ))}
        </CategoryPreviewGrid>
      </Section>

      <FinalCta>
        <FinalCtaContent>
          <FinalCtaTitle>Bereit für dein erstes Schreiben?</FinalCtaTitle>
          <FinalCtaText>
            Wähle eine Kategorie und erstelle einen klaren Entwurf, den du
            direkt weiterverwenden kannst.
          </FinalCtaText>
        </FinalCtaContent>

        <Button as={Link} to="/kategorien" size="large">
          Jetzt starten
        </Button>
      </FinalCta>
    </>
  );
}
