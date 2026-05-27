import styled from "styled-components";

export const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);
  min-height: calc(100vh - 8rem);
  padding: clamp(2rem, 5vw, 4rem) 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const HeroContent = styled.div`
  max-width: 720px;
`;

export const HeroBadge = styled.p`
  width: fit-content;
  margin: 0 0 1rem;
  padding: 0.45rem 0.75rem;
  border: 1px solid rgba(37, 99, 235, 0.18);
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(219, 234, 254, 0.72);
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  max-width: 720px;
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(3rem, 8vw, 6.7rem);
  line-height: 0.88;
  letter-spacing: -0.095em;
`;

export const HeroHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const HeroDescription = styled.p`
  max-width: 620px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.75;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
`;

export const HeroStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
`;

export const StatItem = styled.div`
  min-width: 9rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.68);
`;

export const StatValue = styled.strong`
  display: block;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.45rem;
  letter-spacing: -0.05em;
`;

export const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
  font-weight: 700;
`;

export const HeroVisual = styled.div`
  position: relative;
  min-height: 520px;
  display: grid;
  place-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 420px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: auto;
    place-items: stretch;
  }
`;

export const LetterPreview = styled.article`
  width: min(100%, 460px);
  min-height: 520px;
  padding: clamp(1.2rem, 4vw, 2rem);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 2rem;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.96),
      rgba(255, 255, 255, 0.82)
    ),
    ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transform: rotate(2deg);
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 390px;
    transform: none;
  }
`;

export const LetterPreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.2rem;
  margin-bottom: 1.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const LetterPreviewDots = styled.div`
  display: flex;
  gap: 0.35rem;
`;

export const Dot = styled.span`
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.border};
`;

export const LetterMeta = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.82rem;
  font-weight: 800;
`;

export const LetterLabel = styled.p`
  width: fit-content;
  margin: 0 0 1rem;
  padding: 0.42rem 0.7rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const LetterTitle = styled.h2`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(1.7rem, 4vw, 2.55rem);
  line-height: 1;
  letter-spacing: -0.07em;
`;

export const LetterBody = styled.div`
  display: grid;
  gap: 0.9rem;
`;

export const LetterLine = styled.div`
  width: ${({ $width }) => $width || "100%"};
  height: 0.9rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: linear-gradient(
    90deg,
    rgba(37, 99, 235, 0.14),
    rgba(100, 116, 139, 0.12)
  );
`;

export const FloatingCard = styled.div`
  position: absolute;
  right: 0;
  bottom: 4rem;
  width: min(85%, 280px);
  padding: 1.1rem;
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.9);
  box-shadow: ${({ theme }) => theme.shadows.card};
  backdrop-filter: blur(18px);
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: relative;
    right: auto;
    bottom: auto;
    width: 100%;
    margin-top: 1rem;
  }
`;

export const FloatingCardTitle = styled.h3`
  margin-bottom: 0.35rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  letter-spacing: -0.03em;
`;

export const FloatingCardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.92rem;
  line-height: 1.55;
`;

export const Section = styled.section`
  padding: clamp(3rem, 8vw, 6rem) 0;
`;

export const SectionHeader = styled.header`
  max-width: 760px;
  margin-bottom: 2rem;
`;

export const SectionEyebrow = styled.p`
  width: fit-content;
  margin: 0 0 0.8rem;
  padding: 0.4rem 0.7rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  max-width: 760px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.08em;
`;

export const SectionDescription = styled.p`
  max-width: 660px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.05rem;
  line-height: 1.75;
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const BenefitCard = styled.article`
  min-height: 250px;
  padding: clamp(1.2rem, 3vw, 1.6rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.75);
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.soft};
  }
`;

export const BenefitIcon = styled.div`
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  margin-bottom: 1.4rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  font-size: 1.35rem;
`;

export const BenefitTitle = styled.h3`
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  letter-spacing: -0.04em;
`;

export const BenefitText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

export const CategoryPreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryPreviewCard = styled.article`
  min-height: 240px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.72);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    border-color: rgba(37, 99, 235, 0.32);
    background: rgba(255, 255, 255, 0.92);
    box-shadow: ${({ theme }) => theme.shadows.card};
  }
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 4px;
  }
`;

export const CategoryTag = styled.p`
  width: fit-content;
  margin: 0 0 1rem;
  padding: 0.35rem 0.65rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.75rem;
  font-weight: 900;
`;

export const CategoryTitle = styled.h3`
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  line-height: 1.1;
  letter-spacing: -0.04em;
`;

export const CategoryText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
  line-height: 1.65;
`;

export const FinalCta = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-top: 3rem;
  padding: clamp(1.4rem, 4vw, 2rem);
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 2rem;
  background:
    linear-gradient(
      135deg,
      rgba(219, 234, 254, 0.96),
      rgba(255, 255, 255, 0.82)
    ),
    ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const FinalCtaContent = styled.div`
  max-width: 680px;
`;

export const FinalCtaTitle = styled.h2`
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1;
  letter-spacing: -0.07em;
`;

export const FinalCtaText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.02rem;
  line-height: 1.7;
`;
