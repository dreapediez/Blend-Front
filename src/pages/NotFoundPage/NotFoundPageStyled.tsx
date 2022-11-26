import styled from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .form-footer__link-anchor {
    text-decoration: none;
    font-weight: ${mainStyleFonts.mainFontBold};
    color: ${mainStyleColors.secondaryColor};
    margin-left: 5px;
  }
`;

export default NotFoundPageStyled;
