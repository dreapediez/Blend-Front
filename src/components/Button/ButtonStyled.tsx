import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleSizes from "../../styles/mainStyleSizes";

interface ButtonStyledProps {
  styletype:
    | "dark"
    | "light"
    | "darkSmall"
    | "lightSmall"
    | "darkSuperSmall"
    | "lightSuperSmall";
}

const darkButton = css`
  background-color: ${mainStyleColors.accentColor};
  color: ${mainStyleColors.textLightColor};
  font-size: ${mainStyleFonts.mediumFontSize};
  width: 320px;
  height: 55px;
  border: 2px solid ${mainStyleColors.accentColor};
  &:hover {
    background-color: ${mainStyleColors.accentColorHover};
    border: 2px solid ${mainStyleColors.secondaryColor};
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
  border: 2px solid ${mainStyleColors.accentColor};
  &:hover {
    background-color: ${mainStyleColors.accentColorHover};
    border: 2px solid ${mainStyleColors.secondaryColor};
  }
`;

const lightSmallButton = css`
  background-color: ${mainStyleColors.neutralColor};
  font-size: ${mainStyleFonts.smallFontSize};
  color: ${mainStyleColors.accentColor};
  width: 100px;
  height: 75px;
  border: 2px solid ${mainStyleColors.accentColor};
  font-weight: ${mainStyleFonts.mainFontBold};
  &:hover {
    background-color: ${mainStyleColors.accentColorHover};
    border: none;
    color: ${mainStyleColors.neutralColor};
  }
`;

const lightSuperSmallButton = css`
  background-color: ${mainStyleColors.neutralColor};
  font-size: 0.8rem;
  color: ${mainStyleColors.accentColor};
  width: 75px;
  height: 65px;
  border: 2px solid ${mainStyleColors.accentColor};
  font-weight: ${mainStyleFonts.mainFontBold};
  &:hover {
    background-color: ${mainStyleColors.accentColorHover};
    border: none;
    color: ${mainStyleColors.neutralColor};
  }
`;

const darkSuperSmallButton = css`
  background-color: ${mainStyleColors.accentColor};
  font-size: 0.8rem;
  color: ${mainStyleColors.textLightColor};
  width: 75px;
  height: 65px;
  border: 2px solid ${mainStyleColors.accentColor};
  &:hover {
    background-color: ${mainStyleColors.accentColorHover};
    border: 2px solid ${mainStyleColors.secondaryColor};
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
    gap: 5px;
  }
  .icon {
    font-size: ${mainStyleFonts.superFontSize};
  }
  ${({ styletype }) => styletype === "dark" && darkButton}
  ${({ styletype }) => styletype === "light" && lightButton}
  ${({ styletype }) => styletype === "darkSmall" && darkSmallButton}
  ${({ styletype }) => styletype === "lightSmall" && lightSmallButton}
  ${({ styletype }) => styletype === "darkSuperSmall" && darkSuperSmallButton}
  ${({ styletype }) => styletype === "lightSuperSmall" && lightSuperSmallButton}
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${styledAsButton}
`;

export const LinkStyled = styled(Link)<ButtonStyledProps>`
  ${styledAsButton}
`;
