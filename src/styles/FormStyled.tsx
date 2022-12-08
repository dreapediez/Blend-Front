import styled from "styled-components";
import mainStyleFonts from "./mainStyleFonts";
import mainStyleColors from "./mainStyleColors";

const FormStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .form-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 20px 0;
    gap: 15px;

    .form-footer__link-anchor {
      text-decoration: none;
      font-weight: ${mainStyleFonts.mainFontBold};
      color: ${mainStyleColors.secondaryColor};
      margin-left: 5px;
    }
  }

  .resiter-page__title {
    font-family: inherit;
    font-size: 20px;
    width: 340px;
    text-align: center;
    margin-bottom: 25px;
    @media only screen and (min-width: 450px) {
      width: 350px;
    }
  }
`;

export default FormStyled;
