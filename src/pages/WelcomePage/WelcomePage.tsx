import Button from "../../components/Button/Button";
import WelcomePageStyled from "./WelcomePageStyle";
import { ReactComponent as Logo } from "../../assets/blend-logo.svg";

const HomePage = (): JSX.Element => {
  return (
    <WelcomePageStyled className="welcome-page">
      <Logo
        className="welcome-page__logo"
        aria-label="A cup of tea with the text blend"
      />
      <h2 className="welcome-page__title">You are my favorite tea moment</h2>
      <Button
        className="welcome-page__button"
        text="Log In"
        buttonType="dark"
        ariaLabel="Log in page"
      />
      <Button
        className="welcome-page__button"
        text="Sign Up"
        buttonType="light"
        ariaLabel="Sign up page"
      />
    </WelcomePageStyled>
  );
};

export default HomePage;
