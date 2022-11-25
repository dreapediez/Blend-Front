import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";
import { ReactComponent as Logo } from "../../assets/blend-logo.svg";

const Header = (): JSX.Element => {
  return (
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
  );
};

export default Header;
