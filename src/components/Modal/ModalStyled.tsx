import styled from "styled-components";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleColors from "../../styles/mainStyleColors";

interface ModalStyledProps {
  type: "error" | "success";
}

const ModalStyled = styled.div<ModalStyledProps>`
  background-color: rgb(199, 215, 237, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;

  .modal {
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media only screen and (min-width: 450px) {
      top: 40%;
    }
    background-color: ${({ type }) =>
      type === "success"
        ? mainStyleColors.secondaryColor
        : mainStyleColors.accentColor};
    border-radius: 4px;
    padding: 20px;
    width: 300px;

    &__title {
      color: ${mainStyleColors.textLightColor};
      font-weight: ${mainStyleFonts.mainFontRegular};
      font-size: ${mainStyleFonts.superFontSize};
      text-align: left;
      margin-top: 0;
    }
    &__text {
      color: ${mainStyleColors.textLightColor};
      font-size: ${mainStyleFonts.mainFontSize};
      letter-spacing: 1px;
      line-height: 1.5;
      text-align: left;
    }
    .form__icon {
      position: absolute;
      width: 70px;
      height: 70px;
      top: -15px;
      right: -15px;
      cursor: pointer;
    }
  }
`;

export default ModalStyled;
