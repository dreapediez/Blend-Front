import styled from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";

const WelcomePageStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 50px 0;
  gap: 20px;
  position: absolute;

  .welcome-page__logo {
    width: 360px;
    @media only screen and (min-width: 450px) {
      width: 450px;
    }
  }
  .welcome-page__title {
    width: 360px;
    padding: 5px 20px 20px;
    font-family: ${mainStyleFonts.secondaryFont};
    color: ${mainStyleColors.textSecondaryColor};
    font-size: 25px;
    text-align: center;
    margin: 0 0 20px 0;
  }
`;

export default WelcomePageStyled;
