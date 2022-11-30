import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleSizes from "../../styles/mainStyleSizes";

interface ButtonStyledProps {
  styletype: "dark" | "light" | "darkSmall" | "lightSmall";
}

const darkButton = css`
  background-color: ${mainStyleColors.accentColor};
  color: ${mainStyleColors.textLightColor};
  font-size: ${mainStyleFonts.mediumFontSize};
  width: 320px;
  height: 55px;
  border: none;
  &:hover {
    background-color: ${mainStyleColors.accentColorHover};
  }
`;
const lightButton = css`
  background-color: ${mainStyleColors.neutralColor};
  color: ${mainStyleColors.accentColor};
  font-size: ${mainStyleFonts.mediumFontSize};
  width: 320px;
  height: 55px;
  border: 2px solid ${mainStyleColors.accentColor};
  &:hover {
    background-color: ${mainStyleColors.accentColorHover};
    border: 2px solid ${mainStyleColors.accentColorHover};
    color: ${mainStyleColors.neutralColor};
  }
`;
const darkSmallButton = css`
  background-color: ${mainStyleColors.accentColor};
  font-size: ${mainStyleFonts.smallFontSize};
  color: ${mainStyleColors.textLightColor};
  width: 100px;
  height: 75px;
  border: none;
  &:hover {
    background-color: ${mainStyleColors.accentColorHover};
  }
`;
const lightSmallButton = css`
  background-color: ${mainStyleColors.neutralColor};
  font-size: ${mainStyleFonts.smallFontSize};
  color: ${mainStyleColors.accentColor};
  width: 100px;
  height: 75px;
  border: 2px solid ${mainStyleColors.accentColor};
  &:hover {
    background-color: ${mainStyleColors.accentColorHover};
    border: none;
    color: ${mainStyleColors.neutralColor};
  }
`;

const styledAsButton = css<ButtonStyledProps>`
  padding: ${mainStyleSizes.buttonPadding};
  padding: 12px 0;
  border-radius: 4px;
  font-family: ${mainStyleFonts.secondaryFont};
  font-weight: ${mainStyleFonts.mainFontRegular};
  text-align: center;
  cursor: pointer;
  outline: none;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    gap: 5px;
  }
  .icon {
    font-size: ${mainStyleFonts.superFontSize};
  }
  ${({ styletype }) => styletype === "dark" && darkButton}
  ${({ styletype }) => styletype === "light" && lightButton}
  ${({ styletype }) => styletype === "darkSmall" && darkSmallButton}
  ${({ styletype }) => styletype === "lightSmall" && lightSmallButton}
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${styledAsButton}
`;

export const LinkStyled = styled(Link)<ButtonStyledProps>`
  ${styledAsButton}
`;
