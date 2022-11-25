import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import useUser from "../../hooks/useUser/useUser";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  const { registerUser } = useUser();

  const initialRegisterState = {
    username: "",
    password: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialRegisterState);

  const handleFormValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    await registerUser(formData);
  };
  return (
    <RegisterPageStyled>
      <h2 className="resiter-page__title">Join our community</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__item">
          <FormInput
            placeholder="Username"
            type="text"
            name="username"
            required={true}
            action={handleFormValues}
          />
          <FormInput
            placeholder="Password"
            type="password"
            name="password"
            required={true}
            action={handleFormValues}
          />
          <FormInput
            placeholder="Email"
            type="email"
            name="email"
            required={true}
            action={handleFormValues}
          />
        </div>
        <div className="form-footer">
          <Button
            type="button"
            className="form-footer__button"
            text="Register"
            styletype="light"
          />
          <span className="form-footer__link">
            Already registered?
            <Link to="/login" className="form-footer__link-anchor">
              Login now
            </Link>
          </span>
        </div>
      </form>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
