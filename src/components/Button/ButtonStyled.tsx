import styled, { css } from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleSizes from "../../styles/mainStyleSizes";

interface ButtonStyledProps {
  buttonType: "dark" | "light" | "darkSmall" | "lightSmall";
}

const darkButton = css`
  background-color: ${mainStyleColors.accentColor};
  color: ${mainStyleColors.textLightColor};
  width: 320px;
  height: 55px;
  border: none;
`;
const lightButton = css`
  background-color: transparent;
  color: ${mainStyleColors.accentColor};
  width: 320px;
  height: 55px;
  border: 2px solid ${mainStyleColors.accentColor};
`;
const darkSmallButton = css`
  background-color: ${mainStyleColors.accentColor};
  color: ${mainStyleColors.textLightColor};
  width: 100px;
  height: 75px;
  border: none;
`;
const lightSmallButton = css`
  background-color: transparent;
  color: ${mainStyleColors.accentColor};
  width: 100px;
  height: 75px;
  border: 2px solid ${mainStyleColors.accentColor};
`;

const ButtonStyled = styled.button<ButtonStyledProps>`
  padding: ${mainStyleSizes.buttonPadding};
  padding: 0;
  border-radius: 4px;
  font-family: ${mainStyleFonts.secondaryFont};
  font-weight: ${mainStyleFonts.mainFontRegular};
  font-size: ${mainStyleFonts.mediumFontSize};
  cursor: pointer;
  ${({ buttonType }) => buttonType === "dark" && darkButton}
  ${({ buttonType }) => buttonType === "light" && lightButton}
  ${({ buttonType }) => buttonType === "darkSmall" && darkSmallButton}
  ${({ buttonType }) => buttonType === "lightSmall" && lightSmallButton}
`;

export default ButtonStyled;
