import styled, { css } from "styled-components";

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
      border-color: ${({ theme }) => theme.colors.primaryDark};
      transform: translateY(-1px);
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    &:hover {
      background: ${({ theme }) => theme.colors.primaryLight};
      border-color: ${({ theme }) => theme.colors.primaryLight};
      transform: translateY(-1px);
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textMuted};
    border: 1px solid transparent;
    &:hover {
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.primaryLight};
    }
  `,
};

const sizes = {
  small: css`
    min-height: 2.35rem;
    padding: 0.55rem 0.9rem;
    font-size: 0.9rem;
  `,
  medium: css`
    min-height: 2.75rem;
    padding: 0.75rem 1.15rem;
    font-size: 0.95rem;
  `,
  large: css`
    min-height: 3.25rem;
    padding: 0.9rem 1.35rem;
    font-size: 1rem;
  `,
};

export const StyledButton = styled.button`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
  ${({ $variant }) => variants[$variant]}
  ${({ $size }) => sizes[$size]}
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 3px;
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }
`;
