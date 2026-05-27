import styled from "styled-components";

export const PageHeader = styled.header`
  max-width: 860px;
  margin-bottom: clamp(2rem, 5vw, 3rem);
`;

export const Eyebrow = styled.p`
  width: fit-content;
  margin: 0 0 0.9rem;
  padding: 0.42rem 0.72rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(2.4rem, 6vw, 5rem);
  line-height: 0.92;
  letter-spacing: -0.085em;
`;

export const Description = styled.p`
  max-width: 720px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.75;
`;

export const ContentGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const TextCard = styled.article`
  padding: clamp(1.2rem, 3vw, 1.6rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.78);
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const CardTitle = styled.h2`
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.45rem;
  line-height: 1.1;
  letter-spacing: -0.05em;
`;

export const CardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.75;
`;

export const FeatureList = styled.ul`
  display: grid;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FeatureItem = styled.li`
  position: relative;
  padding-left: 1.6rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0;
    color: ${({ theme }) => theme.colors.success};
    font-weight: 900;
  }
`;

export const HighlightBox = styled.aside`
  grid-column: span 2;
  padding: clamp(1.2rem, 3vw, 1.6rem);
  border: 1px solid rgba(245, 158, 11, 0.25);
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(254, 243, 199, 0.62);
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span 1;
  }
`;

export const HighlightTitle = styled.h2`
  margin-bottom: 0.65rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.35rem;
  line-height: 1.1;
  letter-spacing: -0.05em;
`;

export const HighlightText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.75;
`;

export const CtaBox = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.25rem;
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

export const CtaContent = styled.div`
  max-width: 680px;
`;

export const CtaTitle = styled.h2`
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1;
  letter-spacing: -0.07em;
`;

export const CtaText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.02rem;
  line-height: 1.7;
`;
