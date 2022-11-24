import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <h2 className="resiter-page__title">Join our community</h2>
      <form>
        <div className="form__item">
          <FormInput
            className="form__item-username"
            placeholder="Username"
            type="text"
            name="username"
            required={true}
          />
          <FormInput
            className="form__item-username"
            placeholder="Password"
            type="password"
            name="password"
            required={true}
          />
          <FormInput
            className="form__item-username"
            placeholder="Email"
            type="email"
            name="email"
            required={true}
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
