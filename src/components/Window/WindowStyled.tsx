import styled from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";

const WindowStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 350px;
  height: 100%;
  border: 2px solid #000;
  border-radius: 4px;
  padding: 18px;
  margin: 0 auto;

  .title {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 55px;
    &__day {
      font-family: ${mainStyleFonts.mainFont};
      font-weight: ${mainStyleFonts.mainFontBold};
      color: ${mainStyleColors.secondaryColor};
      font-size: 3.5rem;
      margin: 10px;
    }
    &__tea {
      font-weight: ${mainStyleFonts.mainFontBold};
      color: ${mainStyleColors.secondaryColor};
      font-size: 2rem;
    }
  }
  h3 {
    font-family: ${mainStyleFonts.secondaryFont};
    font-weight: ${mainStyleFonts.secondaryFontBold};
    color: ${mainStyleColors.accentLightColor};
    margin: 13px 0;
  }
  .footer {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
    width: 310px;
    justify-content: space-between;
    &__box {
      display: flex;
      gap: 30px;
    }
    &__icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      &-temperature {
        margin-bottom: 7px;
      }
    }
  }
`;

export default WindowStyled;
