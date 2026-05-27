import styled from "styled-components";

export const PageHeaderWrapper = styled.header`
  max-width: 760px;
  margin-bottom: 2rem;
`;

export const Eyebrow = styled.p`
  width: fit-content;
  margin: 0 0 0.9rem;
  padding: 0.4rem 0.7rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const PageTitle = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(2.2rem, 6vw, 4.8rem);
  line-height: 0.95;
  letter-spacing: -0.08em;
`;

export const PageDescription = styled.p`
  max-width: 680px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.7;
`;

export const Section = styled.section`
  margin-top: 3.5rem;
`;

export const Card = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.78);
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: clamp(1rem, 3vw, 1.5rem);
`;
