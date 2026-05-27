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
  const Component = as || "button";

  return (
    <StyledButton
      as={Component}
      to={to}
      type={Component === "button" ? type : undefined}
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      $size={size}
    >
      {children}
    </StyledButton>
  );
}
