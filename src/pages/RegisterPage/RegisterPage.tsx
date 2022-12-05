import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import FormStyled from "../../styles/FormStyled";
import { UserRegisterCredentials } from "../../types/userTypes";

const RegisterPage = (): JSX.Element => {
  const { registerUser } = useUser();
  const { getToken } = useToken();
  const navigate = useNavigate();

  const initialRegisterState = {
    register_username: "",
    register_password: "",
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

    const userTokenSubmit: UserRegisterCredentials = {
      username: formData.register_username,
      password: formData.register_password,
      email: formData.email,
    };

    await registerUser(userTokenSubmit);

    const token = getToken();

    token && navigate("/calendar");
  };
  return (
    <FormStyled>
      <h2 className="resiter-page__title">Join our community</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__item">
          <FormInput
            placeholder="Username"
            type="text"
            name="register_username"
            required={true}
            action={handleFormValues}
          />
          <FormInput
            placeholder="Password"
            type="password"
            name="register_password"
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
    </FormStyled>
  );
};

export default RegisterPage;
