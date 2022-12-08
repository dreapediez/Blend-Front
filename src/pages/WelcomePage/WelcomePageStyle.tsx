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
  gap: 18px;

  .welcome-page__logo {
    width: 360px;
    @media only screen and (min-width: 450px) {
      width: 450px;
    }
  }
  .welcome-page {
    &__title {
      width: 350px;
      padding: 5px 20px 20px;
      font-family: ${mainStyleFonts.secondaryFont};
      color: ${mainStyleColors.accentColor};
      font-weight: ${mainStyleFonts.mainFontBold};
      font-size: 25px;
      text-align: center;
      margin: 0;
      @media only screen and (min-width: 450px) {
        width: 450px;
      }
    }
    &__text {
      font-family: inherit;
      font-size: 20px;
      width: 350px;
      text-align: center;
      margin-bottom: 25px;
      @media only screen and (min-width: 450px) {
        width: 400px;
      }
    }
  }
`;

export default WelcomePageStyled;
