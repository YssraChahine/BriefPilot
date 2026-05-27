import styled from "styled-components";

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.7rem;
`;

export const PreviewCard = styled.article`
  max-width: 680px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.82);
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: clamp(1.25rem, 4vw, 2rem);
`;

export const PreviewLabel = styled.p`
  width: fit-content;
  margin: 0 0 1rem;
  padding: 0.4rem 0.7rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const PreviewText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.05rem;
  line-height: 1.8;
`;
