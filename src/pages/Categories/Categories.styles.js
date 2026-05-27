import styled from "styled-components";

export const PageHeader = styled.header`
  max-width: 780px;
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
  max-width: 680px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.75;
`;

export const CategoriesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const InfoBox = styled.aside`
  margin-top: 1.25rem;
  padding: 1.2rem 1.35rem;
  border: 1px solid rgba(37, 99, 235, 0.18);
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(219, 234, 254, 0.55);
`;

export const InfoTitle = styled.h2`
  margin-bottom: 0.35rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  letter-spacing: -0.03em;
`;

export const InfoText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
  line-height: 1.65;
`;
