import styled from "styled-components";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleColors from "../../styles/mainStyleColors";

const SelectFormInputStyled = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 10px 20px 10px;
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;

  .form__select {
    cursor: pointer;
    padding: 0 60px;
    border-style: none;
    width: 320px;
    height: 55px;
    outline: none;
    resize: none;
    border-radius: 4px;
    background-color: ${mainStyleColors.mainColor};
    color: ${mainStyleColors.accentColor};
    font-family: inherit;
    font-size: ${mainStyleFonts.mainFontSize};
    position: relative;
    ::placeholder {
      color: ${mainStyleColors.accentColor};
    }
    ::-webkit-scrollbar {
      display: none;
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
    font-size: 22px;
    color: ${mainStyleColors.neutralColor};
  }
`;

export default SelectFormInputStyled;
