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
  display: grid;
  gap: 1rem;
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
  margin: 0 0 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.75;
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
`;

export const CopyStatus = styled.p`
  width: fit-content;
  margin: 0 0 1.2rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgba(22, 163, 74, 0.2);
  border-radius: ${({ theme }) => theme.radius.medium};
  background: rgba(220, 252, 231, 0.75);
  color: ${({ theme }) => theme.colors.success};
  font-size: 0.92rem;
  font-weight: 800;
`;

export const EditNotice = styled.p`
  width: fit-content;
  max-width: 680px;
  margin: 0 0 1.2rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgba(37, 99, 235, 0.18);
  border-radius: ${({ theme }) => theme.radius.medium};
  background: rgba(219, 234, 254, 0.72);
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.92rem;
  font-weight: 800;
  line-height: 1.5;
`;

export const LanguageModeNotice = styled.p`
  max-width: 760px;
  margin: 0 0 1.2rem;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(245, 158, 11, 0.24);
  border-radius: ${({ theme }) => theme.radius.medium};
  background: rgba(254, 243, 199, 0.72);
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1.6;
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

export const SubjectLabel = styled.label`
  width: fit-content;
  display: block;
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

export const SubjectInput = styled.input`
  width: 100%;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.medium};
  background: rgba(255, 255, 255, 0.72);
  color: ${({ theme }) => theme.colors.text};
  padding: 0.8rem 0.9rem;
  font-size: clamp(1.15rem, 3vw, 1.6rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.05em;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const LetterBody = styled.div`
  padding: clamp(1.1rem, 3vw, 1.7rem);
`;

export const LetterTextarea = styled.textarea`
  width: 100%;
  min-height: 620px;
  resize: vertical;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.medium};
  background: rgba(255, 255, 255, 0.62);
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.8;
  white-space: pre-wrap;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 460px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;

export const SmallActionButton = styled.button`
  align-self: center;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  padding: 0.7rem 0.2rem;
  font-size: 0.92rem;
  font-weight: 800;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.radius.small};
  }
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

export const Notice = styled.aside`
  padding: 1.1rem;
  border: 1px solid rgba(245, 158, 11, 0.22);
  border-radius: ${({ theme }) => theme.radius.large};
  background: rgba(254, 243, 199, 0.6);
`;

export const NoticeTitle = styled.h2`
  margin-bottom: 0.45rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.05rem;
  letter-spacing: -0.03em;
`;

export const NoticeText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.92rem;
  line-height: 1.6;
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
