import SimpleFormInputStyled from "./SimpleFormInputStyled";

interface SimpleFormInputProps {
  className?: string;
  placeholder: string;
  type: string;
  name: string;
  action?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const SimpleFormInput = ({
  placeholder,
  type,
  name,
  action,
  required = false,
}: SimpleFormInputProps): JSX.Element => {
  return (
    <SimpleFormInputStyled>
      <textarea
        className="form__input"
        placeholder={placeholder}
        // type={type}
        name={name}
        // onChange={action}
        autoComplete="off"
        required={required}
        aria-label={name}
      />
    </SimpleFormInputStyled>
  );
};

export default SimpleFormInput;
