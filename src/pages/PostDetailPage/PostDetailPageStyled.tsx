import styled from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";

const PostDetailPageStyled = styled.div`
  margin-bottom: 50px;
  .title {
    margin-bottom: 25px;
  }

  .not-found {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 50px;
    .not-found__icon {
      width: 300px;
      height: 300px;
    }
  }
  .not-found__link-anchor {
    text-decoration: none;
    font-weight: ${mainStyleFonts.mainFontBold};
    color: ${mainStyleColors.secondaryColor};
    margin-left: 5px;
  }

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
`;

export default PostDetailPageStyled;
