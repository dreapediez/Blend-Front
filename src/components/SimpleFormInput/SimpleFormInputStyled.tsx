import styled from "styled-components";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleColors from "../../styles/mainStyleColors";

const SimpleFormInputStyled = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 10px 20px 10px;

  .form__input {
    padding: 5px 10px;
    border: none;
    width: 320px;
    height: 55px;
    outline: none;
    resize: none;
    border-radius: 4px;
    background-color: ${mainStyleColors.mainColor};
    color: ${mainStyleColors.accentColor};
    font-family: ${mainStyleFonts.secondaryFont};
    font-size: ${mainStyleFonts.mainFontSize};
    transform: translateY(10%);
    position: relative;
    ::placeholder {
      color: ${mainStyleColors.accentColor};
    }
  }
`;

export default SimpleFormInputStyled;
