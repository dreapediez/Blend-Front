import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import FormStyled from "../../styles/FormStyled";

const LogInPage = (): JSX.Element => {
  return (
    <FormStyled>
      <h2 className="resiter-page__title">Welcome to Blendcommunity!</h2>
      <form onSubmit={() => {}}>
        <div className="form__item">
          <FormInput
            placeholder="Username"
            type="text"
            name="username"
            required={true}
            action={() => {}}
          />
          <FormInput
            placeholder="Password"
            type="password"
            name="password"
            required={true}
            action={() => {}}
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
