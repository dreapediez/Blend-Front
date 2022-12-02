import styled from "styled-components";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleColors from "../../styles/mainStyleColors";

const SimpleFormInputStyled = styled.label`
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
    transform: translateY(10%);
    position: relative;
    ::placeholder {
      color: ${mainStyleColors.accentColor};
    }
  }
`;

export default SimpleFormInputStyled;
