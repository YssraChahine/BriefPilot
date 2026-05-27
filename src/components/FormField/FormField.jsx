import {
  FieldWrapper,
  Label,
  Hint,
  Input,
  Textarea,
  Select,
  ErrorMessage,
} from "./FormField.styles";

export function FormField({
  id,
  label,
  hint,
  error,
  type = "text",
  value,
  onChange,
  placeholder,
  options = [],
  required = false,
}) {
  const sharedProps = {
    id,
    value,
    onChange,
    placeholder,
    required,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-error` : hint ? `${id}-hint` : undefined,
  };

  return (
    <FieldWrapper>
      <Label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </Label>

      {hint && <Hint id={`${id}-hint`}>{hint}</Hint>}

      {type === "textarea" && <Textarea rows="6" {...sharedProps} />}

      {type === "select" && (
        <Select {...sharedProps}>
          <option value="" disabled>
            Bitte auswählen
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      )}

      {type !== "textarea" && type !== "select" && (
        <Input type={type} {...sharedProps} />
      )}

      {error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}
    </FieldWrapper>
  );
}
