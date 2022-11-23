import Button from "../../components/Button/Button";
import WelcomePageStyled from "./WelcomePageStyle";
import { ReactComponent as Logo } from "../../assets/blend-logo.svg";

const HomePage = (): JSX.Element => {
  return (
    <WelcomePageStyled className="welcome-page">
      <Logo className="welcome-page__logo" />
      <h2 className="welcome-page__title">You are my favorite tea moment</h2>
      <Button
        className="welcome-page__button"
        text="Login"
        buttonType="dark"
        ariaLabel="next page"
        action={() => {}}
      />
      <Button
        className="welcome-page__button"
        text="Sign Up"
        buttonType="light"
        ariaLabel="next page"
        action={() => {}}
      />
    </WelcomePageStyled>
  );
};

export default HomePage;
