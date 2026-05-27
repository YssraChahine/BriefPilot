import styled from "styled-components";

export const PageGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 330px;
  gap: clamp(1.5rem, 5vw, 3rem);
  align-items: start;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const ResultArea = styled.section`
  min-width: 0;
`;

export const SidePanel = styled.aside`
  position: sticky;
  top: 6.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: static;
  }
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
  max-width: 760px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(2.3rem, 6vw, 4.8rem);
  line-height: 0.92;
  letter-spacing: -0.085em;
`;

export const Description = styled.p`
  max-width: 680px;
  margin: 0 0 2rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.75;
`;

export const LetterCard = styled.article`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.86);
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

export const LetterHeader = styled.header`
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(248, 250, 252, 0.8);
`;

export const SubjectLabel = styled.p`
  width: fit-content;
  margin: 0 0 0.55rem;
  padding: 0.35rem 0.62rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const SubjectTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(1.35rem, 3vw, 2rem);
  line-height: 1.1;
  letter-spacing: -0.05em;
`;

export const LetterBody = styled.div`
  padding: clamp(1.1rem, 3vw, 1.7rem);
`;

export const LetterParagraph = styled.p`
  margin: 0 0 1rem;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  line-height: 1.8;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;

export const InfoCard = styled.div`
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.82);
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const InfoTitle = styled.h2`
  margin-bottom: 0.65rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.35rem;
  line-height: 1.1;
  letter-spacing: -0.05em;
`;

export const InfoText = styled.p`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
  line-height: 1.65;
`;

export const MetaList = styled.dl`
  display: grid;
  gap: 0.7rem;
  margin: 0;
`;

export const MetaItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 0.7rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  span {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.9rem;
    font-weight: 700;
  }
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.9rem;
    text-align: right;
    text-transform: capitalize;
  }
`;

export const EmptyState = styled.section`
  max-width: 620px;
  padding: clamp(1.2rem, 4vw, 2rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.82);
  box-shadow: ${({ theme }) => theme.shadows.card};
  h1 {
    margin-bottom: 0.7rem;
    font-size: clamp(2rem, 5vw, 3.2rem);
    line-height: 1;
    letter-spacing: -0.07em;
  }
  p {
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.7;
  }
`;
