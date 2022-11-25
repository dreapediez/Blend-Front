import FormInputStyled from "./FormInputStyled";
import { FiUser, FiLock, FiMail, FiImage } from "react-icons/fi";

interface FormInputProps {
  className?: string;
  placeholder: string;
  type: string;
  name: string;
  action?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput = ({
  placeholder,
  type,
  name,
  action,
  required = false,
}: FormInputProps): JSX.Element => {
  return (
    <FormInputStyled>
      <span className="form__box">
        {name === "username" && <FiUser className="form__icon" />}
        {name === "password" && <FiLock className="form__icon" />}
        {name === "email" && <FiMail className="form__icon" />}
        {name === "image" && <FiImage className="form__icon" />}
      </span>
      <input
        className="form__input"
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={action}
        autoComplete="off"
        required={required}
        aria-label={name}
      />
    </FormInputStyled>
  );
};

export default FormInput;
