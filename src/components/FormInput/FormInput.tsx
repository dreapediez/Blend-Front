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
        {name === "register-username" && <FiUser className="form__icon" />}
        {name === "password" && <FiLock className="form__icon" />}
        {name === "register-password" && <FiLock className="form__icon" />}
        {name === "email" && <FiMail className="form__icon" />}
        {name === "image" && <FiImage className="form__icon" />}
      </span>
      <div className="tooltip">
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
        {name === "register-username" && (
          <span className="tiptext">
            Hi TeaMate! <br /> Username must be at least 5 characters
          </span>
        )}
        {name === "register-password" && (
          <span className="tiptext">
            Password must be at least 8 characters
          </span>
        )}
      </div>
    </FormInputStyled>
  );
};

export default FormInput;
