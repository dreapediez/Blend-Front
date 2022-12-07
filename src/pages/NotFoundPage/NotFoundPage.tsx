import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../../assets/404.svg";
import HeaderStyled from "../../components/Header/HeaderStyled";
import SnowBackgroundStyled from "../WelcomePage/SnowBackgroundStyled";
import NotFoundPageStyled from "./NotFoundPageStyled";
import { ReactComponent as Logo } from "../../assets/blend-logo.svg";

const NotFoundPage = (): JSX.Element => {
  const snowFlakes: string[] = [];

  for (let i = 0; i < 50; i++) {
    snowFlakes.push("snowflake");
  }

  return (
    <SnowBackgroundStyled>
      {snowFlakes.map((snow, index) => (
        <span key={index} className={snow}></span>
      ))}
      <HeaderStyled className="header">
        <Link to="/">
          <Logo
            className="welcome-page__logo"
            aria-label="A cup of tea with the text blend"
            data-testid="logo-icon"
            width="360"
          />
        </Link>
      </HeaderStyled>
      <NotFoundPageStyled>
        <Icon
          width="300"
          height="300"
          aria-label="Not page found"
          data-testid="404-icon"
        />

        <span className="form-footer__link">
          Do you want some tea?
          <Link to="/calendar" className="form-footer__link-anchor">
            Back to Calendar
          </Link>
        </span>
      </NotFoundPageStyled>
    </SnowBackgroundStyled>
  );
};

export default NotFoundPage;
