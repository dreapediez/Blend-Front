import styled from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";

const WindowStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 320px;
  height: 100%;
  border: 2px solid ${mainStyleColors.accentColor};
  border-radius: 4px;
  padding: 20px;
  margin: 0 auto 30px;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    height: 55px;
    max-width: 260px;

    &-day {
      font-family: ${mainStyleFonts.mainFont};
      font-weight: ${mainStyleFonts.mainFontBold};
      color: ${mainStyleColors.secondaryColor};
      font-size: 3rem;
    }
    &-tea {
      font-weight: ${mainStyleFonts.mainFontBold};
      color: ${mainStyleColors.secondaryColor};
      font-size: 2rem;
    }
  }

  .card {
    display: flex;
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 200px;
  }

  h3 {
    font-family: ${mainStyleFonts.secondaryFont};
    font-weight: ${mainStyleFonts.secondaryFontBold};
    color: ${mainStyleColors.accentLightColor};
    margin: 13px 0;
  }

  .footer {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
    height: 100%;
    justify-content: space-around;

    &__box {
      display: flex;
    }
    &__icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      margin-bottom: 15px;

      &-temperature {
        margin-bottom: 7px;
      }
    }
  }
`;

export default WindowStyled;
