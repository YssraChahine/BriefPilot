import styled from "styled-components";

export const Card = styled.article`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(1.2rem, 3vw, 1.5rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.78);
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(37, 99, 235, 0.35);
    background: rgba(255, 255, 255, 0.96);
    box-shadow: ${({ theme }) => theme.shadows.soft};
  }
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 4px;
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Icon = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  display: grid;
  place-items: center;
  border-radius: 1.1rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  font-size: 1.45rem;
`;

export const Label = styled.span`
  padding: 0.4rem 0.65rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(248, 250, 252, 0.9);
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.78rem;
  font-weight: 900;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(1.45rem, 3vw, 1.8rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

export const ExampleList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ExampleItem = styled.li`
  padding: 0.38rem 0.62rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 255, 255, 0.7);
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.82rem;
  font-weight: 700;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ToneHint = styled.p`
  max-width: 250px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 1.45;
`;

export const Arrow = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 1.25rem;
  font-weight: 900;
`;
