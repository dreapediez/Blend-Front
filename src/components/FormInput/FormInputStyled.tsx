import styled from "styled-components";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleColors from "../../styles/mainStyleColors";

const FormInputStyled = styled.label`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 15px 15px 15px 0;
  width: 320px;
  height: 55px;
  border-radius: 4px;
  background-color: ${mainStyleColors.mainColor};
  .form__input {
    border: none;
    outline: none;
    background-color: ${mainStyleColors.mainColor};
    color: ${mainStyleColors.accentColor};
    font-family: ${mainStyleFonts.secondaryFont};
    font-size: ${mainStyleFonts.mainFontSize};
    /* font-weight: ${mainStyleFonts.mainFontBold}; */
    transform: translateY(10%);
    margin-left: 65px;
    position: relative;
    ::placeholder {
      color: ${mainStyleColors.accentColor};
    }
  }
  .form__box {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${mainStyleColors.accentColor};
    background-color: ${mainStyleColors.accentColor};
    height: 55px;
    width: 55px;
    position: absolute;
    border-radius: 4px 0 0 4px;
  }
  .form__icon {
    min-width: 35px;
    font-size: 24px;
    transform: translateY(5%);
    color: ${mainStyleColors.neutralColor};
  }
`;

export default FormInputStyled;
