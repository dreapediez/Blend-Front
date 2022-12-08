import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import FormStyled from "../../styles/FormStyled";
import { UserCredentials } from "../../types/userTypes";

const LogInPage = (): JSX.Element => {
  const { loginUser } = useUser();
  const { getToken } = useToken();
  const navigate = useNavigate();

  const initialLoginState = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialLoginState);

  const handleFormValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const userTokenSubmit: UserCredentials = {
      username: formData.username,
      password: formData.password,
    };

    await loginUser(userTokenSubmit);

    const token = getToken();

    token && navigate("/calendar");
  };

  return (
    <FormStyled>
      <h2 className="resiter-page__title">You are back! We missed you...</h2>
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
        </div>
        <div className="form-footer">
          <Button
            type="button"
            className="form-footer__button"
            text="Log In"
            styletype="dark"
          />
          <span className="form-footer__link">
            Not a member?
            <Link to="/register" className="form-footer__link-anchor">
              Register now
            </Link>
          </span>
        </div>
      </form>
    </FormStyled>
  );
};

export default LogInPage;
