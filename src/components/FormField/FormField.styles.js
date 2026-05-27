import styled from "styled-components";

export const FieldWrapper = styled.div`
  display: grid;
  gap: 0.45rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;
  font-size: 0.95rem;
`;

export const Hint = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const fieldStyles = `
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.medium};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.9rem 1rem;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
  &::placeholder {
    color: #94a3b8;
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const Input = styled.input`
  ${fieldStyles}
`;

export const Textarea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
  min-height: 9rem;
`;

export const Select = styled.select`
  ${fieldStyles}
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.88rem;
  font-weight: 700;
`;
