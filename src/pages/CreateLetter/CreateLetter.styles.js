import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: clamp(1.5rem, 5vw, 3rem);
  align-items: start;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const FormArea = styled.section`
  min-width: 0;
`;

export const SidePanel = styled.aside`
  position: sticky;
  top: 6.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: static;
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
  font-weight: 800;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
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

export const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

export const FieldGroup = styled.div`
  display: grid;
  gap: 1rem;
  padding: clamp(1rem, 3vw, 1.4rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.78);
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const ProgressCard = styled.div`
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(255, 255, 255, 0.82);
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const CategoryBadge = styled.p`
  width: fit-content;
  margin: 0 0 1rem;
  padding: 0.45rem 0.75rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.82rem;
  font-weight: 900;
`;

export const ProgressTitle = styled.h2`
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.35rem;
  line-height: 1.1;
  letter-spacing: -0.05em;
`;

export const ProgressText = styled.p`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  font-weight: 700;
`;

export const Checklist = styled.ul`
  display: grid;
  gap: 0.7rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ChecklistItem = styled.li`
  position: relative;
  padding-left: 1.55rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
  line-height: 1.55;
  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0;
    color: ${({ theme }) => theme.colors.success};
    font-weight: 900;
  }
`;

export const ErrorBox = styled.section`
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
