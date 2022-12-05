import SimpleFormInputStyled from "./SimpleFormInputStyled";

interface SimpleFormInputProps {
  className?: string;
  name: string;
  action?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const SimpleFormInput = ({
  name,
  action,
}: SimpleFormInputProps): JSX.Element => {
  return (
    <SimpleFormInputStyled>
      <textarea
        className="form__input"
        name={name}
        onChange={action}
        autoComplete="off"
        aria-label={name}
        rows={4}
        cols={50}
      />
    </SimpleFormInputStyled>
  );
};

export default SimpleFormInput;
