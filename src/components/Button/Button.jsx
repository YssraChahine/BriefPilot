import { StyledButton } from "./Button.styles";

export function Button({
  children,
  variant = "primary",
  size = "medium",
  as,
  to,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <StyledButton
      as={as}
      to={to}
      type={as ? undefined : type}
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      $size={size}
    >
      {children}
    </StyledButton>
  );
}
