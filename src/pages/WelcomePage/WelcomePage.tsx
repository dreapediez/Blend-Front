import Button from "../../components/Button/Button";
import WelcomePageStyled from "./WelcomePageStyle";
import { ReactComponent as Logo } from "../../assets/blend-logo.svg";
import SnowBackgroundStyled from "./SnowBackgroundStyled";

const HomePage = (): JSX.Element => {
  const snowFlakes: string[] = [];

  for (let i = 0; i < 50; i++) {
    snowFlakes.push("snowflake");
  }

  return (
    <>
      <SnowBackgroundStyled>
        {snowFlakes.map((snow, index) => (
          <span key={index} className={snow}></span>
        ))}
        <WelcomePageStyled className="welcome-page">
          <Logo
            className="welcome-page__logo"
            aria-label="A cup of tea with the text blend"
          />
          <h2 className="welcome-page__title">
            You are my favorite tea moment
          </h2>
          <Button
            type="link"
            to="/login"
            className="welcome-page__button"
            text="Log In"
            styletype="dark"
          />
          <Button
            type="link"
            to="/register"
            className="welcome-page__button"
            text="Register"
            styletype="light"
          />
        </WelcomePageStyled>
      </SnowBackgroundStyled>
    </>
  );
};

export default HomePage;
